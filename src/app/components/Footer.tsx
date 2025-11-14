export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-0">
      {/* Section supérieure bleue */}
      <div className="bg-[#001454] py-12 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bloc gauche */}
          <div className="bg-[#001a66] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              I’m looking for interpretation work
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Join our global network of professional interpreters. Connect with
              companies worldwide, and get hired for projects that match your
              expertise.
            </p>
            <button className="bg-white text-[#001454] font-medium px-6 py-2 rounded-md hover:bg-gray-200 transition">
              Create Interpreter Account
            </button>
          </div>

          {/* Bloc droit */}
          <div className="bg-[#001a66] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              I need interpreters for my project
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Access verified interpretation talent on-demand. Post your
              requirements, hire skilled interpreters instantly, and manage all
              your language service needs in one place.
            </p>
            <button className="bg-white text-[#001454] font-medium px-6 py-2 rounded-md hover:bg-gray-200 transition">
              Create Client Account
            </button>
          </div>
        </div>
      </div>

      {/* Footer gris foncé déjà existant */}
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
