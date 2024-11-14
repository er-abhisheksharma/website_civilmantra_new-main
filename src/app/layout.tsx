import { Metadata } from "next";
import { League_Spartan } from "next/font/google"; // Importing the available Google font
import "./globals.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/Scrolltotop"; 



const leagueSpartan = League_Spartan({
    subsets: ["latin"],
    weight: ["100", "400", "900"], // Adjust as needed
    display: "swap",
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
        <html lang="en" className={leagueSpartan.className}> 
            <head>
                
                <link 
                  rel="stylesheet" 
                  href="https://fonts.googleapis.com/css2?family=Kablammo&family=League+Spartan:wght@100..900&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap" 
                />
            </head>
            <body className="font-league-spartan">
                <NavBar />
                {children}
                <Footer />
                <ScrollToTopButton /> 
                
            </body>
        </html>
    );
}
