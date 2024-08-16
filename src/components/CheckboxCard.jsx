import Button from "./Button"
import CheckboxItems from "./CheckboxItems"

const CheckboxCard = () => {
  return (
    <div className="relative bg-white w-[370px] h-[326px] mx-[104px] my-[85px] p-2 border border-[#EEEEEE] shadow-md rounded-md box-border flex flex-col items-start">
        <CheckboxItems/>
        <Button />
    </div>
  )
}

export default CheckboxCard