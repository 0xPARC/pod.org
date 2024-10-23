import "tailwindcss/tailwind.css";

import { Metadata } from "next";
import { ReactNode } from "react";
import localFont from "next/font/local";
import Link from "next/link";

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
  title: "POD | Portable Object Datatype",
  description: "POD is a standard for Portable Object Datatype",
  icons: "/images/logos/pod.svg",
};

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">
          <header className="w-full bg-primary text-primary-foreground p-6 min-h-24">
            <h1 className="text-3xl font-bold">
              POD: Portable Object Datatype
            </h1>
          </header>
          <main className="flex-1 w-full">
            <section
              id="hero"
              className="flex flex-col md:flex-row items-end p-6 bg-white rounded-md shadow-md min-h-[calc(100vh-96px)]"
            >
              <div className="w-full md:w-1/2 space-y-4 pr-12">
                <h2 className="text-2xl font-semibold">
                  Portable Object Datatype (POD) is a standard for cryptographic
                  data
                </h2>
                <p className="text-md mt-2">
                  POD enables internet users to store data that preserve its
                  integrity. This leads to a more interoperable and privacy
                  preserving Internet: users can save their data and send it to
                  other consumers, which can then verify that the data has not
                  been modified. Cryptographic operations can be efficiently
                  computed to redact, transform, and aggregate the content of
                  one or more PODs while maintaining end-to-end verifiability.
                </p>
                <p className="text-md mt-2">
                  POD is built and supported by 0xPARC, and used by projects
                  like Zupass, PODBox, Cursive, and more.
                </p>
                <Link
                  href="https://zupass.org/pod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-gray-100 inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  DOCS
                </Link>
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-4 bg-gray-200 rounded-md overflow-x-auto">
                <pre className="p-4 text-md text-left font-mono">{`
{
  "entries": {
    "fullName": {
      "type": "string",
      "value": "Alice Eve"
    },
    "dateOfBirth": {
      "type": "int",
      "value": 960595984999
    },
    "socialSecurityNumber": {
      "type": "string",
      "value": "909-66-3848"
    },
    "owner":{
      "type": "cryptographic",
      "value": 5535221679929845327749972656435629562365334362558929317834631920100002295884
    }
  },
  "signature": "hMLIKyrL69jZVR6cmArX41/0V6sTUODMjmFIAFAa/aCw1/p++Z+ccyuHYlJMYD3sug/Ces/lcs+GustfCMboBA",
  "signerPublicKey": "NnGAciO/OIz+R5aYBlTUb+QwCgD5xossqB8gZtKLOxs"
}
              `}</pre>
              </div>
            </section>
            <section id="what-you-can-do" className="p-6 bg-white">
              <h1 className="text-3xl font-bold">Why POD?</h1>
              <h2 className="text-2xl font-semibold mt-8">
                Enable Internet users to store and own their data
              </h2>
              <p className="text-md mt-4">
                Unlike traditional data received from Web APIs, PODs can be
                saved by users and sent to other consumers without losing their
                integrity. The signature of a POD enforces that the content has
                not been modified. Data can now be moved across different
                websites and devices and remain self-verifying.
              </p>
              <h2 className="text-2xl font-semibold mt-8">
                Make data interoperable across the Internet
              </h2>
              <p className="text-md mt-4">
                The POD standard is designed to make cryptographic operations on
                their content cheap and efficient — even on resource constrained
                devices like mobile phones & embedded systems. They can be
                redacted, transformed, and aggregated in a provable way,
                enabling data to cross trust boundaries.
              </p>
              <p className="text-md mt-4">
                This means that services issuing PODs do not need to predict
                ahead of time all use cases for their data. Instead, a POD can
                be ingested by cryptographic gadgets to create “just-in-time”
                APIs whose integrity can be verified. POD brings a much needed
                interoperability layer to Internet data.
              </p>
              <p className="text-md mt-4 font-bold">Examples:</p>
              <li className="text-md mt-2">
                Show that I am over 21 from my California mobile driver license.
              </li>
              <li className="text-md mt-2">
                Show a loan provider that I am earning more than X dollars a
                year from my paystub
              </li>
              <li className="text-md mt-2">
                Aggregate 200 individual gems from an RPG, and bundle it with a
                unique item to generate a new weapon.
              </li>

              <h2 className="text-2xl font-semibold mt-8">
                Present information in a privacy preserving way
              </h2>
              <p className="text-md mt-4">
                With PODs, it becomes possible to take data from different
                sources — paystubs, government identities, ticketing systems —
                and prove to third-party Internet services that a subset of this
                data is correct, optionally with some logic applied to it. This
                primitive enables just enough information to be handed to a data
                consumer.
              </p>
              <p className="text-md mt-4">
                As an example, a loan provider can verify a proof of income via
                a cryptographic proof on a PODified paystub. Most of the paystub
                data can be redacted, and the total salary can be shown to be
                above a specific threshold without revealing the actual amount.
              </p>
            </section>
            {/* <section id="projects-using-pod" className="p-6 bg-white">
              <h1 className="text-3xl font-bold">Projects Using POD</h1>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Link
                  href="https://zupass.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-gray-100 inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Zupass
                </Link>
                <Link
                  href="https://forum.devcon.org/t/meerkat-q-a-tool-for-audience-engagement/3805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-gray-100 inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Meerkat
                </Link>
                <Link
                  href="https://podbox.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-gray-100 inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  PODBox
                </Link>
                <Link
                  href="https://www.cursive.team/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-gray-100 inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Cursive
                </Link>
              </div>
            </section> */}
          </main>
        </div>
      </body>
    </html>
  );
}
