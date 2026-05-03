import { fetchCommentByPostId } from "@/lib/query/Comment";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import CommentCreateForm from "./comments-create-form";

type CommentShowProps = {
    postId: string,
    commentId: string,
}

const CommentShow: React.FC<CommentShowProps> = async ({ postId, commentId }) => {
    const comments = await fetchCommentByPostId(postId);
    const comment = comments.find((c) => c.id === commentId);
    if (!comment) return null;
    const children = comments.filter((c) => c.parentId === commentId);
    return (
        <div className="flex flex-col py-8 first:pt-0 group perspective-1000 transform-3d animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="flex gap-5 p-6 rounded-2xl bg-white border border-emerald-100/50 shadow-md hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:-translate-y-2 hover:rotate-x-3 hover:rotate-y-3 transition-all duration-500 transform-gpu transform-3d">
                <div className="relative transform-3d group-hover:translate-z-10 transition-transform duration-500">
                    <Avatar className="h-14 w-14 border-2 border-emerald-200 shadow-lg ring-4 ring-emerald-50/50">
                        <AvatarImage src={comment.user.image || ""} />
                        <AvatarFallback className="bg-emerald-100 text-emerald-700 font-extrabold text-lg">
                            {comment.user.name?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-sm" />
                </div>
                
                <div className="flex-1 space-y-3 transform-3d group-hover:translate-z-10 transition-transform duration-500 delay-75">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <p className="text-sm font-black text-emerald-950 bg-emerald-100/50 px-3 py-1 rounded-lg tracking-tight">
                                {comment.user.name || "Anonymous"}
                            </p>
                            <span className="text-[11px] uppercase font-black text-emerald-400 tracking-widest">
                                {new Date(comment.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                    
                    <div className="text-slate-800 leading-relaxed text-[16px] font-medium selection:bg-emerald-200">
                        {comment.content}
                    </div>
                    
                    <div className="pt-3">
                        <CommentCreateForm postId={comment.postId} parentId={comment.id} />
                    </div>
                </div>
            </div>

            {children.length > 0 && (
                <div className="ml-7 pl-12 border-l-2 border-emerald-200/30 mt-6 space-y-6 relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-emerald-50/5 to-transparent pointer-events-none" />
                    {children.map((child) => (
                        <CommentShow 
                            key={child.id} 
                            postId={postId} 
                            commentId={child.id} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
export default CommentShow;