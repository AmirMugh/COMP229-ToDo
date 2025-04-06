// Tasks.jsx
import { useEffect, useState } from "react";
import API from "../api/axios";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaTrash, FaCheckCircle, FaRegCircle, FaEdit, FaSave } from "react-icons/fa";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(true);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await API.get("/tasks");
        setTasks(res.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!newTask.trim()) return;
    try {
      const res = await API.post("/tasks", { title: newTask });
      setTasks([...tasks, res.data]);
      setNewTask("");
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      const res = await API.put(`/tasks/${id}`, { completed: !completed });
      setTasks(tasks.map((task) => (task._id === id ? res.data : task)));
    } catch (err) {
      console.error("Error toggling task:", err);
    }
  };

  const startEditing = (id, title) => {
    setEditTaskId(id);
    setEditedTitle(title);
  };

  const saveEdit = async (id) => {
    try {
      const res = await API.put(`/tasks/${id}`, { title: editedTitle });
      setTasks(tasks.map((task) => (task._id === id ? res.data : task)));
      setEditTaskId(null);
      setEditedTitle("");
    } catch (err) {
      console.error("Error saving edit:", err);
    }
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="card shadow-sm p-4 theme-card">
        <h2 className="mb-4 text-center">My Tasks</h2>

        <div className="d-flex mb-4 gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addTask}>Add</button>
        </div>

        {loading ? (
          <p>Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          <ul className="list-group">
            {tasks.map((task) => (
              <motion.li
                key={task._id}
                className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? "text-muted" : "text-body"}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{ backgroundColor: "inherit" }}
              >
                <div className="d-flex align-items-center gap-3 w-100">
                  <span
                    role="button"
                    onClick={() => toggleComplete(task._id, task.completed)}
                    title="Toggle Complete"
                  >
                    {task.completed ? <FaCheckCircle className="text-success fs-5" /> : <FaRegCircle className="text-secondary fs-5" />}
                  </span>
                  {editTaskId === task._id ? (
                    <input
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                      className="form-control me-2"
                    />
                  ) : (
                    <span className={`flex-grow-1 ${task.completed ? "text-decoration-line-through" : ""}`}
                    style={{ color: darkMode ? "#f8f9fa" : "#212529" }}>
                      {task.title}
                    </span>
                  )}
                </div>

                <div className="d-flex gap-2">
                  {editTaskId === task._id ? (
                    <button className="btn btn-success btn-sm" onClick={() => saveEdit(task._id)} title="Save">
                      <FaSave />
                    </button>
                  ) : (
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => startEditing(task._id, task.title)} title="Edit">
                      <FaEdit />
                    </button>
                  )}
                  <button className="btn btn-outline-danger btn-sm" onClick={() => deleteTask(task._id)} title="Delete">
                    <FaTrash />
                  </button>
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default Tasks;