

const CheckboxItems = () => {
 

  return (
    <div className=" px-[10px] bg-geen-400">
         
         <div className=" w-full  bg-gren-200 h-[42px] px-[8px] pb-[22px] pt-[15px] ">
         <div className="flex bg-yelow-200  items-center  justify-between ">
         
            <label className="text-[#1F2128] font-montserrat text-[14px] font-normal leading-[18px]">
              All pages
            </label>
        
             <input type="checkbox" name="" id="" 
             className="w-[25px] h-[25px] bg-white rounded-[6px] cursor-pointer" 
             />
          
         </div>
         </div>
         <div className="px-[10px] bg-bue-700 py-[15px]">
            <hr className=" w-[340px] bg-gray-500 gap-[10px]"></hr>
         </div>

       <section className="bg-rd-200 h-[164px] px-[8px] overflow-scroll hide-scrollbar  w-full hide-scrollbar::-webkit-scrollbar">
         
         <div className="flex bg-yellow-200  w-full h-[42px] items-center  justify-between ">
         
            <label className="text-[#1F2128]  font-montserrat text-[14px] font-normal leading-[18px]">
              Page 1
            </label>
        
             <input type="checkbox" name="" id="" 
             className="w-[25px] h-[25px] bg-white rounded-[6px] cursor-pointer" 
             />
          
         </div>

         <div className="flex bg-yelow-200  w-full h-[42px] items-center  justify-between ">
         
         <label className="text-[#1F2128] font-montserrat text-[14px] font-normal leading-[18px]">
           Page 2
         </label>
     
          <input type="checkbox" name="" id="" 
          className="w-[25px] h-[25px] bg-white rounded-[6px] cursor-pointer" 
          />
       
          </div>
          <div className="flex bg-yelow-200  w-full h-[42px] items-center  justify-between ">
         
         <label className="text-[#1F2128] font-montserrat text-[14px] font-normal leading-[18px]">
           Page 3
         </label>
     
          <input type="checkbox" name="" id="" 
          className="w-[25px] h-[25px] bg-white rounded-[6px] cursor-pointer" 
          />
       
          </div>
          <div className="flex bg-yelow-200  w-full h-[42px] items-center  justify-between ">
         
         <label className="text-[#1F2128] font-montserrat text-[14px] font-normal leading-[18px]">
           Page 4
         </label>
     
          <input type="checkbox" name="" id="" 
          className="w-[25px] h-[25px] bg-white rounded-[6px] cursor-pointer" 
          />
       
          </div>
          <div className="flex bg-yelow-200  w-full h-[42px] items-center  justify-between ">
         
         <label className="text-[#1F2128] font-montserrat text-[14px] font-normal leading-[18px]">
           Page 5
         </label>
     
          <input type="checkbox" name="" id="" 
          className="w-[25px] h-[25px] bg-white rounded-[6px] cursor-pointer" 
          />
       
          </div>
          <div className="flex bg-yelow-200  w-full h-[42px] items-center  justify-between ">
         
         <label className="text-[#1F2128] font-montserrat text-[14px] font-normal leading-[18px]">
           Page 6
         </label>
     
          <input type="checkbox" name="" id="" 
          className="w-[25px] h-[25px] bg-white rounded-[6px] cursor-pointer" 
          />
       
          </div>

         
      
       </section>

       <div className="px-[10px] bg-ble-700 py-[15px]">
            <hr className=" w-[340px] bg-gray-500 gap-[10px]"></hr>
         </div>
    </div>
  );
};

export default CheckboxItems;
