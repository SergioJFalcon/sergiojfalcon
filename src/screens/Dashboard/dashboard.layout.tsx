import NavBar from "../../components/NavBar";
import Footer from "@components/Footer";

export default function DashboardLayout(props: any) {
  return (
    <main class="container mx-auto flex flex-col h-screen w-screen">
        <NavBar />
        {props.children}
        <Footer />
    </main>
  );
}