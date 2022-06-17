import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip,  StackingColumnSeries} from '@syncfusion/ej2-react-charts';

import {  stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

import { Header } from '../../components';

const Stacked = () => {

  const {currentMode} = useStateContext();

  return (
    <div className='m-4 p-10 mt-24 md:m-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category='Bar' title = 'Olympic Medal Counts - RIO' />
      <ChartComponent 
          id='stacked-chart' 
          height='420px' 
          primaryXAxis={stackedPrimaryXAxis} 
          primaryYAxis={stackedPrimaryYAxis} 
          chartArea={{border:{width:0}}} 
          tooltip={{enable:true}} 
          background={currentMode === 'Dark' ? 'dark' : ''}
          legendSettings={{ background: 'white' }}>
         <Inject services = {[StackingColumnSeries, Legend, Tooltip, Category]}/>
         <SeriesCollectionDirective>
           { stackedCustomSeries.map((item, index) => <SeriesDirective key={index}{...item}/>
           )}
         </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}
export default Stacked;