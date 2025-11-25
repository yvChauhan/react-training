export default function Button({
  variant = "primary",
  size = "medium",
  isDisabled = false,
  fullWidth = false,
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

Button.propTypes = {
  text: PropTypes.string.isRequired, // the text to be displayed on the button
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "gradient",
    "outline",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  isDisabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
