import React from 'react';
import '../components/style.css'
import Board from '../components/board';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine,ChartsHeader } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';





const Ecommerce=() =>{
    return (
      <div>
       <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4 text-lg">Explore and discover amazing things!</p>
      </div>
    </div>
      <div className="container mx-auto px-4 mt-8 flex justify-center border border-black">
        <Board />
      </div>
      <div className="container mx-auto px-4 mt-8 flex justify-center">
        <LineChart />
      </div>
    </div>
    )
}
export default Ecommerce