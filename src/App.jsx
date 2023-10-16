import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/LayoutContainer'
import DevSample from './components/DevSamples/DevSample'
import { useTranslation } from 'react-i18next'
import HomeContainer from './components/Home/HomeContainer'
import PuppiesContainer from './components/Puppies/PuppiesContainer'
import ContactContainer from './components/Contact/ContactContainer'
import Scroll from './components/Scroll/Scroll'
import AboutContainer from './components/About/AboutContainer'

function App() {
  
  const [t] = useTranslation('global')

  return (
    <BrowserRouter>
      <Scroll>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeContainer/>}/>
            <Route path="/about" element={<AboutContainer/>}/>
            <Route path="/puppies" element={<PuppiesContainer/>}/>
            <Route path="/contact" element={<ContactContainer/>}/>
            <Route path="*" element={<DevSample name={'ERROR 404 - NOT FOUND'}/>}/>
          </Routes>
        </Layout>
      </Scroll>
    </BrowserRouter>
  )
}

export default App
