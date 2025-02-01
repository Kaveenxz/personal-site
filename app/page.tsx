import Space from "./components/Space";
import HomePage from "./components/HomePage";
import WhyChoose from "./components/WhyChoose";
import Service from "./components/Service";

export default function Home() {


  return (
    <div className="flex  flex-col items-center w-full">
 
        <HomePage/>
        <Space color="bg-gray-100" direction="rounded-bl-full rounded-br-full"/>
        <WhyChoose/>
        <Space color="bg-gray-100" direction="rounded-tl-full rounded-tr-full"/>
        <Service/>
        <Space color="bg-gray-100" direction="rounded-bl-full rounded-br-full"/>

    </div>
  );
}
