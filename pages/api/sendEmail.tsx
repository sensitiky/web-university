import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, selectedOption,selectedSubOption, message } = req.body;

      if (!name || !email || !selectedOption || !selectedSubOption ) {
        return res.status(400).json({ error: 'Por favor, complete todos los campos.' });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'Nuevo Mensaje.',
        text: `Nombre: ${name}\nEmail: ${email}\nInterés: ${selectedOption.label}\nÁrea: ${selectedSubOption.label}\nMensaje: ${message}`,
        html: `<p>Nombre: ${name}</p><p>Email: ${email}</p><p>Interés: ${selectedOption.label}</p><p>Área: ${selectedSubOption.label}</p><p>Mensaje: ${message}</p>`,
      };

      const info = await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: 'Email enviado correctament.!' });
    } catch (error) {
      console.error('Error enviando el email:', error);
      return res.status(500).json({ error: 'Error al enviar el email. Por favor intente nuevamente más tarde.' });
    }
  } else {
    return res.status(405).json({ error: 'Método no permitido' });
  }
}