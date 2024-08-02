import Layout from '../Components/Layout'
import ProductSection from '../Components/ProductSection.jsx'

const HomePage = () => {


    return (
        <Layout>
            <section className="text-brown-dark bg-brown-light body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-popins text-gray-900">Before they sold out
                            <br className="hidden lg:inline-block" />readymade gluten
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-brown-dark border-0 py-2 px-6 focus:outline-none hover:bg-brown-light hover:text-brown-dark rounded text-lg">Explore Now</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                        <img className="object-cover object-center bg-brown-dark  rounded-t-3xl" alt="hero" src="/images/hero.jpg" />
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className='text-center text-4xl font-extrabold text-brown-dark'>Best Selling</h1>
                    <p className='text-center font-medium mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/IMG-20240723-WA0023.jpg" alt="blog" />
                                <div className="p-6 text-center">
                                    <h2 className="text-lg title-font font-medium text-gray-900 mb-1">Product Name</h2>
                                    <div className="font-bold ">
                                        <span className="text-gray-900 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-900">
                                            $ 1.2
                                        </span>
                                        <span className="text-gray-900 inline-flex items-center leading-none text-sm">
                                            6  <svg className="mx-2 w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/IMG-20240723-WA0023.jpg" alt="blog" />
                                <div className="p-6 text-center">
                                    <h2 className="text-lg title-font font-medium text-gray-900 mb-1">Product Name</h2>
                                    <div className='font-bold'>
                                        <span className="text-gray-900 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-900">
                                            $ 1.2
                                        </span>
                                        <span className="text-gray-900 inline-flex items-center leading-none text-sm">
                                            6  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="golden" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/IMG-20240723-WA0023.jpg" alt="blog" />
                                <div className="p-6 text-center">
                                    <h2 className="text-lg title-font font-medium text-gray-900 mb-1">Product Name</h2>
                                    <div className="font-bold">
                                        <span className="text-gray-900 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-900">
                                            $ 1.2
                                        </span>
                                        <span className="text-gray-900 inline-flex items-center leading-none text-sm">
                                            6  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="golden" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div>
                <div className="text-center text-brown-dark font-extrabold text-2xl">Best Salling</div>
                <ProductSection />
            </div>

            <section className="text-brown-dark bg-brown-light body-font">
                <div className="container px-5 mb-10 py-10 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img className="object-cover object-center w-3/4 h-full mx-10" src="/images/IMG-20240723-WA0026.jpg" alt="stats" />
                    </div>
                    <div className="flex flex-wrap  mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div className="w-full sm:p-4 px-4 mb-6">
                            <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                            <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                        </div>
                        <div className="font-bold font-popins sm:w-1/2 lg:w-1/5 w-1/4 text-center border-1 border-gray-200 rounded-xl text-black bg-white m-2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">05</h2>
                            <p className="leading-relaxed">Days</p>
                        </div>
                        <div className="font-bold font-popins  sm:w-1/2 lg:w-1/5 w-1/4 text-center border-1 border-gray-200 rounded-xl text-black bg-white m-2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">17</h2>
                            <p className="leading-relaxed">Hours</p>
                        </div>
                        <div className="font-bold font-popins sm:w-1/2 lg:w-1/5 w-1/4 text-center border-1 border-gray-200 rounded-xl text-black bg-white m-2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                            <p className="leading-relaxed">Minutes</p>
                        </div>

                        <button className="inline-flex text-white bg-brown-dark border-0 py-2 px-6 mx-8 mt-4 focus:outline-none hover:bg-brown-light hover:text-brown-dark rounded text-lg">Explore Now</button>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className='text-center text-2xl font-extrabold  text-brown-dark mb-4 '>Cool And Trendy Cloths for You</h1>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full">
                                <img className="lg:h-4/5 md:h-36 w-full object-cover object-center" src="/images/IMG-20240723-WA0027.jpg" alt="blog" />
                                <div className="p-6 text-center font-bold ">
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Name</h1>
                                    <p className="leading-relaxed  mb-3">Lorem ipsum dolor sit amet consectetur. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full">
                                <img className="lg:h-4/5 md:h-36 w-full object-cover object-center" src="/images/IMG-20240723-WA0028.jpg" alt="blog" />
                                <div className="p-6 text-center font-bold ">
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Name</h1>
                                    <p className="leading-relaxed  mb-3">Lorem ipsum dolor sit amet consectetur. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full">
                                <img className="lg:h-4/5 md:h-36 w-full object-cover object-center" src="/images/IMG-20240723-WA0029.jpg" alt="blog" />
                                <div className="p-6 text-center font-bold ">
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Name</h1>
                                    <p className="leading-relaxed  mb-3">Lorem ipsum dolor sit amet consectetur. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="lg:p-12 p-6 font-[sans-serif]">
                <div className="max-w-6xl max-md:max-w-lg mx-auto">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <h2 className="text-brown-dark text-2xl font-extrabold text-center">What our happy client say</h2>
                        </div>

                    </div>
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="p-6 rounded-lg bg-white shadow-md">
                            <div className="flex items-center">
                                <img src="https://readymadeui.com/profile_2.webp" className="w-10 h-10 rounded-full" />
                                <div className="ml-4">
                                    <h4 className="text-gray-800 text-sm font-extrabold">John Doe</h4>
                                    <p className="mt-0.5 text-xs text-gray-400">Founder of Rubik</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-gray-800 text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                            </div>
                            <div className="flex space-x-1 mt-4">
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg bg-white shadow-md">
                            <div className="flex items-center">
                                <img src="https://readymadeui.com/profile_3.webp" className="w-10 h-10 rounded-full" />
                                <div className="ml-4">
                                    <h4 className="text-gray-800 text-sm font-extrabold">Mark Adair</h4>
                                    <p className="mt-0.5 text-xs text-gray-400">Founder of Alpha</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-gray-800 text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                            </div>
                            <div className="flex space-x-1 mt-4">
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg bg-white shadow-md">
                            <div className="flex items-center">
                                <img src="https://readymadeui.com/profile_4.webp" className="w-10 h-10 rounded-full" />
                                <div className="ml-4">
                                    <h4 className="text-gray-800 text-sm font-extrabold">Simon Konecki</h4>
                                    <p className="mt-0.5 text-xs text-gray-400">Founder of Labar</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-gray-800 text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                            </div>
                            <div className="flex space-x-1 mt-4">
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-4 justify-center m-6 text-center">
                        <div className="bg-white w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#333] inline" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" data-original="#000000" />
                            </svg>
                        </div>
                        <div className="bg-[#333] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" data-original="#000000" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default HomePage