import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Despre from './pagini/Despre';
import Media from './pagini/Media';
import Contact from './pagini/Contact';
import Statistici from './pagini/Statistici';
import Legislatie from './pagini/Legislatie';
import Personal from './pagini/Personal';
import Public from './pagini/Public';


function App() {
  
  return (
    <div >
      <Header />
      <main className="container-fluid container-fluid-max-md">
        
          <Routes>
            <Route path="/despre" element={<Despre />} />
            <Route path="/" element={<Statistici/>} />
            <Route path="/legislatie" element={<Legislatie />} />
            <Route path="/media" element={<Media />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/public" element={<Public />} />
            <Route path="/contact" element={<Contact />} />  
            <Route path="*" element={<Statistici/>} />        
        </Routes>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;