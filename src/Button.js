function Button({ children, onClick, color = "blue", className = "" }) {
  const classNames = `button ${color} ${className}`;
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
