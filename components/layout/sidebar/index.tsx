import React from "react";
import Link from "next/link";
import Image from "next/image";
const Sidebar: React.FC = () => {
  return (
    <div className="w-[236px] h-full bg-dark-green rounded-lg p-4 flex flex-col gap-5">
      <div className="flex items-center justify-between p-2">
        <Link href={"/"}>
          <Image
            src="/assets/icons/logo.png"
            alt="logo"
            width={25}
            height={25}
          />
        </Link>

        <button>
          <Image
            src="/assets/icons/sidebar-close.svg"
            width={20}
            height={25}
            alt="sidebar hide icon"
          />
        </button>
      </div>
      <div className="border-b border-[#003A1C]">
        <h3 className="text-argent text-sm">Main Menu</h3>
        <div className="my-4 flex flex-col gap-3">
          <div>
            <Link
              href={"/"}
              className="flex gap-2 px-3 py-1 rounded-lg items-center transition-all text-raisin-black bg-key-lime font-semibold"
            >
              <Image
                src={"/assets/icons/home.svg"}
                alt="home icon"
                width={16}
                height={25}
              />
              <p>Home</p>
            </Link>
          </div>
          <div>
            <Link
              href={"/"}
              className="flex gap-2 px-3 py-1 rounded-lg text-argent items-center transition-all hover:text-raisin-black hover:bg-key-lime font-semibold"
            >
              <Image
                src={"/assets/icons/trade.svg"}
                alt="home icon"
                width={16}
                height={25}
              />
              <p>Trade</p>
            </Link>
          </div>
          <div>
            <Link
              href={"/"}
              className="flex gap-2 px-3 py-1 rounded-lg text-argent items-center transition-all hover:text-raisin-black hover:bg-key-lime font-semibold"
            >
              <Image
                src={"/assets/icons/report.svg"}
                alt="home icon"
                width={16}
                height={25}
              />
              <p>Reporting</p>
            </Link>
          </div>
          <div>
            <Link
              href={"/"}
              className="flex gap-2 px-3 py-1 rounded-lg text-argent items-center transition-all hover:text-raisin-black hover:bg-key-lime font-semibold"
            >
              <Image
                src={"/assets/icons/transaction.svg"}
                alt="home icon"
                width={16}
                height={25}
              />
              <p>Transaction</p>
            </Link>
          </div>
          <div>
            <Link
              href={"/"}
              className="flex gap-2 px-3 py-1 rounded-lg text-argent items-center transition-all hover:text-raisin-black hover:bg-key-lime font-semibold"
            >
              <Image
                src={"/assets/icons/wallet.svg"}
                alt="home icon"
                width={16}
                height={25}
              />
              <p>Accounts</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-[#003A1C]">
        <div className="flex items-center justify-between">
          <h3 className="text-argent text-sm">Add - ons</h3>
          <Image
            src={"/assets/icons/plus.svg"}
            width={16}
            height={16}
            alt="plus"
          />
        </div>
        <div className="my-4 flex flex-col gap-3">
          <div>
            <Link
              href={"/"}
              className="flex gap-2 px-3 py-1 rounded-lg text-argent items-center transition-all hover:text-raisin-black hover:bg-key-lime font-semibold"
            >
              <Image
                src={"/assets/icons/add-on.svg"}
                alt="home icon"
                width={16}
                height={25}
              />
              <p>Add - on Store</p>
            </Link>
          </div>
          <div>
            <Link
              href={"/"}
              className="flex gap-2 px-3 py-1 rounded-lg text-argent items-center transition-all hover:text-raisin-black hover:bg-key-lime font-semibold"
            >
              <Image
                src={"/assets/icons/outline_link.svg"}
                alt="home icon"
                width={15}
                height={25}
              />
              <p>Trade Copier</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
