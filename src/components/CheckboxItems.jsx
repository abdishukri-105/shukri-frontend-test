import CustomCheckbox from "./Customcheckbox";
import Divider from "./Divider"

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
    <div className="min-w-[370px] ">
      <div className="min-w-[370px] h-[42px] px-[8px]  pt-[15px]">
        <div className="flex hover:cursor-pointer pb-[22px] px-[8px] items-center justify-between">
          <label className="text-[#1F2128] font-montserrat text-[14px] font-normal leading-[18.2px]">
            All pages
          </label>
        <CustomCheckbox />
        </div>
      </div>

     <Divider />

      <section className="max-h-[164px] px-[8px] overflow-scroll hide-scrollbar min-w-[370px] ">
        {pages.map((page, index) => (
          <div key={index} className="flex px-[8px] hover:cursor-pointer w-full h-[42px] items-center justify-between">
            <label className="text-[#1F2128] font-montserrat text-[14px] font-normal leading-[18.2px]">
              {page}
            </label>

            <CustomCheckbox />
          </div>
        ))}
      </section>

      <Divider />

    </div>
  );
};

export default CheckboxItems;
