import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function ReadMoreBox() {
  const { t } = useTranslation('common')
  const aboutTitle = t('about-title')
  const about5 = t('about-5')
  const about6 = t('about-6')
  const about7 = t('about-7')

  return (
    <div className="pt-6 pb-24 bg-white sm:pb-32 sm:pt-16">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
          <motion.h1
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'fade',
            }}
            className="mt-2 text-lg font-bold tracking-tight text-gray-900 font-display sm:text-xl"
          >
            {aboutTitle}
          </motion.h1>
          <div className="grid max-w-xl grid-cols-1 gap-8 mt-10 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <motion.p
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
              >
                {about5}
              </motion.p>
            </div>

            <div>
              <motion.p
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
              >
                {about6}
              </motion.p>
              <motion.p
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
                className="mt-8"
              >
                {about7}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
