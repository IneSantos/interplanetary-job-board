import Accordion from "../../atoms/accordion/accordion";
import Checkbox from "../../atoms/checkbox/checkbox";
import { AccordionCheckboxType } from "./accordion-checkbox-type";
import "./accordion-checkbox.css";

const AccordionCheckbox = ({id, label, options}: AccordionCheckboxType) => {

    const renderCheckboxes = () => {
        return <ul className="options-list"> {
            options.map((option, index) => {
            return <li className="list-item"><Checkbox key={index} label={option.label} onChange ={option.onChange} /></li>
        })}
        </ul>
    }

    return (
        <div className="accordion-checkbox">
            <Accordion id={id} label={label} content={renderCheckboxes()}/>
        </div>
  );
};

export default AccordionCheckbox;