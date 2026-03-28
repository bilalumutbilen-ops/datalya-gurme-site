"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/iyzico/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: "100",
          name: "Bilal",
          surname: "Bilen",
          email: "test@test.com",
          phone: "+905555555555",
          address: "Istanbul",
        }),
      });

      const data = await res.json();

      if (data.checkoutFormContent) {
        const div = document.createElement("div");
        div.innerHTML = data.checkoutFormContent;
        document.body.appendChild(div);

        const script = div.querySelector("script");
        if (script) {
          eval(script.innerText);
        }
      } else {
        alert("Ödeme başlatılamadı");
        console.log(data);
      }

    } catch (error) {
      console.error(error);
      alert("Bir hata oluştu");
    }

    setLoading(false);
  };

  return (
    <div style={{
      maxWidth: "500px",
      margin: "100px auto",
      padding: "40px",
      background: "#121212",
      color: "white",
      textAlign: "center",
      borderRadius: "16px"
    }}>
      <h1>Ödeme Sayfası</h1>

      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          marginTop: "20px",
          padding: "15px 30px",
          borderRadius: "10px",
          border: "none",
          background: "#2c2c2c",
          color: "white",
          cursor: "pointer"
        }}
      >
        {loading ? "Yükleniyor..." : "Ödemeye Geç"}
      </button>
    </div>
  );
}