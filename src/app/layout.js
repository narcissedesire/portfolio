import "./globals.css";

export const metadata = {
  title: "PortFolio",
  description: "Creation de portFolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
