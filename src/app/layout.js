import { Sidebar } from "@/components/sidebar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-screen min-h-screen bg-white px-24">
          <div className="w-1/4 border-r border-gray-300">
            <Sidebar />
          </div>
          <div className="w-1/2">{children}</div>
          <div className="w-1/4 border-l border-gray-300">widgets</div>
        </div>
      </body>
    </html>
  );
}
