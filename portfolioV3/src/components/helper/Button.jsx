export function Button({text,width,classNew=''}){
    return(
        <div className={`${width} ${classNew} text-base text-primary flex items-center justify-center px-4 py-2 border-2 border-primary cursor-pointer  font-extrabold`}>
            {text}
        </div>
    )
}