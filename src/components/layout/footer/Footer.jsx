import { Button } from '@/components/ui/button';
import logo from '/mock/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#03233c] text-white py-10">
      <div className="container mx-auto  flex justify-center gap-16 items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img className="w-40" src={logo} alt="TMDB Logo" />
          <Button className="mt-5 bg-white text-black hover:bg-gray-200">Join the Community</Button>
        </div>

        {/* Links Sections */}
        <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-lg mb-3">The Basics</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About TMDB</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">API</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-3">Get Involved</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Contribution Bible</a></li>
              <li><a href="#" className="hover:underline">Add New Movie</a></li>
              <li><a href="#" className="hover:underline">Add New TV Show</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-3">Community</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Guidelines</a></li>
              <li><a href="#" className="hover:underline">Discussions</a></li>
              <li><a href="#" className="hover:underline">Leaderboard</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-3">Legal</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm">
        <p>&copy; 2025 TMDB. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
