import { UpiPaymentDetailsPage } from "@/components/learn/UpiPaymentDetailsPage";

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

export default async function UpiPaymentDetailsRoute({
  params,
}: {
  params: Promise<{ contact: keyof typeof contacts }>;
}) {
  const { contact } = await params;
  const selectedContact = contacts[contact] ?? contacts["rajesh-kumar"];

  return <UpiPaymentDetailsPage contact={selectedContact} contactSlug={contact} />;
}
