import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col items-center font-roboto">
      <div className="max-w-[1440px] w-full overflow-hidden flex flex-col items-center min-h-dvh">
        <Header />
        <div className="w-full">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
