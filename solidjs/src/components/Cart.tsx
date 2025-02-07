import { createSignal } from "solid-js";

export default function Cart() {
  const [count, setCount] = createSignal(0);
  // Cart Icon Button that opens a small box with the cart information from localstorage and allows the user to checkout
  return (
    <button
      class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
      onClick={() => setCount(count() + 1)}
    >
      Clicks: {count()}
    </button>
  );
}
