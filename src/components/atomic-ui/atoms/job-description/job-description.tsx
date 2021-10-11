import "./job-description.css"
interface Props {
    description: string
}

function JobDescription (props: Props) {
  const { description } = props;
  return  <div className="title">{description}</div>
}

export default JobDescription;