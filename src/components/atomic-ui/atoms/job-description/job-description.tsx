import "./job-description.css"
interface Props {
    description: string
}

const JobDescription = (props: Props) => {
  const { description } = props;
  return  <div className="title">{description}</div>
}

export default JobDescription;