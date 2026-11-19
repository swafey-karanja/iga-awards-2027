import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

// PLACEHOLDER content: replace src and alt with real photos.
// `ratio` crops each landscape photo to a different shape to create the staggered look.
const photos = [
    { src: "https://res.cloudinary.com/odxuv15g/image/upload/v1784632173/Gala_Dinner-Awards-410_zhg0il_bliejj.webp", alt: "PLACEHOLDER: crowd under stage lights", ratio: "aspect-[16/9]" },
    { src: "https://res.cloudinary.com/odxuv15g/image/upload/v1784632172/Gala_Dinner-Awards-285_prbr5c_ub6h3b.webp", alt: "PLACEHOLDER: guests toasting", ratio: "aspect-square" },
    { src: "https://res.cloudinary.com/odxuv15g/image/upload/v1784632172/Gala_Dinner-Awards-126_benk1b_pof4p6.webp", alt: "PLACEHOLDER: performer on stage", ratio: "aspect-[3/2]" },
    { src: "https://res.cloudinary.com/odxuv15g/image/upload/v1784632172/Gala_Dinner-Awards-343_fdltdz_rg2g1w.webp", alt: "PLACEHOLDER: champagne glasses", ratio: "aspect-[4/3]" },
    { src: "https://res.cloudinary.com/odxuv15g/image/upload/v1784632172/Gala_Dinner-Awards-5_zupvgo_panzxc.webp", alt: "PLACEHOLDER: dance floor", ratio: "aspect-[5/4]" },
    { src: "https://res.cloudinary.com/odxuv15g/image/upload/v1784632173/Gala_Dinner-Awards-391_dkqqou_w8vmyf.webp", alt: "PLACEHOLDER: guest portrait", ratio: "aspect-[16/9]" },
    { src: "https://res.cloudinary.com/odxuv15g/image/upload/v1784632491/iGA_Welcome_Dinner-76_c7xch6_kbj6rz.webp", alt: "PLACEHOLDER: bar area", ratio: "aspect-[4/3]" },
    { src: "https://res.cloudinary.com/odxuv15g/image/upload/v1784632494/iGA_Welcome_Dinner-89_vt8njc_dk2ts9.webp", alt: "PLACEHOLDER: confetti moment", ratio: "aspect-[3/2]" },
    { src: "https://res.cloudinary.com/odxuv15g/image/upload/v1784632489/iGA_Welcome_Dinner-18_rwzpxp_ezc1va.webp", alt: "PLACEHOLDER: crowd with raised hands", ratio: "aspect-square" },
];

export default function Gallery() {
    return (
        <section id="gallery" aria-labelledby="gallery-title" className="pb-16 md:pb-24">
            <div className="mx-auto w-[calc(100%-3rem)] md:w-[85%] lg:w-[65%] lg:px-10">
                <SectionHeading
                    id="gallery-title"
                    eyebrow="The Archive"
                    line1="Six Editions In Pictures"
                />

                <ul className="mt-12 columns-1 gap-3 sm:columns-2 lg:columns-3">
                    {photos.map((photo) => (
                        <li key={photo.src} className="mb-3 break-inside-avoid">
                            <div
                                className={`group relative overflow-hidden rounded-lg border border-white/10 ${photo.ratio}`}
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 90vw"
                                    className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}