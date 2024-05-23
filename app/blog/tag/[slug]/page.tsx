import getTag from "@/app/lib/getTag"
import { Post } from "@/app/lib/definitions"
import ArticleCard from "./articlecard"



export default async function Tag({ params: { slug }}: any) {

	const tag = await getTag(slug)

	return (
		<div className="flex flex-col justify-center items-center gap-8">
			{tag.map((post: Post) => (
				<ArticleCard
				key={post.id}
				name={post.id}
				title={post.title}
				body={post.body}
				createdAt={post.createdAt}
				author={post.author}
				/>	
			))}
		</div>
		
	)
}