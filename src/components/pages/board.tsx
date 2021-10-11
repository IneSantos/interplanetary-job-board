import { Card } from "../atomic-ui/organisms/job-card/card-type";
import JobBoard from "../templates/job-board";

interface Props {
    jobs: Card[]
}

function Board(props: Props) {
    const { jobs } = props;
    return <JobBoard jobs={jobs} />
}

export default Board;