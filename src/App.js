import './App.css';
import ashvani from './images/ashvani photoshoop.png'
import v from './images/v png.png'
import and from './images/and edited.png'

function App() {
  return (
    <>
    

      <div className="title p-4 flex justify-center">
        <img className='w-20 lg:w-52 lg:pt-0' src={v} alt="" />
        <h1 className='text-4xl lg:text-8xl font-bold text-yellow-400 text-shadow-lg shadow-yellow-400 text-center mt-10 -ml-4 lg:mt-28 lg:-ml-12'>ALOROUS 24</h1>
      </div>
    <div>
      <h2 className='-mt-16 p-8 text-2xl lg:text-6xl font-bold text-green-500 text-shadow-lg shadow-green-400 text-center'>Department of Computer Science Engineering</h2>
    </div>

    <div className="relative mt-10">
      <img className='  lg:w-full h-[450px] lg:h-full object-fill' src={ashvani} alt="bg" />
      <div className='absolute top-0 -mt-6 left-[120px]'>
        <div><h2 className='text-6xl font-serif font-bold text-blue-500 text-shadow-tx shadow-green-500 -rotate-12 lg:text-7xl'>SERVE</h2></div>
        <div><img className='w-44 lg:w-56 -mt-12 -mb-6' src={and} alt="" /></div>
        <div><h2 className='ml-8 text-5xl font-serif font-bold text-blue-500 text-shadow-tx shadow-green-500 -rotate-12 lg:text-7xl'>GOAL</h2></div>
      </div>

      <div className='m-4 absolute top-40 -rotate-12 right-12'>
      <h2 className='text-lg lg:text-2xl text-yellow-500 font-bold font-serif'>FEB 23 & 24</h2>
      <h3 className='text-base lg:text-2xl text-orange-500 font-medium'>9:30 AM to 3:30 PM</h3>
    </div>

      <div className='absolute bottom-2 p-4 text-center right-4'>
        <div>
        <a href="https://forms.gle/BzhqtxgqwWc1957L8" target="_blank" rel="noopener noreferrer">
            <button className='bg-purple-700 px-4 py-2 lg:px-8 lg:py-4 rounded font-bold text-white shadow-md  shadow-purple-500'>Register Now</button>
          </a>
        </div>
          
      </div>
    </div>

    <div className='m-4 pt-12'>
      <h2 className='text-lg lg:text-2xl text-white font-serif font-bold'>Contact Us</h2>
      <div className='line w-full h-0.5 bg-orange-400 mt-2 mb-2'></div>
      <h3 className='text-sm lg:text-xl text-white font-sans'>MARRI LAXMAN REDDY INSTITUTE OF TECHNOLOGY AND MANAGEMENT</h3>

      <h2 className='text-sm lg:text-lg text-white mt-6'>T. Srujan Reddy</h2>
      <h2 className='text-sm lg:text-lg text-white'>Mobile No: +91 7337272715</h2>

    </div>

    <div className="mb-[50px]"></div>

    <div className='text-center'>
      <div className='line w-full h-[1px] bg-gray-600 mt-2 mb-2'></div>
      <h2 className='text-sm lg:text-lg text-white'>Built by <span className='text-[#a43535] font-serif'>Indranooj Kamble</span></h2>
    </div>
    


    
        
   
    

    </>
  );
}

export default App;
