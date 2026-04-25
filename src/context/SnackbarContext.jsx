import React, { useState, createContext, useContext, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snackbars, setSnackbars] = useState([]);

  const showSnackbar = useCallback((message) => {
    const id = Date.now();
    setSnackbars((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setSnackbars((prev) => prev.filter((s) => s.id !== id));
    }, 3000);
  }, []);

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}
      <div className="fixed bottom-8 right-8 z-[2000] flex flex-col space-y-3 pointer-events-none">
        <AnimatePresence>
          {snackbars.map((snack) => (
            <motion.div
              key={snack.id}
              initial={{ x: 100, opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ x: 0, opacity: 1, scale: 1, rotate: 0 }}
              exit={{ x: 100, opacity: 0, scale: 0.5, rotate: 10 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] text-white px-6 py-3 rounded-xl shadow-[0_10px_40px_rgba(88,166,255,0.3)] border border-white/20 pointer-events-auto flex items-center space-x-3"
            >
              <span className="text-xl">🚀</span>
              <span className="font-bold text-sm">{snack.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
