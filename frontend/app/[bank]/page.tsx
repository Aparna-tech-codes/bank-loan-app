import Link from "next/link";

const loans = [
  { title: "Personal Loan", desc: "Quick funds for your needs", type: "personal" },
  { title: "Gold Loan", desc: "Instant loan against gold", type: "gold" },
  { title: "Business Loan", desc: "Grow your business", type: "business" },
];

export default async function LandingPage({
  params,
}: {
  params: Promise<{ bank: string }>;
}) {
  const { bank } = await params; // ✅ FIX

  return (
    <div className="space-y-8">

      {/* HERO */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">Apply for a Loan</h1>
        <p className="text-gray-500 mt-2">
          Simple, fast and secure application process
        </p>
      </div>

      {/* CARDS */}
      <div className="grid gap-6 md:grid-cols-3">
        {loans.map((loan) => (
          <Link
            key={loan.type}
            href={`/${bank}/loan/${loan.type}`} // ✅ FIX
            className="group"
          >
            <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all border">
              <h2 className="text-lg font-semibold group-hover:text-blue-600">
                {loan.title}
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                {loan.desc}
              </p>

              <button className="mt-4 text-sm font-medium text-blue-600">
                Apply →
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}