import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
 const result = await prisma.courses.delete({
 where: {
 id: "fb1eb9bc-3207-4d11-ab2d-b9448f07a179",
 },
 });
 console.log(result);
}

main();