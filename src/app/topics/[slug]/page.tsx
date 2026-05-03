import PostCreateForm from '@/components/Post/post';
import PostList from '@/components/Post/post-list';
import { fetchPostByTopicSlug } from '@/lib/query/post';
import React from 'react'

type TopicShowPageProps = {
  params: Promise<{ slug: string }>
}

const TopicShowPage: React.FC<TopicShowPageProps> = async ({ params }) => {
  const slug = (await params).slug;
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6 sm:p-10 min-h-screen [perspective:1000px] bg-gradient-to-br from-green-50 to-white'>
      <div className='col-span-1 md:col-span-3 [transform-style:preserve-3d] transition-all duration-700 ease-out hover:[transform:rotateX(1deg)_rotateY(1deg)]'>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-green-800 mb-8 drop-shadow-sm transition-all duration-500 hover:[transform:translateZ(20px)] inline-block capitalize tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">{slug}</span> Discussion
        </h1>
        <div className="bg-white/60 p-6 rounded-3xl shadow-[0_20px_50px_rgba(34,_197,_94,_0.1)] border border-green-100 backdrop-blur-sm transition-all duration-500 hover:[transform:translateZ(30px)] hover:shadow-[0_30px_60px_rgba(34,_197,_94,_0.2)]">
          <PostList fetchData={() => fetchPostByTopicSlug(slug)} />
        </div>
      </div>
      <div className="col-span-1 [transform-style:preserve-3d] transition-all duration-700 ease-out hover:[transform:rotateX(-2deg)_rotateY(-2deg)]">
        <div className="bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(34,_197,_94,_0.1)] border border-green-100 transform transition-all duration-500 hover:-translate-y-2 hover:[transform:translateZ(30px)] hover:shadow-[0_30px_60px_rgba(34,_197,_94,_0.2)] flex justify-center mt-14 md:mt-0 sticky top-28">
            <PostCreateForm slug={slug} />
        </div>
      </div>
    </div>
  )
}

export default TopicShowPage
