import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Webspires terms and conditions of service — covering payment terms, intellectual property, client responsibilities, and governing law.",
  alternates: {
    canonical: "https://www.webspires.com.pk/terms-and-conditions",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-brand-red font-heading font-semibold text-sm uppercase tracking-widest mb-3">
          Legal
        </p>
        <h1 className="font-heading font-extrabold text-5xl text-white mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-brand-gray mb-12">Last updated: January 2025</p>

        <div className="space-y-8">
          {[
            {
              title: "1. Services",
              content:
                "Webspires provides web development, digital marketing, SEO, GEO optimisation, and related services. The scope of work for each project is agreed upon in writing before work begins.",
            },
            {
              title: "2. Payment Terms",
              content:
                "Payment terms are agreed on a per-project basis and outlined in your proposal. Late payments may incur interest charges. We reserve the right to pause work on accounts with outstanding balances.",
            },
            {
              title: "3. Intellectual Property",
              content:
                "Upon full payment, all deliverables created for you become your property. We retain the right to display completed work in our portfolio unless otherwise agreed in writing.",
            },
            {
              title: "4. Client Responsibilities",
              content:
                "You are responsible for providing accurate information, timely feedback, and any assets required to complete your project. Delays caused by the client may affect project timelines.",
            },
            {
              title: "5. Limitation of Liability",
              content:
                "Webspires is not liable for indirect, incidental, or consequential damages. Our total liability for any claim is limited to the amount paid for the specific service in question.",
            },
            {
              title: "6. Termination",
              content:
                "Either party may terminate an agreement with 30 days written notice. Work completed up to the termination date will be invoiced and payable.",
            },
            {
              title: "7. Governing Law",
              content:
                "These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-heading font-bold text-white text-xl mb-3">
                {section.title}
              </h2>
              <p className="text-brand-gray leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
