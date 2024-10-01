"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"

import { ModeToggle } from "./theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Coffee, Menu, Rss } from "lucide-react";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(40);
    }, 100);
    setTimeout(() => {
      setProgress(100);
    }, 400);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 50);
  }, []);

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <LoadingBar
        color="#933ce6"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="text-lg font-bold inline-flex gap-2 items-center">
            <Rss /> milsblog.
          </div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="transition-transform duration-500">
            {" "}
            home
          </Link>
          <Link href="/about" className=" transition-transform duration-500">
            about
          </Link>
          <Link href="/blog" className=" transition-transform duration-500">
            blog
          </Link>

          <Dialog>
            <DialogTrigger>
              say hi👋
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>say hi👋</DialogTitle>
                <DialogDescription>
                wanna say something about this blog? type your message below.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid items-center gap-2">
                  <Label htmlFor="username" className="text-right">
                    enter your thoughts below:
                  </Label>
                  <Textarea placeholder="Type your message here." />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="font-bold">send</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <div className="flex items-center">
            <Button className="mx-1" variant="outline">
            <a
              href="http://buymeacoffee.com/gsomil93q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Coffee />
            </a>
            </Button>
            <ModeToggle />
          </div>
        </div>

        <div className="md:hidden">
          <span className="mx-2">
            <ModeToggle />
          </span>
          <Sheet>
            <SheetTrigger>
              {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg> */}
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">
                  <span className="inline-flex gap-2 items-center">
                    <Rss /> milsblog.
                  </span>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6">
                    <Link href="/"> home</Link>
                    <Link href="/about">about</Link>
                    <Link href="/blog">blog</Link>
                    <Dialog>
            <DialogTrigger>
              say hi👋
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>say hi👋</DialogTitle>
                <DialogDescription>
                  wanna say something about this blog? type your message below.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid items-center gap-2">
                  <Label htmlFor="username" className="text-right">
                    enter your thoughts below:
                  </Label>
                  <Textarea placeholder="Type your message here." />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
                    <div>
                      <Button className="mx-1 text-xs" variant="outline">
                      <a
              href="http://buymeacoffee.com/gsomil93q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Coffee />
            </a>
                      </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
