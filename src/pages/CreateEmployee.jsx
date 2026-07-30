import { useState } from "react";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import states from "../data/states";
import departments from "../data/departments";
import DateField from "../components/DateField";

function CreateEmployee() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        zipCode: "",
        state: "",
        department: "",
        dateOfBirth: null,
        startDate: null,
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <main>
            <h1>Create Employee</h1>
            <form>
                <InputField
                    label="First Name"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <InputField
                    label="Last Name"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <InputField
                    label="Street"
                    id="street"
                    value={formData.street}
                    onChange={handleChange}
                />
                <InputField
                    label="City"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                />
                <InputField
                    label="Zip Code"
                    id="zipcode"
                    type="number"
                    value={formData.zipCode}
                    onChange={handleChange}
                />
                <SelectField
                    label="State"
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                    options={states}
                    optionLabel={(state) => state.name}
                    optionValue={(state) => state.abbreviation}
                />
                <SelectField
                    label="Department"
                    id="department"
                    value={formData.department}
                    onChange={handleChange}
                    options={departments}
                    optionLabel={(department) => department}
                    optionValue={(department) => department}
                />
                <DateField
                    label="Date of Birth"
                    id="dateOfBirth"
                    selected={formData.dateOfBirth}
                    onChange={(date) => setFormData((prev) => ({ ...prev, dateOfBirth: date,}))}
                />
                <DateField
                    label="Start Date"
                    id="startDate"
                    selected={formData.startDate}
                    onChange={(date) => setFormData((prev) => ({...prev, startDate: date,}))}
                />
                <button type="submit">
                    Save
                </button>
            </form>
        </main>
    );
}

export default CreateEmployee;