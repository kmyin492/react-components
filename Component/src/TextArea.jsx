import React from "react";

const TextArea = ({
  isRequired = false,
  label = "",
  value = "",
  placeholder = "",
  onChange = () => null,
  errorMessage = "",
  style = {
    wrapper: "flex flex-col gap-1 mb-4",
    label: " mb-1 text-sm font-medium",
    error: "text-red-600",
    textarea:
      "p-4 border rounded-lg focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-blue-300",
  },
}) => {
  return (
    <div className={style.wrapper}>
      <label className={style.label}>
        {label}
        {isRequired && (
          <span className={value === "" ? "text-red-600" : "text-gray-900"}>
            (required)
          </span>
        )}
      </label>

      <textarea
        className={`${style.textarea} ${
          errorMessage ? "border-red-500" : "border-gray-600"
        }`}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
      <span className={style.error}>{errorMessage}</span>
    </div>
  );
};
export default TextArea;
