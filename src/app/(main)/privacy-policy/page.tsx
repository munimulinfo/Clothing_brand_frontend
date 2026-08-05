import PrivacyContent from "@/components/privacy/PrivacyContent";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacySidebar from "@/components/privacy/PrivacySidebar";

const PrivacyPolicyPage = () => {
  return (
    <>
      <PrivacyHero />
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <PrivacySidebar />
          <PrivacyContent />
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
