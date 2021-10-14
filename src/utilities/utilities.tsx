import data from "../services/data.json";

const getLabelOptions = (label, onSelectFilterOption) => {
    return data.reduce((acc, option) => {
        if (!acc.some(e => e.label === option[label]))
            if(Array.isArray(option[label])) {
                //going through array of skills
                option[label].forEach(o => {
                    if (!acc.some(e => e.label.includes(o)))
                        acc.push({ label: o, onChange: onSelectFilterOption });
                })
            }
            else 
                acc.push({ label: option[label], onChange: onSelectFilterOption });
        return acc;
    }, []);
}

export const getAccordionFilters = () => {
    const accordionFilters = new Map();

    accordionFilters.set("location", []);
    accordionFilters.set("contract", []);
    accordionFilters.set("level", []);
    accordionFilters.set("skills", []);

    return accordionFilters;
}

export const getAccordionOptions = (onSelectFilterOption, clearFilterActive) => {
    const accordionFiltersMap = getAccordionFilters();
    const accordionOptions = [...accordionFiltersMap.keys()];

    return accordionOptions.map((option, index) => {
        return { id: `${index}`, label: option, clearFilter: clearFilterActive, options: getLabelOptions(option, onSelectFilterOption) };
    });
}

const checkPositionAndCompany = (keyword, job) => {
    return job.position.toLowerCase().indexOf(keyword.toLowerCase()) > -1 || job.company.toLowerCase().indexOf(keyword.toLowerCase()) > -1
}

export const getSearchOptions = (keyword) => {
    return data.filter((job) => checkPositionAndCompany(keyword, job));
}

const checkJobsFilter = (filter, keyword) => {
    return data.filter((job) => {
        //going through array of skills
        if(Array.isArray(job[filter])) {
            return job[filter].some(e => e.includes(keyword))
        }
        return job[filter].toLowerCase().indexOf(keyword.toLowerCase()) > -1
    });
}

const getJobsByFilters = (value, key) => {
    return value.reduce((acc, filter) => {
        let filteredOption = checkJobsFilter(key, filter);
        acc.push(filteredOption);
        return acc;
    }, []);
}

const isUniqueValue = (value, arr) => {
    let isUnique = true;
    arr.forEach(arr1 => {
        if (arr1.length > 0) {
            isUnique = isUnique && arr1.some(o => value.id === o.id);
        }
    });
    return isUnique;
};

const uniqueJobs = (filteresJobs) => {
    const acc = [];
    filteresJobs.forEach(arr => {
        arr.forEach(value => {
            if (isUniqueValue(value, filteresJobs))
                !acc.some(obj => obj.id === value.id) && acc.push(value);
        })
    })

    return acc;
}

export const getFilteredJobsByOption = (filterKeywords) => {
    const filtered = [];
    filterKeywords.forEach((value, key) => {
        filtered.push(getJobsByFilters(value, key).flat());
    });
    return uniqueJobs(filtered);
}