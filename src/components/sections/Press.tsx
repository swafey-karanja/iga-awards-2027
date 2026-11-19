import TestimonialCarousel, { type Testimonial } from "./TestimonialCarousel";

// PLACEHOLDER content: replace with real press quotes
const testimonials: Testimonial[] = [
    { quote: "PLACEHOLDER: a short press quote about the event goes here, two or three lines long.", name: "Jane Writer", source: "Publication Name, Edition Review" },
    { quote: "PLACEHOLDER: another short press quote about the event goes here, two or three lines long.", name: "Sam Critic", source: "Publication Name, Edition Review" },
    { quote: "PLACEHOLDER: a third short press quote about the event goes here, two or three lines long.", name: "Max Reporter", source: "Publication Name, Edition Review" },
];

export default function Press() {
    return (
        <section id="press" aria-labelledby="press-title" className="py-16 md:py-24">
            <div className="mx-auto w-[calc(100%-3rem)] md:w-[85%] lg:w-[65%] lg:px-10">
                <h2
                    id="press-title"
                    className="mb-10 text-center font-mono text-xs font-normal uppercase tracking-wider text-gold"
                >
                    In The Press
                </h2>
                <TestimonialCarousel items={testimonials} />
            </div>
        </section>
    );
}