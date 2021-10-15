import JobDescription from "../../atoms/job-description/job-description";
import SkillList from "../job-skill-list/job-skill-list";
import JobButton from "../../atoms/job-action/job-action";
import "./card-body.css"

interface Props {
    skills: string[], 
    description: string
}

const CardBody = (props: Props) => {
    const { skills, description } = props;
    return (
        <div className="card-body">
            <JobDescription description={description} />
            <SkillList skills={skills}/>
            <JobButton />
        </div>
    );
}

export default CardBody;