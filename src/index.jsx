import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Survey from './pages/Survey'
import Header from './components/Header/index'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import { SurveyProvider, ThemeProvider } from './utils/context'
import GlobalStyle from './utils/style/GlobalStyle'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
