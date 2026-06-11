import Footer from "@components/Footer";
import NavBar from "@components/NavBar";

export default function MainLayout(props: any) {
  return (
    <main class="container mx-auto flex flex-col h-full-fit w-screen">
        <NavBar />
        {props.children}
        <Footer />
    </main>
  );
}