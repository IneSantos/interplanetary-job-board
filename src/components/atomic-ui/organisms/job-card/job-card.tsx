import CardHeader from "../../molecules/job-card-header/card-header";
import CardBody from "../../molecules/job-card-body/card-body";
import { Card } from "./card-type";
import "./job-card.css";

const JobCard = (props: Card) => {
  const { position, company, location, contract, skills, description } = props;
  return (
    <div className="card-wrapper">
      <CardHeader position={position} company={company} location={location} contract={contract} />
      <CardBody skills={skills} description={description} />
    </div>
  );
}

export default JobCard;