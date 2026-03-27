type Product = {
  name: string;
  category: string;
  price: string;
  description: string;
  imageClass: string;
  whatsappText: string;
};

const products: Record<string, Product> = {
  "500-ml-naturel-sizma": {
  name: "500 ml Natürel Sızma",
  category: "Zeytinyağı",
  price: "₺399",
  description: "....",
  imageClass: "productOlive",
  whatsappText: "...",

  volume: "500 ml",
  acidity: "%0,3",
  production: "Natürel sızma üretim",
  usage: ["Salatalar", "Soğuk yemekler"],
  storage: "Serin yerde saklayınız.",
},
  "1-litre-ozel-seri": {
    name: "1 Litre Özel Seri",
    category: "Zeytinyağı",
    price: "₺699",
    description:
      "Yoğun karakter ve güçlü aroma yapısıyla öne çıkan premium seri.",
    imageClass: "productBottle",
    whatsappText:
      "Merhaba 1 Litre Özel Seri Zeytinyağı için sipariş vermek istiyorum.",
  },
  "zeytinyagli-dogal-sabun": {
    name: "Zeytinyağlı Doğal Sabun",
    category: "Doğal Sabun",
    price: "₺149",
    description:
      "Doğal içerik yaklaşımıyla üretilmiş, günlük bakım için ideal sabun.",
    imageClass: "productSoap",
    whatsappText:
      "Merhaba Zeytinyağlı Doğal Sabun için sipariş vermek istiyorum.",
  },
  "lavantali-sabun": {
    name: "Lavantalı Sabun",
    category: "Doğal Sabun",
    price: "₺169",
    description:
      "Aromatik yapısıyla öne çıkan, ferahlatıcı doğal bakım ürünü.",
    imageClass: "productLavender",
    whatsappText:
      "Merhaba Lavantalı Sabun için sipariş vermek istiyorum.",
  },
};

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug];

  if (!product) {
    return (
      <main className="site">
        <section className="productDetailPage">
          <div className="container">
            <p className="sectionLabel">Ürün Bulunamadı</p>
            <h1 className="productDetailTitle">Aradığınız ürün mevcut değil</h1>
            <a href="/" className="btn btnGold">
              Ana Sayfaya Dön
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="site">
      <section className="productDetailPage">
        <div className="container productDetailGrid">
          <div className={`productDetailImage ${product.imageClass}`} />

          <div className="productDetailContent">
            <p className="sectionLabel">{product.category}</p>
            <h1 className="productDetailTitle">{product.name}</h1>
            <p className="productDetailPrice">{product.price}</p>
            <p className="productHighlight">
  Erken hasat • Soğuk sıkım • Premium seri
</p>
            <p className="productDetailText">{product.description}</p>
            <div className="productTrust">
  <span>✔ %100 Doğal</span>
  <span>✔ Katkı Maddesi Yok</span>
  <span>✔ Güvenli Paketleme</span>
</div>
            <div className="productInfoBox">
  <div className="productInfoRow">
    <span>Hacim</span>
    <strong>{product.volume}</strong>
  </div>

  {product.acidity && (
    <div className="productInfoRow">
      <span>Asit Oranı</span>
      <strong>{product.acidity}</strong>
    </div>
  )}

  <div className="productInfoRow">
    <span>Üretim Tipi</span>
    <strong>{product.production}</strong>
  </div>
</div>

<div className="productExtraBlock">
  <h3>Kullanım Alanları</h3>
  <ul>
    {product.usage.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
</div>

<div className="productExtraBlock">
  <h3>Saklama Bilgisi</h3>
  <p>{product.storage}</p>
</div>

            <div className="productDetailActions">
              <a
                href={`https://wa.me/905345177996?text=${encodeURIComponent(
                  product.whatsappText
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn btnGold"
              >
                Hemen WhatsApp’tan Sipariş Ver
              </a>

              <a href="/" className="btn btnOutline">
                Ana Sayfaya Dön
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}