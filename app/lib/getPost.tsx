import { api_string } from "@/app/lib/data"

export default async function getPost(postSlug: string) {
	const res = await fetch(`${api_string}/posts/${postSlug}`)

	if(!res.ok) throw new Error('Failed to fetch idea')
  return res.json()
}