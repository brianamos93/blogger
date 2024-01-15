import { GetTopPosts } from "../lib/data"
import { Post } from "@/app/lib/definitions"

export default async function ArticleList() {
	const topposts = await GetTopPosts()
	return (
		<div>
			{topposts.map((post: Post) => (
				<div
				className=""
				key={post.id}
				>
					<h3 className="text-xl">
						{post.title}
					</h3>
					<div><p>{post.body}</p></div>
					<div><p>{post.createdAt}</p></div>
					<div><p>{post.author}</p></div>
				</div>
			))}
		</div>
	)
}