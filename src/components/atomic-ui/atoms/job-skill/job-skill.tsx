import "./job-skill.css"

interface Props {
    skill: string
}

function JobSkill (props: Props) {
  const { skill } = props;
  return  <span className="skill">{skill}</span>;
}

export default JobSkill;