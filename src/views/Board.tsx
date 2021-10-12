import BoardPage from "../components/pages/board";
import data from "../services/data.json";
import { getAccordionOptions } from "../utilities/utilities";
import "normalize.css";
import "./board.css";

const BoardView = () => {
    const onChange = () => {
        console.log("heelo");
    }

    return <BoardPage jobs={data} accordionOptions={getAccordionOptions(onChange)}/>
}

export default BoardView;