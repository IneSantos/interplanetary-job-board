import "./job-input.css";

interface Props {
    input: string,
    handleSearch: (e: { target: HTMLInputElement }) => void
}

const JobInput = ({ input, handleSearch }: Props) => {
    return <input type="text" className="job-term" placeholder="Software engineering, Design, Sales" onChange={handleSearch} value={input} />;
}

export default JobInput;