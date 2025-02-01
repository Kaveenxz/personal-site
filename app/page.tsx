import Space from "./components/Space";
import HomePage from "./components/HomePage";
import WhyChoose from "./components/WhyChoose";

export default function Home() {


  return (
    <div className="flex  flex-col items-center w-full">
 
        <HomePage/>
        <Space color="bg-gray-100"/>
        <WhyChoose/>
        <Space color="bg-white"/>
    </div>
  );
}
