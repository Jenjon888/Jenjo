import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import Image from 'next/image'

// Company logos configuration
const companyLogos = [
    { name: 'AM', alt: 'AM Logo' },
    { name: 'BAR', alt: 'BAR Logo' },
    { name: 'BH', alt: 'BH Logo' },
    { name: 'HSBC', alt: 'HSBC Logo' },
    { name: 'KON', alt: 'KON Logo' },
    { name: 'MP', alt: 'MP Logo' },
    { name: 'OB', alt: 'OB Logo' },
    { name: 'OG', alt: 'OG Logo' },
    { name: 'RI', alt: 'RI Logo' },
    { name: 'SiM', alt: 'SiM Logo' },
]

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden">
            <div className="group relative m-auto max-w-6xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:w-32 md:border-r md:pr-4">
                        <p className="text-end text-sm">Worked with</p>
                    </div>
                    <div className="relative md:w-[calc(100%-8rem)]">
                        <InfiniteSlider
                            speedOnHover={150}
                            speed={50}
                            gap={112}>
                            {companyLogos.map((company, index) => (
                                <div key={index} className="flex">
                                    <div className="relative h-36 w-auto group">
                                        {/* Light mode logo (black version) */}
                                        <Image
                                            className="mx-auto h-36 w-fit dark:hidden transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
                                            src={`/client_logos/${company.name}-blk.png`}
                                            alt={company.alt}
                                            height={144}
                                            width={450}
                                        />
                                        {/* Dark mode logo (white version) */}
                                        <Image
                                            className="mx-auto h-36 w-fit hidden dark:block transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
                                            src={`/client_logos/${company.name}-wht.png`}
                                            alt={company.alt}
                                            height={144}
                                            width={450}
                                        />
                                    </div>
                                </div>
                            ))}
                        </InfiniteSlider>

                        {/* Enhanced gradient overlays with blur effect */}
                        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
