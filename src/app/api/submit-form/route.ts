import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Ensure the API key is set
const sendGridApiKey = process.env.SENDGRID_API_KEY;
if (!sendGridApiKey) {
  throw new Error("SENDGRID_API_KEY is not set in environment variables");
}

sgMail.setApiKey(sendGridApiKey);

export async function POST(request: Request) {
  const { email, interests, otherInterest } = await request.json();

  // Ensure the from email is set
  const fromEmail = process.env.SENDGRID_FROM_EMAIL;
  if (!fromEmail) {
    throw new Error("SENDGRID_FROM_EMAIL is not set in environment variables");
  }

  const msg = {
    to: "early-access-request@comra.ai",
    from: fromEmail,
    subject: "New Early Access Request",
    text: `
      Email: ${email}
      Interests: ${interests.join(", ")}
      Other Interest: ${otherInterest}
    `,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error submitting form" },
      { status: 500 }
    );
  }
}
