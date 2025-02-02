import User from "@/models/userModal";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userID }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userID.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndDelete(userID, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndDelete(userID, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }
    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "6adb1691408e35",
        pass: "df34c09c566d87",
      },
    });
    const mailOption = {
      from: "raza@arain.ai",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }
        or copy and paste the link below in your browser. <br> ${
          process.env.DOMAIN
        }/verifyemail?token=${hashedToken}
        </p>`,
    };
    const mailResponse = await transport.sendMail(mailOption);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
