import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const id = "42c7479b-33b4-4ab2-a2f6-df466fbf427d"; 

  const course = await prisma.courses.findUnique({
    where: {
      id: id,
    },
  });
  console.log(course);
}
main();