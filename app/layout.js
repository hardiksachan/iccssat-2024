import "@/styles/main.scss"
import Navbar from "@/components/Navbar";

export const metadata = {
    title: 'ICCSSAT 2024',
    description: 'First International Conference on Computationally Smart Systems and Advanced Technologies (ICCSSAT), 2024',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className="container">
        <Navbar/>
        {children}
        {/* TODO: <Footer />*/}
        </body>
        </html>
    )
}
