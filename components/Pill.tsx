import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      className="px-4 py-1 bg-gray-200 rounded-full hover:bg-blue-500 hover:text-white transition"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Pill;
