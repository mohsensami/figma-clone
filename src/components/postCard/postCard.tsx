import Link from 'next/link';
import React from 'react';

export default function PostCard({ post }: any) {
    return (
        <div className="border border-gray-400">
            <div>
                {post.img ? (
                    <img src={post.img} alt={post.title} />
                ) : (
                    <img src="https://placehold.co/600x400?text=No+Image" alt={post.title} />
                )}
            </div>
            <h1>{post.title}</h1>
            <div>
                <Link href={`/blog/${post.slug}`}>Read more</Link>
            </div>
        </div>
    );
}
