import { CheckboxType } from "../../atoms/checkbox/checkbox-type";

export type AccordionCheckboxType =  {
    id: string,
    label: string,
    clearFilter: boolean,
    options: CheckboxType[]
}