import { useState } from 'react';
import cardList from '../data/cards.json';

const ProductList = (props) => {

    const [cards, setCards] = useState(cardList);

    return (
        <div {...props}>
            {cards.map((card) => (
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
                            <div>{card['graphics cards']}</div>
                            <div>RAM: {card.ram}</div>
                            <div>SSD: {card.ssd}</div>
                            <div>{card['water cooling']}</div>
                        </div>

                        <div className='flex justify-between items-center gap-6 mt-4'>
                            <button className="transition duration-500 ease-in-out bg-violet-800 px-4 py-2 rounded-full hover:bg-violet-500">More details</button>
                            <button className="transition duration-500 ease-in-out bg-violet-800 px-4 py-2 rounded-full hover:bg-violet-500">Add to Basket</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductList;