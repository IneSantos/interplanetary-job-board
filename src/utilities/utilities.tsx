import data from "../services/data.json";

const getLabelOptions = (label, onSelectFilterOption) => {
    return data.reduce((acc, option) => {
        if (!acc.some(e => e.label === option[label]))
            acc.push({ label: option[label], onChange: onSelectFilterOption });

        return acc;
    }, []);
}

export const getAccordionOptions = (onSelectFilterOption) => {
    const accordionOptions = ["location", "contract", "level"];

    return accordionOptions.map((option, index) => {
        return { id: `${index}`, label: option, options: getLabelOptions(option, onSelectFilterOption) };
    });
}

const checkPositionAndCompany = (keyword, job) => {
    return job.position.toLowerCase().indexOf(keyword.toLowerCase()) > -1 || job.company.toLowerCase().indexOf(keyword.toLowerCase()) > -1
}

export const getSearchOptions = (keyword) => {
    return data.filter((job) => checkPositionAndCompany(keyword, job));
}


export const getAccordionFilters = () => {
    const accordionFilters = new Map();

    accordionFilters.set("location", []);
    accordionFilters.set("contract", []);
    accordionFilters.set("level", []);

    return accordionFilters;
}

const getJobsFromFilter = (key, keyword) => {
    return data.filter((job) => job[key].toLowerCase().indexOf(keyword.toLowerCase()) > -1);
}

const getJobsFromFilters = (value, key) => {
    return value.reduce((acc, filter) => {
        let filteredOption = getJobsFromFilter(key, filter);
        acc.push(filteredOption);
        return acc;
    }, []);
}

// const removeDuplicates = (arr) => {
//     return arr.reduce((acc, o) => {
//         if(!acc.some(obj => obj.id === o.id)) {
//           acc.push(o);
//         }
//         return acc;
//     },[]);
// }

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
    const res = [];
    filterKeywords.forEach((value, key) => {
        // res.push(data.filter((d) => {
        //     console.log(d[key]);
        //     return  values.includes(d[key]);
        // }));

        // values.reduce((acc, value) => {

        //     acc.push(data.filter((d) => {
        //         console.log(value);
        //         return  d[key] === key
        //      }));

        //      return acc;
        // }, [])
        res.push(getJobsFromFilters(value, key).flat());
    }
    );

    console.log("res", uniqueJobs(res));

    return uniqueJobs(res);
    // return filterKeywords.reduce((acc, filter) => {
    //     let filteredOption = [];
    //     if(!acc.length)  
    //         filteredOption = getFilteredOption(data, filter.optionSelected, filter.keyword);
    //     else 
    //         filteredOption = getFilteredOption(acc, filter.optionSelected, filter.keyword);
    //         console.log(filteredOption);
    //     return filteredOption;
    // }, [])
}

export const newIdea2 = (keyword, filterOption, filteredData) => {
    return filteredData.filter((d) => {
        return d[filterOption] === keyword
    });
}