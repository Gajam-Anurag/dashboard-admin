import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar, ThemeSetting, Footer, Sidebar} from './components';

import {Ecommerce, Orders, Calendar, Employees, ColorPicker, Editor, Customers, Kanban,
         Stacked, Pyramid, Area, Bar, Pie, Financial,  ColorMapping, Line } from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';


const App = () => {

  const {activeMenu, themeSetting, setThemeSetting, currentColor, currentMode} = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button type='button' className='text-3xl p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white' onClick={() => setThemeSetting(true)}
              style={{background:currentColor,borderRadius: '50%'}} >
                <FiSettings/>
              </button>
            </TooltipComponent>
          </div>
           {activeMenu ? 
           (<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'><Sidebar/></div>)
           :
           (<div className='w-0 dark:bg-secondary-dark-bg'><Sidebar/></div>)
           }
          <div className= { `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'} `}>
           <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg Navbar w-full'><Navbar /></div>
          <div>
            { themeSetting && <ThemeSetting /> }
            <Routes>
              {/* Main */}
              <Route path='/' element={<Ecommerce />} />
              <Route path='/ecommerce' element={<Ecommerce />} />

              {/* Pages */}
              <Route path='/orders' element={<Orders />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/customers' element={<Customers />} />

              {/* Apps */}
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/color-picker' element={<ColorPicker />} />

              {/* Charts */}
              <Route path='/line' element={<Line />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/area' element={<Area />} />
              <Route path='/pie' element={<Pie />} /> 
              <Route path='/financial' element={<Financial />} />
              <Route path='/color-mapping' element={<ColorMapping />} />
              <Route path='/pyramid' element={<Pyramid />} />
              <Route path='/stacked' element={<Stacked />} />
            </Routes>
            </div>
          </div>
        </div> 
      </BrowserRouter>
    </div>
  )
}

export default App