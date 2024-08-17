import Button from "./Button"
import CheckboxItems from "./CheckboxItems"

const CheckboxCard = () => {
  return (
    <section>
       <div 
        className="relative   py-0 w-full h-[326px] px-[10px]  
       border-[#eeeeee] border-[1px] shadow-custom-multi rounded-[6px] box-borer flex flex-col items-start">
        <CheckboxItems/>
        <Button />
        </div>
    </section>
  )
}

export default CheckboxCard  