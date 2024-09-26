// import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
// import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { body } = await req.json();
  const { email, sujet, message } = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["narcissedesire4@gmail.com"],
      subject: "Akory aby e",
      react: (
        <>
          <h1>{sujet}</h1>
          <p>Merci de nous avoir contacté</p>
          <p>Nouveau message :</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
