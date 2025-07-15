import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,Link } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';


export default function Index(props) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Users
                </h2>
            }
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {/* <pre> {JSON.stringify(props.users, undefined, 2)} </pre> */}

                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500" >
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2">ID</th>
                                        <th className="px-3 py-2">Name</th>
                                        <th className="px-3 py-2">Email</th>
                                        <th className="px-3 py-2">Created Date</th>
                                        <th className="px-3 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.users.data.map( (user) => (
                                        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                            <td className='px-3 py-2'>{user.id}</td>
                                            <td className='px-3 py-2'>{user.name}</td>
                                            <td className='px-3 py-2'>{user.email}</td>
                                            <td className='px-3 py-2'>{user.created_at}</td>
                                            <td className='px-3 py-2'>
                                                <Link 
                                                    href={route('user.edit',user.id)}
                                                    className='font-medium text-yellow-600 dark:text-yellow-500 hover:underline mx-1'
                                                    >
                                                    Edit
                                                </Link>
                                                <Link 
                                                    href={route('user.destroy',user.id)}
                                                    className='font-medium text-red-600 dark:text-red-500 hover:underline mx-1'
                                                    >
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <Pagination links={props.users.meta.links}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
