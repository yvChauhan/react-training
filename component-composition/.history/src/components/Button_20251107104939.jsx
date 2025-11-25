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
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  );
}
