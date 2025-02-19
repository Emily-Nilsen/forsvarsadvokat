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
      <div className="relative bg-gray-800 py-16">
        <div className="relative overflow-hidden">
          <div className="mx-auto mb-16 rounded-none sm:my-16 sm:max-w-sm sm:rounded-2xl md:my-24 md:max-w-2xl lg:max-w-7xl lg:px-8">
            {/* Video container */}
            <div className="relative flex rounded-none shadow-xl sm:rounded-2xl">
              <div className="relative h-[56vw] w-screen overflow-hidden rounded-none bg-gray-950 sm:rounded-2xl md:h-[22rem] md:w-[80rem] lg:h-[42rem]">
                {/* Mobile Video */}
                <div className="absolute flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-none sm:hidden sm:rounded-2xl">
                  <DynamicVideoPlayer
                    poster="/media/video-poster.webp"
                    publicId="/media/video-mobile.mp4"
                    autoplayBoolean={true}
                    controlsBoolean={true}
                    loopBoolean={true}
                  />
                </div>
                {/* Desktop Video */}
                <div className="absolute hidden h-full w-full flex-col items-center justify-center overflow-hidden rounded-none sm:flex sm:rounded-2xl">
                  <DynamicVideoPlayer
                    poster="/media/video-poster.webp"
                    publicId="/media/video-desktop.mp4"
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
          <figcaption className="mt-4 flex w-full gap-x-2 px-4 text-sm leading-6 text-gray-300 sm:px-0">
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
