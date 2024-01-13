import PostUser from '@/components/postUser/postUser';
import React, { Suspense } from 'react';
import { getPost } from '@/lib/data';

export const generateMetadata = async ({ params }: any) => {
    const { slug } = params;
    const post = await getPost(slug);
    return {
        title: post.title,
        descriptin: post.description,
    };
};

// FETCH DATA WITH AN API
// const getPost = async (slug: any) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
//         cache: 'no-store',
//         // next: { revalidate: 60000 },
//     });
//     if (!res.ok) {
//         throw new Error('Something went wrong');
//     }
//     return res.json();
// };

export default async function SingleBlog({ params }: any) {
    const { slug } = params;
    const post = await getPost(slug);
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
            <Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post.userId} />
            </Suspense>
        </div>
    );
}
