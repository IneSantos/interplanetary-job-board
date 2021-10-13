import JobTitle from "../../atoms/job-title/job-title";
import JobDetails from "../job-details/job-details";
import "./card-header.css"

interface Props {
    position: string,
    company: string,
    location: string,
    contract: string
}

const CardHeader = (props: Props) => {
    const { position, company, location, contract } = props;
    return (
        <div className="card-header">
            <JobTitle position={position} />
            <JobDetails company={company} location={location} contract={contract} />
        </div>
    );
}

export default CardHeader;