import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Movie Database (Login)",
  description: "Generated by create next app",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
