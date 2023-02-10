import "./globals.css";
import Providers from "./Providers";

//======================================

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
        <Providers>
          <div className="max-w-full mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
