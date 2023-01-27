import Info from "./components/Info";
import ReportInfo from "./components/ReportInfo";
import { useState } from "react";
import data from "../data.json";



const App = () => {
  const [reportType, setReportType] = useState(2);
  return (
    <div className="bg-veryDarkBlue md:h-screen w-full flex justify-center items-center text-white py-4 md:py-0">
      <div className="flex flex-col md:flex-row items-center">
        <ReportInfo reportType={reportType} setReportType={setReportType} />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 sm:mt-0">
          {data.map((item) => (
            <Info
              key={item.title}
              hours={
                reportType == 1
                  ? item.timeframes.daily.current
                  : reportType == 2
                  ? item.timeframes.weekly.current
                  : reportType == 3
                  ? item.timeframes.monthly.current
                  : ""
              }
              prev={
                reportType == 1
                  ? item.timeframes.daily.previous
                  : reportType == 2
                  ? item.timeframes.weekly.previous
                  : reportType == 3
                  ? item.timeframes.monthly.previous
                  : ""
              }
              topImg={`/icon-${item.title
                .toLocaleLowerCase()
                .replace(" ", "-")}.svg`}
              title={item.title}
              bgColor={item.color}
              reportType={reportType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
