import Link from 'next/link';
import React from 'react';

export default function PostCard({ post }: any) {
    return (
        <div className="border border-gray-400">
            <h1>{post.title}</h1>
            <div>
                <Link href={`/blog/${post.id}`}>Read more</Link>
            </div>
        </div>
    );
}
