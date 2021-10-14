import { useState } from "react";
import "./accordion.css";

interface Props {
    id: string,
    label: string,
    content: JSX.Element;
}

const Accordion = ({ id, label, content }: Props) => {
    const [checked, setIsChecked] = useState(false);

    const icon = checked ? "fa-chevron-up" : "fa-chevron-down";

    return (
        <div className="accordion">
            <div>
                <input type="checkbox" id={id} className="accordion-input" defaultChecked={checked} onChange={() => setIsChecked(!checked)}/>
                <label htmlFor={id} className="accordion-label">{label}<i className={`fas ${icon}`}></i></label>
                <div className="accordion-content">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Accordion;