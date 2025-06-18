import './styles/main.sass';

export const metadata = {
  title: 'Портфолио',
  description: 'Портфолио Наташи - HTML-верстальщика',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}