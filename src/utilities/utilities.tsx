import data from "../services/data.json";

const getLabelOptions = (label, onChange) => {
    return data.reduce((acc, option) => {

        if (!acc.some(e => e.label === option[label]))
            acc.push({label: option[label], onChange});

        return acc;
    }, []);
}

export const getAccordionOptions = (onChange) => {
    const accordionOptions = ["location", "contract", "level"];

    return accordionOptions.map((option, index) => {
        return {id: `${index}`, label: option, options: getLabelOptions(option, onChange)};
    });
}