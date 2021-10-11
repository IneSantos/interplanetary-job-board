import JobTitle from "../../atoms/job-title/job-title";
import JobDetails from "../job-details/job-details";
import "./card-header.css"

interface Props {
    title: string,
    company: string,
    location: string,
    contract: string
}

function CardHeader (props: Props) {
    const { title, company, location, contract } = props;
    return (
    <div className="card-header">
       <JobTitle title={title}/>
       <JobDetails company={company} location={location} contract={contract}/>
    </div>
    );
}

export default CardHeader;