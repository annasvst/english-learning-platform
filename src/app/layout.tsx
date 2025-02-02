import type { Metadata } from "next";
import "./globals.css";
import { TestAnswersProvider } from "./test/TestAnswersProvider";
import { UserLevelProvider } from "./test/UserLevelProvider";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "İngilizce Dil Seviyesi Test Platformu",
  description:
    "İngilizce dil seviyenizi ölçmek için kapsamlı ve kullanıcı dostu bir test platformu. Okuma, dinleme ve dilbilgisi becerilerinizi değerlendirin.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let initialAnswers = null;

  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("sessionToken");

  if (sessionToken) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/answers`,
        {
          headers: {
            "Content-Type": "application/json",
            Cookie: `sessionToken=${sessionToken.value}`,
          },
        },
      );

      if (response.ok) {
        initialAnswers = await response.json();
      }
    } catch (error) {
      console.error("Error fetching answers:", error);
    }
  }

  return (
    <html lang="tr">
      <body>
        <UserLevelProvider>
          <TestAnswersProvider initialAnswers={initialAnswers}>
            {children}
          </TestAnswersProvider>
        </UserLevelProvider>
      </body>
    </html>
  );
}
