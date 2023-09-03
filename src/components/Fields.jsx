import Image from 'next/image'
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid'
import { Expandable } from '@/components/Expandable'
import { ReadMoreBox } from '@/components/ReadMoreBox'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
  useMotionValue,
} from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function Fields() {
  const { t, lang } = useTranslation('common')
  const advokat = t('advokat')
  const about1 = t('about-1')
  const about1b = t('about-1b')
  const about2 = t('about-2')
  const about3 = t('about-3')
  const about4 = t('about-4')
  const lesMer = t('les-mer')

  const fields = [
    {
      name: 1,
      description: `${about1b}`,
    },
    {
      name: 2,
      description: `${about2}`,
    },
    {
      name: 3,
      description: `${about3}`,
    },
    {
      name: 3,
      description: `${about4}`,
    },
  ]

  return (
    <section>
      <Expandable>
        {({ isExpanded }) => (
          <>
            <div
              id="fagfelt"
              className="overflow-hidden bg-white py-16 sm:py-32"
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                    <div className="lg:max-w-lg">
                      {/* <h2 className="text-base leading-7 text-gray-600 uppercase">
                        {advokat}
                      </h2>
                      <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 font-display sm:text-6xl">
                        Christian Flemmen Johansen
                      </h1> */}
                      <motion.p
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{
                          delay: 0.5,
                          duration: 1,
                          type: 'fade',
                        }}
                        className="mt-6 text-lg leading-8 text-gray-600"
                      >
                        {about1}
                      </motion.p>
                      <dl className="mt-4 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
                        <motion.div
                          whileInView={{ opacity: 1 }}
                          initial={{ opacity: 0 }}
                          transition={{
                            delay: 0.5,
                            duration: 1,
                            type: 'fade',
                          }}
                          className="relative pl-0"
                        >
                          <dd className="inline">{about1b}</dd>
                        </motion.div>
                        <motion.div
                          whileInView={{ opacity: 1 }}
                          initial={{ opacity: 0 }}
                          transition={{
                            delay: 0.5,
                            duration: 1,
                            type: 'fade',
                          }}
                          className="relative pl-0"
                        >
                          <dd className="inline">{about2}</dd>
                        </motion.div>
                        <motion.div
                          whileInView={{ opacity: 1 }}
                          initial={{ opacity: 0 }}
                          transition={{
                            delay: 0.5,
                            duration: 1,
                            type: 'fade',
                          }}
                          className="relative pl-0"
                        >
                          <dd className="inline">{about3}</dd>
                        </motion.div>
                        <motion.div
                          whileInView={{ opacity: 1 }}
                          initial={{ opacity: 0 }}
                          transition={{
                            delay: 0.5,
                            duration: 1,
                            type: 'fade',
                          }}
                          className="relative pl-0"
                        >
                          <dd className="inline">{about4}</dd>
                        </motion.div>
                      </dl>
                      <Expandable.Button>{lesMer}</Expandable.Button>
                    </div>
                  </div>
                  <div className="flex items-start justify-end lg:order-first">
                    <div className="relative sm:hidden">
                      <Image
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/Oslo_Tinghus_feudkq.webp"
                        alt="Advokat Christian Flemmen Johansen"
                        className="w-[24rem] max-w-none rounded-none ring-1 ring-gray-400/10"
                        width={1280}
                        height={1280}
                      />
                      <div className="flex justify-end">
                        {/* <figcaption className="flex mt-4 text-sm leading-6 text-right text-gray-500 gap-x-2">
                          <InformationCircleIcon
                            className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                            aria-hidden="true"
                          />
                          Advokat Christian Flemmen Johansen
                        </figcaption> */}
                      </div>
                    </div>
                    <div className="relative hidden sm:block ">
                      <Image
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/OsloTinghus_xjkr9h.webp"
                        alt="Advokat Christian Flemmen Johansen"
                        className="w-[57rem] max-w-none rounded-none ring-1 ring-gray-400/10"
                        width={1280}
                        height={1280}
                      />
                      <div className="flex justify-end">
                        {/* <figcaption className="flex mt-4 text-sm leading-6 text-right text-gray-500 gap-x-2">
                          <InformationCircleIcon
                            className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                            aria-hidden="true"
                          />
                          Advokat Christian Flemmen Johansen
                        </figcaption> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isExpanded ? <ReadMoreBox /> : null}
          </>
        )}
      </Expandable>
    </section>
  )
}
