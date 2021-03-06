import React, {useEffect, useState} from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Toolbar, gridActionHandler }
 from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'; 

import { Header } from '../components';



const Orders = () => {

  const toolbarClick = (args) => {  
    if (this.grid && args.item.id === 'grid_pdfexport') {
      this.grid.pdfExport();
      }}

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title="Orders"/>
      <GridComponent id="gricomp" dataSource={ordersData} allowPaging allowSorting allowPdfExport toolbar={['PdfExport']} toolbarClick='toolbarClickHandler' >
        <ColumnsDirective>
          { ordersGrid.map((item, index) => (
            <ColumnDirective key={index}{...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Page, ExcelExport, PdfExport, ContextMenu, Filter, Edit, Toolbar]}/>
       </GridComponent>
    </div>
    
    
  )
}

export default Orders;