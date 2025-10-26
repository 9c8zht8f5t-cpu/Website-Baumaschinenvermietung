import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: NextRequest) {
  const form = await req.formData();
  const payload = Object.fromEntries(form.entries());
  const { name, email, telefon, von, bis, plz, nachricht, maschine } = payload as Record<string,string>;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: False,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  } as any);
  const text = `Neue Anfrage
Maschine: ${maschine}
Name: ${name}
E-Mail: ${email}
Telefon: ${telefon || "-"}
Zeitraum: ${von} bis ${bis}
PLZ: ${plz}
Nachricht: ${nachricht || "-"}
`;
  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      subject: `Anfrage: ${maschine} von ${name}`,
      text
    });
    return NextResponse.redirect(new URL("/?success=1", req.url), { status: 303 });
  } catch (e) {
    console.error(e);
    return NextResponse.redirect(new URL("/?error=1", req.url), { status: 303 });
  }
}
