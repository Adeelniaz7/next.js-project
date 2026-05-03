'use client';
import React, { useActionState, useState } from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { createComment } from '@/app/actions/create-comments';
import { Loader2 } from 'lucide-react';

type CommentCreateFormProps = {
    postId: string;
    parentId?: string;
    startOpen?: boolean
}
const CommentCreateForm: React.FC<CommentCreateFormProps> = ({ postId, parentId, startOpen }) => {
    const [open, setOpen] = useState(startOpen);
    const [formstate, action, isPending] = useActionState(createComment.bind(null, { postId, parentId }), { errors: {} })
    return (
        <div className="mt-1">
            <button 
                onClick={() => setOpen(!open)}
                className="text-xs font-bold text-emerald-600 hover:text-emerald-800 transition-colors uppercase tracking-wider"
            >
                {open ? 'Close' : 'Reply to thread'}
            </button>
            
            {open && (
                <form action={action} className="mt-4 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <Textarea 
                        name="content" 
                        placeholder="Share your insights..." 
                        className="min-h-[120px] bg-emerald-50/30 border-emerald-100 focus:bg-white focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none rounded-xl shadow-inner" 
                    />

                    {formstate.errors.content && (
                        <p className="text-red-500 text-xs font-bold pl-2 border-l-2 border-red-500">
                            {formstate.errors.content.join(", ")}
                        </p>
                    )}
                    
                    {formstate.errors.formError && (
                        <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                            <p className="text-red-600 text-sm font-bold">
                                {formstate.errors.formError.join(", ")}
                            </p>
                        </div>
                    )}

                    <div className="flex justify-start">
                        <Button 
                            disabled={isPending} 
                            size="lg" 
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                        >
                            {isPending ? (
                                <><Loader2 className="animate-spin mr-2 h-4 w-4" /> Sending...</>
                            ) : 'Post Comment'}
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
}
export default CommentCreateForm;