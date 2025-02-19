import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { Contact } from '@/components/Contact'

export function Footer() {
  return (
    <footer className="bg-white">
      <Container>
        <div className="flex flex-col items-start justify-between pt-16 pb-6 gap-y-12 lg:flex-row lg:items-center lg:py-16">
          <Contact />
        </div>
        <div className="flex flex-col items-center pt-8 pb-12 border-t border-gray-200 md:flex-row-reverse md:justify-between md:pt-6">
          <div>
            <div className="flex items-center text-gray-900">
              <Logo className="flex-none w-5 h-5 fill-gray-900" />
              <div className="ml-2">
                <p className="font-serif text-lg font-bold uppercase">
                  Forsvarsadvokat
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; {new Date().getFullYear()} Flemmen Johansen Media
          </p>
        </div>
      </Container>
    </footer>
  )
}
