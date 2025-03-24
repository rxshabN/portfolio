import Header from "@/components/header";
import { ReactNode } from "react";

const SectionsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-center my-10 flex items-center justify-center flex-col">
      <Header />
      {children}
    </div>
  );
};

export default SectionsLayout;
