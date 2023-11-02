import CardStyle from './components/CardStyle';
import Card from './components/Card';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <div className='relative  h-screen'>
      
      <img
        src='https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=2000&t=st=1698849171~exp=1698849771~hmac=391d66ea8d930b46c9aa0da1fc08a6ea4e0546d99b9482ca970ec944984d7dbc'
        alt="Background"
        className="w-full h-[88rem] object-fit object-center"
      />
      
      <div className="absolute top-0 left-0 w-full h-full">\
      <span className='flex justify-center mt-5 -mb-10 text-white text-4xl'>Featured Games</span>
        <Card />
        <Footer/>
      </div>
    </div>
    </>
    
  );
}

export default App;
