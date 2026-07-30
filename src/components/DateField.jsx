import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateField({
    label,
    id,
    selected,
    onChange,
}) {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <DatePicker
                id={id}
                selected={selected}
                onChange={onChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
            />
        </div>
    );
}

export default DateField;