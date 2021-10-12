import JobCard from "../../organisms/job-card/job-card";
import { Card } from "../../organisms/job-card/card-type";
import "./job-list.css";

interface Props {
    jobs: Card[]
}

const JobList = (props: Props) => {
    const { jobs } = props;
    return (
        <div className="jobs-list">
            {jobs.map((job) => {
                return <JobCard key={job.id} position={job.position} company={job.company} location={job.location} contract={job.contract} description={job.description}/>
            })}
        </div>
    )
}

export default JobList;