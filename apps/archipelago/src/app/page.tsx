import { Badge, Button, cn } from '@archipelago/ui';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <section className="py-44">
      <div className="sm:mx-7 text-center">
        <Badge variant="outline" className={cn('my-12')}>
          New Release
        </Badge>
        <h1 className="scroll-m-20 text-5xl font-bold tracking-wider- text-balance">
          A platform built like an Archipelago
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 font-extralight pt-5">
          Learning isn’t one-size-fits-all — it’s a diverse landscape of ideas,
          paths, and people. Archipelago is a modular learning management system
          designed to embrace that diversity — connecting distinct courses,
          communities, and content into one seamless, personalized experience.
        </p>
        <div className="py-12 flex items-center justify-center w-full gap-4">
          <Button
            size="lg"
            className="bg-[var(--primary)] text-[var(--secondary)] hover:bg-black/90 rounded-full"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-[var(--primary)] rounded-full"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
