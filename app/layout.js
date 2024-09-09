import "./globals.css";
import "./index.css"

export const metadata = {
  title: "aydogandev",
  description: "Aydogan Uyanikoglu Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
