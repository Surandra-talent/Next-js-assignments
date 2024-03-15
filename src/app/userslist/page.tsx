"use client";
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const UserList =() =>{
    
    return (
        <div>
            <h1>Users List</h1>
            <ul>
                <li>
                    <Link href="/userslist/abc">ABC</Link>
                </li>
                <li>
                    <Link href="/userslist/xyz">XYZ</Link>
                </li>
                <li>
                    <Link href="/userslist/noc">NOC</Link>
                </li>
            </ul>
        </div>

    );

};
export default UserList;