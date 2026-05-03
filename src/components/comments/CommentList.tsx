import React from "react";
import CommentShow from "./CommentShow";
import { fetchCommentByPostId } from "@/lib/query/Comment";

type CommentListProps = {
    postId: string;
}

const CommentList: React.FC<CommentListProps> = async ({ postId }) => {
    const comments = await fetchCommentByPostId(postId);
    const topLevelComments = comments.filter((comment) => comment.parentId == null);
    return (
        <div className="space-y-8 mt-12">
            <div className="flex items-center gap-4 border-b-2 border-emerald-100 pb-4">
                <h1 className="font-black text-2xl text-emerald-900 tracking-tight">
                    Discussion
                </h1>
                <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg shadow-emerald-200">
                    {comments.length}
                </span>
            </div>
            <div className="space-y-2">
                {topLevelComments.map((comment) => (
                    <CommentShow 
                        key={comment.id} 
                        postId={comment.postId} 
                        commentId={comment.id} 
                    />
                ))}
            </div>
        </div>
    );
}
export default CommentList;