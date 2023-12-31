import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  const host = isClient ? window.location.href : "---";
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Your webhook:&nbsp;
          <code className="font-mono font-bold">{host}api/screenless</code> 
          &nbsp;Authorization&nbsp; <code className="font-mono font-bold">Bearer SCREENLESS_SECRET</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-20 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://screenless.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Screenless
          </a>
          <a             className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
href="https://github.com/CodeFromAnywhere/screenless-selfhosted" target="_blank">Github repo</a>
        </div>
      </div>

    <div>Ensure to configure your environment variables the right way in your project in Vercel. You can then add the webhook into Screenless and all your recordings will be stored in your personal private database.</div>
      
    </main>
  )
}
