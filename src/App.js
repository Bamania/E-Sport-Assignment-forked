import CardStyle from './components/CardStyle';
import Card from './components/Card';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <div className='relative border border-red-700 h-screen'>
      <img
        src='https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=2000&t=st=1698849171~exp=1698849771~hmac=391d66ea8d930b46c9aa0da1fc08a6ea4e0546d99b9482ca970ec944984d7dbc'
        alt="Background"
        className="w-[100rem] h-[70rem] object-fit object-center"
      />
      <div className="absolute top-0 left-0 w-full h-full">
        <Card />
        {/* <Carousel/> */}
      </div>
    </div>
    </>
    
  );
}

export default App;
