import ProductList from "../components/ProductList";
import cardList from '../data/cards.json';
import { useState } from "react";
import Pagination from "../components/Pagination";
import PcFilter from "../components/PcFilter";
import MySelect from "../UI/select/MySelect";

const Pc = () => {
    const [cards, setCards] = useState(cardList)
    const [sortType, setSortType] = useState("lowToHigh");

    // Пагинация
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    
    // Определение индексов первого и последнего товара на текущей странице
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let currentItems = cards.slice(indexOfFirstItem, indexOfLastItem);
    
    const handleSortChange = (type) => {
        setSortType(type);
        // Создаем копию массива cards для обновления state
        const updatedCards = [...cards];
        
        // Сортировка товаров в зависимости от выбранной опции
        if (type === "lowToHigh") {
          updatedCards.sort((a, b) => a.price - b.price);
        } else if (type === "highToLow") {
          updatedCards.sort((a, b) => b.price - a.price);
        }

        setCards(updatedCards);
      };
    
    // Функция для изменения текущей страницы
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return (
        <div className="container mx-auto">
            <div className="flex justify-end pr-16 pt-5">
                <MySelect handleSortChange={handleSortChange} />
            </div>
            <div className="flex flex-row px-10 py-5 gap-6">
                <div className="basis-1/4 h-auto border border-gray-400 rounded-lg">
                    <PcFilter setCurrentPage={setCurrentPage} setCards={setCards} cardList={cardList} />
                </div>
                {currentItems.length !== 0
                    ? <ProductList currentItems={currentItems} /> 
                    : <div className="text-center text-3xl">Sorry, there are no products matching your request.</div>
                }
                
            </div>
            <div className="flex flex-row px-10 py-5 gap-6 justify-center">
                <div className="basis-1/4"></div>
                <Pagination className="basis-3/4" currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={cards.length} paginate={paginate} />
            </div>
            
        </div>
    )
}

export default Pc;