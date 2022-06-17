import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective,Inject, DateTime, Legend, SplineAreaSeries } from '@syncfusion/ej2-react-charts';

import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

import { Header } from '../../components';

const Area = () => {

  const {currentMode} = useStateContext();

  return (
    <div className='m-4 p-10 mt-24 md:m-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category='Area' title = 'Inflation rate in percentage' />
      <ChartComponent id='area-chart' height='420px' primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis} chartArea={{border:{width:0}}} tooltip={{enable:true}} background={currentMode === 'Dark' ? 'dark' : ''}>
         <Inject services = {[Legend, SplineAreaSeries, DateTime]}/>
         <SeriesCollectionDirective>
          {areaCustomSeries.map((item,index) => <SeriesDirective key={index}{...item}/>
          )}
         </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}
export default Area;