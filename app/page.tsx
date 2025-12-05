import Conversion1 from '@/components/Home/Conversion1';
import Features from '@/components/Home/Features';
import Hero from '@/components/Home/Hero';

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <div className="flex mx-auto md:max-w-[1300px]">
        <Conversion1></Conversion1>
      </div>
    </div>
  );
}
