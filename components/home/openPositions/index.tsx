import React from "react";
import Image from "next/image";
const OpenPositions: React.FC = () => {
  return (
    <div className="p-4 mt-2 text-raisin-black">
      <h1 className="text-2xl font-semibold">Open Position</h1>
      <div className="grid grid-cols-3 mt-4 gap-4">
        {[1, 2, 3].map((el) => (
          <div
            key={el}
            className="bg-white border border-gainsboro rounded-lg text-granite-gray"
          >
            <div className="p-4 border-b border-gainsboro flex gap-2 items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-[45px] h-[45px] border border-gainsboro rounded-full flex items-center justify-center">
                  <Image
                    src={"/assets/icons/apple.png"}
                    width={25}
                    height={20}
                    alt="apple"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[14px] font-semibold">Apple INC</h3>{" "}
                    <div className="p-1 px-2 rounded-2xl bg-magic-mint">
                      <p className="text-[10px] text-jungle-green font-semibold">
                        Profit
                      </p>
                    </div>
                  </div>
                  <h3 className="text-[12px] font-semibold">AAPL</h3>
                </div>
              </div>
              <Image
                src={"/assets/global/trading-bar.png"}
                height={10}
                width={70}
                alt="trading-bar"
              />
            </div>
            <div className="p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p>Entry price</p>
                <p>
                  <b>$150.00</b>
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p>Current price</p>
                <p>
                  <b>$150.00</b>
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p>Profit/Loss</p>
                <p className="text-jungle-green">
                  <b>+$5.00</b>
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p>Entry price</p>
                <p className="text-jungle-green">
                  <b>$150.00</b>
                </p>
              </div>
              <button className="bg-pear text-sm font-semibold text-dark-green p-2 rounded-lg mt-4">
                Close position
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenPositions;
