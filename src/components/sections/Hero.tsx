import Image from "next/image";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Countdown from "./Countdown";
import Marquee from "./Marquee";

// PLACEHOLDER content: replace with real event details
const hero = {
    eyebrow: "31/07/2027, Venue Name, City",
    title: "Experience Golden Moments",
    text: "PLACEHOLDER: a short supporting line about the event goes here. Keep it to two sentences.",
    targetDate: "2027-07-31T18:00:00",
    image: "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto:best,w_2000/Gala_Dinner-Awards-391_dkqqou_w8vmyf.webp", // PLACEHOLDER: portrait-friendly, 1200x1400+
    imageAlt: "PLACEHOLDER: guests celebrating under falling gold confetti",
};

export default function Hero() {
    return (
        <section
            id="home"
            aria-labelledby="hero-title"
            className="relative isolate flex min-h-[80svh] flex-col overflow-hidden bg-black"
        >
            <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[52%]">
                <Image
                    src={hero.image}
                    alt={hero.imageAlt}
                    fill
                    priority
                    // quality={90}
                    sizes="(min-width: 1024px) 80vw, 100vw"
                    className="object-cover object-[65%_30%]"
                />
                <div className="absolute inset-0 bg-black/45 lg:bg-transparent lg:bg-linear-to-r lg:from-black lg:via-black/10 lg:to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-black to-transparent" />
            </div>

            <div className="mx-auto flex w-full max-w-[65%] flex-1 flex-col justify-center px-6 pb-12 pt-32">
                <p className="font-mono text-xs uppercase tracking-wider text-gold sm:text-lg">
                    {hero.eyebrow}
                </p>

                <h1
                    id="hero-title"
                    className="mt-6 max-w-lg font-heading text-[clamp(2.5rem,6vw,5rem)] font-semibold uppercase leading-[1.1] text-white"
                >
                    {hero.title}
                </h1>

                <p className="mt-8 max-w-sm text-white/70">{hero.text}</p>

                <div className="mt-10 flex flex-wrap gap-3">
                    <Button
                        href="#tickets"
                        variant="contained"
                        size="large"
                        endIcon={<ShoppingCartOutlinedIcon />}
                    >
                        Get tickets
                    </Button>
                    <Button
                        href="#programme"
                        variant="outlined"
                        size="large"
                        color="inherit"
                        sx={{ borderColor: "rgba(255,255,255,0.8)" }}
                    >
                        Who&apos;s performing?
                    </Button>
                </div>

                <div className="mt-14">
                    <Countdown targetDate={hero.targetDate} />
                </div>
            </div>

            <div className="pb-6">
                <Marquee />
            </div>
        </section>
    );
}