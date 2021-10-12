import Header from "../atomic-ui/organisms/header/header";
import SideNav from "../atomic-ui/organisms/side-nav/side-nav";
import JobList from "../atomic-ui/organisms/job-list/job-list";
import { Card } from "../atomic-ui/organisms/job-card/card-type";
import { AccordionCheckboxType } from "../atomic-ui/molecules/accordion-checkbox/accordion-checkbox-type";

interface Props {
    jobs: Card[],
    accordionOptions: AccordionCheckboxType[]
}

const JobBoard = (props: Props) => {
  const { jobs, accordionOptions } = props;
  return (
      <div className="board">
        <div className="banner"></div>
        <Header/>
        <div className="board-body">
          <SideNav accordionOptions={accordionOptions}/>
          <JobList jobs={jobs}/>
        </div>
    </div>
  );
}

export default JobBoard;