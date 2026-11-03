import { Link } from "@tanstack/react-router";
import { Phone, Instagram, Facebook } from "lucide-react";
import { MOTTO } from "@/lib/brand";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  FACEBOOK_URL,
  FACEBOOK_NAME,
} from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">Olaide Doherty</p>
          <p className="eyebrow mt-1 text-gold">Charity Foundation</p>
          <p className="mt-5 font-display text-xl italic text-gold">"{MOTTO}."</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Elevating lives, enriching people, inspiring dreams, revitalizing community,
            transforming youths and encouraging hope.
          </p>
        </div>

        <div>
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link to="/about" className="text-primary-foreground/80 hover:text-gold">
                About us
              </Link>
            </li>
            <li>
              <Link to="/programs" className="text-primary-foreground/80 hover:text-gold">
                Our programs
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-primary-foreground/80 hover:text-gold">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/donate" className="text-primary-foreground/80 hover:text-gold">
                Donate
              </Link>
            </li>
            <li>
              <Link to="/bank-transfer" className="text-primary-foreground/80 hover:text-gold">
                Bank transfer
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Reach us</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={PHONE_TEL}
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold"
              >
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold"
              >
                <Instagram className="h-4 w-4" /> {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold"
              >
                <Facebook className="h-4 w-4" /> {FACEBOOK_NAME}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Olaide Doherty Charity Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
