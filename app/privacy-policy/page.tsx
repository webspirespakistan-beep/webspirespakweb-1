import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Webspires privacy policy — how we collect, use, and protect your data. Learn about your rights under GDPR and UK data protection law.",
  alternates: {
    canonical: "https://www.webspires.com.pk/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-brand-red font-heading font-semibold text-sm uppercase tracking-widest mb-3">
          Legal
        </p>
        <h1 className="font-heading font-extrabold text-5xl text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-brand-gray mb-12">Last updated: January 2025</p>

        <div className="wp-content space-y-8">
          {[
            {
              title: "1. Information We Collect",
              content:
                "We collect information you provide directly to us, such as when you fill out our contact form, including your name, email address, phone number, and any messages you send. We also collect usage data through analytics tools to improve our website and services.",
            },
            {
              title: "2. How We Use Your Information",
              content:
                "We use the information we collect to respond to your enquiries, provide our services, improve our website, and communicate with you about our services. We do not sell your personal data to third parties.",
            },
            {
              title: "3. Data Storage and Security",
              content:
                "Your data is stored securely and we implement appropriate technical and organisational measures to protect it against unauthorised access, alteration, disclosure, or destruction.",
            },
            {
              title: "4. Cookies",
              content:
                "We use cookies to improve your browsing experience and analyse website traffic. You can control cookie settings through your browser preferences.",
            },
            {
              title: "5. Your Rights",
              content:
                "Under GDPR and UK data protection law, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at hello@webspires.com.pk.",
            },
            {
              title: "6. Contact",
              content:
                "If you have questions about this privacy policy or how we handle your data, email us at hello@webspires.com.pk.",
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
