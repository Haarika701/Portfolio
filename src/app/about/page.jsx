"use client"

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Experience from "../Components/Experience";
export default function Page() {

   

    return (
        <> <script src="http://localhost:8097"></script>

            <div className=" d-flex flex-wrap justify-content-start mt-5 py-5">
                <h1 className="px-5">About Me</h1>
                <div className="d-flex flex-wrap justify-content-start">
                    <p className=" px-5  w-50">I have a bachelor's degree in computer science and experience in semi-technical support. While working with engineers to solve customer issues, I gained insights into software development which sparked an interest in problem-solving. I taught myself how to use Java to build applications. Later I joined a coding Bootcamp to find a platform to get into the software industry. This Bootcamp helped me hone my software skills. I love collaborating with people with a keen interest in solving intellectual and interpersonal problems.
                        <p className="mt-4 flex-wrap">Skills and Interests</p>
                        •Languages: JavaScript (ES6), Java,TypeScript,Python
                        <br />
                        •Frameworks: React, NextJS, Rails, Spring Framework, Hibernate
                        <br />
                        •Other: CSS, HTML, SQL, RDBMS, TailWind CSS, Material UI
                        <h4 className="mt-4" >Where I have worked</h4> <Experience />


                    </p>
                </div>
            </div>
        </>);
}