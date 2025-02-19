import Image from 'next/image'
import { Expandable } from '@/components/Expandable'
import { ReadMoreBox } from '@/components/ReadMoreBox'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function Fields() {
  const { t } = useTranslation('common')
  const about1 = t('about-1')
  const about1b = t('about-1b')
  const about2 = t('about-2')
  const about3 = t('about-3')
  const about4 = t('about-4')
  const lesMer = t('les-mer')

  return (
    <section>
      <Expandable>
        {({ isExpanded }) => (
          <>
            <div
              id="fagfelt"
              className="py-16 overflow-hidden bg-white sm:pb-32 sm:pt-20"
            >
              <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                    <div className="lg:max-w-lg">
                      <motion.p
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{
                          delay: 0.45,
                          duration: 1,
                          type: 'fade',
                        }}
                        className="mt-6 text-lg leading-8 text-gray-600"
                      >
                        {about1}
                      </motion.p>
                      <dl className="max-w-xl mt-4 space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
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
                        src="/media/OsloTinghus.webp"
                        alt="Advokat Christian Flemmen Johansen"
                        className="w-[24rem] max-w-none rounded-none ring-1 ring-gray-400/10"
                        width={1280}
                        height={1280}
                      />
                      <div className="flex justify-end"></div>
                    </div>
                    <div className="relative hidden sm:block ">
                      <Image
                        src="/media/OsloTinghus.webp"
                        alt="Advokat Christian Flemmen Johansen"
                        className="w-[57rem] max-w-none rounded-none ring-1 ring-gray-400/10"
                        width={1280}
                        height={1280}
                      />
                      <div className="flex justify-end"></div>
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
