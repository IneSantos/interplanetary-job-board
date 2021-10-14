import { useState } from "react";
import JobInput from "../../atoms/job-input/job-input";
import AccordionCheckbox from "../../molecules/accordion-checkbox/accordion-checkbox";
import { AccordionCheckboxType } from "../../molecules/accordion-checkbox/accordion-checkbox-type";
import "./side-nav.css";

interface Props {
    clearFilters: () => void,
    accordionOptions: AccordionCheckboxType[],
    searchInput: string,
    handleSearch: (e: { target: HTMLInputElement }) => void
}

const SideNav = ({ searchInput, handleSearch, clearFilters, accordionOptions }: Props) => {

    const [active, setActiveNav] = useState(false);

    const handleEditFilter = () => {
        setActiveNav(true);
    }

    const closeMenu = () => {
        setActiveNav(false);
    }

    return (
        <>
            <div className={`side-nav ${active ? 'active' : ''}`}>
                <div className={`hamburger ${active ? 'active' : ''}`} onClick={closeMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className="side-nav-content">
                    <div className="filter-section">
                        <h3>What do you want to do?</h3>
                        <a onClick={clearFilters}>Clear Filters</a>
                        <JobInput input={searchInput} handleSearch={handleSearch} />
                    </div>
                    {
                        accordionOptions.map((option) => {
                            return <AccordionCheckbox key={option.id} id={option.id} label={option.label} clearFilter={option.clearFilter} options={option.options} />
                        })
                    }
                </div>
            </div>
            <div className={`side-nav-overlay ${active ? 'active' : ''}`}></div>
            <a className="edit-filters" onClick={handleEditFilter}>Edit Filters</a>
        </>
    );
};

export default SideNav;