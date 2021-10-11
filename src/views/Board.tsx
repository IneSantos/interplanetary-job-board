import { Card } from "../components/atomic-ui/organisms/job-card/card-type";
import BoardPage from "../components/pages/board";
import data from "../services/data.json";

interface Props {
    jobs: Card[]
}

const BoardView = (props: Props) => {
    return <BoardPage jobs={data} />
}

export default BoardView;