import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

const Adult = () => {
  return (
    <div className="text-white  p-4 pt-8 bg-black flex flex-col gap-4 items-start md:w-[50%]">
      <h1 className="font-bold text-4xl">
        {' '}
        Obedience <span className="block">Training</span>{' '}
      </h1>
      <p>
        Our extensive experience as both dog owners and trainers allows us to
        communicate effectively with your furry companion, comprehend their
        unique needs, and develop a customized training regimen that
        accommodates your dog's learning pace.
      </p>

      {/* point  */}
      <div className="flex flex-col gap-4 font-semibold">
        {/* first  */}
        <div className="flex gap-4 ">
          <FaCheckCircle size={26} className="text-[var(--color-primary)]" />
          <h2>Tailored Training Programs </h2>
        </div>
        {/* second  */}
        <div className="flex gap-4 ">
          <FaCheckCircle size={26} className="text-[var(--color-primary)]" />
          <h2>Clear Dog-Trainer Communication</h2>
        </div>
        {/* third  */}
        <div className="flex gap-4 ">
          <FaCheckCircle size={26} className="text-[var(--color-primary)]" />
          <h2> Transparent Understanding of Your Pet's Needs</h2>
        </div>
      </div>
      <button className="bg-[var(--color-primary)] p-4 rounded-2xl mt-4">
        Get A Quote
      </button>
      <div className="mx-auto md:flex flex-col gap-4 hidden">
        <Image
          src="/assets/images/img 1.png"
          width={200}
          height={200}
          className="w-[28rem] h-[17rem]"
        />
        <Image
          src="/assets/images/img 2.png"
          width={200}
          height={100}
          className="w-[28rem] h-[17rem]"
        />
      </div>
    </div>
  );
};

export default Adult;
