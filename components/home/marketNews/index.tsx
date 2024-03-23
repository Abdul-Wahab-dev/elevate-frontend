import React from "react";
import Image from "next/image";
const MarketNews: React.FC = () => {
  return (
    <div className="p-4 text-raisin-black">
      <div>
        <h1 className="text-2xl font-semibold">Latest Market News</h1>
        <p className="text-granite-gray">
          {" "}
          Stay updated with the latest market news.
        </p>
      </div>
      <div className="mt-4">
        <div className="bg-white border rounded-lg w-full">
          {[1, 2, 3].map((el) => (
            <div className="flex gap-5 p-4 border-b" key={el}>
              <Image
                src={"/assets/global/apple-image.png"}
                width={140}
                height={100}
                alt="apple image"
              />
              <div className="flex flex-col gap-2">
                <p className=" font-semibold text-granite-gray">Mar 16 ,2024</p>
                <h3 className="text-black font-semibold">
                  Apple Shares Slip Ahead Of Reported DOJ Antitrust Case
                </h3>
                <p className="leading-5">
                  Apple shares have fallen roughly 2% since the opening bell
                  Thursday, following overnight reports that the Justice
                  Department is preparing to file a federal antitrust suit
                  accusing the iPhone maker of blocking its rivals from
                  accessing hardware and software features on its devices.
                </p>
                <div>
                  <button className="p-1 px-2 rounded-xl gap-2 border border-gainsboro text-xs bg-[#F3F3F3] flex items-center justify-between ">
                    <span>Read more</span>
                    <Image
                      src={"/assets/icons/arrow-up-right.png"}
                      width={15}
                      height={10}
                      alt="read more"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketNews;
