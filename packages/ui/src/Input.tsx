interface InputProps{
    type:string,
    placeholder:string
}

export function Input({type,placeholder}:InputProps){

    return  <input type={type} className="border border-black p-4 m-5 rounded-md text-black text-sm" placeholder={placeholder} />

}