import Body from "./components/Body"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Body />
            </main>
            <Footer />
        </div>
    )
}

export default App
