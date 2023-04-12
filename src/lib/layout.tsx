import { PropsWithChildren } from "react";

import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />

      {children}

      <Footer />
    </div>
  );
};
