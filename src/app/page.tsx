// page.tsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div style={{backgroundColor: '#001454'}}>
        <Navbar />
        
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column - Text Content */}
              <div className="text-left">
                {/* Titre principal avec texte blanc */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Connecting Top Interpreter Talent with Global Opportunities—<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#6a87ff]">On Demand</span>.
                </h1>
                
                {/* Barre de recherche complète */}
                <div className="max-w-xl mb-8">
                  <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center bg-white rounded-lg shadow-sm border border-gray-200 p-2">
                    {/* Input de recherche */}
                    <div className="flex-1 flex items-center px-4 py-3">
                      <input 
                        type="text" 
                        placeholder="Type job keyword"
                        className="w-full text-gray-600 font-medium outline-none bg-transparent"
                      />
                    </div>
                    
                    {/* Séparateur vertical */}
                    <div className="h-8 w-px bg-gray-300 hidden sm:block"></div>
                    
                    {/* Dropdown Job/Talent */}
                    <div className="flex items-center px-4 py-3 text-gray-600 font-medium cursor-pointer">
                      <span>Job</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    
                    {/* Séparateur vertical */}
                    <div className="h-8 w-px bg-gray-300 hidden sm:block"></div>
                    
                    {/* Bouton de recherche */}
                    <div className="bg-[#0027A8] text-white rounded-lg px-6 py-3 font-semibold cursor-pointer flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Search
                    </div>
                  </div>
                </div>
                
                {/* Section Trusted By */}
                <div className="mb-8">
                  <p className="text-white mb-6 text-lg font-medium">Trusted by 1000+ Business</p>
                  
                  {/* Logos des entreprises */}
                  <div className="flex flex-wrap items-center gap-8 opacity-90">
                    <div className="text-white font-semibold text-lg">Sisyphus</div>
                    <div className="text-white font-semibold text-lg">Biosynthesis</div>
                    <div className="text-white font-semibold text-lg">Command</div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-3 bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-200">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-800 font-medium">6700+ Jobs Available</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-200">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-800 font-medium">100% Remote</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-200">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-800 font-medium">Great Job</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
{/* Right Column - Image */}
<div className="flex justify-center lg:justify-end">
  <div className="relative w-full max-w-lg">

    {/* Background Shape (green) */}
    <Image
      src="/image7.png"
      alt="Green background shape"
      width={900}
      height={900}
      className="
        absolute 
        -top-10
        -left-20     /* Déplacé à gauche */
        w-[480px]    /* Légèrement plus petit */
        opacity-80
        mix-blend-screen
        pointer-events-none
        select-none
      "
    />

    {/* Blue Circle with Man Image */}
    <div
      className="
        relative
        w-full
        aspect-square
        bg-[#0028A8]
        rounded-full
        shadow-2xl
        border
        border-blue-800
        overflow-visible   /* Permet à l'image de sortir du cercle */
      "
    >
      <Image
        src="/home.png"
        alt="Global interpreter network"
        fill
        className="
          object-cover
          translate-y-13
          
        "
        priority
      />
    </div>
  </div>
</div>

            </div>
          </div>
        </main>
      </div>

   {/* ==================== BRANDS TRUST SECTION ==================== */}
<div className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Leading brands trust our on-demand interpreter marketplace.
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Whether you need 5, 10, 20, or 100 professional interpreters — access the world’s best language talent instantly.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Feature 1 */}
      <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Pricing Flexibility</h3>
        <p className="text-gray-600">Access competitive rates from qualified interpreters worldwide.</p>
      </div>

      {/* Feature 2 */}
      <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Availability</h3>
        <p className="text-gray-600">Connect with interpreters across all time zones, whenever you need them.</p>
      </div>

      {/* Feature 3 */}
      <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Any Language, Any Location</h3>
        <p className="text-gray-600">Source native speakers from over 100 countries.</p>
      </div>

      {/* Feature 4 */}
      <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Deployment</h3>
        <p className="text-gray-600">Scale your interpretation services up or down within hours.</p>
      </div>

      {/* Feature 5 */}
      <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Transparency</h3>
        <p className="text-gray-600">Full visibility and control over assignments, quality, and costs.</p>
      </div>

      {/* Feature 6 */}
      <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Engagements</h3>
        <p className="text-gray-600">From one-time calls to long-term projects, customize duration to your needs.</p>
      </div>
    </div>
  </div>
</div>

{/* ==================== CTA SECTION ==================== */}
{/* ==================== CTA SECTION ==================== */}
<div className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Interpreter CTA - GRAY CARD */}
      <div className="bg-[#515250] p-10 rounded-xl shadow-md border border-gray-200 flex items-center">
 
  <div className="flex-1 text-left">
    <h3 className="text-2xl font-bold text-[#FFFF] mb-4">
      I’m looking for interpretation <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#6a87ff]">Work</span>
    </h3>
    <p className="text-[#FFFF] mb-6">
      Join our global network of professional interpreters. Connect with companies worldwide and get hired for projects that match your expertise.
    </p>
    <button className="bg-[#0a36ff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition duration-200">
      Create Interpreter Account
    </button>
  </div>
  <img
    src="/image3.png"
    alt="Interpreter Illustration"
    className="w-40 h-40 object-cover ml-8"
  />
</div>

      {/* Client CTA - BLUE CARD */}
      <div className="bg-[#001454] p-10 rounded-xl shadow-md border border-gray-200 flex items-center text-white">
  {/* Texte à gauche */}
  <div className="flex-1">
    <h3 className="text-2xl font-bold mb-4">
      I need interpreters for my{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#6a87ff]">
        project
      </span>
    </h3>

    <p className="text-gray-200 mb-6">
      Access thousands of professional interpreters on-demand. Manage all your language service needs in one place.
    </p>

    <button className="bg-[#0a36ff] px-8 py-4 rounded-lg font-semibold hover:bg-[#0a36ff] transition duration-200">
      Create Client Account
    </button>
  </div>

  
  <img
    src="/image2.png"
    alt="Client Illustration"
    className="w-40 h-50 object-contain ml-10"
  />
</div>

    </div>
  </div>
</div>

      {/* Smarter Way Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Smarter Way to Source Interpretation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your multilingual operations with on-demand access to thousands of professional interpreters worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Zero recruitment costs</h3>
              <p className="text-gray-600">Pre-vetted interpreters ready to work.</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">No infrastructure needed</h3>
              <p className="text-gray-600">Interpreters use their own equipment.</p>
            </div>
            
            {/* Benefit 3 */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Instant scalability</h3>
              <p className="text-gray-600">From urgent one-off calls to major international events</p>
            </div>
            
            {/* Benefit 4 */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 coverage</h3>
              <p className="text-gray-600">Round-the-clock availability across all time zones</p>
            </div>
            
            {/* Benefit 5 */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pay-as-you-go</h3>
              <p className="text-gray-600">Only pay for actual interpretation time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Defirlex Advantage Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Defirlex Advantage</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">150,000+ Active Interpreters</h3>
                <p className="text-gray-600">
                  The largest network of pre-qualified language professionals.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven at Scale</h3>
                <p className="text-gray-600">
                  Trusted by Fortune 500 companies for mission-critical communications.
                </p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No upfront costs</h3>
                <p className="text-gray-600">
                  Start your next project with no subscription or hidden fees. You only pay when you hire the right fit for your needs.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Matching Technology</h3>
                <p className="text-gray-600">Connect with the right interpreter in seconds.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready-Now Workforce</h3>
                <p className="text-gray-600">No testing, no recruiting—interpreters available 24/7</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Intelligent Compliance</h3>
                <p className="text-gray-600">
                  Our platform provides secure, AI-powered solutions for regulated industries, automatically ensuring data protection and compliance with standards like HIPAA and GDPR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}