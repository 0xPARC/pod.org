import "tailwindcss/tailwind.css";

import { Metadata } from "next";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";
import Logo from "../components/Logo";

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
  title: "POD | Provable Object Data",
  description:
    // eslint-disable-next-line max-len
    "POD is a standard for Provable Object Data",
  icons: "/images/logos/pod.svg",
};

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen p-8 bg-gray-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              {/* <Logo width="60" height="60" /> */}
              <h1 className="text-4xl font-bold mb-4">Provable Object Data</h1>
            </div>
            <p className="text-gray-600">
              Ensuring data integrity and interoperability with cryptographic
              proofs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Cryptographic Data</h2>
              <p className="text-gray-700 mb-2">
                In today's interconnected world, data integrity and
                interoperability are paramount. Zero-knowledge proofs, such as
                digital signatures or zk-SNARKs, ensure that the information has
                not been tampered with and is from a verified source.
              </p>
              <p className="text-gray-700 mb-2">
                With proved data and various gadgets such as GPC or MP-FHE, we
                can trust the data we receive and operations performed on that
                data, making it crucial for applications in finance, healthcare,
                and more.
              </p>
              <p className="text-gray-700">
                POD provides a standardized way to sign and verify data,
                ensuring consistency and security across different platforms and
                applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Example POD
              </h2>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
                <code className="text-sm text-gray-800">{`{
  "entries": {
    "fullName": {
      "type": "string",
      "value": "John Doe"
    },
    "dateOfBirth": {
      "type": "int",
      "value": 960595984999
    }
  },
  "signature": "hMLIKyrL69jZVR6cmArX41/0V6sTUODMjmFIAFAa/aCw1/p++Z+ccyuHYlJMYD3sug/Ces/lcs+GustfCMboBA",
  "signerPublicKey": "NnGAciO/OIz+R5aYBlTUb+QwCgD5xossqB8gZtKLOxs"
}`}</code>
              </pre>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-bold">What is POD?</h2>
                {/* <Logo width="40" height="40" /> */}
                {/* <h2 className="text-2xl font-bold"></h2> */}
              </div>
              <p className="text-gray-700 mb-2">
                POD (Provable Object Data) is a standard for creating and
                verifying cryptographic data. It uses cryptographic techniques
                to ensure that the data has not been altered and is from a
                trusted source.
              </p>
              <p className="text-gray-700 mb-2">
                By using POD, developers can create secure applications that
                rely on data integrity and interoperability. It is widely used
                in various industries to protect sensitive information.
              </p>
              <p className="text-gray-700">
                The POD standard is designed to be easy to implement and
                integrate into existing systems, providing a robust solution for
                data security.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
