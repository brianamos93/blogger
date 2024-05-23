import Image from "next/image"
import Link from "next/link"


type Props = {
    key: number,
    name: number,
    title: string,
    body: string,
    createdAt: string,
    author: string
}

export default function ArticleCard({ name, title, body, createdAt, author }: Props) {
    const orgdate = createdAt
    const newdate = new Date(Date.parse(orgdate))
    const finaldate = newdate.toDateString()
    return (
        <Link href={`/blog/${encodeURIComponent(name)}`}>
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-full rounded-lg">
        <div className="bg-white overflow-hidden max-w-5xl w-full rounded-lg shadow-lg">
            <Image src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606" width={1109} height={735} alt="Mountain" className="w-full h-64 object-cover"/>
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
                <p className="text-gray-700 leading-tight mb-4 line-clamp-3">
                    {body}
                </p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Image src="https://randomuser.me/api/portraits/men/32.jpg" width={128} height={128} alt="Avatar" className="w-8 h-8 rounded-full mr-2 object-cover"/>
                        <span className="text-gray-800 font-semibold">{author}</span>
                    </div>
                    <span className="text-gray-600">{finaldate}</span>
                </div>
            </div>
        </div>
    </div>
    </Link>
	)
}