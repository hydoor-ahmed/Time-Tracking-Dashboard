import reportImage from "../assets/images/image-jeremy.png";
const ReportInfo = ({ reportType, setReportType }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-darkBlue md:mr-6 mb-4 md:mb-0 md:w-60">
      <div className="bg-blue p-4 rounded-2xl flex items-center md:block">
        <img
          className="border-2 border-white rounded-full mr-2 md:mr-0 w-[60px] md:w-[70px]"
          src={reportImage}
          alt="Image"
        />

        <div className="mt-7 mb-8 md:mb-12">
          <h3 className="text-xs text-paleBlue">Report for</h3>
          <h1 className="text-xl sm:text-3xl md:w-[105px]">
            Jeremy Robson
          </h1>
        </div>
      </div>

      <ul className="p-4 flex justify-evenly md:block">
        <li>
          <button
            onClick={() => setReportType(1)}
            className={`${
              reportType == 1 ? "text-white" : "text-paleBlue"
            } text-sm mr-4 md:mr-0 hover:text-white`}
          >
            Daily
          </button>
        </li>
        <li>
          <button
            onClick={() => setReportType(2)}
            className={`${
              reportType == 2 ? "text-white" : "text-paleBlue"
            } text-sm md:mt-4 mr-4 md:mr-0 hover:text-white`}
          >
            Weekly
          </button>
        </li>
        <li>
          <button
            onClick={() => setReportType(3)}
            className={`${
              reportType == 3 ? "text-white" : "text-paleBlue"
            } text-sm md:mt-4 hover:text-white`}
          >
            Monthly
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ReportInfo;
