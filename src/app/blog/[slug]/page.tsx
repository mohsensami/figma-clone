import React from 'react';

const getPost = async (slug: any) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
        cache: 'no-store',
        // next: { revalidate: 60000 },
    });
    if (!res.ok) {
        throw new Error('Something went wrong');
    }
    return res.json();
};

export default async function SingleBlog({ params }: any) {
    const { slug } = params;
    const post = await getPost(slug);
    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    );
}
