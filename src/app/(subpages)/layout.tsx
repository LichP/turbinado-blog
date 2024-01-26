import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Layout({ children }: { children: ReactNode }) {
    return (
      <>
        <header className="flex justify-between">
          <div>
            <div className="py-4 text-[2.5rem] md:text-8xl font-bvs tracking-widest">
              <Link href="/" className="text-zinc-950 dark:text-white hover:text-zinc-950 hover:dark:text-white no-underline hover:underline">turbinado</Link>
            </div>
            <p className=" text-sm md:text-lg">
              The blog of Phil Stewart, a UK web developer and tech geek.
            </p>
          </div>
          <div className="relative min-w-16 md:min-w-40">
            <Image src="/images/t-sugary2.svg" alt="Turbinado Logo" fill={true} />
          </div>
        </header>
        {children}
      </>
    )
}
