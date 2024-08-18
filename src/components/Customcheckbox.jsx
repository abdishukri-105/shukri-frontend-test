import  { useState } from "react";

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="relative  flex items-center justify-center  cursor-pointer">
      <input
        type="checkbox"
        className="absolute w-0 h-0 opacity-0"
        onChange={handleCheckboxChange}
        checked={isChecked}
      />
      <div
        className={`w-[23px] relative h-[23px] rounded-[6px] border transition-all duration-200 ${
          isChecked
            ? "bg-blue-600 transiton-opacity duration-200 hover:bg-blue-500 "
            : "bg-white border-[#CDCDCD] hover:border-[#878787] shadow-[#878787]"
        }`}
      >
        <svg
          className={`absolute inset-0 w-[15.64px] h-[11.04px] m-auto transiton-opacity durtion-200 ${
            isChecked ? "text-white opacity-100" : "opacity-0 hover:opacity-100 hover:text-[#878787]"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 19 14"
        >
          <path
            d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </label>
  );
};

export default CustomCheckbox;
