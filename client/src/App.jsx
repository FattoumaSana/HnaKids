"use client";

import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Boutique from "./pages/Boutique";
import Vendre from "./pages/Vendre";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Panier from "./pages/Panier";
import AboutUs from "./pages/AboutUs";
import ProductDetail from "./pages/ProductDetail";
import FAQ from "./pages/FAQ";
import CGV from "./pages/CGV";
import ProfilePage from "./pages/ProfilePage";
import AdminAddProductPage from "./pages/AdminAddProductPage";
import Dashboard from "./pages/Dashboard.jsx";
import "./App.css";

function App() {
  return (
    <div className="App min-h-screen flex flex-col w-full bg-gradient-pattern">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-grow container mx-auto py-8 px-4 relative z-10"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/boutique/:category" element={<Boutique />} />
            <Route path="/boutique/produit/:id" element={<ProductDetail />} />
            <Route path="/vendre" element={<Vendre />} />
            <Route path="/vendre/:section" element={<Vendre />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="/a-propos" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/profil" element={<ProfilePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/admin/ajouter-produit"
              element={<AdminAddProductPage />}
            />
          </Routes>
        </motion.main>
      </AnimatePresence>
      {/* Newsletter section is in the Home component */}
      <footer className="bg-white/80 dark:bg-gray-900/80 py-8 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-brand-peach dark:text-brand-beige">
                HnaKids
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Achetez et vendez des vêtements et accessoires pour enfants de
                qualité à prix réduits.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-brand-sage dark:text-brand-sage">
                Liens rapides
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-peach dark:hover:text-brand-beige"
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a
                    href="/boutique"
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-peach dark:hover:text-brand-beige"
                  >
                    Boutique
                  </a>
                </li>
                <li>
                  <a
                    href="/vendre"
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-peach dark:hover:text-brand-beige"
                  >
                    Vendre
                  </a>
                </li>
                <li>
                  <a
                    href="/a-propos"
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-peach dark:hover:text-brand-beige"
                  >
                    À propos
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-peach dark:hover:text-brand-beige"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-brand-beige dark:text-brand-beige">
                Informations
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/faq"
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-peach dark:hover:text-brand-beige"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/cgv"
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-peach dark:hover:text-brand-beige"
                  >
                    CGV
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-brand-peach dark:text-brand-peach">
                Contact
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>123 Rue du Commerce, 75001 Paris</li>
                <li>01 23 45 67 89</li>
                <li>contact@hnakids.com</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com"
                  className="text-gray-600 hover:text-brand-peach dark:text-gray-400 dark:hover:text-brand-beige"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-600 hover:text-brand-peach dark:text-gray-400 dark:hover:text-brand-beige"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} HnaKids. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
