/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <div className="py-32 bg-gradient-to-b from-white from-50% to-gray-100">
        <FeatureSection />
        <BentoSection className="mt-32" />
      </div>
    </>
  );
}
export function FeatureSection() {
  return (
    <div className="px-28 ">
      <div className="mx-auto space-y-16 max-w-7xl">
        <h2 className="max-w-3xl text-6xl font-medium tracking-tight text-gray-950">
          A snapshot of the entire hiring process.
        </h2>
        <div className="p-[var(--padding)] rounded-[var(--radius)] ring ring-black/5 shadow-sm [--radius:1.5rem] [--padding:0.5rem]">
          <img
            className="rounded-[calc(var(--radius)-var(--padding))] ring ring-black/10 shadow-2xl"
            src="/images/hiring-process.jpeg"
            alt="The hiring process screen"
          ></img>
        </div>
      </div>
    </div>
  );
}

export function BentoSection({ className = '' }: { className?: string }) {
  return (
    <div className={`px-28 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <h2 className="font-mono font-semibold tracking-widest text-gray-500 uppercase text-xs/4 ">
          Hiring
        </h2>
        <p className="max-w-3xl mt-2 text-6xl font-medium tracking-tighter">
          Everything you need to build your team.
        </p>

        <div className="grid grid-cols-6 grid-rows-2 gap-4 mt-16">
          <BentoCard
            className="col-span-3 rounded-tl-[2rem]"
            eyebrow="Review"
            title=" A snapshot of all candidates"
            description="BarelyHR makes it easy to review and asses every candidate to figure
          out exactly where action needs to be made."
            graphic={
              <div className="absolute inset-0 h-80 bg-[size:960px_720px] bg-no-repeat  bg-[url(/images/bento-1.jpeg)] bg-[left_top]" />
            }
          />
          <BentoCard
            className="col-span-3 rounded-tr-[2rem]"
            eyebrow="Source"
            title="get the furthest reach"
            description="once your listing is created we will find the most popular job boards relevant to your listing."
            graphic={
              <div className="absolute inset-0 h-80 bg-[size:960px_720px] bg-no-repeat  bg-[url(/images/bento-2.jpeg)] bg-[left_top]" />
            }
          />
          <BentoCard
            className="col-span-2 rounded-bl-[2rem]"
            eyebrow="Remote friendly"
            title="can be done from everywhere"
            description="BarelyHR makes it easy to review and assess every candidate to figure
          out exactly where action needs to be made out exactly where action needs to be made."
            graphic={
              <div className="absolute inset-0 bg-[size:1280px_960px] bg-no-repeat  bg-[url(/images/bento-3.jpeg)] bg-[left_top]" />
            }
          />
          <BentoCard
            className="col-span-2"
            eyebrow="Build"
            title="create the most compelling job posts"
            description="BarelyHR uses artificial intelligence to help you create the most compelling job posts to sttract best people."
            graphic={
              <div className="absolute inset-0 bg-[size:1280px_960px] bg-no-repeat  bg-[url(/images/bento-4.jpeg)] bg-[left_top]" />
            }
          />
          <BentoCard
            className="col-span-2 rounded-br-[2rem]"
            eyebrow="Move faster"
            title="built for power users"
            description="move around quicker with shortcuts built for litterary every task that needs to be done."
            graphic={
              <div className="absolute inset-0 bg-[size:1920px_1440px] bg-no-repeat  bg-[url(/images/bento-5.jpeg)] bg-[left_top]" />
            }
          />
        </div>
      </div>
    </div>
  );
}

function BentoCard({
  className = '',
  eyebrow = '',
  title = '',
  description,
  graphic,
}: {
  className?: string;
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  graphic?: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col  relative rounded-lg overflow-hidden bg-white ring ring-black/5 shadow-sm ${className}`}
    >
      <div className="relative h-80 shrink-0">
        {graphic}
        <div className="absolute inset-0 to-transparent to-50% grow bg-gradient-to-t from-white" />
      </div>

      <div className="relative p-10 bg-white">
        <h3 className="font-mono font-semibold tracking-widest text-gray-500 uppercase text-xs/4">
          {eyebrow}
        </h3>
        <p className="mt-2 font-medium tracking-tight text-2xl/8 text-gray-950">
          {title}
        </p>
        <p className="mt-2 text-gray-600 text-sm/6">{description}</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <main>
      <div className="px-2 pt-2 ">
        <div className="insert-ring insert-ring-black bg-gradient-to-br from-[#FFF1BE]  via-[#EE87CB] to-[#B060FF]  rounded-[2rem] px-24 pt-16 pb-48">
          <nav className="flex items-center justify-between py-3">
            <div className="flex items-center gap-6">
              <span className="text-sm font-bold">LOGO</span>
              <a
                href="#"
                className="flex gap-1 items-center font-medium text-white rounded-full text-sm/6 bg-fuchsia-950/35 px-3 py-0.5 "
              >
                BarelyHR raises $100M series A from Tailwind Ventures
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-base font-medium text-gray-950">
                features
              </a>
              <a href="#" className="text-base font-medium text-gray-950">
                Pricing
              </a>
              <a href="#" className="text-base font-medium text-gray-950">
                Login
              </a>
            </div>
          </nav>
          <div className="mt-40">
            <h1 className="font-medium text-9xl text-gray-950">
              Hi<span className="tracking-tighter">r</span>e Sma
              <span className="tracking-wide">r</span>ter.
            </h1>
            <p className="max-w-lg mt-6 font-medium text-2xl/8 text-gray-950/75">
              BarelyHR helps small and large companies find the right person for
              the right job.
            </p>
            <div className="flex gap-6 mt-12">
              <a
                href="#"
                className="px-4 py-3 text-white rounded-full shadow-md bg-gray-950 text-base/4"
              >
                Get started
              </a>
              <a
                href="#"
                className="px-4 py-3 rounded-full shadow-md inset-shadow-[0_0_2px_1px_#ffffff4d] ring ring-[#D15052]/15 bg-white/15 text-gray-950 text-base/4"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function Testimonials() {
  return (
    <div className="py-32 ">
      <div className="px-28">
        <h2 className="font-mono font-semibold tracking-widest text-gray-500 uppercase text-xs/4 ">
          What everyone is saying?
        </h2>
        <p className="mt-2 text-6xl font-medium tracking-tighter">
          Trusted by professionals
        </p>
      </div>
      <div className="flex gap-8 mt-16 overflow-x-auto px-28 scrollbar-hidden">
        <TestimonialCard
          img="/images/hr-1.jpg"
          name=" Emily Rodriguez"
          title=" Senior HR Manager"
        >
          BarelyHs advanced features have widened our candidate pool and
          improved our hiring decisions. Its a game-changer!
        </TestimonialCard>

        <TestimonialCard
          img="/images/hr-2.jpg"
          title="Recruitment Specialist"
          name="Jessica Parker"
        >
          BarelyHR has streamlined our candidate tracking and improved both the
          quality and speed of our hires. Highly recommend!
        </TestimonialCard>

        <TestimonialCard
          img="/images/hr-3.jpg"
          title="HR Director"
          name="Michelle Williams"
        >
          Thanks to BarelyHR we are now finding new candidates that we would
          have found with our previous methods
        </TestimonialCard>

        <TestimonialCard
          img="/images/hr-4.jpg"
          title="Talent Acquisition Manager"
          name="Sarah Thompson"
        >
          Thanks to BarelyHR, were now attracting top talent we couldn’t find
          before. The platform has transformed our hiring
        </TestimonialCard>
      </div>

      <div className="flex justify-between mt-16 px-28">
        <div>
          <p className="max-w-sm text-gray-600 text-sm/6">
            Join professionals who trust barelyHR for hiring and on boading new
            employees
          </p>
          <div className="mt-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-medium text-pink-600 text-sm/6"
            >
              Get started
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            aria-label="previus Testimonial"
            className="inline-flex items-center justify-center rounded-full shadow-sm size-12 ring ring-gray-950/10"
          >
            <svg viewBox="0 0 20 20" className="size-5 fill-gray-950">
              <path d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" />
            </svg>
          </button>
          <button
            aria-label="next Testimonial"
            className="inline-flex items-center justify-center rounded-full size-12 ring ring-gray-950/10"
          >
            <svg viewBox="0 0 20 20" className="size-5 fill-gray-950">
              <path d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export function TestimonialCard({
  img,
  children,
  name,
  title,
}: {
  img: string;
  children: React.ReactNode;
  name: string;
  title: string;
}) {
  return (
    <div className="relative shrink-0 w-96 aspect-[3/4]  flex flex-col justify-end p-10 rounded-3xl overflow-hidden">
      {/* <div className="absolute inset-0 top-6 bg-gray-950" /> */}

      <img
        className="absolute inset-x-0 top-0 object-cover w-full aspect-square"
        src={img}
        alt="hr image"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black from-25% inset-ring inset-ring-gray-950/10 rounded-3xl
        "
      />

      <figure className="relative">
        <blockquote>
          <p className="relative before:absolute before:-translate-x-full text-white text-xl/7 before:content-['``'] _after:absolute _after:content-['``']">
            {children}&quot;
          </p>
        </blockquote>
        <figcaption className="pt-6 mt-6 border-t border-white/20 ">
          <p className="font-medium text-white text-sm/6">{name}</p>
          <p className="font-medium text-sm/6 bg-clip-text bg-gradient-to-r from-[#FFF1BE] from-[28%] via-[#EE87CB] via-[70%] to-[#B060FF] text-transparent">
            {title}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
