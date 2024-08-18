import Button from "./Button"
import CheckboxItems from "./CheckboxItems"

const CheckboxCard = () => {
  return (
    <section className=" relative border-[#eeeeee] border-[1px] shadow-custom-multi 
                        rounded-[6px] min-w-[370px]  px-[10px]   min-h-[326px]">
       <div className="flex flex-col items-start">
          <CheckboxItems/>
          <Button />
        </div>
    </section>
  )
}

export default CheckboxCard  