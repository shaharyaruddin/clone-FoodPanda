import connectDatabase from "@/dbConfig/dbConfig";
import User from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/app/helper/mailer";

connectDatabase();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log(reqBody);
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSaltSync(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const newUSer = new User({
      username,
      email,
      password: hashPassword,
    });

    //saved

    const savedUser = await newUSer.save();
    console.log(savedUser);

    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    return NextResponse.json({
      message: "User registered successfuly ",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
