import React from 'react'

type TopicShowPageProps = {
    params: Promise<{ slug: string }>
}


const TopicShowPage: React.FC<TopicShowPageProps> = async ({ params }) => {
    const slug = (await params).slug;
    return (
        <div>
            <div>
                <h1>{slug}</h1>
            </div>
            <div></div>
        </div>
    )
}
export default TopicShowPage