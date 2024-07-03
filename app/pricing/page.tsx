export default function Pricing() {
  return (
    <div className="py-20">
      <NavBar />
      <div className="px-28 mt-28">
        <div className="mx-auto max-w-7xl">
          <div>
            <h1 className="text-6xl font-medium text-gray-950">
              Pricing that grows with your team size.
            </h1>
            <p className="text-2xl/8 max-w-4xl font-medium text-gray-950/60 mt-5">
              Companies all over the world have hired millions of candidates
              with BarelyHR. Create your next listing and start finding the best
              employees today.
            </p>
          </div>
        </div>
      </div>

      <div className="px-28 py-24 relative">
        <div className="absolute inset-x-2 bottom-0 top-48 insert-ring insert-ring-black bg-gradient-to-br from-[#FFF1BE]  via-[#EE87CB] to-[#B060FF]  rounded-[2rem] px-24 pt-16 pb-48" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flow-root">
            <div className="-m-2 grid grid-cols-3 gap-4">
              <PricingCard />
              <PricingCard />
              <PricingCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingCard() {
  return (
    <div className="rounded-[2rem] p-2 ring shadow-xl inset-shadow-[0_0_2px_1px_#ffffff4d] shadow-red-300/30 ring-red-900/10">
      <div className="p-10 pb-9 bg-white ring ring-black/5 rounded-3xl">
        <h2 className="text-xs/5 font-mono font-semibold text-gray-500 uppercase tracking-widest">
          Starter
        </h2>
        <p className="mt-2 text-sm/6 text-gray-950/75">
          Everything you need to start hiring.
        </p>
        <div className="mt-8 flex gap-4 items-center">
          <div className="text-5xl font-medium text-gray-950/75 ">$99</div>
          <div className="text-sm/5 ">
            <p>USD</p>
            <p>per month</p>
          </div>
        </div>
        <div className="mt-8">
          <a
            href="#"
            className="py-3 px-4 rounded-full bg-gray-950 text-base/4 font-medium text-white inline-flex shadow-md"
          >
            start a free trial
          </a>
        </div>
        <div className="mt-8">
          <h3 className="text-sm/6 font-medium text-gray-950">
            start recruiting
          </h3>
          <ul className="mt-3 text-sm/6 text-gray-950/75 space-y-3">
            <li>up to 5 active listings.</li>
            <li>up to 8 boards per job.</li>
            <li>Share jobs on select job boards.</li>
            <li>Employee onboarding.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="flex items-center justify-between py-3 px-28">
      <div className="flex items-center gap-6">
        <span className="text-sm font-bold">LOGO</span>
        {/* <a
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
        </a>*/}
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
  );
}
