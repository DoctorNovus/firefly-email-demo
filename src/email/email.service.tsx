import { Injectable } from "@outwalk/firefly";
import { Resend } from 'resend';

import CheckoutSuccessEmail from "@components/CheckoutSuccessEmail";

@Injectable()
export class EmailService {
    resend = new Resend(process.env.RESEND_API_KEY);

    async sendCheckoutSuccessEmail() {
        await this.resend.emails.send({
            from: 'Ottegi Support <support@ottegi.com>',
            to: 'daniel@ottegi.com',
            subject: 'Customer Checkout Complete',
            react: <CheckoutSuccessEmail url="https://example.com" />,
        });
    }
}