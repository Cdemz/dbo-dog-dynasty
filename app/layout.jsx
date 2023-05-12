import Nav from './components/Nav';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DBO DBO DYNASTY',
  description: 'Get the on team',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="app">
          <Nav />

          <div className="app">{children}</div>
        </main>
      </body>
    </html>
  );
}
