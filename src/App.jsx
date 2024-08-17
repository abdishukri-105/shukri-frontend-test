
import './App.css'
import CheckboxCard from './components/CheckboxCard'

function App() {


  return (
   <section 
   className=' flex relative items-center   justify-center bg-black'
   >
    <div className='relative w-[578px] bg-white  h-[794px] bg-greeen-200' >
      <div className='absolute bg-ble-200 top-[85px] left-[104px]'>
      <CheckboxCard />
      </div>
    </div>
    </section>
  
  )
}

export default App
