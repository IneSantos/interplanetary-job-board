import "./job-skill.css"

interface Props {
  skill: string
}

const JobSkill = (props: Props) => {
  const { skill } = props;
  return <span className="skill">{skill}</span>;
}

export default JobSkill;