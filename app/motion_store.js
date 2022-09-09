export const bgVart = {
  hover: {
    background: [
      "linear-gradient(to right, #f5e3e6, #d9e4f5)",
      "linear-gradient(to right, #d5d0e5, #f3e6e8)",
      "linear-gradient(to right, #bdc3c7, #fad0c4)",
    ],
    scale: 1.055,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.9,
    },
  },
};

export const cardVart = {
  hover: {
    y: -20,
    scale: 0.95,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const tileVart = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
};

export const headerVart = {
  hover: {
    background: [
      "linear-gradient(to right, #f5e3e6, #d9e4f5)",
      "linear-gradient(to right, #d5d0e5, #f3e6e8)",
      "linear-gradient(to right, #bdc3c7, #fad0c4)",
    ],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1.5,
    },
  },
};

export const infoVart = {
  from: {
    y: "-100vh",
    opacity: 0,
  },
  to: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4,
      damping: 8,
    },
  },
};
