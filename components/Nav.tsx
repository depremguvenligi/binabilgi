import Image from "next/image";
import Link from "next/link";

const Nav = () => (
  <header aria-label="Site Header" className="shadow-sm">
    <div className="max-w-screen-xl p-4 mx-auto">
      <div className="flex items-center justify-between gap-4 lg:gap-10">
        <div className="flex lg:w-0 lg:flex-1">
          <Link href="#">
            <span className="sr-only">Logo</span>
            <Image src="/logo-sideway.svg" alt="Bina Bilgi Logo" width={192} height={48} />
          </Link>
        </div>
        
        <nav
          aria-label="Site Nav"
          className="hidden gap-8 text-sm font-medium md:flex"
        >
          <a className="text-gray-500" href="">
            hakkımızda
          </a>
          <a className="text-gray-500" href="">
            iletişim
          </a>
        </nav>

        <div className="items-center justify-end flex-1 hidden gap-4 sm:flex">
          <a
            className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
            href=""
          >
            Giriş yap
          </a>

          <a
            className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
            href=""
          >
            Üye ol
          </a>
        </div>

        <div className="lg:hidden">
          <button
            className="p-2 text-gray-600 bg-gray-100 rounded-lg"
            type="button"
          >
            <span className="sr-only">Open menu</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Nav;
