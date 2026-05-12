import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type TermsOfServiceProps = {
  onNavigate?: (pathname: string) => void;
};

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen font-sans antialiased bg-white">
      <Navbar onNavigate={onNavigate} />
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl font-bold text-[#0f2d5e] mb-4">Connex AI Terms of Use</h1>
        <p className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-8">Effective: October 4, 2025</p>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          These Terms of Use (“Terms”) are a legal agreement between you and Connex AI LLC (“Connex AI,” “we,” “our,” or “us”) governing your use of the Connex AI website, mobile applications, and services (collectively, the “Platform”), including but not limited to HealthPOD. By accessing or using the Platform, you agree to these Terms.
        </p>

        <section className="space-y-8 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">1. Eligibility</h2>
            <p> The Platform is intended for users aged 18 or older located in the United States. By using the Platform, you confirm you meet these requirements.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">2. User Accounts</h2>
            <p>You may be required to create an account to access certain features. You agree to provide accurate information, maintain confidentiality, and accept responsibility for activity under your account.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">3. Professional & Employer Accounts</h2>
            <p>Healthcare professionals and recruiters using HealthPOD or other Connex AI products agree to submit accurate information for employment and hiring purposes and consent to verification processes.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">4. Intellectual Property</h2>
            <p>All content, logos, software, and technology on the Platform are owned by Connex AI LLC. Users are granted a limited, non-transferable, revocable license to use the Platform in accordance with these Terms.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">5. User Content</h2>
            <p>Users may post resumes, listings, or data ("User Content"). By submitting such content, you grant Connex AI a non-exclusive license to use it solely to operate and promote the Platform.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">6. Prohibited Conduct</h2>
            <p>You may not misuse the Platform, submit false data, interfere with security, or violate any applicable laws including healthcare and data protection regulations.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">7. Disclaimer</h2>
            <p>The Platform is provided "as is" without warranties of any kind. Connex AI does not guarantee uninterrupted service or endorse specific listings or professionals.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Connex AI is not liable for any damages resulting from your use or inability to use the Platform.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">9. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Connex AI and its affiliates from claims, losses, or liabilities resulting from your breach of these Terms.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">10. Termination</h2>
            <p>We may suspend or terminate access to the Platform at any time for violations or misuse.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">11. Governing Law & Dispute Resolution</h2>
            <p>These Terms are governed by the laws of the State of Wyoming. Disputes shall be resolved in state or federal courts located in Wyoming.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">12. Modifications</h2>
            <p>Connex AI may modify these Terms at any time. Continued use after updates constitutes acceptance.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">13. Contact Us</h2>
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

export default TermsOfService;
