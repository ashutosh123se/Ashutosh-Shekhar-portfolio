import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(1),
  budget: z.string().optional(),
  message: z.string().min(20),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    // Save to Neon Database via Prisma
    await prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject,
        budget: data.budget,
        message: data.message,
      },
    });

    try {
      // Only attempt to send emails if SMTP_USER and SMTP_PASS exist
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        // Configure transporter
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: Number(process.env.SMTP_PORT) || 587,
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        // Send email to admin
        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
          to: "ashutoshshekhar37@gmail.com",
          subject: `[Portfolio] ${data.subject} — from ${data.name}`,
          html: `
            <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #0d0d1a; color: #f5f5fa; padding: 32px; border-radius: 12px;">
              <h2 style="color: #f0c040; margin-bottom: 24px;">New Portfolio Message</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #9090b0; font-size: 13px;">Name</td><td style="color: #f5f5fa;">${data.name}</td></tr>
                <tr><td style="padding: 8px 0; color: #9090b0; font-size: 13px;">Email</td><td style="color: #f5f5fa;">${data.email}</td></tr>
                <tr><td style="padding: 8px 0; color: #9090b0; font-size: 13px;">Subject</td><td style="color: #f5f5fa;">${data.subject}</td></tr>
                ${data.budget ? `<tr><td style="padding: 8px 0; color: #9090b0; font-size: 13px;">Budget</td><td style="color: #f5f5fa;">${data.budget}</td></tr>` : ""}
              </table>
              <div style="margin-top: 20px; padding: 16px; background: #08080f; border-radius: 8px; border-left: 3px solid #f0c040;">
                <p style="color: #9090b0; font-size: 13px; margin-bottom: 8px;">Message:</p>
                <p style="color: #f5f5fa; line-height: 1.6;">${data.message.replace(/\n/g, "<br>")}</p>
              </div>
              <p style="color: #505070; font-size: 12px; margin-top: 24px;">Sent from ashutoshshekhar.dev portfolio</p>
            </div>
          `,
        });

        // Auto-reply to sender
        await transporter.sendMail({
          from: `"Ashutosh Shekhar" <${process.env.SMTP_USER}>`,
          to: data.email,
          subject: "Thank you for reaching out - Ashutosh Shekhar",
          html: `
            <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #0d0d1a; color: #f5f5fa; padding: 32px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
              <p style="color: #f5f5fa; font-size: 16px;">Dear <strong>${data.name}</strong>,</p>
              
              <p style="color: #9090b0; line-height: 1.7; margin: 16px 0; font-size: 15px;">
                Thank you for reaching out to us. We have received your query successfully and appreciate your interest. I am currently reviewing your request and will get back to you as soon as possible with the required information.
              </p>

              <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.05);">
                <p style="color: #9090b0; font-size: 15px; margin: 0 0 8px 0;">Best regards,</p>
                <p style="color: #f0c040; font-weight: bold; font-size: 16px; margin: 0;">Ashutosh Shekhar</p>
              </div>
            </div>
          `,
        });
      } else {
        console.log("SMTP credentials missing. Message saved to DB only.");
      }
    } catch (emailError) {
      console.error("Failed to send email notifications, but message was saved to DB:", emailError);
    }

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed", details: error.issues }, { status: 400 });
    }
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Failed to send message. Please check database configuration." }, { status: 500 });
  }
}
