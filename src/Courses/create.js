import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
  data: {
  name: "Curso de java ",
  duration: 200,
  description: "Curso de POO com java",
  },
  });
  console.log(result);
}

main();
