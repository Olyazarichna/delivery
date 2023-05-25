import '../scss/main.scss';
import { Inter } from "next/font/google";
import Header from './Components/Header/Header.jsx';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Delivery",
  description: "Enjoy your shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
