import { writeFile } from "fs/promises";
import path from "path";
import { PDFDocument, rgb } from "pdf-lib";
import nodemailer, { SendMailOptions } from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";
import { Buffer } from "buffer";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const filePath = path.resolve("public", "data.pdf");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const formData = req.body;

    try {
      const pdfBytes = await generatePDF(formData);
      await writeFile(filePath, pdfBytes);

      const mailOptions: SendMailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL_TO,
        subject: "Nuevo formulario de inscripción",
        text: `Se ha enviado un nuevo formulario.\nNombre: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nPrograma: ${formData.program}\nOrientación: ${formData.orientation}`,
        attachments: [
          {
            filename: "Pre-Inscripcion.pdf",
            content: Buffer.from(pdfBytes),
          },
        ],
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({
        message:
          "Formulario enviado exitosamente y correo electrónico enviado.",
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        error:
          "Error al procesar el formulario y enviar el correo electrónico.",
      });
    }
  } else {
    res.status(405).json({ error: "Método no permitido." });
  }
};

async function generatePDF(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  program: string;
  orientation: string;
}): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();

  // Dibujamos los datos del formulario en el PDF
  const { firstName, lastName, email, phone, program, orientation } = formData;

  page.drawText(`Nombre: ${firstName} ${lastName}`, {
    x: 50,
    y: 700,
    size: 24,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Email: ${email}`, {
    x: 50,
    y: 670,
    size: 24,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Teléfono: ${phone}`, {
    x: 50,
    y: 640,
    size: 24,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Programa: ${program}`, {
    x: 50,
    y: 550,
    size: 24,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Orientación: ${orientation}`, {
    x: 50,
    y: 520,
    size: 24,
    color: rgb(0, 0, 0),
  });

  return pdfDoc.save();
}
