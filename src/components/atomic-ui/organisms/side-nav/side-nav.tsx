import JobInput from "../../atoms/job-input/job-input";
import AccordionCheckbox from "../../molecules/accordion-checkbox/accordion-checkbox";
import { AccordionCheckboxType } from "../../molecules/accordion-checkbox/accordion-checkbox-type";
import "./side-nav.css";

interface Props {
    accordionOptions: AccordionCheckboxType[]
}

const SideNav = ({accordionOptions}: Props) => {
    return (
        <div className="side-nav">
             <div className="side-nav-content">
                <div className="filter-section" >
                    <h3>What do you want to do?</h3>
                    <a href="">Clear Filters</a>
                <JobInput/>
                </div>
                {
                    accordionOptions.map((option) => {
                        return <AccordionCheckbox key={option.id} id={option.id} label={option.label} options={option.options} />
                    }) 
                }
            </div>
        </div>
     );
};

export default SideNav;