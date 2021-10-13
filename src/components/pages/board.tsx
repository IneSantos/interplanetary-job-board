import { Card } from "../atomic-ui/organisms/job-card/card-type";
import { AccordionCheckboxType } from "../atomic-ui/molecules/accordion-checkbox/accordion-checkbox-type";
import JobBoard from "../templates/job-board";
import "./board.css";

interface Props {
    jobs: Card[],
    clearFilters: () => void,
    accordionOptions: AccordionCheckboxType[],
    searchInput: string,
    handleSearch: (e: { target: HTMLInputElement }) => void
}

const Board = (props: Props) => {
    const { jobs, clearFilters, accordionOptions, searchInput, handleSearch } = props;
    return <JobBoard jobs={jobs} clearFilters={clearFilters} accordionOptions={accordionOptions} searchInput={searchInput} handleSearch={handleSearch} />
}

Board.defaultProps = {
    jobs: [],
    accordionOptions: []
}

export default Board;