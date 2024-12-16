import React from 'react';
import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
    PhoneIcon,
    SearchIcon,
    Logo,
} from "@/components/icons";

export const Footer = () => {
    return (
        <div className="text-white">

            {/* Footer */}
            <footer className="max-w-6xl mx-auto px-4 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-800 pt-12">
                    {/* Logo and Contact */}
                    <div className="md:col-span-1">
                        <img src="/api/placeholder/120/40" alt="Elevate Logo" className="mb-6" />
                        <div className="text-gray-400 text-sm">
                            <p className="mb-2">Telephone: +63 9266266413</p>
                            <p>Email: elevatesolutionsagency@gmail.com</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-lg mb-4">Navigation</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Home</a></li>
                            <li><a href="#" className="hover:text-white transition">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition">Services</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg mb-4">Legal</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition">Cookies Policy</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg mb-4">Follow Us:</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                                <GithubIcon className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                                <DiscordIcon className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                                <TwitterIcon className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
