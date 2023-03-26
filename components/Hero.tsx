import Image from "next/image";
import Link from "next/link";
const Hero = () => (
  <section className="relative bg-[url(https://cdn.discordapp.com/attachments/731164914751635510/1089614340254093414/Ekran_Resmi_2023-03-06_22.50.04-2.jpg)] bg-cover bg-center bg-no-repeat">
    <div className="absolute inset-0 bg-white/85 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

    <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
      <div className="flex flex-col items-start">
        <Link href="#">
          <span className="sr-only">Logo</span>
          <Image
            src="/logo.svg"
            alt="Bina Bilgi Logo"
            width={492}
            height={248}
          />
        </Link>
        <div className="max-w-xl text-center sm:text-left">
          <p className="max-w-lg mt-4 sm:text-xl sm:leading-relaxed">
            Kişilerin olası bir depreme karşı yapıların deprem güvenliği
            durumlarına ilişkin ihtiyaç duyulan bilgiye ulaşmalarını sağlayan
            açık kaynak kodlu, harita bazlı bir aplikasyondur.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <a
              href="#"
              className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Giriş Yap
            </a>
            <a
              href="#"
              className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
