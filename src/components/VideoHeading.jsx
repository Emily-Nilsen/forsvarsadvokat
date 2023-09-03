import useTranslation from 'next-translate/useTranslation'

export function VideoHeading() {
  const { t, lang } = useTranslation('common')
  const mediaText = t('media-text')

  return (
    <div className="py-8 sm:pb-0 sm:pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Media
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">{mediaText}</p>
        </div>
      </div>
    </div>
  )
}
