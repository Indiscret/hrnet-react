function SelectField({
    label,
    id,
    value,
    onChange,
    options,
    optionLabel,
    optionValue,
}) {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                name={id}
                value={value}
                onChange={onChange}
            >
                <option value="">-- Select --</option>
                {options.map((option) => (
                    <option
                    key={optionValue(option)}
                    value={optionValue(option)}
                >
                    {optionLabel(option)}
                </option>
                ))}
            </select>
        </div>
    );
}

export default SelectField;