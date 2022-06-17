import React from 'react'

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective ,Inject, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip} from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

import { Header } from '../../components';

const Pie = () => {

  const {currentMode} = useStateContext();

  return (
    <div className='m-4 p-10 mt-24 md:m-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category='Pie' title = 'Olympic Medal Counts - RIO' />
      <AccumulationChartComponent id='bar-chart' height='420px' tooltip={{enable:true}} background={currentMode === 'Dark' ? 'dark' : ''} legendSettings={{ background: 'white' }}>
         
         <Inject services = {[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]}/>
         <AccumulationSeriesCollectionDirective>

          <AccumulationSeriesDirective name="Sale" dataSource={pieChartData}  xName="x"  yName="y" innerRadius= '40%' startAngle={0} endAngle={360} explode explodeOffset="10%"
          explodeIndex={2} dataLabel={{ visible: true,  name: 'text', position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            },
          }}
          />

         </AccumulationSeriesCollectionDirective>

      </AccumulationChartComponent>
    </div>
  )
}
export default Pie;