import React from 'react'

import {  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel} from '@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

import { Header } from '../../components';

const Pyramid = () => {

  const {currentMode} = useStateContext();

  return (
    <div className='m-4 p-10 mt-24 md:m-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category='Pyramid' title = 'Food Comparison Chart' />
      <AccumulationChartComponent 
          id='pyramid-chart' 
          height='420px' 
          chartArea={{border:{width:0}}} 
          tooltip={{enable:true}} 
          background={currentMode === 'Dark' ? 'dark' : ''}
          legendSettings={{ background: 'white' }}>
         <Inject services = {[AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]}/>
         <AccumulationSeriesCollectionDirective>
           <AccumulationSeriesDirective dataSource={PyramidData} xName='x' yName='y' type='Pyramid' name='food'
           width="45%"
           height="80%"
           neckWidth="15%"
           gapRatio={0.03}
           explode
           emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
           dataLabel={{
             visible: true,
             position: 'Inside',
             name: 'text',
           }}/>
         </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}
export default Pyramid;