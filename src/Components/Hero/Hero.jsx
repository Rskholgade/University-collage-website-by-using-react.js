
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div>
     <div className="hero container">
        <div className="hero-text">
            <h1>We Ensoure better education for better world</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, quos? Sit similique labore ipsam voluptatibus dolores commodi quia fuga culpa molestiae. Molestias rerum, accusantium repudiandae nostrum alias error est excepturi?</p>
            <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
        </div>
        
        </div> 
    </div>
  )
}

export default Hero
