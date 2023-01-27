import iconEllipsis from "../assets/images/icon-ellipsis.svg";

const Info = ({ topImg, bgColor, title, hours, prev, reportType }) => {
  return (
    <div className="rounded-xl overflow-hidden sm:w-[200px]">
      <div
        className={`${bgColor} pr-4 h-[66px] rounded-xl`}
      >
        <img
          className="ml-auto mt-[-5px]"
          width="60"
          src={topImg}
          alt="Work Image"
        />
      </div>

      <div className="bg-darkBlue hover:bg-[#32366c] rounded-xl p-6 mt-[-28px] relative cursor-pointer">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-sm">{title}</h3>
          <img className="hover:brightness-200" width="15" src={iconEllipsis} alt="Icon Ellipsis" />
        </div>

        <h1 className="text-5xl">{hours}hrs</h1>
        <h1 className="text-paleBlue text-xs mt-2">
          Last{" "}
          {reportType == 1
            ? "Day"
            : reportType == 2
            ? "Week"
            : reportType == 3
            ? "Month"
            : ""}{" "}
          - {prev}hrs
        </h1>
      </div>
    </div>
  );
};

export default Info;
