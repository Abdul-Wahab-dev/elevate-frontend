import React from "react";
import Image from "next/image";
const Header: React.FC = () => {
  return (
    <header className="border-b p-4 border-gainsboro flex items-center justify-between">
      <div>
        <h3 className="text-black">
          Welcome back , <b>Alex</b>
        </h3>
      </div>
      <div className="flex items-center gap-7">
        <button>
          <Image
            src={"/assets/icons/search.png"}
            width={20}
            height={15}
            alt="search icon"
          />
        </button>
        <button>
          <Image
            src={"/assets/icons/notifications.png"}
            width={20}
            height={15}
            alt="search icon"
          />
        </button>
        <button>
          <Image
            src={"/assets/icons/avater.png"}
            width={40}
            height={15}
            alt="search icon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
