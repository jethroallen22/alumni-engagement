export default function Breadcrumbs({ crumbs }) {
    return (
        <nav className="text-sm mb-10">
        <ol className="list-reset flex">
            {
                crumbs.map((crumb, i) => {
                    crumb.path ?
                    <>
                    <li><a href={crumb.path} class="text-blue-500">{crumb.label}</a></li>
                    {i < i.length ? 
                    <li className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </li> 
                    : 
                    ''}
                    </>
                    :
                    <li><span className="text-gray-500">{crumb.label}</span></li>
                })
            }
        </ol>
        </nav>
    )
}