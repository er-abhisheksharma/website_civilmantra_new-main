// app/layout.tsx (or wherever your RootLayout is located)

import { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/Scrolltotop"; // Importing the Scroll to Top Button

// Importing Rubik font
const rubik = Rubik({
    subsets: ["latin"],
    weight: ["400", "500", "700"], // You can adjust weights as needed
    display: "swap", // This ensures text is immediately displayed with a fallback font until the Rubik font is loaded
});

export const metadata: Metadata = {
    title: "Civil Mantra",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={rubik.className}> {/* Applying the font class here */}
            <body className="font-rubik">
                <NavBar />
                {children}
                <Footer />
                <ScrollToTopButton /> {/* Adding the Scroll to Top button here */}
            </body>
        </html>
    );
}
