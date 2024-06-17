import { Inter } from "next/font/google";
import Footer from "./components/footer";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Campoal",
  description: "",
  icons: {
    icon: ["/favicons/favicon.ico?v=4"],
    apple: ["/favicons/apple-touch-icon.png?v=4"],
    shortcut: ["/favicons/apple-touch-icon.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className + " font-sen bg-white text-dark-blue"}>
        <div className="font-sen">
          <Navbar />
        </div>
        <div className="font-sen">
          {children}
        </div>
        <div className="font-sen">
          <Footer />
        </div>
      </body>
    </html>
  );
}
