import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DonateCta() {
  return (
    <section className="px-5 py-20">
      <div className="bg-deep relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-8 py-14 text-center text-primary-foreground shadow-soft md:px-16 md:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <p className="eyebrow relative text-gold">Be part of the story</p>
        <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
          Your gift turns hope into something real.
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-primary-foreground/75">
          Every contribution helps us support small businesses, mentor young people and lift up
          communities.
        </p>
        <Button asChild variant="gold" size="xl" className="relative mt-8">
          <Link to="/donate">
            <Heart /> Donate today
          </Link>
        </Button>
      </div>
    </section>
  );
}
