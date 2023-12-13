
import { useLayoutEffect } from "react";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import Image from "next/image";
// ---------- scrollTrigger plugin registration
gsap.registerPlugin(ScrollTrigger);


const Card = ({url}: {url: string}) => {
	return (
		<div className="card w-full laptop:w-1/2 ">

			<figure className="card-cover-container">

        <Image
          alt="project"
					src={url}
          className="card-cover"
          width={1000}
          height={1000}
				/>
      </figure>
 
		</div>
	);
};

// ---------- react app
const App = () => {
	// ---------- gsap context
useLayoutEffect(() => {
		const ctx = gsap.context(() => {
		
			const cards = document.querySelectorAll(".card");

			cards.forEach((card) => {
				gsap.to(card.querySelector(".card-cover"), {
					yPercent: 35,
					ease: "none",
					scrollTrigger: {
						trigger: card,
						start: "top bottom",
						end: "bottom top",
						scrub: true
					}
				});
			});

		
		});

		return () => ctx.revert();
	}, []);

	return (
		// ---------- cards ----------
    <section className="cards z-20 p-10 pj-bg">
      {projects.map((project) => (
          <div className=" p-4 laptop:flex justify-between w-[100vw] "> 
        <Card url={project.image}/>
        <div className="w-1/2"
        ><h1 className=" text-6xl laptop:text-9xl underline-pass-through text-white">{project.title}</h1></div>
    </div>
      ))}

		
		
		</section>
	);
};

export default App;
export const projects = [{
  title: 'hello',
  description: 'hello',
  image: 'https://images.pexels.com/photos/15943830/pexels-photo-15943830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},{
  title: 'hello',
  description: 'hello',
  image: 'https://images.pexels.com/photos/15943830/pexels-photo-15943830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
}]