export default function Button({
  variant,
  size,
  isDisabled,
  fullWidth,
  label,
  onClick,
  children,
}) {
  return (
    <button
      className={`button ${variant} ${size} ${isDisabled ? "disabled" : ""} ${
        fullWidth ? "full-width" : ""
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label ? label : children}
    </button>
  );
}
