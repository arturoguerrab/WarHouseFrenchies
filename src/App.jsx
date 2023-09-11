import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/LayoutContainer'
import DevSample from './components/DevSamples/DevSample'
import { useTranslation } from 'react-i18next'

function App() {
  
  const [t] = useTranslation('global')

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DevSample name={t('navbar.home')}/>}/>
          <Route path="/about" element={<DevSample name={t('navbar.about')}/>}/>
          <Route path="/puppies" element={<DevSample name={t('navbar.puppies')}/>}/>
          <Route path="/contact" element={<DevSample name={t('navbar.contact')}/>}/>
          <Route path="*" element={<DevSample name={'ERROR 404 - NOT FOUND'}/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
