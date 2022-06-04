import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5e6b241bc38616",
    pass: "71a8db73fb8b6b",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Feedback Widget Team <feedback@widget.com>",
      to: "Diego Ferreira <diegoferreira777@hotmail.com>",
      subject,
      html: body,
    });
  }
}
