import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import ProductImage from "@/components/productimage/ProductImage";
import Services from "@/components/services/Services";
export default function Home() {
  return (
    <>
        <Navbar></Navbar>
        <Header></Header>
        <ProductImage></ProductImage>
        <Services></Services>
    </>
  );
}
