'use client'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { createTopics } from '@/app/actions/create-topics'
import { useActionState } from 'react'

const TopicCreateForm = () => {
   const [formState, action] = useActionState(createTopics,{errors:{}});

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-[0_10px_20px_rgba(34,_197,_94,_0.3)] hover:shadow-[0_15px_30px_rgba(34,_197,_94,_0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 rounded-xl font-bold w-full md:w-auto px-8 py-6 text-lg">
                    New Topic
                </Button>
            </DialogTrigger>
            
            <DialogContent className='sm:max-w-106.25 border-green-200 shadow-2xl rounded-2xl'>
                <form action={action}>
                <DialogHeader>
                    <DialogTitle className="text-2xl text-green-800 font-bold">Create a Topic</DialogTitle>
                    <DialogDescription className="text-green-600/80">
                        Write a new topic to start discussion. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                    <div>
                        <Label htmlFor="name" className="text-green-700 font-medium">Name</Label>
                        <Input id='username' name='name' className="border-green-200 focus-visible:ring-green-500 rounded-lg" />
                    </div>
                    {formState.errors.name && <p className='text-sm text-red-600 font-medium'>{formState.errors.name}</p>}
                    <div>
                        <Label htmlFor='description' className="text-green-700 font-medium">Description</Label>
                        <Textarea id="description" name="description" className="border-green-200 focus-visible:ring-green-500 rounded-lg min-h-[100px]" />
                    </div>
                    {formState.errors.description && <p className='text-sm text-red-600 font-medium'>{formState.errors.description}</p>}
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
export default TopicCreateForm;