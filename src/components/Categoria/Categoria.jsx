import { Button } from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './category.css';
import { Data } from '../../data';
import AllPlants from './AllPlants';
import NevArivals from './NevArivals';
import Sale from './categoria_img/Sale';

const ITEMS_PER_PAGE = 9; // Adjust as needed

const Categoria = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState('allPlants');

    const totalItems = Data.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = Data.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNum) => {
        setCurrentPage(pageNum);
    };

    const renderPagination = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <span
                    key={i}
                    className={`pagination-page ${i === currentPage ? 'active' : ''}`}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </span>
            );
        }
        return pages;
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'allPlants':
                return (
                    <AllPlants
                        currentItems={currentItems}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handleNext={handleNext}
                        handlePrevious={handlePrevious}
                        renderPagination={renderPagination}
                    />
                );
            case 'newArrivals':
                return <NevArivals />;
            case 'sale':
                return <Sale />;
            default:
                return null;
        }
    };

    return (
        <div className='w-[85%] h-[1300px]  border-black mt-[20px] mx-auto flex justify-between'>
            <div className='w-[25%] h-auto'>
                <h2 className='text-[18px] font-bold pl-[5px]'>Categories</h2>
                <ul className='w-[90%] mx-auto'>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>House Plants</p><span>(33)</span></li>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>Potter Plants</p><span>(12)</span></li>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>Seeds</p><span>(65)</span></li>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>Small Plants</p><span>(39)</span></li>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>Big Plants</p><span>(23)</span></li>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>Succulents</p><span>(17)</span></li>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>Terrarimious</p><span>(19)</span></li>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>Gardening</p><span>(13)</span></li>
                    <li className='flex justify-between items-center w-[100%] h-[40px] font-semibold hover:text-green-600 cursor-pointer'><p>Accessories</p><span>(18)</span></li>
                </ul>
                <h2 className='text-[18px] font-bold pl-[5px] mt-[20px]'>Price Range</h2>
                <div className='w-[90%] mx-auto'>
                    <div className='flex justify-between items-center w-[100%] mt-[15px]'>
                        <div className='w-[25px] h-[25px] rounded-[50%] bg-green-500'></div>
                        <span className='w-[150px] h-[0] border-[3px] border-green-500 rotate-180'></span>
                        <div className='w-[25px] h-[25px] rounded-[50%] bg-green-500'></div>
                        <span className='w-[60px] h-[0] border-[3px] border-green-500 rotate-180'></span>
                    </div>
                    <p className='mt-[20px] w-[100%] flex gap-2 items-center font-semibold cursor-pointer'>Price: <span className='text-green-600'>$39 - $1230</span></p>
                    <Button variant='contained' color='success' sx={{ backgroundColor: "#2d892d", width: "110px", height: "40px", marginTop: "15px" }}>Filter</Button>
                </div>
                <div className='w-[100%] mt-[20px]'>
                    <h2 className='font-bold text-[18px] pl-[5px]'>Size</h2>
                    <ul className='w-[90%] mx-auto'>
                        <li className='flex justify-between items-center w-[100%] h-[40px]'><p>Small</p><span>(0)</span></li>
                        <li className='flex justify-between items-center w-[100%] h-[40px]'><p>Medium</p><span>(0)</span></li>
                        <li className='flex justify-between items-center w-[100%] h-[40px]'><p>Large</p><span>(0)</span></li>
                    </ul>
                </div>
                <div className='w-[90%] h-[350px] mx-auto mt-[10px]'>
                    <div className='superSale w-[100%]'></div>
                </div>
            </div>
            <div className='Cart w-[73%]'>
                <div className='w-[100%] h-[70px] border-b flex items-center justify-between'>
                    <ul className='flex items-center gap-10 font-semibold cursor-pointer'>
                        <li
                            className={`hover:text-green-600 border-b-[3px] ${activeTab === 'allPlants' ? 'border-green-600' : 'border-white'}`}
                            onClick={() => setActiveTab('allPlants')}
                        >
                            All Plants
                        </li>
                        <li
                            className={`hover:text-green-600 border-b-[3px] ${activeTab === 'newArrivals' ? 'border-green-600' : 'border-white'}`}
                            onClick={() => setActiveTab('newArrivals')}
                        >
                            New Arrivals
                        </li>
                        <li
                            className={`hover:text-green-600 border-b-[3px] ${activeTab === 'sale' ? 'border-green-600' : 'border-white'}`}
                            onClick={() => setActiveTab('sale')}
                        >
                            Sale
                        </li>
                    </ul>
                    <div>Sort by: Default sorting <KeyboardArrowDownIcon /></div>
                </div>
                {renderContent()}
            </div>
        </div>
    );
}

export default Categoria;
