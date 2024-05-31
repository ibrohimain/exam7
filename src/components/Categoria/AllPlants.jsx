import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const AllPlants = ({ currentItems, currentPage, totalPages, handleNext, handlePrevious, renderPagination }) => {
    return (
        <div>
            <div className='grid grid-rows-3 grid-flow-col gap-4 p-4'>
                {currentItems.map((item, index) => (
                    <div key={index} className='w-[290px] h-[350px] shadow-md p-4'>
                        <img src={item.image_url} alt={item.common_name} className='w-full h-[250px] object-cover' />
                        <p className='mt-2 font-semibold'>{item.common_name}</p>
                        <span className='text-green-600'>${item.price}.00</span>
                    </div>
                ))}
            </div>
            <div className='pagination flex justify-end items-center mt-4'>
                <button onClick={handlePrevious} disabled={currentPage === 1} className='w-[40px] h-[40px] border rounded'>
                    <ChevronLeftIcon />
                </button>
                {renderPagination()}
                <button onClick={handleNext} disabled={currentPage === totalPages} className='w-[40px] h-[40px] border rounded'>
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
};

export default AllPlants;
