import CommentList from '@/components/comments/CommentList';
import CommentCreateForm from '@/components/comments/comments-create-form';
import PostShow from '@/components/Post/Post-show';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

import React from 'react'


type PostShowPageProps = {
  params: Promise<{ slug: string; id: string }>
}

const PostShowPage: React.FC<PostShowPageProps> = async ({ params }) => {
  const { slug, id: postId } = (await params);
  return (
    <div className='min-h-screen p-6 sm:p-10 [perspective:1000px] bg-gradient-to-br from-green-50 to-white flex flex-col items-center'>
      <div className='w-full max-w-4xl space-y-8 [transform-style:preserve-3d] transition-all duration-700 hover:[transform:rotateX(1deg)_rotateY(-1deg)]'>
        <div className='transition-all duration-500 hover:[transform:translateZ(20px)] inline-block'>
          <Link href={`/topics/${slug}`}>
            <Button variant={"link"} className="text-green-600 hover:text-green-800 font-bold bg-white/50 backdrop-blur-sm rounded-full px-4 hover:shadow-md transition-all duration-300">
              <ChevronLeft className="mr-1 h-5 w-5" />
              Back to {slug}
            </Button>
          </Link>
        </div>
        
        <div className="bg-white shadow-[0_20px_50px_rgba(34,_197,_94,_0.1)] rounded-3xl p-8 border border-green-100 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(34,_197,_94,_0.2)] hover:[transform:translateZ(30px)]">
          <PostShow postId={postId} />
        </div>

        <div className="bg-white/80 backdrop-blur-sm shadow-[0_10px_30px_rgba(34,_197,_94,_0.05)] rounded-3xl p-8 border border-green-50 transform transition-all duration-500 hover:shadow-[0_20px_40px_rgba(34,_197,_94,_0.15)] hover:[transform:translateZ(25px)]">
          <CommentCreateForm postId={postId} startOpen />
        </div>

        <div className="bg-white/60 backdrop-blur-sm shadow-sm rounded-3xl p-8 border border-green-50/50 transform transition-all duration-500 hover:shadow-md hover:[transform:translateZ(15px)]">
          <CommentList postId={postId} />
        </div>
      </div>
    </div>
  )
}

export default PostShowPage
