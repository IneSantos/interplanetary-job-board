import { useState, useEffect } from "react";
import BoardPage from "../components/pages/board";
import data from "../services/data.json";
import { getAccordionOptions, getSearchOptions, getFilteredJobsByOption, getAccordionFilters } from "../utilities/utilities";
import "normalize.css";
import "./board.css";

const BoardView = () => {
    const [input, setInput] = useState("");
    const [jobs, setJobs] = useState(data);
    const [filterKeywords, setfilterKeywords] = useState(getAccordionFilters);
    const [clearFilterActive, setClearFilter] = useState(false);

    const onSelectFilterOption = (e) => {
        const optionSelected = e.target.getAttribute("data-parent");
        const keyword = e.target.name;

        if (!filterKeywords.get(optionSelected).some(key => key === keyword)) {
            const prevKeys = filterKeywords.get(optionSelected);
            setfilterKeywords(new Map(filterKeywords.set(optionSelected, [...prevKeys, keyword])));
        }
        else {
            const newKeys = filterKeywords.get(optionSelected).filter((key) => key !== keyword);
            setfilterKeywords(new Map(filterKeywords.set(optionSelected, [...newKeys])));
        }

    }

    const handleSearch = (e) => {
        const userInput = e.target.value;
        setInput(userInput);
        setJobs(getSearchOptions(userInput));
    }

    const clearFilters = () => {
        setfilterKeywords(new Map(getAccordionFilters()));

        if ([...filterKeywords.values()].flat().length > 0) 
            setClearFilter(true);
    };

    useEffect(() => {
        setClearFilter(false);
    }, []);


    useEffect(() => {
        const filteredOptions = getFilteredJobsByOption(filterKeywords);
        setJobs(filteredOptions);

        if ([...filterKeywords.values()].flat().length === 0){
            setJobs(data);
            setClearFilter(false);
        }

    }, [filterKeywords]);

    return <BoardPage jobs={jobs} clearFilters={clearFilters} accordionOptions={getAccordionOptions(onSelectFilterOption, clearFilterActive)} handleSearch={handleSearch} searchInput={input} />
}

export default BoardView;