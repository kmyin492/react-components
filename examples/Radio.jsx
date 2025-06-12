const Radio = ({
  isRequired = false,
  label = "",
  options = [{ label: "", value: "" }],
  value = "",
  onChange = () => null,
  errorMessage = "",
  styles = {
    wrapper:
      "p-4 2xl:p-6 border rounded-md flex flex-wrap items-center gap-4 2xl:gap-x-6 2xl:gap-y-4",
    label: "mb-1 text-sm",
    input: "py-1 px-3 rounded-full border flex items-center gap-2",
    active: "",
    inactive: "",
    radioLabel: "text-sm",
    radioIndicator:
      "w-2 h-2 2xl:w-4 2xl:h-4 rounded-full border 2xl:border-2 flex items-center justify-center",
    radioIndicatorActive:
      "w-[5px] h-[5px] 2xl:w-2 2xl:h-2 rounded-full bg-primary",
    errorMessage: "text-red-600",
  },
}) => {
  return (
    <div>
      <p className={`${errorMessage && styles.errorMessage} ${styles.label}`}>
        <span className="mb-1">{label}</span>
        <span className={`${isRequired ? errorMessage : ""}`}>
          {isRequired ? "Required" : "Optional"}
        </span>
      </p>
      <div
        className={`${styles.wrapper} ${errorMessage ? "border-error" : ""}`}
      >
        {options?.map((option, index) => (
          <button
            type="button"
            key={index}
            onClick={onChange}
            className={`${styles.input} ${
              value === option?.value ? "border-primary text-primary" : ""
            }`}
          >
            {value === option?.value ? (
              <span className={`${styles.radioIndicator} border-primary `}>
                <span className={`${styles.radioIndicatorActive}`} />
              </span>
            ) : (
              <span className={`${styles.radioIndicator} border-default`} />
            )}
            <span className={styles.radioLabel}>{option?.label}</span>
          </button>
        ))}
      </div>
      {errorMessage ? (
        <p className={styles.errorMessage}>{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default Radio;
