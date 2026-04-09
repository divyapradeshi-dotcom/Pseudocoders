import { UpiVerifyPaymentPage } from "@/components/learn/UpiVerifyPaymentPage";

const contacts = {
  "rajesh-kumar": {
    name: "Rajesh Kumar",
    number: "9876543210",
  },
  "priya-sharma": {
    name: "Priya Sharma",
    number: "9876543211",
  },
  "unknown-number": {
    name: "Unknown Number",
    number: "9876543299",
  },
} as const;

export default async function UpiVerifyPaymentRoute({
  params,
  searchParams,
}: {
  params: Promise<{ contact: keyof typeof contacts }>;
  searchParams: Promise<{ amount?: string }>;
}) {
  const { contact } = await params;
  const { amount } = await searchParams;
  const selectedContact = contacts[contact] ?? contacts["rajesh-kumar"];

  return (
    <UpiVerifyPaymentPage
      contact={selectedContact}
      contactSlug={contact}
      amount={amount ?? "0"}
    />
  );
}
