import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective,Inject, HiloSeries, Category, Tooltip, Zoom, Crosshair, DateTime, Logarithmic} from '@syncfusion/ej2-react-charts';

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

import { Header } from '../../components';

const Financial = () => {

  const {currentMode} = useStateContext();

  return (
    <div className='m-4 p-10 mt-24 md:m-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category='Financial Chart' title = 'AAPLE Historical' />
      <ChartComponent 
          id='financial-chart' 
          height='420px' 
          primaryXAxis={FinancialPrimaryXAxis} 
          primaryYAxis={FinancialPrimaryYAxis} 
          chartArea={{border:{width:0}}} 
          tooltip={{enable:true}} 
          background={currentMode === 'Dark' ? 'dark' : ''}
          legendSettings={{ background: 'white' }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}>
         <Inject services = {[HiloSeries, Category, Tooltip, Zoom, Crosshair, DateTime, Logarithmic]}/>
         <SeriesCollectionDirective>
          <SeriesDirective dataSource={financialChartData} xName='x' yName='y' type='Hilo' low='low' high='high' name="Apple Inc"/> 
         </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}
export default Financial;