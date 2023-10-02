import { useState, useEffect } from "react"

function Paragraph({text}) {
    const [showMore, setShowMore] = useState(false);
    const [Str, setStr] = useState('');

    
        useEffect(()=>{
            if (text.length > 38) {
                setStr(text.substring(0, 38))
            }
        }, [])
        const handleClick = ()=> {
            setShowMore(!showMore)
        }

    // console.log(text, Str)

    if (Str) {
        return (
            <>
                <p>
                    {showMore ? text : `${Str}...`}  
                </p>
                <button 
                    onClick={handleClick}>{showMore ? 'Show Less': 'Show More'}
                </button>
            </>
        )
    }
}

export default Paragraph