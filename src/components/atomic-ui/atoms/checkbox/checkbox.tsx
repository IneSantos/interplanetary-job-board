import { useState } from "react";
import { CheckboxType } from "./checkbox-type"
import "./checkbox.css";

const Checkbox = ({ label, onChange }: CheckboxType) => {
    const [value, setValue] = useState(false);

    const updateValue = () => {
        setValue(prevState => !prevState);
        onChange();
    }

    return (
        <label>
            <span className="checkbox">
                <input className="checkbox-input"  type="checkbox" checked={value} onChange={updateValue} />
                {label}
            </span>
        </label>
    );
};

export default Checkbox;