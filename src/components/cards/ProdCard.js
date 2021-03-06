import { useContext } from "react";
import { ShopContext } from "../../contexts/ShoppingContext";



export default function ProdCard({ product: { id, image, title, category, price, rating} }) {
    const {cartProducts, setCartProducts} = useContext(ShopContext );

    return (
        <div className="py-3 px-12 space-y-2 flex flex-wrap justify-center h-full rounded-2xl bg-purple-100 hover:bg-purple-300 ">
            <div className="relative w-full pb-110p">
                <img className="absolute w-full h-full rounded-xl" src={image} alt="product" />
            </div>
            <div className="flex-grow">
                <h6 className="text-base font-extrabold"><i className="fa fa-dollar pr-1"></i> {price}</h6>
            </div>
            <div className="text-right">
                <h6 className="text-base font-semibold">{rating.rate} <i className="fa fa-star pl-1 text-bright-black"></i></h6>
            </div>
            <div className="w-full text-center">
                {
                   ( cartProducts[id] &&(cartProducts[id].count>0)) ? (
                        <div className="space-x-3 flex flex-wrap justify-around px-5 items-center">
                            <button onClick={() => setCartProducts({...cartProducts, [id]: {...cartProducts[id],count: Math.max(0,cartProducts[id].count-1)}})} className="bg-purple-400 transition transform hover:scale-110 px-3 py-1 rounded-full" ><i className="fa fa-minus font-bold text-xl"></i></button>
                           <button onClick={() => setCartProducts({...cartProducts, [id]: {...cartProducts[id],count: (cartProducts[id].count+1)}})} className="bg-purple-400 transition transform hover:scale-110 px-3 py-1 rounded-full" ><i className="fa fa-plus font-bold text-xl"></i></button>
                    
                           <h3 className="bg-purple-400 px-3 py-0 rounded-lg font-bold text-2xl" >{cartProducts[id].count}</h3>
                        </div>
                    ) : (
                        <button onClick={() => setCartProducts({...cartProducts, [id]: {id,image,title,price,rating,count:1}})} className="p-2 bg-purple-400 transition transform hover:scale-105 w-full rounded-lg font-semibold"><i className="fa fa-cart-plus"></i> Add To Cart</button>
                    )
                }
            </div>
            <h4 className="bg-purple-100 px-2 rounded-lg font-bold text-lg text-center w-full">{title}</h4>
        </div>
    )
}