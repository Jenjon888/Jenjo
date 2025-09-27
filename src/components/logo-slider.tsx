'use client';

import { InfiniteSlider } from '@/components/ui/infinite-slider';

const logos = [
  { name: 'CROSSOVER', className: 'text-sm font-medium text-gray-400' },
  { name: 'timeless', className: 'text-sm font-medium text-gray-400' },
  { name: 'firstminute capital', className: 'text-sm font-medium text-gray-400' },
  { name: 'SVA', className: 'text-sm font-medium text-gray-400' },
  { name: 'LIQUID 2', className: 'text-sm font-medium text-gray-400' },
  { name: 'FIRSTHAN', className: 'text-sm font-medium text-gray-400' },
  { name: 'Y Combinator', className: 'text-sm font-medium text-gray-400' },
  { name: 'Sequoia', className: 'text-sm font-medium text-gray-400' },
  { name: 'Andreessen Horowitz', className: 'text-sm font-medium text-gray-400' },
  { name: 'Index Ventures', className: 'text-sm font-medium text-gray-400' },
];

export function LogoSlider() {
  return (
    <section className="px-8 py-12">
      <div className="max-w-1440 mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-400 uppercase tracking-wider">BACKED BY</p>
        </div>
        
        <div className="relative">
          <InfiniteSlider
            speed={60}
            speedOnHover={120}
            gap={64}
            className="py-4"
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`${logo.className} whitespace-nowrap flex-shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-80`}
              >
                {logo.name}
              </div>
            ))}
          </InfiniteSlider>
          
          {/* Enhanced gradient overlays with better blur effect */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black via-black/90 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
}


          <InfiniteSlider

            speed={50}

            gap={64}

            className="py-4"

          >

            {logos.map((logo, index) => (

              <div

                key={index}

                className={`${logo.className} whitespace-nowrap flex-shrink-0`}

              >

                {logo.name}

              </div>

            ))}

          </InfiniteSlider>

          

          {/* Gradient overlays for fade effect */}

          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>

          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

        </div>

      </div>

    </section>

  );

}




          <InfiniteSlider

            speed={50}

            gap={64}

            className="py-4"

          >

            {logos.map((logo, index) => (

              <div

                key={index}

                className={`${logo.className} whitespace-nowrap flex-shrink-0`}

              >

                {logo.name}

              </div>

            ))}

          </InfiniteSlider>

          

          {/* Gradient overlays for fade effect */}

          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>

          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

        </div>

      </div>

    </section>

  );

}




          <InfiniteSlider

            speed={50}

            gap={64}

            className="py-4"

          >

            {logos.map((logo, index) => (

              <div

                key={index}

                className={`${logo.className} whitespace-nowrap flex-shrink-0`}

              >

                {logo.name}

              </div>

            ))}

          </InfiniteSlider>

          

          {/* Gradient overlays for fade effect */}

          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>

          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

        </div>

      </div>

    </section>

  );

}




          <InfiniteSlider

            speed={50}

            gap={64}

            className="py-4"

          >

            {logos.map((logo, index) => (

              <div

                key={index}

                className={`${logo.className} whitespace-nowrap flex-shrink-0`}

              >

                {logo.name}

              </div>

            ))}

          </InfiniteSlider>

          

          {/* Gradient overlays for fade effect */}

          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>

          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

        </div>

      </div>

    </section>

  );

}




          <InfiniteSlider

            speed={50}

            gap={64}

            className="py-4"

          >

            {logos.map((logo, index) => (

              <div

                key={index}

                className={`${logo.className} whitespace-nowrap flex-shrink-0`}

              >

                {logo.name}

              </div>

            ))}

          </InfiniteSlider>

          

          {/* Gradient overlays for fade effect */}

          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>

          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

        </div>

      </div>

    </section>

  );

}




          <InfiniteSlider

            speed={50}

            gap={64}

            className="py-4"

          >

            {logos.map((logo, index) => (

              <div

                key={index}

                className={`${logo.className} whitespace-nowrap flex-shrink-0`}

              >

                {logo.name}

              </div>

            ))}

          </InfiniteSlider>

          

          {/* Gradient overlays for fade effect */}

          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>

          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

        </div>

      </div>

    </section>

  );

}




          <InfiniteSlider

            speed={50}

            gap={64}

            className="py-4"

          >

            {logos.map((logo, index) => (

              <div

                key={index}

                className={`${logo.className} whitespace-nowrap flex-shrink-0`}

              >

                {logo.name}

              </div>

            ))}

          </InfiniteSlider>

          

          {/* Gradient overlays for fade effect */}

          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>

          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

        </div>

      </div>

    </section>

  );

}




          <InfiniteSlider

            speed={50}

            gap={64}

            className="py-4"

          >

            {logos.map((logo, index) => (

              <div

                key={index}

                className={`${logo.className} whitespace-nowrap flex-shrink-0`}

              >

                {logo.name}

              </div>

            ))}

          </InfiniteSlider>

          

          {/* Gradient overlays for fade effect */}

          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>

          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

        </div>

      </div>

    </section>

  );

}




          <InfiniteSlider

            speed={50}

            gap={64}

            className="py-4"

          >

            {logos.map((logo, index) => (

              <div

                key={index}

                className={`${logo.className} whitespace-nowrap flex-shrink-0`}

              >

                {logo.name}

              </div>

            ))}

          </InfiniteSlider>

          

          {/* Gradient overlays for fade effect */}

          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>

          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

        </div>

      </div>

    </section>

  );

}




          <InfiniteSlider

            speed={50}

            gap={64}

            className="py-4"

          >

            {logos.map((logo, index) => (

              <div

                key={index}

                className={`${logo.className} whitespace-nowrap flex-shrink-0`}

              >

                {logo.name}

              </div>

            ))}

          </InfiniteSlider>

          

          {/* Gradient overlays for fade effect */}

          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>

          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

        </div>

      </div>

    </section>

  );

}


