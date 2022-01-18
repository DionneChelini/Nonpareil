import { Link } from "react-router-dom";
export default function Example({
  errorType = "500 error",
  msg = "Something went wrong",
}) {
  return (
    <div className='bg-white min-h-screen flex flex-col lg:relative'>
      <div className='flex-grow flex flex-col'>
        <main className='flex-grow flex flex-col bg-white'>
          <div className='flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8'>
            <div className='flex-shrink-0 pt-10 sm:pt-16'>
              <Link to='/' className='inline-flex'>
                <span className='sr-only'>Nonpareil</span>
                <img className='h-12 w-auto' src='' alt='' />
              </Link>
            </div>
            <div className='flex-shrink-0 my-auto py-16 sm:py-32'>
              <p className='text-sm font-semibold text-yellow-600 uppercase tracking-wide'>
                {errorType}
              </p>
              <h1 className='mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
                {msg}
              </h1>

              <div className='mt-6'>
                <Link
                  to='/'
                  className='text-base font-medium text-yellow-600 hover:text-yellow-500'
                >
                  Go back home<span aria-hidden='true'> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <footer className='flex-shrink-0 bg-gray-50'>
          <div className='mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8'>
            <nav className='flex space-x-4'>
              <Link
                to='/contact_us'
                className='text-sm font-medium text-gray-500 hover:text-gray-600'
              >
                Contact Support
              </Link>
              <span
                className='inline-block border-l border-gray-300'
                aria-hidden='true'
              />
            </nav>
          </div>
        </footer>
      </div>
      <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          className='absolute inset-0 h-full object-left'
          src='https://images.unsplash.com/photo-1623370343786-687c99c44605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
        />
      </div>
    </div>
  );
}
