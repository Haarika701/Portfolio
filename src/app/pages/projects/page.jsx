import Image from 'next/image'
// import projects from '../projects.json'
export default function Page() {

    return (

        <div className='mt-5'>
            <h1 className="text-wrap px-5 py-5 w-50">Some Things I Have Built
            </h1>
            <div class="row row-cols-3 g-4 px-5 gap-4 d-flex justify-content-left align-items-flex-start ">
                {/* <div class="col"> */}
                <div class="card" style={{ width: "20em" }}>
                    <div className="card-image">
                        <Image src="/static/screen1.png" width={250} height={200} class="card-img-top" alt="Screenshot" />
                        <div class="image-overlay"></div>
                    </div>
                    <div class="card-body">

                        <h5 class="card-title">Gallivanter: A Travel Itineary App </h5>
                        <p class="card-text">A travel itineary planner application that allows users to create itinearies, save the information and view everything at one place.</p>

                        <a class="btn" href="https://github.com/Haarika701/gallivanter-travel-planner" role="button"> <Image src="/static/github-mark.png" height={30} width={30} alt='gallivanter' /></a>
                    </div>
                </div>
                <div class="card" style={{ width: "20em" }}>
                    <div class="card-body">
                        <h5 class="card-title">instantGroceries</h5>
                        <p class="card-text">An instant grocery app that allows users to shop for various groceries and get deliveries instantly.</p>
                        <a class="btn" href="https://github.com/Oluwayemisi-s/instantGroceries" role="button"> <Image src="/static/github-mark.png" height={30} width={30} alt='groceries' /></a>
                    </div>
                </div>
                <div class="card" style={{ width: "20em" }}>

                    <div class="card-body">
                        <h5 class="card-title">Vintage Pop-Up</h5>
                        <p class="card-text">This would be our third project created at Flatiron School. This project was done with about 6-9 weeks of learning Javascript, React, Ruby with ActiveRecord and SQL. We had imagined our project to encapsulate an E-commerce single page application. We wanted to create this project to show our knowledge with SQL and creating our own frontend and backend functionality. The main focus of this project was to build our backend fully flushed out.</p>

                        <a class="btn" href="https://github.com/Haarika701/Vintage-Pop-up-Frontend" role="button"> <Image src="/static/github-mark.png" height={30} width={30} alt='popup' /></a>
                    </div>
                </div>
                <div class="card" style={{ width: "20em" }}>
                    <div class="card-body">
                        <h5 class="card-title">Foodie`&apos;` World</h5>
                        <p class="card-text">A web application to store favorite recipes and add new recipes created by foodies!</p>
                        <a class="btn" href="https://github.com/Haarika701/foodie-world" role="button"> <Image src="/static/github-mark.png" height={30} width={30} alt='foodie' /></a>
                    </div>
                </div>
                <div class="card" style={{ width: "20em" }}>
                    <div className="card-image">
                        <Image src="/static/spaces.png" width={200} height={200} class="card-img-top" alt="Screenshot" />
                        <div class="image-overlay"></div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Spacestagram</h5>
                        <p class="card-text">The application displays the images of universe with description and date. The images are loaded using NASA`&apos;`APOD (Astronomy Picture of the Day) API. This application was built using React and styled using Material -UI and deployed using Netlify.</p>

                        <a class="btn" href="https://github.com/Haarika701/Spacestagram" role="button"> <Image src="/static/github-mark.png" height={30} width={30} alt='spaces' /></a>
                    </div>
                </div>
                <div class="card" style={{ width: "20em" }}>
                    <div className="card-image">
                        <Image src="/static/refresh.png" width={200} height={200} class="card-img-top" alt="Screenshot" />
                        <div class="image-overlay"></div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Refresh and Roulette</h5>
                        <p class="card-text">A fun single page web application, trivia game with true or false choices and a feedback form at the end of the quiz.</p>

                        <a class="btn" href="https://github.com/Haarika701/Spacestagram" role="button"> <Image src="/static/github-mark.png" height={30} width={30} alt='refresh' /></a>
                    </div>
                </div>
                <div class="card" style={{ width: "20em" }}>
                    <div class="card" style={{ width: "20em" }}>
                        <div className="card-image">
                            <Image src="/static/url.png" width={200} height={200} class="card-img-top" alt="Screenshot" />
                            <div class="image-overlay"></div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">URL Shortener App</h5>
                            <p class="card-text">Built a URL shortener with Python and FastAPI. URLs can be extremely long and not user-friendly. This is where a URL shortener can come in handy. A URL shortener reduces the number of characters in a URL, making it easier to read, remember, and share.</p>
                            <a class="btn" href="https://github.com/Haarika701/url-shortener-app" role="button"> <Image src="/static/github-mark.png" height={30} width={30} alt='url' /></a>
                        </div>
                    </div>
                </div>
                <div class="card" style={{ width: "20em" }}>
                    <div className="card-image">
                        <Image src="/static/formation.png" width={200} height={200} class="card-img-top" alt="Screenshot" />
                        <div class="image-overlay"></div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Recur Web</h5>
                        <p class="card-text">Recur is a learning-to-code application that you can use on the web (https://www.recurcode.com). We built this from the ground up to create a realistic production environment within which Fellows can get real-world engineering experience, with code reviews from senior engineers at top-tier companies.

                            Please note: This is a private repository</p>
                        <a class="btn" role="button"> <Image src="/static/github-mark.png" height={30} width={30} alt='recur' /></a>
                    </div>

                </div>
            </div>

        </div>
    );
}