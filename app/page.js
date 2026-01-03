import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import ProductImage from "@/components/productimage/ProductImage";
import Services from "@/components/services/Services";
import Recommend from "@/components/recommed/Recommend";
import Sales from "@/components/sales/Sales";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <>
        <Navbar></Navbar>
        <Header></Header>
        <ProductImage></ProductImage>
        <Services></Services>
        <Recommend></Recommend>
        <Sales></Sales>
        <Contact></Contact>
        <Footer></Footer>
    </>
  );
}
