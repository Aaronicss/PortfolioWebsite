import React from 'react'
import background from '../../assets/BG2.png'

const About = () => {
    return (
    <div
            style={{ backgroundImage: `url(${background})` }}
            className="bg-cover bg-center w-full flex justify-center px-20 py-4"
        >
            <div className="m-4 w-full bg-[#2A0134] rounded-xl shadow-xl text-white border-2 border-white"><h1 className="p-5 text-[#FFC300] text-4xl font-bold">About Me</h1>
            <p className="ml-6">Passionate software developer specializing in developing and training AI models. 
                I specialize in full-stack development of AI systems from back-end development to front-end website deployment. 
                I love being able to utilize my models for the betterment society. Outside of coding, I love playing video games and watching anime. </p>
                <div></div>
                <div className="flex items-center justify-between px-70"></div>
                <h1 className="p-5 text-white text-3xl font-bold">Education</h1>
                <p className="ml-6">De La Salle University - Dasmariñas (DLSU-D)</p>
                <p className="ml-6">Bachelor of Science in Computer Science</p>
                <p className="ml-6">Perpetual Help College of Manila (PHCM)</p>
                <p className="ml-6">Information and Communications Technology</p>
                <h1 className="p-5 text-white text-3xl font-bold">Awards</h1>
                <p className="ml-6">Dean’s Lister at DLSU-D</p>
                <p className="ml-6">Dean’s Lister at DLSU-D</p>
                <p className="ml-6 pb-6">Best in Computer Hardware and Software at PHCM</p>
                <div>

                </div>
            </div>

    </div>
    )
}
export default About;