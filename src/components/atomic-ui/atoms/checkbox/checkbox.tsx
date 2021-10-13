import { useState } from "react";
import { CheckboxType } from "./checkbox-type"
import "./checkbox.css";

const Checkbox = ({ label, parent, onChange }: CheckboxType) => {
    const [value, setValue] = useState(false);

    const updateValue = (e) => {
        setValue(prevState => !prevState);
        onChange(e);
    }

    return (
        <label>
            <span className="checkbox">
                <input className="checkbox-input" type="checkbox" name={label} data-parent={parent} checked={value} onChange={updateValue} />
                {label}
            </span>
        </label>
    );
};

export default Checkbox;