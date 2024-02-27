import { PageProps } from "@/types";
import { Link, Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Welcome({ auth }: PageProps) {
  return (
    <>
      <Head title="Lentroph" />

      <section className="h-screen overflow-hidden">
        <div className="relative z-30">
          <div className="absolute z-10 ml-20 mt-12">
            <ApplicationLogo className="h-58" />

            <header className="mt-52">
              <h1 className="text-5xl font-bold leading-tight text-zinc-700">
                Connecting organizations
                <br />
                for a better tomorrow
              </h1>

              <p className="mt-6 max-w-2xl text-xl text-zinc-700">
                Lentroph&apos;s innovative partnership technology is bringing
                the latest collaborative innovations to show around the world.
              </p>

              <button
                type="button"
                className="mt-8 rounded bg-gradient-to-tr from-purple-500 to-purple-600 px-8 py-4 font-bold text-white"
              >
                Get Started
              </button>
            </header>
          </div>

          <nav className="absolute right-0 z-10 mt-12 mr-20 flex items-center space-x-16 rounded-full bg-white py-2 pl-12 pr-2 font-medium text-secondary-200">
            {auth.user ? (
              <Link href={route("dashboard")}>Dashboard</Link>
            ) : (
              <>
                <Link href={route("login")}>Log in</Link>

                <Link href={route("register")}>Register</Link>
              </>
            )}

            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-purple-500 to-purple-600 px-8 py-4 font-bold text-white"
            >
              Contact Us
            </button>
          </nav>

          <div className="absolute -left-32 h-screen w-[45%] scale-150 rounded-tr-full rounded-br-full bg-white" />
        </div>

        <div className="absolute z-20 h-full w-full bg-[#F586FF] opacity-30" />

        <img
          src="/images/homepage.jpg"
          alt="children"
          className="object-cover"
        />
      </section>
    </>
  );
}
