import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-white p-4 md:w-[50%]">
      <h1 className="text-2xl font-bold md:text-4xl">About Us</h1>
      <Image
        src="/assets/images/idan.png"
        width={400}
        height={300}
        className="mx-auto my-4"
      />
      <p>
        As dog trainers in Washington, we have the pleasure of working with some
        of the most dedicated dog owners we've ever met. With so many beautiful
        parks and hiking trails in the area, it's no surprise that people in
        Washington love to take their furry friends on outdoor adventures. But
        with those adventures come unique challenges, like leash reactivity,
        recall issues, and navigating busy dog parks. We specialize in helping
        dogs and their owners overcome those challenges, so that they can enjoy
        all that Washington has to offer. Whether it's teaching a young puppy
        basic obedience or helping an adult dog overcome anxiety, we're always
        up for the task. There's nothing quite like seeing the joy on a dog's
        face when they finally understand what we're asking of them. In addition
        to working with individual clients, we also offer group training classes
        at local parks and community centers. It's a great way for people to
        socialize their dogs in a safe and controlled environment, and we love
        seeing the relationships that form between both the dogs and their
        owners. Overall, being dog trainers in Washington is a dream come true.
        We get to spend our days outside, surrounded by happy dogs and their
        loving owners, helping them all live their best lives together.
      </p>
    </div>
  );
};

export default About;
