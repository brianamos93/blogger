export const api_string = "https://65a3e0daa54d8e805ed42278.mockapi.io/api/"

export async function GetTopPosts () {
	try {
		const url = new URL('https://65a3e0daa54d8e805ed42278.mockapi.io/api/posts')
		url.searchParams.append('page', '1')
		url.searchParams.append('limit', '10')
		const res = await fetch(url, {
			method: 'GET',
			headers: {'content-type': 'application/json'},
		})
		if (!res.ok) {
			throw new Error('Failed to fetch data')
		}
		return res.json()
	} catch (error) {
		console.log('Backend Error:', error)
	}
}