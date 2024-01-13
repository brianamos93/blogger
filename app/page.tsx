export default function Home() {
  return (
    <div className='h-screen grid grid-cols-3 gap-4 container mx-auto'>
      <header className='col-span-3'>
        Text Header
      </header>

        <main className='col-span-2 row-start-2'>
          This is the main area.
        </main>
        <aside className='col-start-3 row-start-2'>
          This is the side bar.
        </aside>

      <footer className='row-start-3 col-span-3'>
        This is the footer.
      </footer>
    </div>
  )
}
