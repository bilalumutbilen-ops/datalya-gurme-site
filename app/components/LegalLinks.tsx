import Link from "next/link";

export default function LegalLinks() {
  return (
    <div
      style={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "20px 28px 36px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "14px 22px",
          alignItems: "center",
          justifyContent: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "18px",
          color: "#cdbb85",
          fontSize: "14px",
        }}
      >
        <Link href="/mesafeli-satis">Mesafeli Satış Sözleşmesi</Link>
        <Link href="/on-bilgilendirme">Ön Bilgilendirme</Link>
        <Link href="/iade-politikasi">İade ve Cayma Politikası</Link>
        <Link href="/kvkk">KVKK / Gizlilik Politikası</Link>
      </div>
    </div>
  );
}