import JobCard from "../../organisms/job-card/job-card";
import { Card } from "../../organisms/job-card/card-type";
import "./job-list.css";

interface Props {
    jobs: Card[]
}

const JobList = (props: Props) => {
    const { jobs } = props;

    const hasResults = jobs.length > 0;
    return (
        <div className="jobs-list">
            {jobs.map((job) => {
                return <JobCard key={job.id} position={job.position} company={job.company} location={job.location} contract={job.contract} skills={job.skills} description={job.description} />
            })}
            {!hasResults &&
                <div className="empty-list">
                    <h3>No results.</h3>
                    <span>Search again or try removing filters.</span>
                </div>
            }
        </div>
    )
}

export default JobList;