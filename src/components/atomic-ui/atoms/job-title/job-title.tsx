import "./job-title.css"
interface Props {
  position: string
}

const JobTitle = (props: Props) => {
  const { position } = props;
  return <h2 className="title">{position}</h2>;
}

export default JobTitle;