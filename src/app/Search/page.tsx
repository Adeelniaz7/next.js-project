import PostList from "@/components/Post/post-list";
import { fetchPostBySearch } from "@/lib/query/post";
import React from "react";

interface SearchPageProps {
    searchParams: Promise<{ term: string }>
}

const SearchPage: React.FC<SearchPageProps> = async ({ searchParams }) => {
    const term = (await searchParams).term;
    return (
        <div className="min-h-screen p-6 sm:p-10 [perspective:1000px] flex flex-col items-center">
            <div className="w-full max-w-5xl transition-all duration-700 ease-out [transform-style:preserve-3d] hover:[transform:rotateX(2deg)_rotateY(-2deg)]">
                <div className="bg-white shadow-[0_20px_50px_rgba(34,_197,_94,_0.15)] rounded-3xl p-8 sm:p-12 border border-green-100 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(34,_197,_94,_0.3)]">
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-green-800 mb-10 text-center tracking-tight drop-shadow-sm transition-all duration-500 hover:[transform:translateZ(20px)]">
                        Search Results for <span className="text-green-500 italic bg-green-50 px-4 py-2 rounded-xl inline-block ml-2 shadow-inner transform transition hover:scale-105 duration-300">"{term}"</span>
                    </h1>
                    <div className="transition-all duration-500 hover:[transform:translateZ(30px)] bg-white/50 rounded-2xl backdrop-blur-sm">
                        <PostList fetchData={() => fetchPostBySearch(term)} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchPage;