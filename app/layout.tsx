import "tailwindcss/tailwind.css";

import { Metadata } from "next";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";
import Landing from "../components/Landing";

const supplyMono = localFont({
  src: "../public/fonts/PPSupplyMono-Regular.woff2",
  preload: true,
  variable: "--font-supply-mono",
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    '"Liberation Mono"',
    '"Courier New"',
    "monospace",
  ],
});

export const metadata: Metadata = {
  title: "MUD | Framework for onchain applications",
  description:
    // eslint-disable-next-line max-len
    "MUD provides you with the tools to build onchain applications and autonomous worlds, with a framework and protocol that simplifies development on Ethereum and other EVM chains.",
  icons: "/images/logos/circle/mud.svg",
  openGraph: {
    images: "/images/og-img-mud.png",
  },
};

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body>
      <div className="min-h-screen p-8 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">POD: A Standard for Signed Data</h1>
        <p className="text-gray-600">
          Ensuring data integrity and authenticity with cryptographic
          signatures.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Why We Need Signed Data</h2>
          <p className="text-gray-700 mb-2">
            In today's interconnected world, data integrity and authenticity are
            paramount. Signed data ensures that the information has not been
            tampered with and is from a verified source.
          </p>
          <p className="text-gray-700 mb-2">
            With signed data, we can trust the data we receive, making it
            crucial for applications in finance, healthcare, and more.
          </p>
          <p className="text-gray-700">
            POD provides a standardized way to sign and verify data, ensuring
            consistency and security across different platforms and
            applications.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">
            A Simple Example
          </h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
            <code className="text-sm text-gray-800">{`{
    "data": {
      "name": "Alice",
      "email": "alice@example.com",
      "timestamp": "2023-10-01T12:00:00Z"
    },
    "signature": "MEUCIQDfK7FJ9Zb2..."
  }`}</code>
          </pre>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img
              src="/placeholder.svg"
              alt="POD Logo"
              className="h-10 w-10 mr-3"
              width="40"
              height="40"
              style={{ aspectRatio: "40/40", objectFit: "cover" }}
            />
            <h2 className="text-2xl font-bold">What is POD?</h2>
          </div>
          <p className="text-gray-700 mb-2">
            POD (Proof of Data) is a standard for creating and verifying signed
            data. It uses cryptographic techniques to ensure that the data has
            not been altered and is from a trusted source.
          </p>
          <p className="text-gray-700 mb-2">
            By using POD, developers can create secure applications that rely on
            data integrity and authenticity. It is widely used in various
            industries to protect sensitive information.
          </p>
          <p className="text-gray-700">
            The POD standard is designed to be easy to implement and integrate
            into existing systems, providing a robust solution for data
            security.
          </p>
        </div>
      </div>
    </div>
      </body>
    </html>
  );
}
