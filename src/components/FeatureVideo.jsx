import dynamic from 'next/dynamic'
import React from 'react'
import { InformationCircleIcon } from '@heroicons/react/20/solid'
import useTranslation from 'next-translate/useTranslation'

const DynamicVideoPlayer = dynamic(() => import('../components/VideoPlayer'), {
  ssr: false,
})

export function FeatureVideo() {
  const { t } = useTranslation('common')
  const videoCaption = t('video-caption')

  return (
    <div>
      <div className="relative py-16 bg-gray-800">
        <div className="relative overflow-hidden">
          <div className="mx-auto mb-16 rounded-none sm:my-16 sm:max-w-sm sm:rounded-2xl md:my-24 md:max-w-2xl lg:max-w-7xl lg:px-8">
            {/* video below */}
            <div className="relative flex rounded-none shadow-xl sm:rounded-2xl">
              <div className="relative h-[56vw] w-screen overflow-hidden rounded-none bg-gray-950 sm:rounded-2xl md:h-[22rem] md:w-[80rem] lg:h-[42rem]">
                {/* Mobile */}
                <div className="absolute flex flex-col items-center justify-center w-full h-full overflow-hidden rounded-none sm:hidden sm:rounded-2xl">
                  <DynamicVideoPlayer
                    poster="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/video-poster_gtw71z.webp"
                    publicId="https://res.cloudinary.com/dt3k2apqd/video/upload/q_auto/Forsvarsadvokat/Forsvarsadvokat_-_MOBILE_-_v2_bsyd0u.mp4"
                    fetchpriority="auto"
                    autoplayBoolean={true}
                    controlsBoolean={true}
                    loopBoolean={true}
                  />
                </div>
                {/* Desktop */}
                <div className="absolute flex-col items-center justify-center hidden w-full h-full overflow-hidden rounded-none sm:flex sm:rounded-2xl">
                  <DynamicVideoPlayer
                    poster="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/video-poster_gtw71z.webp"
                    publicId="https://res.cloudinary.com/dt3k2apqd/video/upload/q_auto/Forsvarsadvokat/Forsvarsadvokat_-_v2_lfotld.mp4"
                    fetchpriority="auto"
                    autoplayBoolean={true}
                    controlsBoolean={true}
                    loopBoolean={true}
                  />
                </div>
              </div>
            </div>

            <div className="relative" aria-hidden="true"></div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-6">
          <figcaption className="flex w-full px-4 mt-4 text-sm leading-6 text-gray-300 gap-x-2 sm:px-0">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            {videoCaption}
          </figcaption>
        </div>
      </div>
    </div>
  )
}
