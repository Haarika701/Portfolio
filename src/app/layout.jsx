import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Haarika's Creative Corner</title>
                <meta name="description" content="Generated by create next app" />
            </head>
            <body style={{
                backgroundColor: "#fbede6"
            }} >
                <header>
                    <Navbar />
                </header>
                <main>{children}</main>

            </body >
        </html >
    );
}