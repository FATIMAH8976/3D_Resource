import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, FAQs, Hero, Navbar, ClientsShowcase, Works, StarsCanvas } from "./components";


const App = () => {
  return (
    <BrowserRouter>
    
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        
        <ClientsShowcase />
        <Works />
        <FAQs />
        <Experience />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;