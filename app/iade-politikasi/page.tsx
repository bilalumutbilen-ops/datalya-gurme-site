export default function IadePolitikasiPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "#f5f1e8",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: 1.8,
        }}
      >
        <p
          style={{
            color: "#c8a84f",
            letterSpacing: "0.2em",
            fontSize: "13px",
            marginBottom: "16px",
          }}
        >
          YASAL METİNLER
        </p>

        <h1
          style={{
            fontSize: "44px",
            marginBottom: "24px",
            fontFamily: "var(--font-playfair)",
          }}
        >
          İade ve Cayma Politikası
        </h1>

        <p style={{ color: "#d2cabd", marginBottom: "28px" }}>
          Bu politika, D&apos;ATALYA GURME üzerinden gerçekleştirilen alışverişlerde
          iade ve cayma süreçlerine ilişkin esasları düzenler.
        </p>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            1. Cayma Hakkı
          </h2>
          <p>
            Alıcı, ürünün kendisine tesliminden itibaren 14 gün içerisinde cayma
            hakkını kullanabilir. Cayma hakkının kullanılabilmesi için ürünün
            kullanılmamış ve yeniden satılabilir durumda olması gerekmektedir.
          </p>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            2. İade Şartları
          </h2>
          <p>
            İade edilecek ürünün:
          </p>
          <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
            <li>Orijinal ambalajında olması</li>
            <li>Kullanılmamış ve zarar görmemiş olması</li>
            <li>Fatura veya sipariş bilgileri ile birlikte gönderilmesi</li>
          </ul>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            3. İade Edilemeyen Ürünler
          </h2>
          <p>
            Aşağıdaki ürünlerde cayma hakkı kullanılamaz:
          </p>
          <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
            <li>Ambalajı açılmış gıda ürünleri</li>
            <li>Hijyen açısından iadesi uygun olmayan ürünler</li>
            <li>Kişiye özel hazırlanmış ürünler</li>
          </ul>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            4. İade Süreci
          </h2>
          <p>
            İade talebi oluşturulduktan sonra ürün, belirtilen adrese gönderilir.
            Ürün satıcıya ulaştıktan sonra inceleme yapılır ve uygun bulunması
            halinde ücret iadesi gerçekleştirilir.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            5. İletişim
          </h2>
          <p>
            İade ve cayma süreçleri ile ilgili tüm talepler için bizimle iletişime
            geçebilirsiniz:
          </p>
          <p><strong>E-posta:</strong> [E-posta buraya]</p>
          <p><strong>Telefon:</strong> [Telefon buraya]</p>
        </section>
      </div>
    </main>
  );
}