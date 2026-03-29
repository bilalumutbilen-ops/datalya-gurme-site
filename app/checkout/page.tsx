"use client";
import LegalLinks from "../components/LegalLinks";
import { useState } from "react";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    // Şimdilik ödeme devre dışı
    setTimeout(() => {
      alert("Ödeme sistemi yakında aktif olacak 💳");
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0e0e0e",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "500px",
        background: "#1a1a1a",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
      }}>
        <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Siparişi Tamamla
        </h1>

        {/* Ürün Özeti */}
        <div style={{
          background: "#111",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px"
        }}>
          <p><strong>Ürün:</strong> Premium Zeytinyağı</p>
          <p><strong>Fiyat:</strong> 100₺</p>
        </div>

        {/* Güven Mesajı */}
        <div style={{
          fontSize: "14px",
          color: "#aaa",
          marginBottom: "20px"
        }}>
          🔒 Tüm ödemeleriniz 256-bit SSL ile korunmaktadır.
        </div>

        {/* Buton */}
        <button
          onClick={handlePayment}
          disabled={loading}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            background: "#2c2c2c",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            transition: "0.3s"
          }}
        >
          {loading ? "Yükleniyor..." : "Ödeme Yakında Aktif"}
        </button>

        {/* Alt mesaj */}
        <p style={{
          marginTop: "15px",
          fontSize: "12px",
          color: "#777",
          textAlign: "center"
        }}>
          Şu anda ödeme sistemi test aşamasındadır.
        </p>
      </div>
    </div>
  );
}<LegalLinks />