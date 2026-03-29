export default function MesafeliSatisPage() {
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
          Mesafeli Satış Sözleşmesi
        </h1>

        <p style={{ color: "#d2cabd", marginBottom: "28px" }}>
          İşbu Mesafeli Satış Sözleşmesi, satıcı ile alıcı arasında elektronik
          ortamda gerçekleştirilen ürün satışlarına ilişkin hak ve
          yükümlülükleri düzenler.
        </p>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>1. Taraflar</h2>
          <p>
            <strong>Satıcı:</strong> Atalay Turizm Gıda Tarım Ltd. Şti.
          </p>
          <p>
            <strong>Marka:</strong> D&apos;ATALYA GURME
          </p>
          <p>
            <strong>Adres:</strong> [Şirket adresi buraya eklenecek]
          </p>
          <p>
            <strong>E-posta:</strong> [E-posta adresi buraya eklenecek]
          </p>
          <p>
            <strong>Telefon:</strong> [Telefon bilgisi buraya eklenecek]
          </p>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            2. Sözleşmenin Konusu
          </h2>
          <p>
            Bu sözleşme, alıcının satıcıya ait internet sitesi üzerinden
            elektronik ortamda sipariş verdiği ürünlerin satışı ve teslimine
            ilişkin hükümleri kapsar.
          </p>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            3. Ürün ve Ödeme Bilgileri
          </h2>
          <p>
            Siparişe konu ürünlerin temel nitelikleri, satış fiyatı, ödeme
            şekli ve teslimat bilgileri sipariş özeti ekranında belirtildiği
            gibidir.
          </p>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            4. Teslimat
          </h2>
          <p>
            Ürün, yasal süreyi aşmamak kaydıyla alıcının sipariş sırasında
            belirttiği teslimat adresine gönderilir. Kargo süresi, ürün tipi ve
            operasyon yoğunluğuna göre değişebilir.
          </p>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            5. Cayma Hakkı
          </h2>
          <p>
            Alıcı, ilgili mevzuat çerçevesinde cayma hakkına sahiptir. Ancak
            niteliği gereği iadesi uygun olmayan ürünler, ambalajı açılmış gıda
            ürünleri veya hijyen açısından iadesi uygun olmayan ürünlerde cayma
            hakkı sınırlı olabilir.
          </p>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            6. Uyuşmazlıkların Çözümü
          </h2>
          <p>
            İşbu sözleşmeden doğabilecek uyuşmazlıklarda, ilgili mevzuat
            çerçevesinde Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri
            yetkilidir.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>7. Yürürlük</h2>
          <p>
            Alıcı, internet sitesi üzerinden sipariş verdiğinde işbu sözleşme
            hükümlerini kabul etmiş sayılır.
          </p>
        </section>
      </div>
    </main>
  );
}