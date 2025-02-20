import connectDB from "@/lib/db";
import UserModel from "@/models/UserModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    await connectDB();

    const user = await UserModel.findOne({ email: email });

    if (user) {
      return NextResponse.json(
        {
          error: "Email already registered",
        },
        {
          status: 400,
        }
      );
    }

    await UserModel.create({
      email,
      password,
    });

    return NextResponse.json(
      {
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to register User" },
      { status: 500 }
    );
  }
}
