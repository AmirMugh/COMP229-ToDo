import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div>
      {/* Hero Section with Starfield */}
      <motion.section
        className="hero-section text-white text-center starfield"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="content">
          <h1 className="fw-bold display-2 mb-4">Welcome to TaskMaster</h1>
          <p className="lead fs-4 mb-4">Organize your tasks, streamline your day.</p>
          <Link to="/signup" className="btn btn-light btn-lg fw-semibold px-5 py-3">
            Get Started
          </Link>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-5 bg-light text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4">
          <h2 className="fw-semibold mb-3">About TaskMaster</h2>
          <p className="text-muted fs-5">
            TaskMaster is your personal productivity companion, designed to help you plan, track, and manage tasks seamlessly. Whether you're juggling daily chores, managing projects, or simply organizing your thoughts — TaskMaster makes it intuitive and efficient.
          </p>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-5 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <motion.img
                src="/undraw_to-do-list_dzdz.svg"
                alt="To Do List"
                className="img-fluid mx-auto d-block"
                style={{ maxHeight: "220px" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              />
              <p className="mt-3">Create and organize your daily tasks easily with our simple to-do list interface.</p>
            </div>
            <div className="col-md-4">
              <motion.img
                src="/undraw_add-tasks_4qsy.svg"
                alt="Add Tasks"
                className="img-fluid mx-auto d-block"
                style={{ maxHeight: "220px" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
              <p className="mt-3">Quickly add tasks on the fly to stay productive and focused throughout the day.</p>
            </div>
            <div className="col-md-4">
              <motion.img
                src="/undraw_complete-task_qgwk.svg"
                alt="Complete Tasks"
                className="img-fluid mx-auto d-block"
                style={{ maxHeight: "220px" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <p className="mt-3">Check off completed tasks and enjoy the satisfaction of progress.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Productivity Tips Section */}
      <motion.section
        className="py-5 bg-light text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4">
          <h2 className="fw-semibold mb-4">Why Stay Organized?</h2>
          <p className="text-muted fs-5 mb-4">Boost your productivity and mental clarity by breaking down your goals into actionable tasks.</p>
          <div className="row g-4">
            <div className="col-md-4">
              <h5>🧠 Clear Focus</h5>
              <p className="text-muted">Avoid overwhelm and stay aligned with what truly matters.</p>
            </div>
            <div className="col-md-4">
              <h5>📈 Productivity Boost</h5>
              <p className="text-muted">Track your wins and progress toward goals without losing momentum.</p>
            </div>
            <div className="col-md-4">
              <h5>✅ Habit Formation</h5>
              <p className="text-muted">Daily use reinforces discipline and builds strong routines.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className={`py-5 text-white text-center ${darkMode ? "bg-dark border-top border-secondary" : "bg-primary"}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2 className="fw-bold mb-4">Ready to conquer your to-do list?</h2>
          <Link to="/signup" className="btn btn-light btn-lg px-5 py-3">Join Now</Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;