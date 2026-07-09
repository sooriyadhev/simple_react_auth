function InputField({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
}) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default InputField;