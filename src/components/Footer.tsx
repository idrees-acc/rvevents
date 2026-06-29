import { Link } from "wouter";
import { Mail, MapPin } from "lucide-react";
import { FOOTER_SERVICES } from "@/lib/data";
import { asset } from "@/lib/asset";

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16" style={{ maxWidth: "80rem" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo + tagline */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src={asset("/rv-logo.png")}
                alt="RV Events Logo"
                className="h-12 w-auto bg-white rounded-md p-1 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-white text-xl leading-none tracking-wide">
                  RV Events
                </span>
                <span className="text-white/60 text-[9px] uppercase tracking-widest mt-1">
                  &amp; Entertainment Pvt. Ltd.
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              India&rsquo;s trusted Corporate &amp; Government Event Management
              partner. Delivering excellence in strategy, precision, and
              execution.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-secondary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-secondary mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-secondary mb-6">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                <div>
                  <p className="font-medium text-white">Corporate Office</p>
                  <p>502, Corporate Arena, Goregaon West,</p>
                  <p>Mumbai &ndash; 400 104, Maharashtra</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <a
                  href="mailto:contact@rvevents.org"
                  className="hover:text-white transition-colors"
                >
                  contact@rvevents.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <a
                  href="mailto:hr@rvevents.org"
                  className="hover:text-white transition-colors"
                >
                  hr@rvevents.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40" style={{ maxWidth: "80rem" }}>
          <p>&copy; {new Date().getFullYear()} RV Events &amp; Entertainment Pvt. Ltd. All rights reserved. <a href="https://aewaz.com/" target="_blank" rel="noopener noreferrer" className="no-underline outline-none text-[#007bff] bg-transparent hover:text-blue-400 transition-colors">Built With Care By Aewaz Technologies</a></p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
