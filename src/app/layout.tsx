import type { Metadata } from "next";
import "./globals.css";
import { TestAnswersProvider } from "./test/TestAnswersProvider";
import { UserLevelProvider } from "./test/UserLevelProvider";

export const metadata: Metadata = {
  title: "İngilizce Dil Seviyesi Test Platformu",
  description:
    "İngilizce dil seviyenizi ölçmek için kapsamlı ve kullanıcı dostu bir test platformu. Okuma, dinleme ve dilbilgisi becerilerinizi değerlendirin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <UserLevelProvider>
          <TestAnswersProvider>{children}</TestAnswersProvider>
        </UserLevelProvider>
      </body>
    </html>
  );
}
