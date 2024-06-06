import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Define the types for the props
interface LoaderProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Loader: React.FC<LoaderProps> = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1900);
    return () => clearTimeout(timeout);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 1,
            }}
            exit={{
              scale: 2,
            }}
            style={{ color: "currentColor", textAlign: "center", fontSize: "36px" }}
          >
            Hardik
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
