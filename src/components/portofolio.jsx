import React from 'react'
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

const cards = [
  {
    title: "Wikusama Web Caffe",
    description: "A platform for optimizing financial management and queues",
    image: "/images/port1.png",
  },
  {
    title: "Sport Ease",
    description: "A platform used for booking sports fields",
    image: "/images/port2.png",
  },
  {
    title: "Chatterfly",
    description: "A real-time chat platform and social media used to facilitate communication and find friends",
    image: "/images/port3.png",
  },
];

const Portofolio = () => {
  return (

    <div id="portofolio" className="flex flex-col items-center px-4 font-ubuntu mt-10 mb-10">
    <h2 className="text-3xl font-bold text-center mb-8">My Recent Works</h2>
  
    <div className="flex flex-wrap justify-center gap-8 w-full">
      {cards.map((card, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-white relative group/card 
            hover:shadow-2xl hover:shadow-gray-300 
            border border-gray-200 w-[24rem] h-auto 
            rounded-xl p-6 transition-all duration-300 ease-in-out">
  
            <CardItem translateZ="40" className="text-xl font-bold text-black">
              {card.title}
            </CardItem>
            <CardItem as="p" translateZ="50" className="text-gray-600 text-sm max-w-md mt-2">
              {card.description}
            </CardItem>
            <CardItem translateZ="80" rotateX={10} rotateZ={-5} className="w-full mt-4">
              <img
                src={card.image}
                height="800"
                width="800"
                className="h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-transform duration-300 ease-in-out"
                alt={card.title}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem translateZ={15} translateX={-20} as="button" className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-black transition-transform duration-300 ease-in-out hover:scale-105">
                Try now →
              </CardItem>
              <CardItem translateZ={15} translateX={20} as="button" className="px-4 py-2 rounded-xl bg-black text-white text-sm font-bold transition-transform duration-300 ease-in-out hover:scale-105">
                View Demo
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  </div>
  






  )
}

export default Portofolio
