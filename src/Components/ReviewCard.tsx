import { Card } from "./ui/card"
import { Avatar,AvatarFallback,AvatarImage, } from "./ui/avatar"
import profileImage from '../assets/profileImage.png'
import Paragraph from "./Paragraph"

function ReviewCard () {
    return (
        <Card className="p-3">
            <div className="flex gap-x-2 items-center ">
                <Avatar className="w-16 h-16">
                    <AvatarImage src={profileImage} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                <h4 className="font-medium pb-1">Ayomide Chubby</h4>
                <p>July 2021</p>
                <Paragraph text="asdddddddddddddddddddddddddddcfdddddddddddddddddddddddddddwerrrrrrrrrrr"/>
                </div>
            </div>
            
        </Card>
    )
}

export default ReviewCard