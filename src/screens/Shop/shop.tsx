import { For, createSignal, onMount} from "solid-js";

export default function Shop() {
  const [products, setProducts] = createSignal([]); // products list
  
  function refresh() {
    console.log("refresh");
    // getProducts().then(products => {
    //   setProducts(products);
    // });
  }
  
  onMount(async () => {
    refresh();
  });

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Shop Page
      </h1>
      <p class="text-center text-lg">
        Coming Soon
      </p>
    </main>
  );
}
