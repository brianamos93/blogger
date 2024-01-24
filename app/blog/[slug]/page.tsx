import getIdea from "@/app/lib/getPost"


export default async function Idea({ params: { slug }}: any) {

	const idea = await getIdea(slug)

	return (
		<>
		<h1>{idea.title}</h1>
		<p>{idea.body}</p>
		</>

	)
}