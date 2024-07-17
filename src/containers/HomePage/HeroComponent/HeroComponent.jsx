import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";
import { SectionWrapper } from "@/components";

function HeroComponent() {
  return (
    <SectionWrapper>
      <article className="w-1/2 h-full border-r border-black py-20 flex flex-col items-start justify-between">
        <div className="h-1/2 flex flex-col gap-4">
          <h2 className="font-semibold text-5xl">
            Empowering Your Digital Age
          </h2>
          <p className="text-2xl font-medium">
            Your trusted partner in Tax Consultation
          </p>
        </div>
        <Link
          className="border-transparent border  hover:border-primary hover:border-b-secondary hover:border-r-secondary  px-6 py-1 rounded-full transition-all duration-500 ease-out bg-primary text-white text-xl shadow-md shadow-gray-400"
          href="/services"
        >
          Explore our services
        </Link>
      </article>
      <article className="w-1/2 h-full pl-40 flex justify-center items-center">
        <ul className="flex flex-col gap-10 w-full">
          <li className="flex text-2xl gap-10">
            <div className="bg-green-500 rounded-full p-1">
              <IoMdCheckmark className="text-white text-2xl" />
            </div>
            Threat Intelligence
          </li>
          <li className="flex text-2xl gap-10">
            <div className="bg-green-500 rounded-full p-1">
              <IoMdCheckmark className="text-white text-2xl" />
            </div>
            Cyber Risk Assessment
          </li>
          <li className="flex text-2xl gap-10">
            <div className="bg-green-500 rounded-full p-1">
              <IoMdCheckmark className="text-white text-2xl" />
            </div>
            Security Awareness Training
          </li>
          <li className="flex text-2xl gap-10">
            <div className="bg-green-500 rounded-full p-1">
              <IoMdCheckmark className="text-white text-2xl" />
            </div>
            Incidence Response and Recovery
          </li>
          <li className="flex text-2xl gap-10">
            <div className="bg-green-500 rounded-full p-1">
              <IoMdCheckmark className="text-white text-2xl" />
            </div>
            24/7 Monitoring and Support
          </li>
        </ul>
      </article>
    </SectionWrapper>
  );
}

export default HeroComponent;
