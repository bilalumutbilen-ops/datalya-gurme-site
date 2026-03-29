export default function KvkkPage() {
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
          Gizlilik ve KVKK Politikası
        </h1>

        <p style={{ color: "#d2cabd", marginBottom: "28px" }}>
          Bu politika, D&apos;ATALYA GURME tarafından yürütülen faaliyetler kapsamında
          kişisel verilerin korunması ve işlenmesine ilişkin esasları açıklar.
        </p>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            1. Veri Sorumlusu
          </h2>
          <p>
            Kişisel verileriniz, veri sorumlusu sıfatıyla Atalay Turizm Gıda
            Tarım Ltd. Şti. tarafından işlenmektedir.
          </p>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            2. Toplanan Veriler
          </h2>
          <p>
            Alışveriş sürecinde aşağıdaki kişisel veriler toplanabilir:
          </p>
          <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
            <li>Ad ve soyad</li>
            <li>Adres bilgileri</li>
            <li>Telefon numarası</li>
            <li>E-posta adresi</li>
            <li>Ödeme ve sipariş bilgileri</li>
          </ul>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            3. Verilerin İşlenme Amacı
          </h2>
          <p>
            Kişisel verileriniz;
          </p>
          <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
            <li>Siparişlerinizi işlemek</li>
            <li>Ürün teslimatını sağlamak</li>
            <li>Müşteri desteği sunmak</li>
            <li>Yasal yükümlülükleri yerine getirmek</li>
          </ul>
          <p>
            amaçlarıyla işlenmektedir.
          </p>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            4. Verilerin Saklanması
          </h2>
          <p>
            Kişisel verileriniz, ilgili mevzuatta belirtilen süreler boyunca
            saklanmakta ve bu süre sonunda güvenli şekilde silinmektedir.
          </p>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            5. Haklarınız
          </h2>
          <p>
            KVKK kapsamında, kişisel verilerinizle ilgili olarak:
          </p>
          <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
            <li>Bilgi talep etme</li>
            <li>Düzeltme isteme</li>
            <li>Silinmesini talep etme</li>
            <li>İşlenmesine itiraz etme</li>
          </ul>
          <p>haklarına sahipsiniz.</p>
        </section>

        <section>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            6. İletişim
          </h2>
          <p>
            KVKK ile ilgili tüm talepleriniz için bizimle iletişime
            geçebilirsiniz:
          </p>
          <p><strong>E-posta:</strong> [E-posta buraya]</p>
          <p><strong>Telefon:</strong> [Telefon buraya]</p>
        </section>
      </div>
    </main>
  );
}