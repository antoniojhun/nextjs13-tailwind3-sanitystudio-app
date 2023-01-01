import '../../styles/globals.css';
// import Providers from './Providers';
import { Mulish } from '@next/font/google';

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={mulish.className}>
      <body className="bg-gray-100 dark:bg-zinc-900 transition-colors duration-700 text-zinc-900 dark:text-gray-100">
        <div className="max-w-full mx-auto">{children}</div>
      </body>
    </html>
  );
}