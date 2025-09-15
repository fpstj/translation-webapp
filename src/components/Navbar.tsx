import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MacedonianFlag,
  EnglishFlag,
  FrenchFlag,
  GermanFlag,
  SlovenianFlag,
} from "./FlagIcon";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "mk",
    name: "Mk",
    flag: <MacedonianFlag size="sm" className="me-3" />,
  });

  const languages = [
    {
      code: "mk",
      name: "Mk",
      flag: <MacedonianFlag size="sm" className="me-2" />,
    },
    {
      code: "en",
      name: "En",
      flag: <EnglishFlag size="sm" className="me-2" />,
    },
    {
      code: "fr",
      name: "Fr",
      flag: <FrenchFlag size="sm" className="me-2" />,
    },
    {
      code: "de",
      name: "De",
      flag: <GermanFlag size="sm" className="me-2" />,
    },
    {
      code: "sl",
      name: "Sl",
      flag: <SlovenianFlag size="sm" className="me-2" />,
    },
  ];

  const handleLanguageSelect = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language);
    setLanguageDropdownOpen(false);
    // Here you can add logic to handle language change
    // For example, call your backend API or update context
    console.log(`Language changed to: ${language.code}`);
  };

  return (
    <nav className="flex w-screen bg-white shadow px-6 py-4">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">MyLogo</Link>
        </div>

        {/* Navigation + Buttons wrapper */}
        <div className="flex items-center space-x-10">
          {/* Navigation links */}
          <div className="flex items-center space-x-6 text-gray-800 font-medium">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="hover:text-blue-600"
              >
                Services
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-40 bg-white border rounded shadow z-10"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    to="/translations"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Translations
                  </Link>
                  <Link
                    to="/courses"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Courses
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </div>

          {/* Buttons group + Language Dropdown */}
          <div className="flex items-center space-x-4 ml-8">
            <Link
              to="/signin"
              className="px-4 py-2 text-sm border border-gray-800 text-gray-800 bg-white rounded hover:bg-gray-100"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-sm bg-gray-800 text-white rounded hover:bg-gray-900"
            >
              Register
            </Link>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 w-24"
              >
                {selectedLanguage.flag}
                {selectedLanguage.name}
              </button>

              {/* Language Dropdown Menu */}
              {isLanguageDropdownOpen && (
                <div
                  className="absolute right-0 top-full mt-2 z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-24"
                  onMouseLeave={() => setLanguageDropdownOpen(false)}
                >
                  <ul className="py-2 font-medium" role="none">
                    {languages.map((language) => (
                      <li key={language.code}>
                        <button
                          onClick={() => handleLanguageSelect(language)}
                          className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          <div className="inline-flex items-center">
                            {language.flag}
                            {language.name}
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
