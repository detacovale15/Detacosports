const Input = ({
  label,
  name,
  type = "text",
  register,
  rules = {},
  error,
  className = "",
  as = "input", // input | select | textarea
  options = [],
  children,
  ...rest
}) => {
  if (as === "checkbox-group") {
    return (
      <div className={`input-group ${className}`}>
        {label && <label className="input-label">{label}</label>}

        <div className="checkbox-group">
          {options.map((opt) => (
            <label key={opt.value} className="checkbox-label">
              <input
                type="checkbox"
                value={opt.value}
                {...(register ? register(name, rules) : {})}
              />
              {opt.label}
            </label>
          ))}
        </div>

        {error && <span className="input-error-message">{error.message}</span>}
      </div>
    );
  }

  const Component = as;

  return (
    <div className={`input-group ${className}`}>
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}

      <Component
        id={name}
        name={name}
        type={as === "input" ? type : undefined}
        {...(register ? register(name, rules) : {})}
        className={`input-field ${error ? "input-error" : ""}`}
        {...rest}
      >
        {children}
      </Component>

      {error && <span className="input-error-message">{error.message}</span>}
    </div>
  );
};

export default Input;
