import "./globals.css";

export const metadata = {
  title: "წონის ბალანსის ფორმულა | 2026",
  description: "ონლაინ კატალოგი საქართველოში."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body>{children}</body>
    </html>
  );
}
