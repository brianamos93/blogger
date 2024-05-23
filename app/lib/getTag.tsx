import { api_string } from "@/app/lib/data"

export default async function getTag(tagSlug: string) {
	const res = await fetch(`${api_string}/tag/${tagSlug}`)

	if(!res.ok) throw new Error('Failed to fetch idea')
  return res.json()
}