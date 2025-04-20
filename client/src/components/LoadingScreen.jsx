import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="fs-4 fw-bold"
      >
        🔄 Loading your taskspace...
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
