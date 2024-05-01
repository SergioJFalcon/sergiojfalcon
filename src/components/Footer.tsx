import { A } from "@solidjs/router";
import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-solid";

export default function Footer() {
  return (
    <footer class="relative inset-x-0 bottom-0 pb-4">
      <div class="mx-auto">
        <div class="items-center justify-between">
          <div class="flex flex-row items-center justify-center space-x-2 mb-2">
            <A href='https://www.github.com/sergiojfalcon'>
                <Github class="hover:scale-150 transition-all" />
            </A>
            <A href='https://www.linkedin.com/in/sergiojfalcon'>
                <Linkedin class="hover:scale-150 transition-all" />
            </A>
            <A href='https://www.youtube.com/@powersergio'>
                <Youtube class="hover:scale-150 transition-all" size="2rem" />
            </A>
            <A href='https://www.instagram.com/sergiojfalcon'>
                <Instagram class="hover:scale-150 transition-all" />
            </A>
            <A href='https://www.twitter.com/sergiojfalcon'>
                <Twitter class="hover:scale-150 transition-all" />
            </A>
          </div>
          <div class="flex flex-col text-white text-sm font-bold">
            {/* <div class="flex flex-row items-center justify-center space-x-2">
              <A href="/privacy" class="hover:text-gray-300">Privacy Policy</A>
              <A href="/terms" class="hover:text-gray-300">Terms of Service</A>
            </div> */}
            <span class="text-xs text-gray-400 text-center">© 2024 Sergio Falcon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}