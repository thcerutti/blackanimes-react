import { Poppins } from "next/font/google";
import "@/app/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Adjust weights as needed
});

const Layout = ({ children }) => {
  return <div className={`${poppins.className}`}>{children}</div>;
};

export default Layout;
