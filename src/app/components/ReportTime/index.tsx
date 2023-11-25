import dayjs from "dayjs";
import { WeatherData } from "@/types";

type ReportTimeProps = Pick<WeatherData, "reportDatetime">;

const ReportTime: React.FC<ReportTimeProps> = ({ reportDatetime }) => {
  const formattedDate = reportDatetime
    ? dayjs(reportDatetime).format("YYYY年MM月DD日hh時mm分")
    : "";

  return (
    <>
      <div className="mt-1 inline-block p-2 text-white bg-opacity-50 bg-blue-600 rounded-lg">
        <p>更新日: {formattedDate}</p>
      </div>
    </>
  );
};

export default ReportTime;
