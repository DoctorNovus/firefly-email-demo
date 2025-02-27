import { Html, Button, Tailwind, Section, Text, Link, Img, Column } from "@react-email/components";

export default function EmailSuccessEmail({ url }) {
    return (
        <Html lang="en">
            <Tailwind config={{
                theme: {
                    extend: {
                        colors: {
                            brand: "#ed1c24",
                        },
                    },
                },
            }}>
                <Section className="w-full h-full flex flex-col gap-2 justify-center p-4 ">
                    <Section className="flex flex-row gap-2 items-center">
                        <Column align='left'>
                            <Section className="flex w-12 h-12 items-center justify-center">
                                <Img
                                    className='w-12 h-12'
                                    src="https://www.ottegi.com/icon.png" alt="logo" />
                            </Section>
                        </Column>
                        <Column align='right'>
                            <Text className="text-lg">OTTEGI</Text>
                        </Column>
                    </Section>
                    <Section className="flex flex-col gap-1">
                        <Text>Thank you for choosing Ottegi!</Text>
                        <Text>Your Order ID is # 0001.</Text>
                    </Section>
                    <Section>
                        <Link href="https://www.ottegi.com">
                            <Button className="bg-brand text-white px-2 py-1 rounded-lg items-center justify-center text-base">View Order</Button>
                        </Link>
                    </Section>
                </Section>

            </Tailwind>
        </Html>
    );
}