import ArticleList from "@/app/ui/articlelist"


export default function Home() {
  return (
   <>
        <main className='col-span-2 row-start-2'>
          <ArticleList>

          </ArticleList>
        </main>
        <aside className='md:col-start-3 md:row-start-2 hidden md:block'>
          This is the side bar.
        </aside>
    </>
  )
}
