import Space from "./components/Space";
import HomePage from "./components/HomePage";
import WhyChoose from "./components/WhyChoose";
import Service from "./components/Service";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {


  return (
    <div className="flex  flex-col items-center w-full">
 
        <HomePage/>
        <Space color="bg-gray-100" direction="rounded-bl-full rounded-br-full" backgroundImage="radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)" bgSize="10px 10px"/>
        <WhyChoose/>
        <Space color="bg-gray-100" direction="rounded-tl-full rounded-tr-full" backgroundImage="radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)" bgSize="10px 10px"/>
        <Service/>
        <CallToAction/>
        <Footer/>
        
    </div>
  );
}
