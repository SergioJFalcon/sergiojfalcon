import { createSignal, onMount } from "solid-js";

export default function Blog() {
  const [blogs, setBlogs] = createSignal([]); // list of blogs
  const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Blog Page
      </h1>
      <p class="text-center text-lg">
        Coming Soon
      </p>
    </main>
  );
}
