import React from 'react'
import Team from '../components/About/teamComp'
import WelcomeText from '../components/About/welcomeText'
import ContactForm from '../components/About/contactForm'


const About = () => {
  return (
    <div>
        <WelcomeText/>
        <Team/>
        <ContactForm/>
    </div>
  )
}

export default About