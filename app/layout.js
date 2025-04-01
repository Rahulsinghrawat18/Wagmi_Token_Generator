import { Nabla } from "next/font/google";
import "./globals.css";

const nabla = Nabla({ subsets: ['latin'] })


export const metadata = {
  title: "WAGMI.fun",
  description: "create token listings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      // className={`${monaSans.className} antialiased pattern`}
      className={`${nabla.className} nabla-custom`}
      >
        {children}
      </body>
    </html>
  );
}
