import { Sora} from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "next-themes";

const soraFont = Sora({
  subsets: ["latin"],
  // weight: ["400", "500", "600", "700"],
  // display: "swap",
  variable: "--font-sora"
});


export const metadata = {
  title: "Clothe Shop",
  description: "There are exit any clothes",
    icons: {
    icon: "/images/images.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${soraFont.variable} antialiased  `}>
        {children}
      </body>
    </html>
  );
}
