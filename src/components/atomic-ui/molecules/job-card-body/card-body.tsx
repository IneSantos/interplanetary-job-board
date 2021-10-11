import JobDescription from "../../atoms/job-description/job-description";
import JobButton from "../../atoms/job-button/job-button";
import "./card-body.css"

interface Props {
    description: string
}

function CardBody (props: Props) {
    const { description } = props;
    return (
    <div className="card-body">
       <JobDescription description={description}/>
       <JobButton/>
    </div>
    );
}

export default CardBody;