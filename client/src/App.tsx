import './index.css'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Gallery from './component/Gallery'
import Header from './component/Header'
import Message from './component/Message'
import Events from './component/Events'
import Banner from './component/Banner'

function App() {

  return (
    <div>
      <Header />
      <Banner />
      <Gallery />
      <About />
      <Message />
      <Events />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
