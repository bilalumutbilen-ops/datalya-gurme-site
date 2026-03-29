export default function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        color: "#ccc",
        padding: "40px 20px",
        marginTop: "80px",
        borderTop: "1px solid #222",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ color: "white", marginBottom: "10px" }}>
          D’ATALYA GURME
        </h2>

        <p style={{ fontSize: "14px", marginBottom: "20px" }}>
          Premium zeytinyağı ve doğal ürünler
        </p>

        <div style={{ fontSize: "13px", lineHeight: "1.8" }}>
          <p><strong>Firma:</strong> Atalay Turizm Gıda Tarım Ltd. Şti.</p>
          <p><strong>Vergi No:</strong> 1234567890</p>
          <p><strong>Adres:</strong> İstanbul / Türkiye</p>
          <p><strong>Email:</strong> info@datalyagurme.com</p>
        </div>

        <div
          style={{
            marginTop: "25px",
            fontSize: "13px",
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a href="#" style={{ color: "#aaa" }}>Mesafeli Satış</a>
          <a href="#" style={{ color: "#aaa" }}>İade Politikası</a>
          <a href="#" style={{ color: "#aaa" }}>KVKK</a>
          <a href="#" style={{ color: "#aaa" }}>Gizlilik</a>
        </div>

        <p
          style={{
            marginTop: "30px",
            fontSize: "12px",
            color: "#666",
          }}
        >
          © 2026 D’ATALYA GURME
        </p>
      </div>
    </footer>
  );
}