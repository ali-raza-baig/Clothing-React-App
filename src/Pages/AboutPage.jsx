import Layout from "../Components/Layout"
const AboutPage = () => {
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-brown-dark">About Us

                        </h1>
                        <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio culpa placeat facilis iste sed voluptate amet, eaque ipsa adipisci corrupti maiores voluptatum qui ut. Mollitia voluptas possimus accusantium temporibus tenetur?
                            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>

                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="/images/IMG-20240723-WA0024.jpg" />
                    </div>
                </div>
            </section>

            <section className="text-gray-600 bg-gray-200 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="/images/IMG-20240723-WA0026.jpg" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-brown-dark">Our Mission
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-center font-bold text-brown-dark text-3xl font-popins pb-8"> Our Team</h1>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/IMG-20240723-WA0020.jpg" />
                            </a>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/IMG-20240723-WA0022.jpg" />
                            </a>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/IMG-20240723-WA0020.jpg" />
                            </a>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/IMG-20240723-WA0022.jpg" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default AboutPage