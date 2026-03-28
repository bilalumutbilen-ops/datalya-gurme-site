"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

function formatPrice(price: number) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 2,
  }).format(price);
}

export default function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <main className="cartPage">
      <section className="cartHero">
        <div className="container">
          <p className="sectionLabel">Sepet</p>
          <h1>Seçtiğiniz ürünler</h1>
          <p className="cartHeroText">
            Sipariş öncesi ürünlerinizi gözden geçirin, adetleri düzenleyin ve
            sonraki aşamada ödeme adımına ilerleyin.
          </p>
        </div>
      </section>

      <section className="cartSection">
        <div className="container cartLayout">
          <div className="cartMain">
            {cartItems.length === 0 ? (
              <div className="emptyCartBox">
                <h2>Sepetiniz şu an boş</h2>
                <p>
                  Premium koleksiyondan ürün ekleyerek alışverişe
                  başlayabilirsiniz.
                </p>
                <Link href="/" className="btn btnGold">
                  Ürünlere Dön
                </Link>
              </div>
            ) : (
              <div className="cartItemsWrap">
                {cartItems.map((item) => (
                  <article key={item.id} className="cartItemCard">
                    <div className={`cartItemImage ${item.imageClass}`} />

                    <div className="cartItemInfo">
                      <Link href={item.detailHref} className="cartItemTitle">
                        {item.title}
                      </Link>

                      <p className="cartItemMeta">
                        Seçkin koleksiyon • Premium sunum
                      </p>

                      <div className="cartItemActions">
                        <div className="quantityControl">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          className="removeItemBtn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Ürünü Kaldır
                        </button>
                      </div>
                    </div>

                    <div className="cartItemPrice">
                      <strong>{formatPrice(item.price * item.quantity)}</strong>
                      <span>{formatPrice(item.price)} / adet</span>
                    </div>
                  </article>
                ))}

                <div className="cartBottomActions">
                  <button
                    type="button"
                    className="btn btnOutline"
                    onClick={clearCart}
                  >
                    Sepeti Temizle
                  </button>

                  <Link href="/" className="btn btnGold">
                    Alışverişe Devam Et
                  </Link>
                </div>
              </div>
            )}
          </div>

          <aside className="cartSummary">
            <div className="cartSummaryCard">
              <p className="sectionLabel">Sipariş Özeti</p>
              <h2>Sepet toplamı</h2>

              <div className="summaryRow">
                <span>Toplam ürün</span>
                <strong>{totalItems}</strong>
              </div>

              <div className="summaryRow">
                <span>Ara toplam</span>
                <strong>{formatPrice(totalPrice)}</strong>
              </div>

              <div className="summaryRow">
                <span>Kargo</span>
                <strong>Ödeme adımında hesaplanacak</strong>
              </div>

              <div className="summaryTotal">
                <span>Genel toplam</span>
                <strong>{formatPrice(totalPrice)}</strong>
              </div>

              <button
                type="button"
                className="btn btnGold cartCheckoutBtn"
                disabled={cartItems.length === 0}
              >
                Ödeme Adımına Geç
              </button>

              <p className="cartSummaryNote">
                Bir sonraki aşamada bu butonu checkout ve online ödeme akışına
                bağlayacağız.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}