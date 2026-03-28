import Link from "next/link";
import { notFound } from "next/navigation";

type Product = {
  slug: string;
  category: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  imageClass: string;
  whatsappHref: string;
  badges: string[];
  features: string[];
  usage: string[];
};

const products: Product[] = [
  {
    slug: "500-ml-naturel-sizma",
    category: "Zeytinyağı",
    title: "500 ml Natürel Sızma",
    shortDescription:
      "Günlük kullanım ve şık sunum için ideal, dengeli aromaya sahip premium seri.",
    fullDescription:
      "500 ml Natürel Sızma Zeytinyağı, dengeli aroması, zarif sunumu ve seçkin üretim anlayışıyla günlük kullanımda premium bir deneyim sunar. Sofralarda doğallığı ve kalite algısını aynı anda hissettirmek isteyenler için özenle konumlandırılmıştır.",
    price: "₺399",
    imageClass: "productOlive",
    whatsappHref:
      "https://wa.me/905345177996?text=Merhaba%20500%20ml%20Nat%C3%BCrel%20S%C4%B1zma%20Zeytinya%C4%9F%C4%B1%20i%C3%A7in%20sipari%C5%9F%20vermek%20istiyorum.",
    badges: ["%0,3 Asit", "Soğuk Sıkım"],
    features: [
      "Natürel sızma kalite standardı",
      "Dengeli aroma profili",
      "Şık ve premium sunum",
      "Günlük kullanım için ideal boyut",
    ],
    usage: [
      "Kahvaltı sofralarında",
      "Salata ve soğuk tabaklarda",
      "Günlük mutfak kullanımında",
      "Şık hediye alternatifi olarak",
    ],
  },
  {
    slug: "1-litre-ozel-seri",
    category: "Zeytinyağı",
    title: "1 Litre Özel Seri",
    shortDescription:
      "Yoğun karakter, seçilmiş üretim ve sofralarda premium deneyim sunan özel seri.",
    fullDescription:
      "1 Litre Özel Seri Zeytinyağı, yoğun karakteri ve güçlü kalite duruşuyla daha yüksek segmentte bir deneyim sunar. Hem sofrada hem mutfakta doğallık, lezzet ve güven algısını bir araya getiren seçkin bir seridir.",
    price: "₺699",
    imageClass: "productBottle",
    whatsappHref:
      "https://wa.me/905345177996?text=Merhaba%201%20Litre%20%C3%96zel%20Seri%20Zeytinya%C4%9F%C4%B1%20i%C3%A7in%20sipari%C5%9F%20vermek%20istiyorum.",
    badges: ["%0,3 Asit", "Özel Seri"],
    features: [
      "Yoğun ve karakterli tat profili",
      "Seçilmiş üretim yaklaşımı",
      "Daha uzun kullanım avantajı",
      "Premium seri konumlandırma",
    ],
    usage: [
      "Geniş aile kullanımı",
      "Yoğun mutfak kullanımı",
      "Sıcak ve soğuk yemeklerde",
      "Lezzet odaklı premium sofralarda",
    ],
  },
  {
    slug: "zeytinyagli-dogal-sabun",
    category: "Doğal Sabun",
    title: "Zeytinyağlı Doğal Sabun",
    shortDescription:
      "Sade içerik yaklaşımıyla üretilen, günlük bakımda doğal dokunuş sunan seri.",
    fullDescription:
      "Zeytinyağlı Doğal Sabun, sade içerik anlayışı ve doğal bakım odağıyla günlük temizlik rutinine zarif bir katkı sunar. Geleneksel hissi modern marka diliyle buluşturan bu seri, doğal bakım arayan kullanıcılar için güçlü bir alternatiftir.",
    price: "₺149",
    imageClass: "productSoap",
    whatsappHref:
      "https://wa.me/905345177996?text=Merhaba%20Zeytinya%C4%9Fl%C4%B1%20Do%C4%9Fal%20Sabun%20i%C3%A7in%20sipari%C5%9F%20vermek%20istiyorum.",
    badges: ["Doğal İçerik", "Günlük Bakım"],
    features: [
      "Zeytinyağı bazlı bakım hissi",
      "Sade ve doğal içerik yaklaşımı",
      "Günlük kullanıma uygun yapı",
      "Doğal bakım kategorisinde güçlü alternatif",
    ],
    usage: [
      "Günlük el ve yüz temizliğinde",
      "Banyo rutininde",
      "Doğal bakım tercih eden kullanıcılar için",
      "Şık bakım setleri içinde",
    ],
  },
  {
    slug: "lavantali-sabun",
    category: "Doğal Sabun",
    title: "Lavantalı Sabun",
    shortDescription:
      "Doğal bakım hissini aromatik dokunuşla tamamlayan özel sabun serisi.",
    fullDescription:
      "Lavantalı Sabun, doğal bakım deneyimini aromatik bir dokunuşla tamamlayan özel bir seridir. Zarif hissiyatı, sade formülü ve premium sunum karakteriyle kişisel bakım kategorisinde öne çıkar.",
    price: "₺169",
    imageClass: "productLavender",
    whatsappHref:
      "https://wa.me/905345177996?text=Merhaba%20Lavantal%C4%B1%20Sabun%20i%C3%A7in%20sipari%C5%9F%20vermek%20istiyorum.",
    badges: ["Lavanta Özlü", "Doğal Bakım"],
    features: [
      "Aromatik lavanta dokunuşu",
      "Doğal bakım hissi",
      "Zarif kullanım deneyimi",
      "Premium kişisel bakım serisi",
    ],
    usage: [
      "Günlük bakım rutininde",
      "Rahatlatıcı banyo deneyiminde",
      "Hediye amaçlı bakım seçimlerinde",
      "Doğal içerik odaklı kullanımda",
    ],
  },
];

type PageProps = {
  params: {
    slug: string;
  };
};

export default function ProductDetailPage({ params }: PageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="productDetailPage">
      <section className="productDetailHero">
        <div className="container productDetailGrid">
          <div className="productDetailVisualWrap">
            <div className={`productDetailVisual ${product.imageClass}`} />
          </div>

          <div className="productDetailContent">
            <Link href="/" className="backLink">
              ← Ana Sayfaya Dön
            </Link>

            <span className="productDetailCategory">{product.category}</span>

            <h1>{product.title}</h1>

            <p className="productDetailShort">{product.shortDescription}</p>

            <div className="productBadges productDetailBadges">
              {product.badges.map((badge) => (
                <span
                  key={badge}
                  className={`badge ${
                    badge === product.badges[1] ? "outline" : ""
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="productDetailPriceRow">
              <strong>{product.price}</strong>
              <span>Seçkin koleksiyon</span>
            </div>

            <p className="productDetailText">{product.fullDescription}</p>

            <div className="productDetailActions">
              <a
                href={product.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn btnGold"
              >
                WhatsApp’tan Sipariş Ver
              </a>

              <Link href="/" className="btn btnOutline">
                Alışverişe Devam Et
              </Link>
            </div>

            <div className="productTrust">
              <span>✔ Güvenli Paketleme</span>
              <span>✔ Premium Sunum</span>
              <span>✔ Hızlı İletişim</span>
            </div>
          </div>
        </div>
      </section>

      <section className="productInfoSection">
        <div className="container productInfoGrid">
          <article className="productInfoCard">
            <p className="sectionLabel">Ürün Özellikleri</p>
            <h2>Neden bu ürün?</h2>
            <ul className="detailList">
              {product.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="productInfoCard">
            <p className="sectionLabel">Kullanım Alanları</p>
            <h2>Nerelerde tercih edilir?</h2>
            <ul className="detailList">
              {product.usage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="productBottomCta">
        <div className="container ctaBox">
          <div>
            <p className="sectionLabel">Hızlı Sipariş</p>
            <h2>Ürün hakkında bilgi alın ve siparişi hemen başlatın</h2>
            <p>
              WhatsApp üzerinden ürün detaylarını öğrenebilir, hızlıca sipariş
              oluşturabilirsiniz.
            </p>
          </div>

          <a
            href={product.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="btn btnGold"
          >
            Siparişe Geç
          </a>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}