import CardHeader from "../../molecules/job-card-header/card-header";
import CardBody from "../../molecules/job-card-body/card-body";
import { Card } from "./card-type";
import "./job-card.css";

function JobCard (props: Card) {
    const { title, company, location, contract, description } = props;
  return (
    <div className="card-wrapper">
        <CardHeader title={title} company={company} location={location} contract={contract}/>
        <CardBody description={description}/>
    </div>
  );
}

export default JobCard;