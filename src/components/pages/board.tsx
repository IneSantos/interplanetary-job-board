import { Card } from "../atomic-ui/organisms/job-card/card-type";
import { AccordionCheckboxType } from "../atomic-ui/molecules/accordion-checkbox/accordion-checkbox-type";
import JobBoard from "../templates/job-board";
import "./board.css";

interface Props {
    jobs: Card[],
    accordionOptions: AccordionCheckboxType[]
}

const Board = (props: Props) => {
    const { jobs, accordionOptions } = props;
    return <JobBoard jobs={jobs} accordionOptions={accordionOptions}/>
}

Board.defaultProps = {
    jobs: [],
    accordionOptions: []
}

export default Board;