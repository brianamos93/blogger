import ArticleList from "@/app/ui/articlelist"
import { GetTopPost } from "./lib/data"
import { Post } from "@/app/lib/definitions"
import HeroArticle from "./ui/heroarticle"


export default async function Home() {
  const toppost = await GetTopPost()
  return (
   <>
      <div className="col-span-4 row-start-2 h-dvh">
        <HeroArticle
          key={toppost.id}
          name={toppost.id}
          title={toppost.title}
          body={toppost.body}
          createdAt={toppost.createdAt}
          author={toppost.author}
        />
      </div>

        <main className='col-span-3 row-start-3'>
          
          <ArticleList>

          </ArticleList>
        </main>
        <aside className='md:col-start-4 md:row-start-3 hidden md:block'>
          This is the side bar.
        </aside>
    </>
  )
}
