import { HTMLAttributes } from "react";

type DividerProps = HTMLAttributes<HTMLHeadElement> & {
    axis: 'horizontal' | 'vertical'
}

function Divider({axis, className}: DividerProps) {
    return (<>
    {axis === 'horizontal' && <div className={`${className} w-full border-b`}></div>}
    {axis === 'vertical' && <div className={`${className} h-full border-r`}></div>}
    
    </>)
}

export default Divider;