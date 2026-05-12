import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import EcosystemSection from './components/EcosystemSection';
import WorkflowSection from './components/WorkflowSection';
import CompetencySection from './components/CompetencySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Contact from './pages/Contact';
import OurTeam from './pages/OurTeam';
import WorkWithUs from './pages/WorkWithUs';

const normalizeRoute = (route: string) => {
  const [pathname, hash] = route.split('#');
  const normalizedPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  return hash ? `${normalizedPath}#${hash}` : normalizedPath;
};

const getBrowserRoute = () => normalizeRoute(window.location.pathname + window.location.hash);

const scrollToHash = (route: string) => {
  const hashIndex = route.indexOf('#');
  if (hashIndex === -1) return;
  const targetId = route.slice(hashIndex + 1);
  requestAnimationFrame(() => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
};

const App: React.FC = () => {
  const [path, setPath] = useState(
    typeof window !== 'undefined' ? getBrowserRoute() : '/'
  );

  useEffect(() => {
    const onRouteChange = () => setPath(getBrowserRoute());
    window.addEventListener('popstate', onRouteChange);
    window.addEventListener('hashchange', onRouteChange);
    return () => {
      window.removeEventListener('popstate', onRouteChange);
      window.removeEventListener('hashchange', onRouteChange);
    };
  }, []);

  const navigate = (pathname: string) => {
    const normalizedPath = normalizeRoute(pathname);
    if (window.location.pathname + window.location.hash === normalizedPath) return;
    window.history.pushState(null, '', normalizedPath);
    setPath(normalizedPath);
    if (normalizedPath.includes('#')) {
      scrollToHash(normalizedPath);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  if (path === '/privacy') {
    return <PrivacyPolicy onNavigate={navigate} />;
  }

  if (path === '/terms') {
    return <TermsOfService onNavigate={navigate} />;
  }

  if (path === '/contact') {
    return <Contact onNavigate={navigate} />;
  }

  if (path === '/our-team') {
    return <OurTeam onNavigate={navigate} />;
  }

  if (path === '/work-with-us') {
    return <WorkWithUs onNavigate={navigate} />;
  }

  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar onNavigate={navigate} route={path} />
      <Hero />
      <TrustedBy />
      <EcosystemSection />
      <WorkflowSection />
      <CompetencySection />
      <CTASection onNavigate={navigate} />
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;
