import { prisma } from "@/lib/prisma";

export async function GET() {
  const products = await prisma.product.findMany();
  return Response.json(products);
}

export async function POST() {
  const product = await prisma.product.create({
    data: {
      name: "Ayvalık Natürel Sızma Zeytinyağı 1 L",
      description: "Soğuk sıkım, natürel sızma zeytinyağı.",
      category: "zeytinyagi",
      imageUrl: "https://via.placeholder.com/300x200?text=Zeytinyagi",
      price: 450,
      stock: 25,
    },
  });

  return Response.json(product);
}