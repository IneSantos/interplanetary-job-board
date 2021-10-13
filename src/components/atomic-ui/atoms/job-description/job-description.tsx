import "./job-description.css"

interface Props {
  description: string
}

const JobDescription = (props: Props) => {
  const { description } = props;
  return <div className="description">{description}</div>
}

export default JobDescription;