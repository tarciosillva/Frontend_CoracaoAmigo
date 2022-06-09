import React from "react"
import { Carousel } from "react-bootstrap"
import { CardContent, NumberElement, TextTotal, CardTitle } from "./style"

interface cardInformationProps {
    cardTitle: string,
    Total: string,
    textTotal: string
    backgroundColor:string
}

const CardInformation: React.FC<cardInformationProps> = (props) => {
    return (
        <CardContent backgroundColor={props.backgroundColor}>
            <CardTitle>{props.cardTitle}:</CardTitle>

            <div>
                <NumberElement>
                    {props.Total}
                </NumberElement>
                <TextTotal>{props.textTotal}</TextTotal>
            </div>
        </CardContent>
    )
}

export default CardInformation