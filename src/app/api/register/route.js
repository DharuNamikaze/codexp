import { NextResponse } from "next/server";
import { createUser } from "@/queries/users";
export const POST = async (request) => {
  const { email, password } = await request.json();

  console.log(email, password);

  // TODO: Create a DB connection
  await dbConnect();
  // TODO: Encrypt the password (e.g., using bcrypt)
  const hashedPassword = await bcrypt.hash(password, 5);

  // TODO: Form a database payload and update the DB
  const newUser = {
    name,
    password: hashedPassword,
    email,
  }
  try {
    await createUser(newUser);
  } catch (error) {
    return new NextResponse(error.message, {
        status: 500,
  });
}

  return new NextResponse("User has been created", {
    status: 201,
  });
};
