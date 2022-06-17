import React from 'react';

import { ChartComponent, SeriesCollectionDirective, SeriesDirective,Inject, DateTime, Legend, Tooltip, Chart, LineSeries } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {

  const {currentMode} = useStateContext();

  return (
    <div>
      <ChartComponent id='line-chart' height='420px' primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis} chartArea={{border:{width:0}}} tooltip={{enable:true}} background={currentMode === 'Dark' ? 'dark' : ''}>
         <Inject services = {[Legend, Tooltip, LineSeries, DateTime]}/>
         <SeriesCollectionDirective>
          {lineCustomSeries.map((item,index) => <SeriesDirective key={index}{...item}/>
          )}
         </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default LineChart