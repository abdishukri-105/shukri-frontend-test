import CustomCheckbox from "./Customcheckbox";


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
        <CustomCheckbox />
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

            <CustomCheckbox />
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
