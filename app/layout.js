import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UC IEEE",
  description: "This is the UC IEEE website!",
};

//components
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Pictures from "./components/pictures";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Main />
        <Pictures />
        <Footer />

        {children}
      </body>
    </html>
  );
}
