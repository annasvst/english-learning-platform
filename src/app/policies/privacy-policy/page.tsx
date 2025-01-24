import { ListItemHeading, OrderedList, StyledLink, TextBold, UnorderedList } from "../_components";

const PrivacyPolicyPage = () => {
  const companyName = "Code2Career AB";
  return (
    <div className="bg-gray-100 min-h-screen p-8 text-gray-700">
      <main className="max-w-2xl mx-auto p-8 bg-white rounded shadow-sm">
        <h1 className="text-xl text-teal-800 font-semibold tracking-tight my-8">
          GİZLİLİK POLİTİKASI VE KİŞİSEL VERİLERİN KORUNMASI AYDINLATMA METNİ
        </h1>
        <TextBold>Son Güncellenme Tarihi:</TextBold>
        <span> 24/01/2025</span>
        <OrderedList>
          <li>
            <ListItemHeading>Amaç ve Kapsam</ListItemHeading>
            <p>
              Bu Gizlilik Politikası ve Kişisel Verilerin Korunması Aydınlatma
              Metni (“Politika”), {companyName} (“Şirket” veya “Biz”) tarafından
              sunulan hizmetlerden yararlanan kullanıcıların (Kullanıcı) kişisel
              verilerinin 6698 sayılı Kişisel Verilerin Korunması Kanunu
              (“KVKK”) ve Genel Veri Koruma Tüzüğü (“GDPR”) kapsamındaki işlenme
              şartlarını açıklamaktadır. Bu Politika, kullanıcının web sitesi
              veya mobil uygulama aracılığıyla topladığımız kişisel verilerine
              ilişkin hak ve yükümlülükleri düzenler.
            </p>
          </li>
          <li>
            <ListItemHeading>Topladığımız Kişisel Veriler</ListItemHeading>
            <p>Aşağıdaki kişisel verileri toplayabilir ve işleyebiliriz:</p>
            <UnorderedList>
              <li>
                <TextBold>Ad ve Soyad:</TextBold> Kullanıcının kimliğini belirlemek,
                iletişim kurmak ve kişiselleştirilmiş hizmet sunmak için.
              </li>
              <li>
                <TextBold>E-posta Adresi:</TextBold> Pazarlama kampanyaları, duyurular
                ve bülten gönderimi gibi iletişim faaliyetleri için.
              </li>
              <li>
                <TextBold>Doğum Yılı:</TextBold> Yaşa bağlı hedefli reklam veya
                kampanyalar düzenlemek, istatistik ve analiz yapmak için.
              </li>
            </UnorderedList>
            <p>
              Ek olarak, kullanıcıların IP adresi, cihaz bilgisi, tarayıcı
              bilgisi veya çerezler üzerinden elde edilen veriler işlenebilir
              (bkz. madde 8).
            </p>
          </li>
          <li>
            <ListItemHeading>
              Kişisel Verilerin İşlenme Amaçları
            </ListItemHeading>
            <p>Topladığımız kişisel verileri şu amaçlarla işliyoruz:</p>
            <ol>
              <li>
                <TextBold>Hizmet Sunumu:</TextBold> Web sitemiz veya uygulamamız
                üzerinden sunulan İngilizce test platformu hizmetini sağlamak ve
                kullanıcı deneyimini geliştirmek.
              </li>
              <li>
                <TextBold>Pazarlama ve Reklam:</TextBold> Yeni ürün ve hizmetler
                hakkında bilgilendirmede bulunmak, promosyonlar ile reklam
                hedeflemesi yapmak.
              </li>
              <li>
                <TextBold>İletişim:</TextBold> Kullanıcılara duyurular, kampanyalar,
                etkinlikler ve önemli güncellemeler hakkında e-posta vb.
                kanallar üzerinden bilgilendirme yapmak.
              </li>
              <li>
                <TextBold>Analiz ve İyileştirme:</TextBold> Kullanıcı davranışını analiz
                etmek, platform performansını iyileştirmek ve istatistiksel veri
                üretmek.
              </li>
            </ol>
          </li>
          <li>
            <ListItemHeading>
              Kişisel Verilerin İşlenmesinin Hukuki Dayanakları
            </ListItemHeading>
            <p>
              Kişisel verileriniz, KVKK m.5 ve m.6 ve GDPR Madde 6 çerçevesinde
              aşağıdaki hukuki dayanaklara göre işlenebilir:
            </p>
            <UnorderedList>
              <li>
                <TextBold>Açık Rıza:</TextBold> Pazarlama, reklam ve kişiselleştirme
                amacıyla; elektronik ticari ileti gönderilmesi durumunda.
              </li>
              <li>
                <TextBold>Sözleşmenin İfası:</TextBold> Veriler, platformun sözleşme ve
                kullanım şartlarına uygun şekilde işletilmesi, test
                hizmetlerinin sunulması için gerekli olduğunda.
              </li>
              <li>
                <TextBold>Meşru Menfaat:</TextBold> Hizmetlerimizi geliştirmek, hile
                veya kötüye kullanımı engellemek gibi durumlarda meşru
                menfaatlerimiz kapsamında.
              </li>
            </UnorderedList>
          </li>
          <li>
            <ListItemHeading>Kişisel Verilerin Saklanma Süresi</ListItemHeading>
            <p>
              Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca
              saklanır. Saklama sürelerinin belirlenmesinde ilgili yasal
              düzenlemeler ve iyi uygulama rehberleri dikkate alınır. Saklama
              süresi dolduğunda veya işleme amacı ortadan kalktığında,
              verileriniz güvenli yöntemlerle silinir, yok edilir veya anonim
              hale getirilir.
            </p>
          </li>
          <li>
            <ListItemHeading>Kişisel Verilerin Aktarılması</ListItemHeading>
            <p>
              Kişisel verileriniz, aşağıdaki durumlarda üçüncü taraflara
              aktarılabilir:
            </p>
            <OrderedList>
              <li>
                <TextBold>Hizmet Sağlayıcılar:</TextBold> E-posta gönderim servisleri,
                reklam iş ortakları ve analitik hizmet sağlayıcıları (örneğin
                Google Analytics gibi) ile.
              </li>
              <li>
                <TextBold>Kanunen Yetkili Kurumlar:</TextBold> Mahkeme kararı, kolluk
                kuvvetleri talebi veya ilgili mevzuat gereğince zorunlu
                hallerde.
              </li>
            </OrderedList>
            <p>
              Veri aktarımı, KVKK ve GDPR hükümlerine uygun olarak ve gerekli
              güvenlik önlemleri alınarak gerçekleştirilir.
            </p>
          </li>
          <li>
            <ListItemHeading>Veri Sahibi Olarak Haklarınız</ListItemHeading>
            <p>
              KVKK m.11 ve GDPR Madde 12-23 çerçevesinde aşağıdaki haklara
              sahipsiniz:
            </p>
            <OrderedList>
              <li>
                Kişisel verilerinizin işlenip işlenmediğini öğrenme ve
                işlenmişse buna ilişkin bilgi talep etme.
              </li>
              <li>
                İşleme amacını ve amacına uygun kullanılıp kullanılmadığını
                öğrenme.
              </li>
              <li>
                Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı
                üçüncü kişileri öğrenme.
              </li>
              <li>Eksik veya yanlış işlenmiş ise düzeltilmesini talep etme.</li>
              <li>
                KVKK ve GDPR’da öngörülen şartlar çerçevesinde silinmesini veya
                yok edilmesini talep etme.
              </li>
              <li>
                Düzeltme, silme veya yok edilme taleplerinin verilerin
                aktarıldığı üçüncü kişilere bildirilmesini isteme.
              </li>
              <li>
                İşlenen verilerin otomatik sistemler vasıtasıyla analiz edilmesi
                suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme.
              </li>
              <li>
                Kişisel verilerin kanuna aykırı işlenmesi sebebiyle zarara
                uğramanız hâlinde zararın giderilmesini talep etme.
              </li>
            </OrderedList>
            <p>
              Haklarınızı kullanmak için{" "}
              <StyledLink href="mailto:hello@code2career.eu">
                hello@code2career.eu
              </StyledLink>{" "}
              adresine yazılı talepte bulunabilirsiniz.
            </p>
          </li>
          <li>
            <ListItemHeading>Çerez (Cookie) Kullanımı</ListItemHeading>
            <p>
              Web sitemizde kullanıcı deneyimini geliştirmek, performans
              analizleri yapmak ve ilgi alanlarına yönelik içerik sunmak
              amacıyla çerezler kullanılmaktadır. Çerez politikamız hakkında
              detaylı bilgi için{" "}
              <StyledLink href="/policies/cookie-policy">
                Çerez Politikası
              </StyledLink>{" "}
              sayfamıza bakabilirsiniz.
            </p>
          </li>
          <li>
            <ListItemHeading>Güvenlik Önlemleri</ListItemHeading>
            <p>
              Kişisel verilerin güvenliğini sağlamak için uygun teknik ve idari
              önlemleri (şifreleme, erişim kısıtlaması, güvenlik duvarı vb.)
              alıyoruz. Yetkisiz erişim, kayıp, tahribat veya ifşa risklerini en
              aza indirmeyi hedefleyen güvenlik protokolleri uygulanmaktadır.
            </p>
          </li>
          <li>
            <ListItemHeading>İletişim Bilgileri</ListItemHeading>
            <p>
              Her türlü soru, görüş veya talebiniz için aşağıdaki iletişim
              kanallarını kullanabilirsiniz:
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
          <li>
            <ListItemHeading>Politika Değişiklikleri</ListItemHeading>
            <p>
              Bu Politika, gerekli görüldüğünde güncellenebilir. Güncellemeler
              web sitemizde yayınlanır ve yayınlandığı tarihte yürürlüğe girer.
              Bu nedenle zaman zaman Politika’yı gözden geçirmeniz önerilir.
            </p>
          </li>
        </OrderedList>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
