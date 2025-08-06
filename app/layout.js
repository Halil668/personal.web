import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "KHALIL  SAMADOV",
    description: "KHALIL  SAMADOV ADINA  BİR  WEB SİTESİ",
    templateCreator: {
        name: "KHALIL  SAMADOV",
        url: "https://github.com/Halil668",
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
