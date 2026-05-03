'use client'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { createPost } from '@/app/actions/create-post'
import { useActionState } from 'react'

type CreatePostForm = {
    slug: string
}

const PostCreateForm: React.FC<CreatePostForm> = ({ slug }) => {
    const [formState, action] = useActionState(createPost.bind(null, slug), { errors: {} });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-[0_10px_20px_rgba(34,_197,_94,_0.3)] hover:shadow-[0_15px_30px_rgba(34,_197,_94,_0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 rounded-xl font-bold w-full md:w-auto px-8 py-6 text-lg">
                    New Post
                </Button>
            </DialogTrigger>

            <DialogContent className='sm:max-w-106.25 border-green-200 shadow-2xl rounded-2xl'>
                <form action={action}>
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-green-800 font-bold">Create a Post</DialogTitle>
                        <DialogDescription className="text-green-600/80">
                            Write a new post to start discussion. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className='grid gap-4 py-4'>
                        <div>
                            <Label htmlFor="title" className="text-green-700 font-medium">Title</Label>
                            <Input id='title' name='title' className="border-green-200 focus-visible:ring-green-500 rounded-lg" />
                        </div>
                        {formState.errors.title && <p className='text-sm text-red-600 font-medium'>{formState.errors.title}</p>}
                        <div>
                            <Label htmlFor='content' className="text-green-700 font-medium">Content</Label>
                            <Textarea id="content" name="content" className="border-green-200 focus-visible:ring-green-500 rounded-lg min-h-[100px]" />
                        </div>
                        {formState.errors.content && <p className='text-sm text-red-600 font-medium'>{formState.errors.content}</p>}
                        {formState.errors.formError && <div className='border border-red-600 bg-red-50 text-red-700 p-3 rounded-lg text-sm font-medium'>{formState.errors.formError}</div>}
                    </div>
                    <DialogFooter>
                        <Button type="submit" className='w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl font-bold'>Save Changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
export default PostCreateForm;