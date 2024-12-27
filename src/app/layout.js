import './globals.css';
import { dbConnect } from '@/lib/mongodb';
export default async function RootLayout({ children }) {
  const conn = await dbConnect();
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
