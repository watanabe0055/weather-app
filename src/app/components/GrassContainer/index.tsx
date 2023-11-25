import { WeatherData } from "@/types";
import ReportTime from "../ReportTime";
import WeatherDataSelector from "../WeatherDataSelector";

const GrassContainer = ({ data }: { data?: WeatherData }) => {
  if (!data) return null;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col p-5 w-[700px] h-auto text-white rounded-[15px] backdrop-blur-[5px] bg-[rgba(178,197,204,0.2)] shadow-[rgba(0,0,0,0.3)_2px_8px_8px] border-[2px_rgba(255,255,255,0.4)] border-b-[2px_rgba(40,40,40,0.35)] border-r-[2px_rgba(40,40,40,0.35)]">
        <WeatherDataSelector />
        <div className="mb-4">
          <div className="text-2xl font-bold text-center mb-2 text-black">
            {data.targetArea}
          </div>
          <ReportTime reportDatetime={data.reportDatetime} />
        </div>
        <div className="flex-grow text-center">
          <p className="text-xl text-black mb-2">{data.headlineText}</p>{" "}
          <p className="text-black">{data.text}</p>
        </div>
      </div>
    </div>
  );
};

export default GrassContainer;
