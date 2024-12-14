import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-[#164f2c] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <div className="mb-12">
          <Logo className="h-10 footer" />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 text-center">
          {/* Contact */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4">Contact</h4>
            <a
              href="mailto:hello@enablerry.com"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Mail className="h-4 w-4" />
              hello@enablerry.com
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <div>
                <Link to="/privacy" className="hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </div>
              <div>
                <Link to="/terms" className="hover:text-secondary transition-colors">
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10 w-full">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Enablerry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}