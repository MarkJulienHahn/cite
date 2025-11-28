export const metadata = {
  title: "Backend | Cite",
  description: "Welcome to the Backend of Cite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
