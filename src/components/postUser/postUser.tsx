import React from 'react';
import { getUser } from '@/lib/data';

// FETCH DATA WITH AN API
// const getPost = async (userId: any) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
//         cache: 'no-store',
//         // next: { revalidate: 60000 },
//     });
//     if (!res.ok) {
//         throw new Error('Something went wrong');
//     }
//     return res.json();
// };

export default async function PostUser({ userId }: any) {
    const user = await getUser(userId);

    return (
        <div>
            {/* <p>{user.name}</p>
            <p>{user.email}</p> */}
            <p>{user.username}</p>
        </div>
    );
}
