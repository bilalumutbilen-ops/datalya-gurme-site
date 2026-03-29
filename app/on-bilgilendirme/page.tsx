export default function OnBilgilendirmePage() {
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
          Ön Bilgilendirme Formu
        </h1>

        <p style={{ color: "#d2cabd", marginBottom: "28px" }}>
          Bu form, alıcının sipariş öncesinde satıcı, ürün, teslimat, ödeme ve
          cayma hakkı hakkında bilgilendirilmesi amacıyla hazırlanmıştır.
        </p>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>1. Satıcı Bilgileri</h2>
          <p><strong>Firma:</strong> Atalay Turizm Gıda Tarım Ltd. Şti.</p>
          <p><strong>Marka:</strong> D&apos;ATALYA GURME</p>
          <p><strong>Adres:</strong> [Şirket adresi buraya eklenecek]</p>
          <p><strong>E-posta:</strong> [E-posta adresi buraya eklenecek]</p>
          <p><strong>Telefon:</strong> [Telefon bilgisi buraya eklenecek]</p>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>2. Ürün Bilgileri</h2>
          <p>
            Ürünlerin temel nitelikleri, satış fiyatı, vergiler dahil toplam
            bedeli ve varsa teslimat masrafları sipariş ekranında ayrıca
            gösterilmektedir.
          </p>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>3. Ödeme ve Teslimat</h2>
          <p>
            Sipariş bedeli, seçilen ödeme yöntemi ile tahsil edilir. Ürünler,
            alıcının sipariş sırasında belirttiği teslimat adresine kargo
            aracılığıyla gönderilir.
          </p>
          <p>
            Teslim süresi, ürün stok durumu ve operasyonel yoğunluğa göre
            değişebilir.
          </p>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>4. Cayma Hakkı Bilgisi</h2>
          <p>
            Alıcı, ilgili tüketici mevzuatı kapsamındaki cayma hakkına sahiptir.
            Ancak çabuk bozulabilen ürünler, ambalajı açılmış gıda ürünleri veya
            hijyen açısından iadesi uygun olmayan ürünler için cayma hakkı
            sınırlı olabilir.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>5. Uyuşmazlık Durumu</h2>
          <p>
            Uyuşmazlık halinde, ilgili mevzuat çerçevesinde Tüketici Hakem
            Heyetleri ve Tüketici Mahkemeleri yetkilidir.
          </p>
        </section>
      </div>
    </main>
  );
}