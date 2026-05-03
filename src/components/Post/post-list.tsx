import React from 'react'
import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { PostWithData } from '@/lib/query/post'

type PostListProps = {
    fetchData: () => Promise<PostWithData[]>
}
const PostList: React.FC<PostListProps> = async ({ fetchData }) => {
    const posts = await fetchData();
    console.log(posts);
    return (
        <div className='flex flex-col gap-4 [perspective:1000px]'>
            {
                posts.map((post) => (
                    <Link key={post.id} href={`/topics/${post.topic.slug}/posts/${post.id}`} className="group block [transform-style:preserve-3d] transition-all duration-500 hover:[transform:rotateX(5deg)_translateZ(20px)]">
                        <Card className='border-green-100 bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm hover:shadow-[0_15px_30px_rgba(34,_197,_94,_0.15)] transition-all duration-500 cursor-pointer transform hover:-translate-y-1 rounded-2xl'>
                            <CardHeader>
                                <CardTitle className="text-xl text-green-800 transition-all duration-300 group-hover:text-green-600">{post.title}</CardTitle>
                                <CardDescription className='flex items-center justify-between text-green-600/70 font-medium mt-2'>
                                    <h1 className="bg-green-50 px-3 py-1 rounded-full text-sm">{post.user.name}</h1>
                                    <h1 className="bg-green-50 px-3 py-1 rounded-full text-sm">{post._count.comments} comments</h1>
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>

                ))
            }

        </div>
    )
}
export default PostList