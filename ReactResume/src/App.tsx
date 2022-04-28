import { useState } from 'react'
import { styled } from '@stitches/react';
import PageMain from './component/pages/PageMain';
import PageTest from './component/pages/PageTest';
import PageSpec from './component/pages/PageSpec';
import {PageBack, PageContents, PageSection, LeftSpace, FlagTitle, LeftZoneImg, NavLogoImg, LeftWrapper, ContentNav, ContentNavZoneHome, ContentNavZoneSpec, ContentNavZoneGit, ContentHeadLine, ContentLine, ContentList, ContentLink} from './style/basicComponentsStyle';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const BasicFullWindow = styled('div', {
  margin: 0,
  padding: 0,

  backgroundColor: '#00D6C0'
});


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageMain />}/>
        <Route path='/main' element={<PageMain />}/>
        <Route path='/test' element={<PageTest status= "sss" isSmart={true} />}/>
        <Route path='/spec' element={<PageSpec />}/>
        <Route path='/*' element={<PageMain />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
