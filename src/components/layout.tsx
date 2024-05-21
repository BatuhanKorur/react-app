import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout({ children }: React.PropsWithChildren){
  return (
    <div className="w-full h-svh max-w-screen-md mx-auto">
      <div className={'px-16 mt-16 flex items-center justify-between w-full '}>
        <Link to={'/'} className={'text-[15px] opacity-50 transition duration-300 ease-in-out hover:opacity-100'}>
          <p>Home</p>
        </Link>
        <Link target={'_blank'}
              to="https://github.com/BatuhanKorur"
              className={'size-8'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                  fill="currentColor" />
          </svg>
        </Link>
      </div>
      <div className={'p-16'}>
        {children}
      </div>
    </div>
  )
}