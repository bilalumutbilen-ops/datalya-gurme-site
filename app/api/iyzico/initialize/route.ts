export const runtime = "nodejs";

import { NextResponse } from "next/server";
import Iyzipay from "iyzipay";

const iyzipay = new Iyzipay({
  apiKey: process.env.IYZICO_API_KEY!,
  secretKey: process.env.IYZICO_SECRET_KEY!,
  uri: "https://sandbox-api.iyzipay.com",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const request = {
      locale: Iyzipay.LOCALE.TR,
      conversationId: "123456789",
      price: body.price,
      paidPrice: body.price,
      currency: Iyzipay.CURRENCY.TRY,
      basketId: "B67832",
      paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
      callbackUrl: "http://localhost:3000/odeme/sonuc",

      buyer: {
        id: "BY789",
        name: body.name,
        surname: body.surname,
        gsmNumber: body.phone,
        email: body.email,
        identityNumber: "11111111111",
        registrationAddress: body.address,
        ip: "85.34.78.112",
        city: "Istanbul",
        country: "Turkey",
      },

      shippingAddress: {
        contactName: body.name + " " + body.surname,
        city: "Istanbul",
        country: "Turkey",
        address: body.address,
      },

      billingAddress: {
        contactName: body.name + " " + body.surname,
        city: "Istanbul",
        country: "Turkey",
        address: body.address,
      },

      basketItems: [
        {
          id: "BI101",
          name: "Premium Zeytinyağı",
          category1: "Gıda",
          itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
          price: body.price,
        },
      ],
    };

    return new Promise((resolve) => {
      iyzipay.checkoutFormInitialize.create(request, function (err: any, result: any) {
        if (err) {
          resolve(NextResponse.json({ error: err.message }));
        } else {
          resolve(NextResponse.json(result));
        }
      });
    });
  } catch (error) {
    return NextResponse.json({ error: "Sunucu hatası" });
  }
}