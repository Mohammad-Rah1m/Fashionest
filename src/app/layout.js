import localFont from "next/font/local";
import "./globals.css";
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import StoreProvider from './StoreProvider';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "FashioNest",
  description: "FashioNest is a modern and dynamic eCommerce platform designed to offer a seamless shopping experience for the entire family. Whether you're looking for stylish men's wear, trendy women's apparel, or fun and comfortable outfits for kids, FashioNest has it all. Our carefully curated collections feature the latest fashion trends, from casual wear to formal attire, ensuring that everyone finds their perfect look.",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
    </StoreProvider>
  );
}
