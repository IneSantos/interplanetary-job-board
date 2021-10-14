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
            return <div className="job-detail job-detail-company"><i className="fas fa-building icon"></i><span>{description}</span></div>;
        case JobDetailsEnum.LOCATION:
            return <div className="job-detail job-detail-location"><i className="fas fa-map-marker-alt icon"></i><span>{description}</span></div>;
        case JobDetailsEnum.CONTRACT:
            return <div className="job-detail job-detail-contract"><i className="fas fa-file-signature icon"></i><span>{description}</span></div>;
        case JobDetailsEnum.NONE:
            return <div className="job-detail job-detail-none"><span>{description}</span></div>;
    }
}

export default JobDetail;