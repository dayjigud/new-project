import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export default async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'dayjigud@gmail.com',
      subject: `New message from ${name}`,
      html: `<p>You have a new message from ${name} (${email}):</p><p>${message}</p>`,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
