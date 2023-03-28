const ContentLinkGridAndCTA = () => (
  <section className="text-secondary bg-white-900">
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
          Binabilgi.com ne yapar? Nasıl işliyor?
        </h2>

        <p className="mt-4 text-secondary">
          Binabilgi.com kişilerin deprem güvenliğine ilişkin bilgiye
          ulaşmalarını sağlıyor. Açık kaynak kodlu mekansal veri tabanı olarak,
          farklı kaynaklardan derlenen, farklı nitelik ve ölçeklerde mekansal
          verileri haritalandırıp, anlaşılır ve takip edilebilir halde
          kullanıcıya etkin bir biçimde sunuyoruz. Web App ve app olarak
          ulaşılabilen binabilgi.com;
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
        <a
          className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-primary hover:shadow-primary"
          href="/services/digital-campaigns"
        >
          <svg
            xmlns="https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg"
            className="w-10 h-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>

          <h2 className="mt-4 text-xl font-bold text-secondary">
            Risk Haritası
          </h2>

          <p className="mt-1 text-sm text-secondary">
            İBB ve Kandilli Rasathanesi’nin Olası Deprem Kayıp Tahminlerinin
            Güncellenmesi Raporu (2020) sonuçlarına göre yapının bulunduğu
            mahallenin risk durumu bilgisi
          </p>
        </a>

        <a
          className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-primary hover:shadow-primary"
          href="/services/digital-campaigns"
        >
          <svg
            xmlns="https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg"
            className="w-10 h-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>

          <h2 className="mt-4 text-xl font-bold text-secondary">
            Zemin Bilgisi
          </h2>

          <p className="mt-1 text-sm text-secondary">
            İBB Kent Jeolojisi Projesi Jeolojik Etüt Haritası (2011) uyarınca
            yapının bulunduğu alanın zemin bilgisi
          </p>
        </a>

        <a
          className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-primary hover:shadow-primary"
          href="/services/digital-campaigns"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>

          <h2 className="mt-4 text-xl font-bold text-secondary">
            Vatandaş Veri Girişi
          </h2>

          <p className="mt-1 text-sm text-secondary">
            Yurttaşlar tarafından girilecek; İBB Bina Tespit Analizi Sonuçları,
            Bakanlıkça yetkilendirilmiş yapı denetim şirketlerince yapılan yapı
            denetim rapor sonuçları, Ruhsat tarihi, müteahhit şirket, mimari
            proje şirketi, zemin etüdü şirketi, denetim şirketi bilgileri,
            Yapılara projeye ve ruhsata aykırı müdehalelere ilişkin ihbar
            niteliğinde bilgileri ve bunlara ilişkin görsel malzeme
          </p>
        </a>

        <a
          className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-primary hover:shadow-primary"
          href="/services/digital-campaigns"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>

          <h2 className="mt-4 text-xl font-bold text-secondary">
            Fay Bilgileri
          </h2>

          <p className="mt-1 text-sm text-secondary">
            AFAD Güncel Fay Hatları verilerine göre yapının bulunduğu alanın fay
            hatlarına uzaklığı bilgisi
          </p>
        </a>

        <a
          className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-primary hover:shadow-primary"
          href="/services/digital-campaigns"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>

          <h2 className="mt-4 text-xl font-bold text-secondary">
            Yapı sertifikaları
          </h2>

          <p className="mt-1 text-sm text-secondary">
            Yapı standart ve sertifikalarına ilişkin bilgiler
          </p>
        </a>
      </div>
    </div>
  </section>
);

export default ContentLinkGridAndCTA;
