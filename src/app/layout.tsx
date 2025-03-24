import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'İngilizce Geliştirme Platformu',
	description:
		'İngilizce dil seviyenizi ölçmek için kapsamlı ve kullanıcı dostu bir test platformu. Okuma, dinleme ve dilbilgisi becerilerinizi değerlendirin.',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {


	return (
		<html lang='tr'>
			<body>{children}</body>
		</html>
	);
}
