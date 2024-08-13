import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import LeftSideBar from "@/components/LeftSideBar";
import MainContainer from "@/components/MainContainer";
import RightSideBar from "@/components/RightSideBar";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vibe ZOne",
  description: "Next 14 Social Media App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2`}>
          <main className="flex">
            <LeftSideBar />
            <MainContainer>{children}</MainContainer>
            <RightSideBar />
          </main>
          <BottomBar></BottomBar>
        </body>
      </html>
    </ClerkProvider>
  );
}
