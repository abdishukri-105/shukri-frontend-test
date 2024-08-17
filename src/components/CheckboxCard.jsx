import Button from "./Button"
import CheckboxItems from "./CheckboxItems"

const CheckboxCard = () => {
  return (
    <section className="bg-blue\-200  relative border-[#eeeeee] border-[1px] shadow-custom-multi rounded-[6px] w-[370px]  px-[10px]   h-[326px]">
       <div 
        className="box-borer flex flex-col items-start">
        <CheckboxItems/>
        <Button />
        </div>
    </section>
  )
}

export default CheckboxCard  