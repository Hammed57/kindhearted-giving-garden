import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DONATION_GOAL, formatMoney, goalPercent } from "@/lib/donation-goal";

export function DonationGoal() {
  const { raised, target } = DONATION_GOAL;
  const percent = goalPercent(raised, target);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const id = requestAnimationFrame(() => setWidth(percent));
    return () => cancelAnimationFrame(id);
  }, [percent]);

  return (
    <section className="bg-pastel px-5 py-16 md:py-24" aria-labelledby="goal-heading">
      <div className="mx-auto max-w-2xl rounded-[2rem] bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1 sm:p-10 md:p-12">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-success-soft text-success">
          <Target className="h-6 w-6" aria-hidden />
        </span>
        <h2
          id="goal-heading"
          className="mt-5 text-center text-3xl font-semibold leading-tight sm:text-4xl"
        >
          Help Us Reach Our Goal!
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-muted-foreground">
          Your donations allow us to make a difference in the lives of those who need it most.
        </p>

        <div className="mt-9">
          <div className="mb-2 flex justify-end">
            <span className="rounded-full bg-success-soft px-3 py-1 text-sm font-bold text-success">
              {percent}% reached
            </span>
          </div>
          <div
            role="progressbar"
            aria-label="Donation goal progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percent}
            aria-valuetext={`${formatMoney(raised)} raised of ${formatMoney(target)} goal`}
            className="h-4 w-full overflow-hidden rounded-full bg-muted"
          >
            <div
              className="h-full rounded-full bg-success transition-[width] duration-1000 ease-out motion-reduce:transition-none"
              style={{ width: `${width}%` }}
            />
          </div>
          <div className="mt-4 flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-xl font-semibold sm:text-2xl">
                {formatMoney(raised)}
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Raised
              </p>
            </div>
            <div className="text-right">
              <p className="font-display text-xl font-semibold sm:text-2xl">
                {formatMoney(target)}
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Goal
              </p>
            </div>
          </div>
        </div>

        <div className="mt-9 flex justify-center">
          <Button asChild variant="gold" size="xl">
            <Link to="/donate">
              <Heart /> Donate now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
