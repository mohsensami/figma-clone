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
const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

    if (!res.ok) {
        throw new Error('Something went wrong');
    }

    return res.json();
};

export default async function SingleBlog({ params }: any) {
    const { slug } = params;
    // const post = await getPost(slug);
    const post = await getData(slug);
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
