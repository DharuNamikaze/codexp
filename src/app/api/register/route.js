import { NextResponse } from "next/server";

export const POST = async (request) => {
    const { email, password } = await request.json();

    console.log(email, password);

    // TODO: Create a DB connection

    // TODO: Encrypt the password (e.g., using bcrypt)

    // TODO: Form a database payload and update the DB

    return new NextResponse("User has been created", {
        status: 201,
    });
};
