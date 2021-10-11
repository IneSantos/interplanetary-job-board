import "./job-title.css"
interface Props {
    title: string
}

const JobTitle = (props: Props) => {
  const { title } = props;
  return  <h2 className="title">{title}</h2>;
}

export default JobTitle;