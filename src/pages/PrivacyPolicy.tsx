import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type PrivacyPolicyProps = {
  onNavigate?: (pathname: string) => void;
};

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen font-sans antialiased bg-white">
      <Navbar onNavigate={onNavigate} />
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl font-bold text-[#0f2d5e] mb-4">Connex AI Privacy Policy</h1>
        <p className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-8">Effective: October 4, 2025</p>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Thank you for joining Connex AI, an AI-driven technology company providing intelligent automation and workforce management solutions across the healthcare industry, including our product HealthPOD. In this Privacy Policy, Connex AI LLC (“Connex AI,” “we,” “our,” or “us”) describes the types of personal information we collect when you visit and use the connexai.org website, mobile applications, or associated services (the “Connex AI Platform”). We also describe how and why we use and share your personal information, how you can access and update it, and your other legal rights as a user. Our services are not intended for anyone under the age of 18 or outside of the United States, and our policies are designed accordingly. We will indicate changes to this Privacy Policy by updating the Effective Date above. Continued use of the Connex AI Platform after the Effective Date means you accept the latest version.
        </p>

        <section className="space-y-8 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">Personal Information We Collect</h2>
            <p>We collect and store different types of personal information depending on your activity on the Connex AI Platform, which may include device data, usage data, account data, professional credentials, job application information, and communications with employers, recruiters, or Connex AI staff.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">How We Collect Your Personal Information</h2>
            <p>We collect information that you provide directly when creating an account or using our services, as well as information automatically through cookies and other tools. We may also receive personal information from trusted third parties such as recruiters, employers, or verification partners.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">How We Use Your Personal Information</h2>
            <p>We use your personal information to operate and improve the Connex AI Platform, provide workforce matching services (including through HealthPOD), manage accounts, send notifications, comply with applicable laws, and enhance user experience.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">Data Retention</h2>
            <p>We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce agreements. When no longer needed, the data is deleted or anonymized.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">Information Sharing</h2>
            <p>We may share information with recruiters, employers, vendors, service providers, advertising partners, or when required for security, compliance, or business transactions. Information is shared only as permitted by applicable laws and user consent.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">Your Rights and Choices</h2>
            <p>You may manage cookies, unsubscribe from communications, terminate your account, or request data deletion by contacting us at contact@connexai.org. Residents of certain U.S. states may have additional rights under applicable privacy laws.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">Security</h2>
            <p>Connex AI implements reasonable technical and organizational safeguards to protect your information. However, no system is completely secure, and we cannot guarantee absolute security.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">Children’s Information</h2>
            <p>Connex AI does not knowingly collect or store information from individuals under the age of 16. If such data is discovered, it will be deleted promptly.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">Contact Us</h2>
            <p>Connex AI LLC</p>
            <p>159 N Wolcott St Ste 133, Casper, WY 82601</p>
            <p>Mailing: 1603 Capitol Ave Ste 415 #220478, Cheyenne, WY 82001</p>
            <p>Email: <a href="mailto:contact@connexai.org" className="text-[#0f2d5e] hover:underline">contact@connexai.org</a></p>
            <p>Website: <a href="https://www.connexai.org" className="text-[#0f2d5e] hover:underline">www.connexai.org</a></p>
          </div>
        </section>

        {/* <div className="mt-10">
          <a
            href="/"
            onClick={handleBack}
            className="inline-flex items-center rounded-full bg-[#0f2d5e] px-5 py-3 text-white text-sm font-semibold hover:bg-[#0a1f42] transition-colors"
          >
            Back to Home
          </a>
        </div> */}
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default PrivacyPolicy;
