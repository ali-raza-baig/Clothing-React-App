import CheckBox from "../Components/CheckBox"
import Layout from "../Components/Layout"
import { data } from "../Data"
const ProductsPage = () => {
    return (
        <Layout>

            <div className="flex">
                <div className="w-1/5 sd:w-1/6 md:w-1/3 lg:w-1/5 m-2 bg-gray-100 p-4 hidden md:block">
                    <CheckBox title={'Filters'} />
                    <CheckBox title={'Category'} />
                    <CheckBox title={'Brands'} />
                </div>
                <div className="w-3/4 m-2  p-4">
                    <div className="container px-5 py-10 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {data.map(p => (
                                <div key={p.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p.image} />
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{p.category}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{p.name}</h2>
                                        <p className="mt-1">${p.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
            <nav aria-label="Page navigation example">
                <ul className="flex items-end justify-end -space-x-px h-8 m-3 text-sm">
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>



        </Layout>

    )
}

export default ProductsPage