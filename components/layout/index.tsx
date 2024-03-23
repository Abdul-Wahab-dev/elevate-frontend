import React, { ReactNode } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
type Props = {
  children: ReactNode;
};
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="w-screen h-screen flex p-1 gap-2 bg-anti-flash-white">
        {/* nav bar */}
        <Sidebar />
        {/* nav bar */}

        <div className="w-full h-full border-2 border-gainsboro rounded-lg flex flex-col gap-2 overflow-hidden">
          <Header />

          <div className="overflow-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
