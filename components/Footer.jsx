// React and Next.js imports
// import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Icon imports
import { Github, Twitter, Rss, Instagram } from "lucide-react";
import { Button } from "./ui/button";

// Asset imports
// import Logo from "@/public/logo.svg";

export default function Footer() {
  return (
    <footer className="p-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              <h3 className="sr-only">milsblog.</h3>
              {/* <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              ></Image> */}
              <h2 className="text-xl font-bold inline-flex gap-2"><Rss />milsblog.</h2>
            </Link>
            <p>
              <Balancer>
              your voice, your story - unleashing ideas one post at a time.
              <br />
              <span className="text-zinc-500">- designed and developed by </span><span className="font-semibold tracking-wide">@somil</span>
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Website</h5>
            <Link href="/">Blog</Link>
            <Link href="/">Authors</Link>
            <Link href="/">Categories</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Legal</h5>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
        <br />
        <div className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2 pt-5 pb-[-20px]">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <a
              href="https://github.com/Somilg11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
              </a>
              
            </Button>
            <Button variant="outline" size="icon">
            <a
              href="https://x.com/somil_1101"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a> 
            </Button>
            <Button variant="outline" size="icon">
            <a
              href="https://www.instagram.com/somil_1101/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram/>
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground">
            ©{" "}
            <a href="https://github.com/fikc./components">milsblog. </a>
            All rights reserved. 2024-present.
          </p>
        </div>
    </footer>
  );
}
