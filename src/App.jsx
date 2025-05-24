<<<<<<< HEAD
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
=======
import { useState } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import { Outlet } from 'react-router-dom';


function App() {
  // const [count, setCount] = useState(0)

  return (
<div>

  <Navbar/>

  <Outlet/>

  <Footer/>

</div>
  );
>>>>>>> e34691b (React Training)
}

export default App
