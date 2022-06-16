import React from 'react'

import { HtmlEditor, Inject, Link, Toolbar, Image, QuickToolbar, RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor'

import {EditorData} from '../data/dummy';
import {Header} from '../components';

const Editor = () => {
  return (
    <div className='m-2 p-2 mt-24 md:m-10 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Editor' />
      <RichTextEditorComponent id='editor'>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar ]}/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor