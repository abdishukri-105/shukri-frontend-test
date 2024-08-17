import Button from "./Button"
import CheckboxItems from "./CheckboxItems"

const CheckboxCard = () => {
  return (
    <div 
    className="relative   py-0 w-full h-[326px]  my5px]  border border-[#eeeeee] shadow-md rounded-md box-border flex flex-col items-start">
        <CheckboxItems/>
        <Button />
    </div>
  )
}

export default CheckboxCard