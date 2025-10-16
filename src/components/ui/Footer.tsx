"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/ui/Container";
import { useNavigation } from "../../hooks/useNavigation";

export function Footer() {
  const navigation: string[] = ["Features", "Contact", "Demo"];
  const legal = ["Terms", "Privacy"];
  const { handleNavigation } = useNavigation();

  return (
    <footer className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="sr-only">Company Information</h2>
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <Image
                  src="/img/logo.svg"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Comra.ai</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Comra.ai is a platform that allows you to create 3D models without
              the need for expertise or special equipment
            </div>
            <div className="mt-2 text-gray-500 dark:text-gray-400">
              <a
                href="mailto:info@comra.ai"
                className="hover:text-indigo-500 flex items-center gap-2"
              >
                <EmailIcon size={20} />
                info@comra.ai
              </a>
            </div>
          </div>

          <nav aria-label="Footer Navigation">
            <h2 className="sr-only">Site Navigation</h2>
            <div className="flex flex-wrap w-full items-start -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <button
                  key={index}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none dark:focus:bg-transparent"
                  onClick={() => handleNavigation(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>

          <nav aria-label="Legal">
            <h2 className="sr-only">Legal Links</h2>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase()}`}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none dark:focus:bg-transparent"
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <h2 className="text-lg font-semibold">Follow us</h2>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a href="https://linkedin.com/" target="_blank" rel="noopener">
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400 mb-8">
          Comra.ai {new Date().getFullYear()}
        </div>
      </Container>
    </footer>
  );
}

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

const EmailIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
