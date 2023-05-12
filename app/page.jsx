import Image from 'next/image';
import Adult from './components/Adult';
import About from './components/About';

export default function Home() {
  return (
    <div>
      <main className="">
        <div className="text-white relative">
          <div className="">
            <Image
              src="/assets/images/hero.png"
              alt="My Image"
              width={500}
              height={500}
              priority={true}
              className="  mr-[55px] w-[100em] md:w-[70em] md:h-[30em] h-auto flex-1 "
            />
          </div>
          <div className="absolute top-0 bg-black h-full w-full bg-opacity-70 items-center justify-center text-center pt-[100px] px-2 ">
            <div className="lg:w-6/12 items-center justify-center mx-auto">
              <h1 className="uppercase text-4xl font-bold text-[var(--color-primary-variant)] mb-2 ">
                Unleash your dog's potential
              </h1>
              <h3>
                Welcome to DBO DOG DYNASTY, your premier destination for
                top-notch dog training. We are dedicated to helping you and your
                furry companion achieve your goals Enroll Now!{' '}
                <span className="block">Dog Welcome, People Tolerated</span>.
              </h3>
              <div className=" flex justify-center gap-4 ">
                <button className=" bg-[var(--color-primary)] px-4 py-2   rounded-2xl font-semibold text-white ">
                  Enroll Now
                </button>

                <button className=" hover:bg-[var(--color-bg-variant)] px-4 py-2   rounded-2xl text-[var(--color-bg-variant)] border border-red-500 font-semibold hover:text-white  ">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="md:flex">
        <Adult className="" />
        <About className="" />
      </section>
    </div>
  );
}
