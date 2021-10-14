import Accordion from "../../atoms/accordion/accordion";
import Checkbox from "../../atoms/checkbox/checkbox";
import { AccordionCheckboxType } from "./accordion-checkbox-type";
import "./accordion-checkbox.css";

const AccordionCheckbox = ({ id, label, clearFilter, options }: AccordionCheckboxType) => {

    const renderCheckboxes = (parent) => {
        return <ul className="options-list"> {
            options.map((option, index) => {
                return <li className="list-item" key={index}><Checkbox key={index} label={option.label} onChange={option.onChange} parent={parent} clearFilter={clearFilter} /></li>
            })}
        </ul>
    }

    return (
        <div className="accordion-checkbox">
            <Accordion id={id} label={label} content={renderCheckboxes(label)} />
        </div>
    );
};

export default AccordionCheckbox;