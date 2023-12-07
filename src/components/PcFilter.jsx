import { useState, useEffect } from "react";

export default function PcFilter({ cardList, setCards, setCurrentPage }) {
    
    const [selectedProcessor, setSelectedProcessor] = useState([])
    const [selectedGPU, setSelectedGPU] = useState([]);
    const [selectedRAM, setSelectedRAM] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    
    useEffect(() => {
        // Функция для фильтрации товаров
        const filteredProducts = cardList.filter((cards) => {
          if (
            (selectedProcessor.length === 0 || selectedProcessor.includes(cards.processor)) &&
            (selectedGPU.length === 0 || selectedGPU.includes(cards.gpu)) &&
            (selectedRAM.length === 0 || selectedRAM.includes(cards.ram)) &&
            (selectedStorage.length === 0 || selectedStorage.includes(cards.storage))
          ) {
            return true
          }
          return false;
        });
        setCards(filteredProducts);
        setCurrentPage(1)   // Для обновления пагинации (если убрать то будет ошибка отображения при фильтрации)
      }, [selectedProcessor, selectedGPU, selectedRAM, selectedStorage]);
      
      const handleProcessorChange = (value) => {
        setSelectedProcessor((prev) => {
          if (prev.includes(value)) {
            return prev.filter((item) => item !== value);
          } else {
            return [...prev, value];
          }
        });
      };
      
      const handleGPUChange = (value) => {
        setSelectedGPU((prev) => {
            if (prev.includes(value)) {
              return prev.filter((item) => item !== value);
            } else {
              return [...prev, value];
            }
          });
      };
    
      const handleRAMChange = (value) => {
        setSelectedRAM((prev) => {
            if (prev.includes(value)) {
              return prev.filter((item) => item !== value);
            } else {
              return [...prev, value];
            }
          });
      };
    
      const handleStorageChange = (value) => {
        setSelectedStorage((prev) => {
            if (prev.includes(value)) {
              return prev.filter((item) => item !== value);
            } else {
              return [...prev, value];
            }
          });
      };
    
  return (
    <div>
        <div className="p-5">

            <div className="flex flex-col ">
                            <h2>Processor:</h2>
                            <div className='flex items-center me-4'>
                                    <input
                                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        type="checkbox"
                                        name="processor"
                                        value="Intel Core i5"
                                        checked={selectedProcessor.includes('Intel Core i5')}
                                        onChange={() => handleProcessorChange('Intel Core i5')}
                                    />
                                    <label className='ms-2'>Intel Core i5</label>
                            </div>

                            <div className='flex items-center me-4'>
                                    <input
                                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        type="checkbox"
                                        name="processor"
                                        value="Intel Core i7"
                                        checked={selectedProcessor.includes('Intel Core i7')}
                                        onChange={() => handleProcessorChange('Intel Core i7')}
                                    />
                                    <label className='ms-2'>Intel Core i7</label>
                            </div>

                            <div className='flex items-center me-4'>
                                    <input
                                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        type="checkbox"
                                        name="processor"
                                        value="Intel Core i9"
                                        checked={selectedProcessor.includes('Intel Core i9')}
                                        onChange={() => handleProcessorChange('Intel Core i9')}
                                    />
                                    <label className='ms-2'>Intel Core i9</label>
                            </div>
                            
            </div>

            <div className="flex flex-col mt-4">
                            <h2>GPU:</h2>
                            <div className='flex items-center me-4'>
                                    <input
                                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        type="checkbox"
                                        name="gpu"
                                        value="Nvidia GeForce RTX 4070"
                                        checked={selectedGPU.includes('Nvidia GeForce RTX 4070')}
                                        onChange={() => handleGPUChange('Nvidia GeForce RTX 4070')}
                                    />
                                    <label className='ms-2'>Nvidia GeForce RTX 4070</label>
                            </div>

                            <div className='flex items-center me-4'>
                                    <input
                                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        type="checkbox"
                                        name="gpu"
                                        value="Nvidia GeForce RTX 4080"
                                        checked={selectedGPU.includes('Nvidia GeForce RTX 4080')}
                                        onChange={() => handleGPUChange('Nvidia GeForce RTX 4080')}
                                    />
                                    <label className='ms-2'>Nvidia GeForce RTX 4080</label>
                            </div>

                            <div className='flex items-center me-4'>
                                    <input
                                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        type="checkbox"
                                        name="gpu"
                                        value="Nvidia GeForce RTX 4080ti"
                                        checked={selectedGPU.includes('Nvidia GeForce RTX 4080ti')}
                                        onChange={() => handleGPUChange('Nvidia GeForce RTX 4080ti')}
                                    />
                                    <label className='ms-2'>Nvidia GeForce RTX 4080ti</label>
                            </div>

                            <div className='flex items-center me-4'>
                                    <input
                                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        type="checkbox"
                                        name="gpu"
                                        value="Nvidia GeForce RTX 4090"
                                        checked={selectedGPU.includes('Nvidia GeForce RTX 4090')}
                                        onChange={() => handleGPUChange('Nvidia GeForce RTX 4090')}
                                    />
                                    <label className='ms-2'>Nvidia GeForce RTX 4090</label>
                            </div>

                            <div className='flex items-center me-4'>
                                    <input
                                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        type="checkbox"
                                        name="gpu"
                                        value="Nvidia GeForce RTX 4090ti"
                                        checked={selectedGPU.includes('Nvidia GeForce RTX 4090ti')}
                                        onChange={() => handleGPUChange('Nvidia GeForce RTX 4090ti')}
                                    />
                                    <label className='ms-2'>Nvidia GeForce RTX 4090ti</label>
                            </div>

            </div>

            <div className="flex flex-col mt-4">
                            <h2>RAM:</h2>
                            <div className='flex items-center me-4'>
                                    <input
                                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        type="checkbox"
                                        name="ram"
                                        value="16 Gb"
                                        checked={selectedRAM.includes('16 Gb')}
                                        onChange={() => handleRAMChange('16 Gb')}
                                    />
                                    <label className='ms-2'>16 Gb</label>
                            </div>

                            <div className='flex items-center me-4'>
                                    <input
                                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        type="checkbox"
                                        name="ram"
                                        value="32 Gb"
                                        checked={selectedRAM.includes('32 Gb')}
                                        onChange={() => handleRAMChange('32 Gb')}
                                    />
                                    <label className='ms-2'>32 Gb</label>
                            </div>

            </div>

            <div className="flex flex-col mt-4">
                            <h2>Storage:</h2>

                            <div className='flex items-center me-4'>
                                    <input
                                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        type="checkbox"
                                        name="storage"
                                        value="1 Tb"
                                        checked={selectedStorage.includes('1 Tb')}
                                        onChange={() => handleStorageChange('1 Tb')}
                                    />
                                    <label className='ms-2'>1 Tb</label>
                            </div>

                            <div className='flex items-center me-4'>
                                    <input
                                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        type="checkbox"
                                        name="storage"
                                        value="2 Tb"
                                        checked={selectedStorage.includes('2 Tb')}
                                        onChange={() => handleStorageChange('2 Tb')}
                                    />
                                    <label className='ms-2'>2 Tb</label>
                            </div>
            </div>
        </div>

    </div>
  )
}
