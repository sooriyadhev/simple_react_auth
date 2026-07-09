function InputField({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  icon,
  onIconClick
}) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
        <div className="input-wrapper">
             <input
                id={name}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                />
            {icon && (
            <span className="password-icon" onClick={onIconClick}>
                {icon}
            </span>
            )}
        </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default InputField;