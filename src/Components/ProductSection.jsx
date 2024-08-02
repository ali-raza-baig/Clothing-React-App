import { useState } from "react"
import { data } from '../Data'
const ProductSection = () => {
    const [category, setCategory] = useState('all')
    const filterItems = (value) => {
        setCategory(value)
    }
    const FilterData = category === 'all' ? data : data.filter(item => item.category === category)
    return (
        <>
            <div className="container mx-auto ">
                <div className="flex justify-center mb-4">
                    <button onClick={() => filterItems('all')} className="mx-2 px-4 py-2 underline text-2xl">All</button>
                    <button onClick={() => filterItems('Drink')} className="mx-2 px-4 py-2 underline text-2xl">Drink</button>
                    <button onClick={() => filterItems('Dessert')} className="mx-2 px-4 py-2 underline text-2xl">Dessert</button>
                    {/* Add more buttons as needed */}
                </div>

                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {FilterData.map(p => (
                            <div key={p.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p.image} />
                                </a>
                                <div className="mt-2 text-center">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{p.name}</h2>
                                    <div className=" ">
                                        <span className="text-gray-900 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-900">
                                            <h1 className="text-sm font-bold"> $ {p.price}</h1>
                                        </span>
                                        <span className="text-gray-900 inline-flex items-center leading-none text-sm font-bold">
                                            6   <svg className="mx-2 w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductSection