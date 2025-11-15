export default function Footer() {
  return (
    <footer className="bg-[#515250] text-white pt-0">

  {/* SECTION BLEUE AVEC TRIANGLES ET BLOC CENTRÉ */}
  <div className="relative bg-[#515250]  flex justify-center">

    {/* === TRIANGLE GAUCHE === */}
    <div className="absolute -top-10 left-[50%] -translate-x-[600px]
        w-0 h-0
        border-l-[90px] border-l-transparent
        border-b-[90px] border-b-[#001454]">
    </div>

    {/* === TRIANGLE DROIT === */}
    <div className="absolute -top-10 right-[50%] translate-x-[600px]
        w-0 h-0
        border-r-[90px] border-r-transparent
        border-b-[90px] border-b-[#001454]">
    </div>

    {/* === LE BLOC PRINCIPAL QUI NE PREND PAS TOUTE LA LARGEUR === */}
    <div className="bg-[#001454] rounded-b-3xl shadow-2xl w-[70%] max-w-[1600px] p-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* ==== COLONNE GAUCHE ==== */}
        <div>
          <h3 className="text-4xl font-extrabold leading-tight mb-6 font-serif">
            I'm looking for interpretation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#6a87ff]">
              work
            </span>
          </h3>

          <p className="text-gray-200 mb-8 leading-relaxed text-lg">
            Join our global network of professional interpreters. Connect with companies
            worldwide, and get hired for projects that match your expertise.
          </p>

          <button className="bg-[#0a36ff] hover:bg-[#0c2ce0] text-white font-semibold px-8 py-4 rounded-lg transition">
            Create Interpreter Account
          </button>
        </div>

        {/* ==== COLONNE DROITE ==== */}
        <div>
          <h3 className="text-4xl font-extrabold leading-tight mb-6 font-serif">
            I need interpreters for my <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#6a87ff]">
              project
            </span>
          </h3>

          <p className="text-gray-200 mb-8 leading-relaxed text-lg">
            Access verified interpretation talent on-demand. Post your requirements,
            hire skilled interpreters instantly, and manage all your language
            service needs in one place.
          </p>

          <button className="bg-[#0a36ff] hover:bg-[#0c2ce0] text-white font-semibold px-8 py-4 rounded-lg transition">
            Create Client Account
          </button>
        </div>

      </div>

    </div>
  </div>

     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blogs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Important Link</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Login Now</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Post a Job</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Find a Talent</a></li>
            </ul>
          </div>

          {/* Terms */}
          <div>
            <h3 className="text-lg font-bold mb-4">Terms</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Billing Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p>10000 Biscayne Blvd Suite 205,</p>
              <p>Miami, FL 33138</p>
              <p className="mt-2">+1 (888) 920-2548</p>
              <p>contact@jobfries.com</p>
            </address>
            <div className="mt-4">
              <h4 className="font-bold mb-2">Follow Us</h4>
              {/* Ajoute ici les icônes réseaux sociaux */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 JobFries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
