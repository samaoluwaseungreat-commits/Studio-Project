/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Approach } from './components/Approach';
import { Packages } from './components/Packages';
import { CreativeNetwork } from './components/CreativeNetwork';
import { Portfolio } from './components/Portfolio';
import { CampaignShowcase } from './components/CampaignShowcase';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Packages />
        <CreativeNetwork />
        <Portfolio />
        <CampaignShowcase />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
