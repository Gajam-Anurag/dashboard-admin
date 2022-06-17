import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective,Inject, Legend, BarSeries , DataLabel, Tooltip, Category, ColumnSeries} from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

import { Header } from '../../components';

const Pie = () => {

  const {currentMode} = useStateContext();

  return (
    <div className='m-4 p-10 mt-24 md:m-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category='Bar' title = 'Olympic Medal Counts - RIO' />
      <ChartComponent 
          id='bar-chart' 
          height='420px' 
          primaryXAxis={barPrimaryXAxis} 
          primaryYAxis={barPrimaryYAxis} 
          chartArea={{border:{width:0}}} 
          tooltip={{enable:true}} 
          background={currentMode === 'Dark' ? 'dark' : ''}
          legendSettings={{ background: 'white' }}>
         <Inject services = {[Legend, BarSeries, DataLabel, Tooltip, Category, ColumnSeries]}/>
         <SeriesCollectionDirective>
          {barCustomSeries.map((item,index) => <SeriesDirective key={index}{...item}/>
          )}
         </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}
export default Pie;