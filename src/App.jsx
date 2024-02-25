import { useState } from "react"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Programs from "./Components/Programs/Programs"
import Testimonials from "./Components/Testimonials/Testimonials"
import Title from "./Components/Title/Title"
import VideoPlayer from "./Components/Video player/VideoPlayer"

const App = () => {

  const [playState, setPlaystate] = useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle='OUR PROGRAM ' title='What We Offer'/>
      <Programs/>
      <About setPlaystate={setPlaystate} />
      <Title subTitle='Gallary ' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS ' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us ' title='Get In Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState}  setPlaystate={setPlaystate}  />

    </div>
  )
}

export default App
