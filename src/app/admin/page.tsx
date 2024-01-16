import { Suspense } from 'react';

import AdminPosts from '@/components/adminPosts/adminPosts';
import AdminPostForm from '@/components/adminPostForm/adminPostForm';
import AdminUsers from '@/components/adminUsers/adminUsers';
import AdminUserForm from '@/components/adminUserForm/adminUserForm';
import { auth } from '@/lib/auth';

const Admin = async () => {
    const session = await auth();

    return (
        <div>
            <div>
                <div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminPosts />
                    </Suspense>
                </div>
                <div>
                    <AdminPostForm userId={session?.user.id} />
                </div>
            </div>
            <div>
                <div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminUsers />
                    </Suspense>
                </div>
                <div>
                    <AdminUserForm />
                </div>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolore quos quo repellendus alias
            aliquam, est et, iure reiciendis harum excepturi ea soluta minima odio repudiandae distinctio eaque delectus
            dolores.
        </div>
    );
};

export default Admin;
