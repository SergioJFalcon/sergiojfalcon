import { As, useColorMode } from "@kobalte/core";
import { useLocation } from "@solidjs/router";
import { Laptop, Moon, Sun } from 'lucide-solid';
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function NavBar() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  const { setColorMode } = useColorMode()

  return (
    <nav class="sticky top-0">
      <ul class="container flex justify-between p-3 z-1000 bg-color-transparent">
        <div class="flex">
          <li class={`${active("/")} mx-1.5 sm:mx-6`}>
            <a href="/">Home</a>
          </li>
          <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
            <a href="/about">About Me</a>
          </li>
          <li class={`border-b-2 ${active("/projects")} mx-1.5 sm:mx-6`}>
            <a href="/projects">Projects</a>
          </li>
          {/* <li class={`border-b-2 ${active("/shop")} mx-1.5 sm:mx-6`}>
            <a href="/shop">Shop</a>
          </li> */}
          {/* <li class={`border-b-2 ${active("/blog")} mx-1.5 sm:mx-6`}>
            <a href="/blog">Blog</a>
          </li> */}
        </div>
        <div class="flex">
          <li class='mr-4'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <As component={Button} variant="ghost" size="sm" class="w-9 px-0">
                  <Sun  class="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                  <Moon class="size-5 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span class="sr-only">Toggle theme</span>
                </As>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => setColorMode("light")}>
                  <Sun class="mr-2 size-4" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setColorMode("dark")}>
                  <Moon class="mr-2 size-4" />
                  <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setColorMode("system")}>
                  <Laptop  class="mr-2 size-4" />
                  <span>System</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </div>
      </ul>
    </nav>
  );
}
