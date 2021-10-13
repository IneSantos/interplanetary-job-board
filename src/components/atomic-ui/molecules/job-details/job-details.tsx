import JobDetail from "../../atoms/job-detail/job-detail";
import { JobDetailsEnum } from "../../atoms/job-detail/job-type";
import "./job-details.css"

interface Props {
    company: string,
    location: string,
    contract: string
}

const JobDetails = (props: Props) => {
    const { company, location, contract } = props;
    return (
        <div className="job-details">
            <JobDetail type={JobDetailsEnum.COMPANY} description={company} />
            <JobDetail type={JobDetailsEnum.LOCATION} description={location} />
            <JobDetail type={JobDetailsEnum.CONTRACT} description={contract} />
        </div>
    );
}

export default JobDetails;