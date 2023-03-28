const USPGrid = () => (
  <section className="text-black bg-primary-300">
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
          Binabilgi.com ne hedefliyor?
        </h2>

        <p className="mt-4 text-secondary">
          Bilginin paylaşılması yoluyla güvenli kentleşme yolunda topluluk
          bilincinin yükselmesini hedefliyoruz. Olası bir depreme karşı,
          yapıların deprem güvenliği durumlarına ilişkin verilerin kamu
          kurumları tarafından şeffaf olarak paylaşılmasını, denetimlerin
          yapılmasını ve güvenli, yaşamaya elverişli bir kente dair
          politikaların uygulamaya geçirilmesini daha güçlü bir sesle ve daha
          kalabalık talep etmeyi amaçlıyoruz. Bu bağlamda;
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        <div className="flex items-start gap-4">
          <div>
            <p className="mt-4 text-secondary">
              Kamu kurumlarınca üretilen farklı ölçek ve nitelikte verilerin tek
              bir platformda bir araya getirilmesi
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div>
            <p className="mt-4 text-secondary">
              Söz konusu verilerin, bir arada, anlaşılır bir şekilde
              haritalandırılması
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div>
            <p className="mt-4 text-secondary">
              İBB bina tespit analizi sonuçları ile Bakanlık tarafından
              yetkilendirilen Yapı Denetim Şirketlerince yapılan yapı tespit
              analizi sonuçlarının derlenmesi ve ulaşılabilir kılınması
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div>
            <p className="mt-4 text-secondary">
              Harita üzerinde her yapı bakımından, kamu kurumlarınca üretilen ve
              özel kişilerce paylaşılan verileri içeren bir künye oluşturulması
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div>
            <p className="mt-4 text-secondary">
              Söz konusu verilerin güvenilirlik/ teyit edilebilirlik
              kriterlerine göre sınıflandırılması, buna ilişkin bir
              standardizasyon geliştirilmesi ve künyedeki bilgilerin bu hususlar
              belirtilerek paylaşılması
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default USPGrid;
