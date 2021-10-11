import { JobDetailsEnum } from "./job-type";
import "./job-detail.css"

interface Props {
    type: string,
    description: string
}

const JobDetail = (props: Props) => {
  const { type, description } = props;

    switch (type) {
        case JobDetailsEnum.COMPANY:
            //@todo: add ICON
            return <div className="job-details-company"><span>{description}</span></div>;
        case JobDetailsEnum.LOCATION:
            //@todo: add ICON
            return <div className="job-details-location"><span>{description}</span></div>;
        case JobDetailsEnum.NONE:
            return <div className="job-details-none"><span>{description}</span></div>;
    }
}

export default JobDetail;