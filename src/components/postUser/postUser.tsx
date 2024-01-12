import React from 'react';

const getPost = async (userId: any) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        cache: 'no-store',
        // next: { revalidate: 60000 },
    });
    if (!res.ok) {
        throw new Error('Something went wrong');
    }
    return res.json();
};

export default async function PostUser({ userId }: any) {
    const user = await getPost(userId);
    console.log(user);
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.username}</p>
        </div>
    );
}
