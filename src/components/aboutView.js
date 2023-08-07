import Hero from './hero'
import { useParams } from 'react-router-dom'


const AboutView = () => {

    return(
        <>
        <Hero text="About Me" name="Ishan"/>
    
       <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className='lead description'>
            Greetings, I'm Ishan Bhardwaj, the creator behind an innovative online platform that brings the enchanting world of cinema to your fingertips. Through the harmonious fusion of a dynamic React frontend and a robust Node.js backend, I've fashioned a seamless and immersive space for you to effortlessly browse through a vast array of films. With a passion for both technology and storytelling, I've embarked on a journey to ensure that every user can access vital movie information, from ratings to descriptions, and even runtimes. Join me in this cinematic adventure, where my vision comes to life, connecting movie enthusiasts and casual viewers alike to an unparalleled realm of entertainment discovery.
            </p>
          </div>
        </div>
       </div>

       </>


    )
}

export default AboutView