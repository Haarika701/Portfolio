import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image'
export default function Page() {
    return (
        <div>
            <div className=" d-flex flex-wrap justify-content-start py-4 px-5 " style={{ backgroundColor: "#f7ddd0" }}>
                <div>
                    <h4 className="displ">Hi, my name is</h4>
                    <h1>Haarika.</h1>
                    <h3> I love building applications.</h3>
                    <div className="text-wrap">
                        <p className="mw-60 text-lg w-50">I am a Full Stack Engineer specialise in
                            building customer-centric web applications
                            that solve real world problems
                            and provide seamless user experience.</p>
                    </div>

                </div>
            </div>
            <div className=" d-flex flex-wrap justify-content-end">
                <h1 className="px-5 py-2">About Me</h1>
                <div className="d-flex flex-wrap justify-content-end">
                    <p className=" px-5 py-3 w-50">I have a bachelor's degree in computer science and experience in semi-technical support. While working with engineers to solve customer issues, I gained insights into software development which sparked an interest in problem-solving. I taught myself how to use Java to build applications. Later I joined a coding Bootcamp to find a platform to get into the software industry. This Bootcamp helped me hone my software skills. I love collaborating with people with a keen interest in solving intellectual and interpersonal problems.
                        Skills and Interests
                        •Languages: JavaScript (ES6), Java, Ruby, TypeScript
                        •Frameworks: React, NextJS, Rails, Spring Framework, Hibernate
                        •Other: CSS, HTML, SQL, RDBMS, TailWind CSS, Material UI</p>
                </div>
            </div>
            <div>
                <h1 className="text-wrap px-5 py-3 w-50">Some Things I have built
                </h1>
                <div className="px-5 py-3">
                    <ul>
                        <li><p>Project Name  : https://github.com/Haarika701/gallivanter-travel-planner</p>

                        </li>
                        <li>
                            <p>Project Name : https://github.com/Oluwayemisi-s/instantGroceries</p>
                            <p>Description : An instant grocery app that allows users to shop for various groceries and get deliveries instantly.</p>
                        </li>
                        <li>
                            <p>Project Name : https://github.com/Haarika701/foodie-world</p>
                            <p>Description</p>
                        </li>
                        <li>
                            <p>Project Name : https://github.com/Haarika701/Vintage-Pop-up-Frontend</p>
                            <p>Description :This would be our third project created at Flatiron School. This project was done with about 6-9 weeks of learning Javascript, React, Ruby with ActiveRecord and SQL. We had imagined our project to encapsulate an E-commerce single page application. We wanted to create this project to show our knowledge with SQL and creating our own frontend and backend functionality. The main focus of this project was to build our backend fully flushed out.</p>
                        </li>
                        <li>
                            <p>Project Name : https://github.com/Haarika701/Spacestagram</p>
                            <p>Description : The application displays the images of universe with description and date. The images are loaded using NASA's APOD (Astronomy Picture of the Day) API. This application was built using React and styled using Material -UI and deployed using Netlify.</p>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="card" style={{ width: "18rem" }}>
                <Image src="/portfolio/public/screen2.jpg" width={100} height={100} class="card-img-top" alt="Screenshot" />
                <div class="card-body">
                    <h5 class="card-title">Gallivanter: A Travel Itineary App</h5>
                    <p class="card-text">A travel itineary planner application that allows users to create itinearies, save the information and view everything at one place.</p>
                    <Image src="/portfolio/public/static/github-mark-white.svg" height={100} width={100} />   <a href="#" class="btn btn-primary"></a>
                </div>
            </div>
        </div >);
}


