function InputField({
    label,
    id,
    type = "text",
    value,
    onChange,
}) {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id}
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default InputField;