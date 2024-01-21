import { GetTopPosts } from "../lib/data"
import { Post } from "@/app/lib/definitions"
import ArticleCard from "./articlecard"

export default async function ArticleList() {
	const topposts = await GetTopPosts()
	return (
		<div className="flex flex-col justify-center items-center gap-8">
			{topposts.map((post: Post) => (
				<ArticleCard
				key={post.id}
				title={post.title}
				body={post.body}
				createdAt={post.createdAt}
				author={post.author}
				/>	
			))}
		</div>
	)
}