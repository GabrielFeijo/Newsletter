import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Newsletter Sign-up form',
	description: 'Newsletter sign-up form with success message',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt-BR'>
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
