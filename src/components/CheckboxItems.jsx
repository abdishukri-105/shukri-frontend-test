// import './checkbox.css';

const CheckboxItems = () => {
 

  return (
    <div className="w-full -[10px] bg-gren-400">
         
         <div className=" w-ful  bg-gren-200 bg-yelow-200 h-[42px] px-[8px] pb-[22px] pt-[15px] ">

         <div className="flex bg-yelow-200  items-center  justify-between ">

           
            <label className="text-[#1F2128] font-montserrat text-[14px] font-normal leading-[18px]">
              All pages
            </label>
            
             <div className="w-[35px] relative h-[35px] bg-green-600">
             <input type="checkbox" name="" id="" 
             className="w-[23px] absolute custom-checkbox left-[6px] top-[6.5px] h-[23px]  bg-[#FFFFFF] border-[1px] opacity-60 rounded-[6px]" 
             />
             </div>
          
         </div>
         </div>
         <div className="px-[10px] bg-bue-700 py-[15px]">
            <hr className=" w-[340px] bg-gray-500 gap-[10px]"></hr>
         </div>

       <section className="bg-re-200 h-[164px] px-[8px] overflow-scroll hide-scrollbar  w-ful hide-scrollbar::-webkit-scrollbar">
         
         <div className="flex bg-yellw-200  w-full h-[42px] items-center  justify-between ">
         
            <label className="text-[#1F2128]  font-montserrat text-[14px] font-normal leading-[18px]">
              Page 1
            </label>
        
             <input type="checkbox" name="" id="" 
             className="w-[25px] h-[25px] bg-[#CDCDCD] border-[1px] opacity-60 rounded-[6px]" 
             />
          
         </div>

         <div className="flex bg-yelow-200  w-full h-[42px] items-center  justify-between ">
         
         <label className="text-[#1F2128] font-montserrat text-[14px] font-normal leading-[18px]">
           Page 2
         </label>
     
          <input type="checkbox" name="" id="" 
          className="w-[25px] h-[25px] bg-[#CDCDCD] border-[1px] opacity-60 rounded-[6px]" 
          />
       
          </div>
          <div className="flex bg-yelow-200  w-full h-[42px] items-center  justify-between ">
         
         <label className="text-[#1F2128] font-montserrat text-[14px] font-normal leading-[18px]">
           Page 3
         </label>
     
          <input type="checkbox" name="" id="" 
          className="w-[25px] h-[25px] bg-[#CDCDCD] border-[1px] opacity-60 rounded-[6px]" 
          />
       
          </div>
          <div className="flex bg-yelow-200  w-full h-[42px] items-center  justify-between ">
         
         <label className="text-[#1F2128] font-montserrat text-[14px] font-normal leading-[18px]">
           Page 4
         </label>
     
          <input type="checkbox" name="" id="" 
          className="w-[25px] h-[25px] bg-[#CDCDCD] border-[1px] opacity-60 rounded-[6px]" 
          />
       
          </div>
          <div className="flex bg-yelow-200  w-full h-[42px] items-center  justify-between ">
         
         <label className="text-[#1F2128] font-montserrat text-[14px] font-normal leading-[18px]">
           Page 5
         </label>
     
          <input type="checkbox" name="" id="" 
          className="w-[25px] h-[25px] bg-[#CDCDCD] border-[1px] opacity-60 rounded-[6px]" 
          />
       
          </div>
          <div className="flex bg-yelow-200  w-full h-[42px] items-center  justify-between ">
         
         <label className="text-[#1F2128] font-montserrat text-[14px] font-normal leading-[18px]">
           Page 6
         </label>
     
          <input type="checkbox" name="" id="" 
          className="w-[25px] h-[25px] bg-[#CDCDCD] border-[1px] opacity-60 rounded-[6px]" 
          />
       
          </div>

         
      
       </section>

       <div className="px-[10px] bg-bue-700 py-[15px]">
            <hr className=" w-[340px] bg-gray-500 gap-[1]"></hr>
         </div>
    </div>
  );
};

export default CheckboxItems;
