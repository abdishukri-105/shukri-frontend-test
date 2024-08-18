

const pages = [
  'Page 1',
  'Page 2',
  'Page 3',
  'Page 4',
  'Page 5',
  'Page 6'
];

const CheckboxItems = () => {
  return (
    <div className="w-full ">
      <div className="w-full  h-[42px] px-[8px] pb-[22px] pt-[15px]">
        <div className="flex hover:cursor-pointer items-center justify-between">
          <label className="text-[#1F2128] font-montserrat text-[14px] font-normal leading-[18px]">
            All pages
          </label>
          <div className="w-[35px] relative h-[35px] ">
            <input
              type="checkbox"
              className="w-[25px] hover:cursor-pointer  hover:border-[2px] appearance-none 
              hover:checked:group-valid focus:ring-blue-200 absolute h-[25px] bg-white
               border-[#CDCDCD] opacity-60 border-[1px] left-[6px] top-[6.5px]  rounded-[6px]
               
               "
            
            />
          </div>
        </div>
      </div>

      <div className="px-[10px]  py-[15px]">
        <hr className="w-[340px] bg-gray-500" />
      </div>

      <section className="b h-[164px] px-[8px] overflow-scroll hide-scrollbar w-full">
        {pages.map((page, index) => (
          <div key={index} className="flex hover:cursor-pointer w-full h-[42px] items-center justify-between">
            <label className="text-[#1F2128] font-montserrat text-[14px] font-normal leading-[18px]">
              {page}
            </label>

            <div className="w-[35px] relative  h-[35px] ">
              <input
              type="checkbox"
              className="w-[25px] hover:cursor-pointer   appearance-none hover:checked:group-valid focus:ring-gray-200 absolute h-[25px] bg-white border-[#CDCDCD] opacity-60 border-[1px] hover:border-[2px] left-[6px] top-[6.5px]  rounded-[6px]"
             />
             
            </div>
          </div>
        ))}
      </section>

      <div className="px-[10px] py-[10px]">
        <hr className="w-[340px] bg-gray-500" />
      </div>

    </div>
  );
};

export default CheckboxItems;
