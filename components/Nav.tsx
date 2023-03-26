const Nav = () => (
  <header aria-label="Site Header" className="shadow-sm">
    <div className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto">
      <div className="flex flex-1 w-0 lg:hidden">
        <button
          className="p-2 text-gray-600 bg-gray-100 rounded-full"
          type="button"
        >
          <span className="sr-only">Account</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-4">
        <a href="#">
          <span className="sr-only">Logo</span>
          <span className="w-20 h-10 bg-gray-200 rounded-lg"></span>
        </a>

        <form className="hidden mb-0 lg:flex">
          <div className="relative">
            <input
              className="h-10 pr-10 text-sm placeholder-gray-300 border-gray-200 rounded-lg focus:z-10"
              placeholder="Search..."
              type="text"
            />

            <button
              type="submit"
              className="absolute inset-y-0 right-0 p-2 text-gray-600 rounded-r-lg"
            >
              <span className="sr-only">Submit Search</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-end flex-1 w-0 lg:hidden">
        <button
          className="p-2 text-gray-500 bg-gray-100 rounded-full"
          type="button"
        >
          <span className="sr-only">Menu</span>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <nav
        aria-label="Site Nav"
        className="items-center justify-center hidden gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
      >
        <a className="text-gray-900" href="">
          About
        </a>
        <a className="text-gray-900" href="">
          Blog
        </a>
        <a className="text-gray-900" href="">
          Projects
        </a>
        <a className="text-gray-900" href="">
          Contact
        </a>
      </nav>

      <div className="items-center hidden gap-4 lg:flex">
        <a
          href="#"
          className="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg"
        >
          Log in
        </a>

        <a
          href="#"
          className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
        >
          Sign up
        </a>
      </div>
    </div>

    <div className="border-t border-gray-100 lg:hidden">
      <nav className="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium">
        <a className="flex-shrink-0 pl-4 text-gray-900" href="">
          About
        </a>
        <a className="flex-shrink-0 pl-4 text-gray-900" href="">
          Blog
        </a>
        <a className="flex-shrink-0 pl-4 text-gray-900" href="">
          Projects
        </a>
        <a className="flex-shrink-0 pl-4 text-gray-900" href="">
          Contact
        </a>
      </nav>
    </div>
  </header>
);

export default Nav;
