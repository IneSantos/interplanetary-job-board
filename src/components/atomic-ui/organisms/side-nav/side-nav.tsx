import JobInput from "../../atoms/job-input/job-input";

const SideNav = () => {
    return (
        <div className="sidenav">
            <div>
                <h3>What do you want to do?</h3>
                <a href="">Clear Filters</a>
            </div>
            <JobInput/>
        </div>
     );
};

export default SideNav;