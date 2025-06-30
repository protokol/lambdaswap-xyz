export const LandingFooter = () => (
  <footer className='border-grid border-t'>
    <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row'>
      <div className='flex items-center gap-2'>
        <img src='/logo.svg' alt='LambdaSwap' className='size-5' />
        <p className='text-muted-foreground text-sm'>
          &copy; {new Date().getFullYear()} LambdaSwap. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
