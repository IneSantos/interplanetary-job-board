import Header from "../atomic-ui/organisms/header/header";
import SideNav from "../atomic-ui/organisms/side-nav/side-nav";
import JobList from "../atomic-ui/organisms/job-list/job-list";
import { Card } from "../atomic-ui/organisms/job-card/card-type";
import { AccordionCheckboxType } from "../atomic-ui/molecules/accordion-checkbox/accordion-checkbox-type";

interface Props {
  jobs: Card[],
  clearFilters: () => void,
  accordionOptions: AccordionCheckboxType[],
  searchInput: string,
  handleSearch: (e: { target: HTMLInputElement }) => void
}

const JobBoard = (props: Props) => {
  const { jobs, clearFilters, accordionOptions, searchInput, handleSearch } = props;
  return (
    <div className="board">
      <header>
        <div className="banner"></div>
        <Header searchInput={searchInput} handleSearch={handleSearch} />
      </header>
      <div className="board-body">
        <SideNav clearFilters={clearFilters} accordionOptions={accordionOptions} searchInput={searchInput} handleSearch={handleSearch} />
        <JobList jobs={jobs} />
      </div>
    </div>
  );
}

export default JobBoard;