import { A, useLocation } from "@solidjs/router";
import { For, JSX, splitProps } from "solid-js";
import { cn } from "../lib/utils";

interface SidebarNavProps extends JSX.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

export default function SidebarNav(props: SidebarNavProps) {
    const [, rest] = splitProps(props, ["class"], ["items"]);
    const location = useLocation();
    const active = (path: string) =>
      path == location.pathname
        ? "bg-gray-100 "
        : "";
return (
    <nav 
      class={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        props.class
      )}
      {...rest}
      >
      <ul class="sm:flex sm:flex-row md:flex md:flex-row lg:flex-col space-y-1 sm:space-y-0 md:space-y-0 lg:space-y-1">
        <For each={props.items}>{(item) => (
          <li class="flex">
            <A
              href={item.href}
              class={`w-full flex ${active(item.href)} items-center px-4 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-200`}
            >
              <span class="ml-2">{item.title}</span>
            </A>
          </li>
        )}</For>
      </ul>
    </nav>
  );
}
