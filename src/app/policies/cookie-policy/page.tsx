import {
  ListItemHeading,
  OrderedList,
  StyledLink,
  TextBold,
  UnorderedList,
} from "../_components";

const CookiePolicyPage: React.FC = () => {
  const websiteName = "Code2Career AB";

  return (
    <div className="bg-gray-100 min-h-screen p-8 text-gray-700">
      <main className="max-w-2xl mx-auto p-8 bg-white rounded shadow-sm">
        <h1 className="text-xl text-teal-800 font-semibold tracking-tight my-8">
          ÇEREZ (COOKIE) POLİTİKASI
        </h1>
        <TextBold>Son Güncellenme Tarihi:</TextBold>
        <span> 24/01/2025</span>

        <OrderedList>
          <li>
            <ListItemHeading>Giriş</ListItemHeading>
            <p>
              {websiteName} (“Site” veya “Biz”) olarak, kullanıcı deneyimini
              geliştirmek, site performansını analiz etmek ve belirli
              işlevsellikleri sağlamak amacıyla çerezler (cookies)
              kullanmaktayız. Bu Çerez Politikası, siteyi ziyaret eden veya
              hizmetlerimizi kullanan tüm gerçek kişi ziyaretçilere (“Kullanıcı”
              veya “Siz”) uygulanır.
            </p>
            <p>
              Bu politika; 6698 sayılı Kişisel Verilerin Korunması Kanunu
              (“KVKK”) ve Avrupa Birliği Genel Veri Koruma Tüzüğü (“GDPR”) başta
              olmak üzere ilgili mevzuata uygun olarak hazırlanmıştır.
            </p>
          </li>
          <li>
            <ListItemHeading>Çerez (Cookie) Nedir?</ListItemHeading>
            <p>
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız
              tarafından cihazınıza (bilgisayar, akıllı telefon, tablet vb.)
              kaydedilen küçük metin dosyalarıdır. Çerezler, kullanıcının site
              içerisindeki tercihlerini (dil, oturum bilgisi, vb.) hatırlamak
              veya site kullanımına ilişkin istatistiki veriler toplamak
              amacıyla kullanılır.
            </p>
          </li>
          <li>
            <ListItemHeading>
              Hangi Tür Çerezleri Kullanıyoruz ve Nasıl Kullanıyoruz?
            </ListItemHeading>
            <OrderedList>
              <li>
                <ListItemHeading>Zorunlu (Temel) Çerezler</ListItemHeading>
                <UnorderedList>
                  <ListItemHeading>
                    Oturum Çerezleri (Session Cookies)
                  </ListItemHeading>
                  <li>
                    <TextBold>Amaç:</TextBold>
                    Oturum çerezleri, kullanıcıların site içinde gezinmesini
                    sağlamak, form gönderiminden sonra testi yapmasına olanak
                    tanımak, kullanıcı bilgilerini (örneğin e-posta ve ad)
                    oturum süresince tutmak ve testin ilerleme durumunu saklamak
                    için kullanılır. Bu sayede sayfayı yenilediğinizde veya
                    sekmeyi kapatıp tekrar açtığınızda test durumunuzu
                    kaybetmemiş olursunuz.
                  </li>
                  <li>
                    <TextBold>Örnek Kullanım:</TextBold>Form gönderildiğinde
                    kullanıcıya bir oturum çerezi atanır ve test boyunca bu
                    çerez kullanılır.
                  </li>
                  <li>
                    <TextBold>Dayanak:</TextBold>Bu çerezler, web sitesinin
                    doğru şekilde çalışabilmesi ve talep edilen hizmetin
                    sunulabilmesi için gereklidir. KVKK ve GDPR kapsamında bu
                    çerezlerin kullanımı meşru menfaat veya sözleşmenin ifası
                    kapsamında değerlendirilebilir.
                  </li>
                </UnorderedList>
              </li>
              <li>
                <ListItemHeading>Analiz/Performans Çerezleri</ListItemHeading>
                <UnorderedList>
                  <ListItemHeading>
                    İstatistik ve Analiz Çerezleri
                  </ListItemHeading>
                  <li>
                    <TextBold>Amaç:</TextBold> Ziyaretçi sayısı, sayfa
                    görüntülemeleri, sitede geçirilen süre gibi verileri
                    toplayarak site performansını ve kullanıcı deneyimini
                    iyileştirmek. Örneğin Google Analytics veya benzer analiz
                    araçları aracılığıyla kullanıcı davranışlarını anlamak ve
                    hizmet kalitesini artırmak.
                  </li>
                  <li>
                    <TextBold>Dayanak:</TextBold> Analiz çerezlerinin kullanımı
                    için çoğunlukla açık rıza gerekmektedir. Bu çerezleri devre
                    dışı bırakmanız, sitenin temel işlevlerini etkilemez ancak
                    bize sağladığı istatistiki veriler olmayacağından kullanıcı
                    deneyimini iyileştirmemiz zorlaşabilir.
                  </li>
                </UnorderedList>
              </li>
              <li>
                <ListItemHeading>İşlevsellik Çerezleri</ListItemHeading>
                <UnorderedList>
                  <li>
                    <TextBold>Amaç:</TextBold> Bu çerezler, dil tercihi, site
                    teması veya kullanıcı adı gibi kişiselleştirilmiş ayarları
                    saklayarak site deneyimini kolaylaştırır.
                  </li>
                  <li>
                    <TextBold>Dayanak:</TextBold> Kullanıcı deneyimini
                    geliştirme ve kişiselleştirme amacıyla meşru menfaat veya
                    açık rıza çerçevesinde kullanılabilir.
                  </li>
                </UnorderedList>
              </li>
              <li>
                <ListItemHeading>Hedefleme/Reklam Çerezleri</ListItemHeading>
                <UnorderedList>
                  <li>
                    <TextBold>Amaç:</TextBold> Şu anda aktif hedefleme/reklam
                    çerezleri kullanıyorsanız, bu bölümde belirtmelisiniz. Bu
                    çerezler, kullanıcıların ilgi alanlarına yönelik reklamlar
                    gösterebilmek veya reklam kampanyalarının etkinliğini ölçmek
                    amacıyla kullanılabilir.
                  </li>
                  <li>
                    <TextBold>Dayanak:</TextBold> Genellikle kullanıcının açık
                    rızası gereklidir.
                  </li>
                </UnorderedList>
              </li>
            </OrderedList>
          </li>
          <li>
            <ListItemHeading>Çerezlerin Saklanma Süresi</ListItemHeading>
            <p>
              Çerezlerin saklanma süreleri türüne göre değişiklik gösterebilir:
            </p>
            <UnorderedList>
              <li>
                <TextBold>Oturum Çerezleri:</TextBold> Tarayıcınızı kapatana
                kadar geçerli olup, oturum sonlandığında otomatik olarak
                silinir.
              </li>
              <li>
                <TextBold>Kalıcı Çerezler:</TextBold> Kullanıcı tercihlerini
                hatırlamak veya analiz amaçları için tarayıcı üzerinde belirli
                bir süre saklanır. Bu süre, ilgili çerezin amacına bağlı olarak
                değişebilir ancak yasal gereklilikler ve veri minimizasyonu
                ilkesi gereği en kısa sürede tutulur.
              </li>
            </UnorderedList>
          </li>
          <li>
            <ListItemHeading>
              Çerezleri Nasıl Kontrol Edebilirsiniz?
            </ListItemHeading>
            <p>
              Kullanıcılar, tarayıcı ayarları üzerinden çerezlerin kullanımını
              kısıtlayabilir, mevcut çerezleri silebilir veya engelleyebilir.
              Ancak bazı çerezlerin engellenmesi durumunda sitenin bazı
              özelliklerinden tam olarak yararlanamayabilirsiniz.
            </p>
            <p>
              Tarayıcı üzerinden çerez yönetimi hakkında bilgi almak için
              aşağıdaki bağlantıları inceleyebilirsiniz:
            </p>
            <UnorderedList>
              <li>Chrome</li>
              <li>Firefox</li>
              <li>Safari</li>
              <li>Edge</li>
            </UnorderedList>
          </li>
          <li>
            <ListItemHeading>Kişisel Verilerin Korunması</ListItemHeading>
            <p>
              Çerezler aracılığıyla toplanan veriler kişisel veri niteliğinde
              olabilir. Bu durumda KVKK ve GDPR kapsamında gerekli teknik ve
              idari tedbirleri alıyoruz. Kişisel verilerin işlenmesine ilişkin
              detaylı bilgiye{" "}
              <StyledLink href={"/policies/privacy-policy"}>
                Gizlilik Politikamız ve KVKK Aydınlatma Metnimiz
              </StyledLink>{" "}
              üzerinden ulaşabilirsiniz.
            </p>
          </li>
          <li>
            <TextBold>Üçüncü Taraf Çerezleri:</TextBold>
            <p>
              Sitemizde, bizim kontrolümüzde olmayan üçüncü taraf çerezler
              (analiz ve reklam sağlayıcılar vb.) kullanılabilir. Bu çerezler
              hakkında daha fazla bilgi edinmek için ilgili üçüncü tarafların
              çerez veya gizlilik politikalarını incelemeniz önerilir.
            </p>
          </li>
          <li>
            <ListItemHeading>Politika Değişiklikleri</ListItemHeading>
            <p>
              Bu Çerez Politikası zaman zaman güncellenebilir. Güncellemeler,
              sitemizde yayınlandığı andan itibaren geçerli olur. Bu nedenle
              politikamızı düzenli olarak gözden geçirmeniz önerilir.
            </p>
          </li>
          <li>
            <ListItemHeading>İletişim Bilgileri</ListItemHeading>
            <p>
              Çerez kullanımına ilişkin sorularınız veya talebiniz olması
              durumunda aşağıdaki iletişim kanalları üzerinden bize
              ulaşabilirsiniz:
            </p>
            <UnorderedList>
              <li>
                <TextBold>E-posta:</TextBold>{" "}
                <StyledLink href="mailto:hello@code2career.eu">
                  hello@code2career.eu
                </StyledLink>
              </li>
            </UnorderedList>
          </li>
        </OrderedList>
      </main>
    </div>
  );
};
export default CookiePolicyPage;
