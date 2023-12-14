
import { useLayoutEffect } from "react";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import Image from "next/image";
import Dashboard01 from '@/assets/Dashboard01.png'
import Dashboard02 from '@/assets/Dashboard02.png'
import Dashboard03 from '@/assets/Dashboard03.png'
gsap.registerPlugin(ScrollTrigger);


const Card = ({url}: {url:string | any}) => {
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
    <section className="cards z-20 py-6 laptop:p-10   ">
      {projects.map((project, index) => (
          <div key={index} className=" laptop:p-4 laptop:flex justify-between w-[100vw] mt-[5vh] text-[#0e1129] "> 
        <Card url={project.image}/>
        <div className="w-full laptop:w-1/2 h-full "
			  ><h1 className=" text-6xl laptop:text-9xl  ">{project.title}</h1>
				  <h2 className="  text-xl tablet:text-2xl laptop:text-3xl laptop:text-start px-2">{project.description}</h2>
				<ul className="text-sm  tablet:text-xl laptop:text-xl px-6 list-disc mt-[5vh]">
  {project?.tasks.map((task: string, index: number) => (
    <li className="py-2" key={index}>
      {task}
    </li>
  ))}
</ul>

			  </div>
    </div>
      ))}

		
		
		</section>
	);
};

export default App;
export interface Project {
  title: string;
  description: string;
  tasks?: string[] | any;
  image: any; // Assuming the image path is a string
}

export const projects: Project[] = [
  {
  title: 'Learn Portal',
  description: 'Configured and optimized the Learn Portal, collaborated on key features, and enhanced reliability. Contributed to setup for a smooth user experience and implemented innovative solutions for improved efficiency.',
  tasks: [
    'Collaborated on key features with the development team.',
    'Conducted testing and debugging for enhanced reliability.',
    'Contributed to configuration setup for a smooth user experience.',
    'Implemented innovative solutions for improved portal efficiency.',
  ],
  image: Dashboard02, // Replace with the actual image path or object
}
,
{
  title: 'Dashboard',
  description: ' Notable contributions include building a Spring Boot backend/frontend!',
  tasks: [
    'Architected and implemented the Dashboard system from scratch, ensuring scalability and efficiency.',
    'Developed a secure and user-friendly teacher registration module using Spring Boot on the backend.',
    'Integrated AWS S3 to facilitate the storage and retrieval of images and documents in the Dashboard.',
    'Ensured data integrity and security measures were in place for teacher registration and document storage.',

  ],
  image: Dashboard01, // Replace with the actual image path or object
	},{
  title: 'Edusn Social',
  description: 'A social media project linked with portal',
  tasks: [
    'Researched and thoroughly studied the provider documentation for Edusn Social.',
    'Configured and implemented Google Vision API for advanced image processing.',
    'Integrated Google Maps API to enhance location-based features in the application.',
  ],
  image: Dashboard01, // Replace with the actual image path or object
},{
  title: 'Yearbook Website',
  description: 'Independently built a compact yet dynamic Yearbook Website, allowing students to effortlessly upload, like, and comment on images. Implemented seamless login/logout functionality and integrated AWS S3 for secure image storage. Leveraged PostgreSQL for efficient data management.',
  tasks: [
    'Developed the entire Yearbook Website solo, ensuring a compact and user-friendly design.',
    'Implemented a straightforward upload feature for students to share images effortlessly.',
    'Designed and integrated a liking and commenting system for enhanced user engagement.',
    'Incorporated secure login/logout functionality to personalize the user experience.',
    'Utilized AWS S3 for efficient and secure storage of all uploaded images.',
    'Optimized data management by leveraging the capabilities of a PostgreSQL database.',
  ],
  image: Dashboard03, // Replace with the actual image path or object
}



];
