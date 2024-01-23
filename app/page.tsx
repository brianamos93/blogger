import ArticleList from "@/app/ui/articlelist"
import NavMenu from "./ui/navmenu"

export default function Home() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 container mx-auto'>
      <header className='md:col-span-3 col-span-2 bg-white'>
        <NavMenu></NavMenu>
      </header>

        <main className='col-span-2 row-start-2'>
          <ArticleList>

          </ArticleList>
        </main>
        <aside className='md:col-start-3 md:row-start-2 hidden md:block'>
          This is the side bar.
        </aside>

      <footer className='row-start-3 md:col-span-3 col-span-2'>
        This is the footer.
      </footer>
    </div>
  )
}
