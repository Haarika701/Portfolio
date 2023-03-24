// import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
    return (
        <div>
            <div className=" d-flex  justify-content-start py-5 px-5 mt-5" style={{ backgroundColor: "#fbece6" }}>
                <div className="mt-5 my-4 align-content-start">
                    <h4 className="displ">Hi, my name is</h4><h1>Haarika.</h1>
                    <h3> I love building applications.</h3>
                    <div className="text-wrap">
                        <p className="mw-60 text-lg w-50">I am a Full Stack Engineer specialise in
                            building customer-centric web applications
                            that solve real world problems
                            and provide seamless user experience.</p>

                    </div>

                </div>
                <div className="align-items-flex-start">
                    <Image src="/static/profile.jpeg" width={300} height={300}></Image>
                </div>
            </div>

        </div >
    );
}


