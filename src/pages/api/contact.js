import nodemailer from "nodemailer";
import path from "path";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // ===========================
    // Email to Customer
    // ===========================

    await transporter.sendMail({
      from: `"SHANTI JEWELLLER" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting us",
      html: `
      <!DOCTYPE html>
      <html>
      <head>
      <meta charset="UTF-8">
      <title>Thank You</title>
      </head>
      
      <body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
      
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
      <tr>
      <td align="center">
      
      <table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08);">
      
      <!-- Header -->
      
      <tr>
      <td align="center" style="background:#6d2a46;padding:35px;">
      
      <img
    //   src="cid:companylogo"
     src="${process.env.DOMAIN}/images/logo.png"
      alt="Shanti Jeweller"
      style="height:70px;margin-bottom:15px;"
      />
      
      </td>
      </tr>
      
      <!-- Body -->
      
      <tr>
      <td style="padding:40px;">
      
      <h2 style="margin:0;color:#222;">
      Hello ${name},
      </h2>
      
      <p style="margin-top:25px;color:#555;font-size:16px;line-height:28px;">
      
      Thank you for contacting
      <b style="color:#6D2A46;">Shanti Jeweller</b>.
      
      <br><br>
      
      We have successfully received your enquiry.
      
      Our team will review your request and contact you as soon as possible.
      
      </p>
      
      <!-- Card -->
      
      <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      style="
      margin-top:35px;
      background:#faf8f1;
      border:1px solid #e7d7a7;
      border-radius:10px;
      "
      >
      
      <tr>
      <td colspan="2"
      style="
      padding:18px 25px;
      background:#f2d4d2;
      color:#111;
      font-size:20px;
      font-weight:bold;
      ">
      Your Enquiry Details
      </td>
      </tr>
      
      <tr>
      <td style="padding:18px 25px;font-weight:bold;color:#444;width:150px;">
      Name
      </td>
      
      <td style="padding:18px 25px;color:#666;">
      ${name}
      </td>
      </tr>
      
      <tr style="background:#ffffff;">
      <td style="padding:18px 25px;font-weight:bold;color:#444;">
      Email
      </td>
      
      <td style="padding:18px 25px;color:#666;">
      ${email}
      </td>
      </tr>
      
      <tr>
      <td style="padding:18px 25px;font-weight:bold;color:#444;">
      Phone
      </td>
      
      <td style="padding:18px 25px;color:#666;">
      ${phone}
      </td>
      </tr>
      
      <tr style="background:#ffffff;">
      <td style="padding:18px 25px;font-weight:bold;color:#444;">
      Message
      </td>
      
      <td style="padding:18px 25px;color:#666;">
      ${message}
      </td>
      </tr>
      
      </table>
      
      <!-- Button -->
      
      <div style="text-align:center;margin-top:40px;">
      
      <a
      href="https://yourwebsite.com"
      style="
      display:inline-block;
      background:#6d2a46;
      color:#f2d4d2;
      padding:15px 35px;
      text-decoration:none;
      border-radius:50px;
      font-weight:bold;
      font-size:16px;
      "
      >
      
      Visit Our Website
      
      </a>
      
      </div>
      
      <p style="margin-top:40px;color:#555;line-height:28px;font-size:16px;">
      
      Thank you once again for choosing us.
      
      We look forward to serving you.
      
      </p>
      
      <p style="margin-top:40px;line-height:28px;color:#333;">
      
      Warm Regards,
      
      <br>
      
      <b style="color:#6D2A46;font-size:18px;">
      SHANTI JEWELLER
      </b>
      
      </p>
      
      </td>
      </tr>
      
      <!-- Footer -->
      
      <tr>
      
      <td
      align="center"
      style="
      background:#6d2a46;
      padding:30px;
      color:#cccccc;
      font-size:14px;
      line-height:26px;
      "
      >
      
      <b style="color:#f2d4d2;font-size:18px;">
      SHANTI JEWELLER
      </b>
      
      <br><br>
      
      📍 M/S. Swarn Shanti CZ Gold Jewellery, Unit No-71, Apollo Industrial Estate, Off Mahakali Caves Road, Andheri (E), Mumbai - 400093.
      
      <br>
      
      📞 +91 9820987528
      
      <br>
      
     <a
     href="mailto:sales@swarnshantijewels.com"
     style="
      color:#ffffff;
      text-decoration:none;
      font-weight:500;"
      >
      ✉ sales@swarnshantijewels.com
    </a>    
      
      <br><br>
      
      <span style="color:#B9376B;">
      © ${new Date().getFullYear()} Shanti Jeweller.
      All Rights Reserved.
      </span>
      
      </td>
      
      </tr>
      
      </table>
      
      </td>
      </tr>
      </table>
      
      </body>
      </html>
      `,
    });

    // ===========================
    // Email to Admin
    // ===========================

    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.ADMIN_EMAIL,
      subject: `New Enquiry from ${name}`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
      <meta charset="UTF-8" />
      <title>New Enquiry</title>
      </head>
      
      <body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
      
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;background:#f5f5f5;">
      <tr>
      <td align="center">
      
      <table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">
      
      <!-- Header -->
      
      <tr>
      <td align="center" style="background:#6D2A46;padding:30px;">
            <img
    //   src="cid:companylogo"
     src="${process.env.DOMAIN}/images/logo.png"
      alt="Shanti Jeweller"
      style="height:70px;margin-bottom:15px;"
      />
      <h1 style="margin:0;color:#ffffff;font-size:28px;">
      New Enquiry Received
      </h1>
      
      <p style="margin:10px 0 0;color:#F2D4D2;font-size:15px;">
      A new enquiry has been submitted from the website.
      </p>
      
      </td>
      </tr>
      
      <!-- Body -->
      
      <tr>
      <td style="padding:35px;">
      
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e6e6e6;">
      
      <tr style="background:#F2D4D2;">
      <td colspan="2" style="padding:16px 20px;font-size:20px;font-weight:bold;color:#6D2A46;">
      Customer Details
      </td>
      </tr>
      
      <tr>
      <td width="180" style="padding:15px 20px;font-weight:bold;background:#fafafa;border-bottom:1px solid #e6e6e6;">
      Name
      </td>
      
      <td style="padding:15px 20px;border-bottom:1px solid #e6e6e6;">
      ${name}
      </td>
      </tr>
      
      <tr>
      <td style="padding:15px 20px;font-weight:bold;background:#fafafa;border-bottom:1px solid #e6e6e6;">
      Email
      </td>
      
      <td style="padding:15px 20px;border-bottom:1px solid #e6e6e6;">
      <a href="mailto:${email}" style="color:#6D2A46;text-decoration:none;">
      ${email}
      </a>
      </td>
      </tr>
      
      <tr>
      <td style="padding:15px 20px;font-weight:bold;background:#fafafa;border-bottom:1px solid #e6e6e6;">
      Phone
      </td>
      
      <td style="padding:15px 20px;border-bottom:1px solid #e6e6e6;">
      ${phone}
      </td>
      </tr>
      
      <tr>
      <td style="padding:15px 20px;font-weight:bold;background:#fafafa;border-bottom:1px solid #e6e6e6;">
      Subject
      </td>
      
      <td style="padding:15px 20px;border-bottom:1px solid #e6e6e6;">
      ${subject || "-"}
      </td>
      </tr>
      
      <tr>
      <td style="padding:15px 20px;font-weight:bold;background:#fafafa;vertical-align:top;">
      Message
      </td>
      
      <td style="padding:15px 20px;line-height:26px;white-space:pre-wrap;">
      ${message}
      </td>
      </tr>
      
      </table>
      
      <div style="margin-top:30px;text-align:center;">
      
      <a
      href="mailto:${email}"
      style="
      display:inline-block;
      background:#6D2A46;
      color:#ffffff;
      padding:14px 28px;
      text-decoration:none;
      border-radius:6px;
      font-weight:bold;
      font-size:15px;
      "
      >
      Reply to Customer
      </a>
      
      </div>
      
      </td>
      </tr>
      
      <!-- Footer -->
      
      <tr>
      <td
      align="center"
      style="
      background:#6D2A46;
      padding:25px;
      color:#ffffff;
      font-size:14px;
      line-height:24px;
      "
      >
      
      <b style="font-size:18px;">
      SHANTI JEWELLER
      </b>
      
      <br><br>
      
      This is an automated enquiry notification from your website.
      
      <br><br>
      
      © ${new Date().getFullYear()} SHANTI JEWELLER. All Rights Reserved.
      
      </td>
      </tr>
      
      </table>
      
      </td>
      </tr>
      </table>
      
      </body>
      </html>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
}
