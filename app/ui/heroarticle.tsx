import Link from "next/link";
import hero from "./hero.module.css"

type Props = {
    key: number,
    name: number,
    title: string,
    body: string,
    createdAt: string,
    author: string
}

export default function HeroArticle ({ name, title, body, createdAt, author }: Props) {
	return (
		<Link href={`/blog/${encodeURIComponent(name)}`}>
			<div className={hero.herowrapper}>
				<div>
					<h2>
						Article Title
					</h2>
				</div>
				<div>
					<p>This is a short description of the article. This should be about two to three sentences long.</p>
				</div>
			</div>
		</Link>
	)
}