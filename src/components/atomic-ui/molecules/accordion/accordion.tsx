import "./accordion.css";

interface Props {
    id: string,
    label: string,
    content: JSX.Element;
}

const Accordion = ({id, label, content}: Props) => {
    return (
        <div className="accordion">
            <div>
                <input type="checkbox" id={id} className="accordion-input"/>
                <label htmlFor={id} className="accordion-label">{label}</label>
                <div className="accordion-content">
                    {content}
                </div>
            </div>
        </div>
  );
};

export default Accordion;