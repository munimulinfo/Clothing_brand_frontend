import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyPage from "@/components/privacy/PrivacyPage";

const PrivacyPolicyPage = () => {
  return (
    <>
      <PrivacyHero />
      <section className="mx-auto max-w-7xl px-5 py-14">
        <PrivacyPage />
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
