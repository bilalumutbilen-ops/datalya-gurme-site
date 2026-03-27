"use client";

import { useMemo, useState } from "react";

type ProductItem = {
  id: number;
  category: string;
  title: string;
  detailHref: string;
  description: string;
  price: string;
  imageClass: string;
  whatsappHref: string;
  badges: string[];
  isTopSeller?: boolean;
  tabs: ("cok-satanlar" | "yeni-gelenler" | "tercih-edilenler")[];
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "cok-satanlar" | "yeni-gelenler" | "tercih-edilenler"
  >("cok-satanlar");

  const products: ProductItem[] = [
    {
      id: 1,
      category: "Zeytinyağı",
      title: "500 ml Natürel Sızma",
      detailHref: "/urun/500-ml-naturel-sizma",
      description:
        "Günlük kullanım ve şık sunum için ideal, dengeli aromaya sahip premium seri.",
      price: "₺399",
      imageClass: "productOlive",
      whatsappHref:
        "https://wa.me/905345177996?text=Merhaba%20500%20ml%20Nat%C3%BCrel%20S%C4%B1zma%20Zeytinya%C4%9F%C4%B1%20i%C3%A7in%20sipari%C5%9F%20vermek%20istiyorum.",
      badges: ["%0,3 Asit", "Soğuk Sıkım"],
      isTopSeller: true,
      tabs: ["cok-satanlar", "tercih-edilenler"],
    },
    {
      id: 2,
      category: "Zeytinyağı",
      title: "1 Litre Özel Seri",
      detailHref: "/urun/1-litre-ozel-seri",
      description:
        "Yoğun karakter, seçilmiş üretim ve sofralarda premium deneyim sunan özel seri.",
      price: "₺699",
      imageClass: "productBottle",
      whatsappHref:
        "https://wa.me/905345177996?text=Merhaba%201%20Litre%20%C3%96zel%20Seri%20Zeytinya%C4%9F%C4%B1%20i%C3%A7in%20sipari%C5%9F%20vermek%20istiyorum.",
      badges: ["%0,3 Asit", "Özel Seri"],
      tabs: ["cok-satanlar", "yeni-gelenler"],
    },
    {
      id: 3,
      category: "Doğal Sabun",
      title: "Zeytinyağlı Doğal Sabun",
      detailHref: "/urun/zeytinyagli-dogal-sabun",
      description:
        "Sade içerik yaklaşımıyla üretilen, günlük bakımda doğal dokunuş sunan seri.",
      price: "₺149",
      imageClass: "productSoap",
      whatsappHref:
        "https://wa.me/905345177996?text=Merhaba%20Zeytinya%C4%9Fl%C4%B1%20Do%C4%9Fal%20Sabun%20i%C3%A7in%20sipari%C5%9F%20vermek%20istiyorum.",
      badges: ["Doğal İçerik", "Günlük Bakım"],
      tabs: ["yeni-gelenler", "tercih-edilenler"],
    },
    {
      id: 4,
      category: "Doğal Sabun",
      title: "Lavantalı Sabun",
      detailHref: "/urun/lavantali-sabun",
      description:
        "Doğal bakım hissini aromatik dokunuşla tamamlayan özel sabun serisi.",
      price: "₺169",
      imageClass: "productLavender",
      whatsappHref:
        "https://wa.me/905345177996?text=Merhaba%20Lavantal%C4%B1%20Sabun%20i%C3%A7in%20sipari%C5%9F%20vermek%20istiyorum.",
      badges: ["Lavanta Özlü", "Doğal Bakım"],
      tabs: ["cok-satanlar", "tercih-edilenler"],
    },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.tabs.includes(activeTab));
  }, [activeTab]);

  return (
    <main className="site">
      <header className="header">
        <div className="container navbar">
          <a href="#" className="brand">
            <img
              src="/olive-branch.png"
              alt="D'ATALYA GURME Logo"
              className="logoImage"
            />
            <span className="brandText">D&apos;ATALYA GURME</span>
          </a>

          <nav className="nav">
            <a href="#">Ana Sayfa</a>
            <a href="#koleksiyonlar">Koleksiyonlar</a>
            <a href="#urunler">Ürünlerimiz</a>
            <a href="#hakkimizda">Hakkımızda</a>
            <a href="#iletisim">İletişim</a>
          </nav>

          <button
            className={`menuToggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Ana Sayfa
          </a>
          <a href="#koleksiyonlar" onClick={() => setMenuOpen(false)}>
            Koleksiyonlar
          </a>
          <a href="#urunler" onClick={() => setMenuOpen(false)}>
            Ürünlerimiz
          </a>
          <a href="#hakkimizda" onClick={() => setMenuOpen(false)}>
            Hakkımızda
          </a>
          <a href="#iletisim" onClick={() => setMenuOpen(false)}>
            İletişim
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container heroContent">
          <p className="eyebrow">Seçkin koleksiyon</p>
          <h1>Saf Lezzet. Zarif Sunum.</h1>
          <p className="heroText">
            Özenle seçilen zeytinyağı ve doğal sabun koleksiyonumuzla sade,
            güçlü ve premium bir deneyim sunuyoruz.
          </p>

          <div className="heroButtons">
            <a href="#urunler" className="btn btnGold">
              Ürünleri İncele
            </a>
            <a
              href="https://wa.me/905345177996?text=Merhaba%20%C3%BCr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noreferrer"
              className="btn btnOutline"
            >
              WhatsApp İletişim
            </a>
          </div>

          <p className="heroTrust">
            ✔ %100 Doğal • ✔ Güvenli Paketleme • ✔ Hızlı Kargo
          </p>
        </div>
      </section>

      <section className="luxuryStrip">
        <div className="container luxuryStripGrid">
          <div className="luxuryItem">
            <strong>Doğal İçerik</strong>
            <span>Seçkin üretim yaklaşımı</span>
          </div>
          <div className="luxuryItem">
            <strong>Premium Sunum</strong>
            <span>Güçlü ambalaj ve marka dili</span>
          </div>
          <div className="luxuryItem">
            <strong>Hızlı İletişim</strong>
            <span>WhatsApp destekli sipariş</span>
          </div>
        </div>
      </section>

      <section id="koleksiyonlar" className="collectionsShowcase">
        <div className="container">
          <p className="sectionLabel">Koleksiyonlar</p>
          <h2 className="collectionsTitle">Zarif seçimler, güçlü kategoriler</h2>

          <div className="collectionsGrid">
            <article className="collectionCard collectionOil">
              <div className="collectionOverlay" />
              <div className="collectionContent">
                <h3>Zeytinyağları</h3>
                <p>
                  Ege’nin seçkin zeytinlerinden elde edilen natürel sızma ve özel
                  seri zeytinyağlarımızla sofralarınıza premium bir dokunuş
                  taşıyoruz.
                </p>
                <a href="#urunler" className="collectionBtn">
                  Alışverişe Başla
                </a>
              </div>
            </article>

            <article className="collectionCard collectionOlives">
              <div className="collectionOverlay" />
              <div className="collectionContent">
                <h3>Zeytinler</h3>
                <p>
                  Kendine has tat ve aromasıyla öne çıkan seçkin sofralık
                  zeytinlerimiz, geleneksel lezzeti modern sunumla buluşturur.
                </p>
                <a href="#urunler" className="collectionBtn">
                  Alışverişe Başla
                </a>
              </div>
            </article>

            <article className="collectionCard collectionCare">
              <div className="collectionOverlay" />
              <div className="collectionContent">
                <h3>Kişisel Bakım Ürünleri</h3>
                <p>
                  Zeytinyağının doğal gücünü cilt bakımına taşıyan sabun ve bakım
                  ürünlerimizle sade ve etkili bir bakım deneyimi sunuyoruz.
                </p>
                <a href="#urunler" className="collectionBtn">
                  Alışverişe Başla
                </a>
              </div>
            </article>
          </div>

          <div className="showcaseTabs">
            <button
              type="button"
              className={activeTab === "cok-satanlar" ? "active" : ""}
              onClick={() => setActiveTab("cok-satanlar")}
            >
              Çok Satanlar
            </button>
            <button
              type="button"
              className={activeTab === "yeni-gelenler" ? "active" : ""}
              onClick={() => setActiveTab("yeni-gelenler")}
            >
              Yeni Gelenler
            </button>
            <button
              type="button"
              className={activeTab === "tercih-edilenler" ? "active" : ""}
              onClick={() => setActiveTab("tercih-edilenler")}
            >
              Tercih Edilenler
            </button>
          </div>
        </div>
      </section>

      <section id="urunler" className="products">
        <div className="container">
          <p className="sectionLabel">Seçkin Koleksiyon</p>
          <h2>Öne Çıkan Ürünler</h2>

          <div className="productGrid">
            {filteredProducts.map((product) => (
              <article className="card" key={product.id}>
                {product.isTopSeller && activeTab === "cok-satanlar" && (
                  <span className="topBadge">Çok Satan</span>
                )}

                <div className={`cardImage ${product.imageClass}`} />

                <div className="cardBody">
                  <span className="category">{product.category}</span>
                  <h3>{product.title}</h3>

                  <a href={product.detailHref} className="productDetailLink">
                    Ürünü İncele
                  </a>

                  <p>{product.description}</p>

                  <div className="productBadges">
                    <span className="badge">{product.badges[0]}</span>
                    <span className="badge outline">{product.badges[1]}</span>
                  </div>

                  <div className="priceRow">
                    <strong>{product.price}</strong>
                  </div>

                  <a
                    className="orderBtn"
                    href={product.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Hemen WhatsApp’tan Sipariş Ver
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="about">
        <div className="container aboutGrid">
          <div className="aboutText">
            <p className="sectionLabel">Hakkımızda</p>
            <h2>
              Doğallığı, güveni ve zarafeti tek bir marka diline dönüştürüyoruz
            </h2>
            <p>
              Marka yaklaşımımız; sade tasarım, güçlü kalite algısı ve güvenilir
              ürün deneyimi üzerine kuruludur. Her üründe doğallık kadar sunuma
              da önem veriyoruz.
            </p>
            <p>%0,3 asit oranıyla eşsiz ve doğal lezzetleri barındırıyoruz.</p>
          </div>

          <div className="aboutBox">
            <div className="miniStat">
              <span>Doğal İçerik</span>
              <strong>Önceliğimiz</strong>
            </div>
            <div className="miniStat">
              <span>Premium Sunum</span>
              <strong>Marka Duruşumuz</strong>
            </div>
            <div className="miniStat">
              <span>Hızlı Sipariş</span>
              <strong>WhatsApp Destekli</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container ctaBox">
          <div>
            <p className="sectionLabel">Hızlı Sipariş</p>
            <h2>Sipariş veya bilgi için bizimle hemen iletişime geçin</h2>
            <p>
              WhatsApp üzerinden ürün bilgisi alabilir ve sipariş sürecini
              başlatabilirsiniz.
            </p>
          </div>

          <a
            href="https://wa.me/905345177996?text=Merhaba%20sipari%C5%9F%20ve%20%C3%BCr%C3%BCn%20bilgisi%20almak%20istiyorum."
            target="_blank"
            rel="noreferrer"
            className="btn btnGold"
          >
            WhatsApp’tan Yaz
          </a>
        </div>
      </section>

      <footer id="iletisim" className="footer">
        <div className="container footerWrap">
          <div className="footerCol">
            <h3>D&apos;ATALYA GURME</h3>
            <p>Doğal, premium zeytinyağı, zeytin ve doğal bakım ürünleri.</p>
          </div>

          <div className="footerCol">
            <h4>İletişim</h4>
            <p>
              <strong>Telefon:</strong> 0534 063 07 79
            </p>
            <p>
              <strong>WhatsApp:</strong> 0539 517 79 96
            </p>
            <p>
              <strong>Instagram:</strong> @datalyagurme
            </p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/905345177996?text=Merhaba%20%C3%BCr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20ve%20sipari%C5%9F%20almak%20istiyorum."
        target="_blank"
        rel="noreferrer"
        className="floatingWhatsapp"
      >
        WhatsApp
      </a>
    </main>
  );
}