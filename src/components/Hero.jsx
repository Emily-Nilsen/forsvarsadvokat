import Image from 'next/image'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function Hero() {
  const { t } = useTranslation('common')
  const advokat = t('advokat')
  return (
    <div className="bg-gray-900">
      <div className="relative overflow-hidden isolate pt-14">
        {/* Desktop */}
        <div className="hidden sm:block">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/Forsvarsadvokat_desktop_nfm3vs.webp"
            alt="Christian Flemmen Johansen"
            width={4500}
            height={2739}
            priority
            unoptimized
            className="absolute inset-0 object-cover w-full h-full -z-10"
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-900/50" />
        </div>
        {/* Mobile */}
        <div className="sm:hidden">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/mobile_hero_fw0ow7.webp"
            alt="Christian Flemmen Johansen"
            width={2000}
            height={1217}
            priority
            unoptimized
            className="absolute inset-0 object-cover w-full h-full -z-10"
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-900/70" />
        </div>

        <div className="relative z-10 max-w-2xl px-6 py-32 -mt-12 sm:-mt-28 sm:px-16 sm:py-48 lg:py-56">
          <div className="text-left text-white">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.1,
                duration: 1,
                type: 'fade',
              }}
              className="mt-3 w-fit bg-white px-3.5 py-1.5 lg:mt-5"
            >
              <h1 className="font-extrabold tracking-normal uppercase text-gray-950 sm:text-base md:text-lg">
                {advokat}
              </h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.2,
                duration: 1,
                type: 'fade',
              }}
            >
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight font-display sm:leading-normal md:text-4xl lg:mt-6 lg:text-5xl xl:text-6xl">
                Christian
              </h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.3,
                duration: 1,
                type: 'fade',
              }}
              className="my-0 lg:my-3"
            >
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight font-display sm:leading-normal md:text-4xl lg:text-5xl xl:text-6xl">
                Flemmen
              </h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.4,
                duration: 1,
                type: 'fade',
              }}
              className="my-0 lg:my-3"
            >
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight font-display sm:leading-normal md:text-4xl lg:text-5xl xl:text-6xl">
                Johansen
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
