import { Link } from "@inertiajs/react";

export default function Pagination({links}) {

    return (
        <nav className="text-center mt-4">
            {links.map(link => (
                <Link 
                    preserveScroll // as its name
                    key = {link.label}
                    className= {"inline-block py-2 px-3 rounded-lg text-gray-200 text-xs " + ( link.active ? "text-red-300 " : " ") + (!link.url ? "!text-gray-500 cursor-not-allowed " : "hover:bg-gray-950    ") }
                    href={link.url || ""}
                    dangerouslySetInnerHTML={{__html: link.label}}
                    > 
                    {/* {link.label}                 */}
                </Link>   

            ))}
        </nav>
    )
}