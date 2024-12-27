modules and packages
used
Next Js -> Packages
    import { NextResponse } from "next/server";

NEXT AUTH V5 ->
    import NextAuth from "next-auth"

Google Oauth 2.0 ->

    import Google from "next-auth/providers/google"

Mongodb -> 
    /models/user -> created a schema for user
    /lib/mongodb -> mongodb connection
        import mongoose from "mongoose";

bcrypt -> 
    / for hashing passwords
