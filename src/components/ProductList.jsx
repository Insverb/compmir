import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setProduct } from "../../redux/actions";


const ProductList = ({ currentItems}) => {

    const dispatch = useDispatch();

    const handleDetailClick = (product) => {
        dispatch(setProduct(product))
    }

    return (
        <div className="basis-3/4 flex flex-wrap gap-4">
                    {currentItems.map((card) => (
                        <div key={card.id}>
                             <div className='rounded-3xl bg-[#131313] pb-6 px-8'>
                                <img className='rounded-3xl w-[200px] h-[100px] mx-auto sm:h-[220px]' src={card.image} alt="" />

                                <hr className='mb-2' />

                                <div className="flex justify-between items-center mb-5 mt-4">
                                    <div className='text-xl'>{card.title}</div>
                                    <div className='text-xl'>{new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                        }).format(card.price)}
                                    </div>
                                </div>

                                <div className='text-[16px] text-gray-400 flex flex-col gap-y-1'>
                                    <div>{card.processor}</div>
                                    <div>{card.gpu}</div>
                                    <div>RAM: {card.ram}</div>
                                    <div>SSD: {card.storage}</div>
                                    <div>{card['water cooling']}</div>
                                </div>
                                
                                <div className='flex justify-between items-center gap-6 mt-4'>
                                    <NavLink 
                                        to={`/product/${card.id}`} // Маршрут с идентификатором товара
                                        onClick={() => handleDetailClick(card)}
                                        className="transition duration-500 ease-in-out bg-violet-800 px-4 py-2 rounded-full hover:bg-violet-500"
                                    > 
                                    More Details
                                    </NavLink>
                                    
                                    <button className="transition duration-500 ease-in-out bg-violet-800 px-4 py-2 rounded-full hover:bg-violet-500">Add to Basket</button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
    )
}

export default ProductList;