import { Inter } from "next/font/google";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import { ApiProvider } from "../context";
import FavoriteProvider from "../context/favoriteContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spaceflix",
  description: "Desarrollador web, diseñador e ilustrador 3D",
  icons: {
    icon: ["/favicon.ico?=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  charset: "UTF-8",
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FavoriteProvider>
          <ApiProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </ApiProvider>
        </FavoriteProvider>
      </body>
    </html>
  );
}
