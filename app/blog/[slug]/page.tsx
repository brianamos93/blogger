import getIdea from "@/app/lib/getPost"


export default async function Idea({ params: { slug }}: any) {

	const idea = await getIdea(slug)

	return (
		<div className="md:col-span-3 col-span-2 bg-white min-h-screen">
		<h1>{idea.title}</h1>
		<p>{idea.body}</p>
		</div>

	)
}