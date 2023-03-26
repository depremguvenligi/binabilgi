import { Raleway } from "@next/font/google";

import Footer from "./Footer";
import Nav from "./Nav";

type Props = {
  children: React.ReactNode;
};

const raleway = Raleway({
  variable: "--font-raleway",
  display: "swap",
  subsets: ["latin-ext"],
});

const Layout = ({ children }: Props) => (
  <div className="subpixel-antialiased">
    <div className={`subpixel-antialiased ${raleway.variable} font-sans`}>
      <Nav />
      <main className="mb-auto">
        {children}
      </main>
      <Footer />
    </div>
  </div>
);

export default Layout;
