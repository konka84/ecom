import { useState } from "react"
import ProdCard from "../productCards/ProdCard";


function Products() {
    const allProducts = JSON.parse(localStorage.getItem("Products"));
    const categories = JSON.parse(localStorage.getItem("Categories"));
    const [selectedCategory, setSelectedCategory] = useState("All Products");
    const [searchText, setSearchText] = useState("");

    return (allProducts) ? (
        <div className="pt-24 bg-gradient-to-br bg-opacity-10 from-gray-1000 to-gray-500 px-12 sm:px-28 md:px-8 lg:px-16 xl:px-32">
            <div className="flex-wrap flex justify-between w-full px-10 my-2 md:space-y-0 space-y-2">
                <div className="inline-block relative 2xl:w-2/5 xl:w-2/5 md:w-2/5 w-full transition transform hover:scale-105 px-2">
                    <select
                        className="block capitalize appearance-none w-full bg-purple-100 border border-gray-300 text-gray-900 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500 transition transform hover:bg-purple-200"
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        value={selectedCategory}
                    >
                        <option value="All Products">All Products</option>
                        {
                            categories.map(category => <option className="capitalize" value={category} key={category}>{category}</option>)
                        }
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
                <div className="inline-block relative 2xl:w-2/5 xl:w-2/5 md:w-2/5 w-full px-2 transition transform hover:scale-105">
                    <input className="bg-purple-100 py-3 px-10 w-full border border-gray-300 placeholder-gray-600 text-gray-900 rounded leading-tight focus:outline-none focus:bg-purple-100 focus:border-purple-500 transition transform hover:bg-purple-200" type="text" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center px-2 text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    {
                        searchText ? (
                            <div onClick={() => setSearchText("")} className="absolute inset-y-0 right-2 flex items-center px-2 rounded-r hover:bg-gray-300 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>) : ""
                    }
                </div>
            </div>
            <div className="flex flex-wrap justify-start items-stretch">
                {
                    allProducts.filter(product => ((product.category === selectedCategory) || (selectedCategory === "All Products")))
                        .filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()))
                        .map((product) => {
                            return (
                                <div key={product.id} className="2xl:w-1/5 xl:w-1/4 md:w-1/3 w-full py-2 px-4 lg:px-10 xl:py-4 xl:px-6 ">
                                    <ProdCard product={product} />
                                </div>
                            )
                        })
                }
            </div>
        </div>
    ) : (
        <div className='h-auto flex bg-gradient-to-r from-blue-100 to-green-100'>
            <div className='m-auto my-52 '>
                <div className='flex items-center justify-center '>
                    <div className='w-40 h-40 border-t-8 border-b-8 border-blue-500 rounded-full animate-spin'></div>
                </div>
            </div>
        </div>
    )
}

export default Products;