import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shawn Trujillo | Embedded Systems & Robotics",
  description:
    "Portfolio of Shawn Trujillo, an embedded systems and robotics engineer specializing in autonomous systems, industrial software, and hardware design.",
  keywords: [
    "Shawn Trujillo",
    "embedded systems",
    "robotics",
    "software engineer",
    "STM32",
    "ROS 2",
    "University of Michigan",
  ],
  authors: [{ name: "Shawn Trujillo" }],
  openGraph: {
    title: "Shawn Trujillo | Engineering Portfolio",
    description:
      "Embedded systems, robotics, autonomous systems, and industrial software projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}