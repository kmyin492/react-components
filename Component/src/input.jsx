const Input = ({
  label = "",
  isRequired = false,
  type = "",
  value = "",
  onChange = () => {},
  placeholder = "",
  errorMessage = "",
  styles = {
    wrapper: "flex flex-col gap-1 mb-4",
    label: "mb-1 text-sm font-medium",
    input:
      "border rounded px-3 py-2 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-blue-300",
    errorMessage: "text-red-600 text-sm",
  },
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {label}{" "}
        <span className={value === "" ? "text-red-600" : "text-gray-900"}>
          {isRequired ? "(required)" : "(optional)"}
        </span>
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.input} ${
          errorMessage ? "border-red-500" : "border-gray-600"
        }`}
      />
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
