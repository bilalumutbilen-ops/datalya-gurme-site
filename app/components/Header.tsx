export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #222",
        background: "#0e0e0e",
      }}
    >
      {/* Logo */}
      <h1 style={{ fontSize: "18px", letterSpacing: "2px" }}>
        D'ATALYA GURME
      </h1>

      {/* Menü */}
      <nav style={{ display: "flex", gap: "25px", fontSize: "14px" }}>
        <a href="/">Ana Sayfa</a>
        <a href="#">Koleksiyonlar</a>
        <a href="#">Ürünlerimiz</a>
        <a href="#">Hakkımızda</a>
        <a href="#">İletişim</a>
      </nav>
    </header>
  );
}