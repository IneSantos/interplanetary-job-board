import JobSkill from "../../atoms/job-skill/job-skill";
import "./job-skill-list.css"

interface Props {
  skills: string[]
}

const SkillList = ({skills}: Props) => {
  return  <div className="skill-list">
            {skills.map((skill, index) => <JobSkill key={index} skill={skill}/>)}
        </div>
}

export default SkillList;