import { Controller, Get, Inject } from "@outwalk/firefly";
import { EmailService } from "./email/email.service";

@Controller()
export class AppController {

    @Inject() emailService: EmailService;

    @Get()
    async getHelloWorld() {
        await this.emailService.sendCheckoutSuccessEmail();

        return "Hello World!";
    }
}