import Header from "../atomic-ui/organisms/header/header";
import JobCard from "../atomic-ui/organisms/job-card/job-card";
import { Card } from "../atomic-ui/organisms/job-card/card-type";
import "./jobs-board.css"

interface Props {
    jobs: Card[]
}

function JobBoard (props: Props) {
  const { jobs } = props;
  return (
      <div className="board">
        <Header/>
        <div className="jobs-list">
            {jobs.map((job) => {
                return <JobCard key={job.id} title={job.title} company={job.company} location={job.location} contract={job.contract} description={job.description}/>
            })}
        </div>
    </div>
  );
}

export default JobBoard;