import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const navItems = [
  {
    label: "Home",
    href: "/",
    exact: true,
  },
  {
    label: "Profile",
    href: "/profile",
    exact: false,
  },
  {
    label: "Login",
    href: "/login",
    exact: true,
  },
  {
    label: "Register",
    href: "/register",
    exact: true,
  },
];

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header heading="Next Strapi Auth" navItems={navItems} />
        <main className="py-12 min-h-screen bg-slate-800">
          <div className="container mx-auto">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
