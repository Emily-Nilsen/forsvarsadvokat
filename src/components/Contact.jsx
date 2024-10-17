import Link from 'next/link'

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'
import useTranslation from 'next-translate/useTranslation'

export function Contact() {
  const { t, lang } = useTranslation('common')
  const kontakt = t('kontakt')

  return (
    <div
      id="kontakt"
      className="relative mb-4 w-full border-t sm:mb-6 sm:border-none"
    >
      <div className="relative mt-6 sm:mt-10">
        <div className="flex flex-col space-y-6 text-gray-600 sm:flex-row sm:justify-between sm:space-y-0">
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Kontor</span>
              <GlobeAltIcon
                className="h-7 w-6 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
                href="https://flemmenco.no/"
              >
                www.flemmenco.no
              </Link>
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Kontor</span>
              <BuildingOffice2Icon
                className="h-7 w-6 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              Oscars gate 30 (5. etasje)
              <br />
              0256 Oslo
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Telefon</span>
              <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
            </dt>
            <dd>
              <Link className="hover:text-gray-900" href="tel:+4791548177">
                + 47 91 54 81 77
              </Link>
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">E-post</span>
              <EnvelopeIcon
                className="h-7 w-6 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
                href="mailto:cfj@flemmenco.no"
              >
                cfj@flemmenco.no
              </Link>
            </dd>
          </div>
        </div>
      </div>
    </div>
  )
}
