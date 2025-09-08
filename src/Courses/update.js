import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
 const result = await prisma.courses.update({
 where: {
 id: "fb1eb9bc-3207-4d11-ab2d-b9448f07a179",
 },
 data: {
 duration: 300,
 name: "Curso de React Native - v2",
 description: "Curso muito bom de React Native",
 },
 });
 console.log(result);
}

main();