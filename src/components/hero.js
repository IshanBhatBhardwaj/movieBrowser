
const Hero = ({text, backdrop, center}) => {
    return (
    
    <>
      <header className="bg-dark text-white p-5 hero-container">
        <h1 className="hero-text text-center"> 
        {text} 
        </h1>
        {backdrop &&
                <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
        }
       </header>
    </>
     
    )
  }

  export default Hero
   
  