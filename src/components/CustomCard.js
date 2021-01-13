import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export default function CustomCard({cardData}) {
    const [title] = React.useState(cardData.data.title)
    //const [thumbnail] = React.useState(cardData.thumb)
    const [price] = React.useState(cardData.data.salePrice)
    const [link] = React.useState("https://www.cheapshark.com/redirect?dealID="+cardData.data.dealID)
    const [rating] = React.useState(cardData.data.dealRating)
    const [img] = React.useState(cardData.img)

    let styles = {
        main: {
            width: "16rem",
            backgroundColor: "#c5c6c7",
            margin: "20px auto",
            boxShadow: "8px 8px 16px #000000"
        },
        title: {
            fontWeight: "900",
            color: "white",
            textShadow: "-1px 1px 0 #000"
        },
        body: {
            fontWeight: "700"
        }
    }

    return(
            <Card style={styles.main}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title style={styles.title}>
                        {title}
                    </Card.Title>
                    <Card.Text style={styles.body}>
                    Price: ${price}
                    <br/>
                    Rating: {rating}
                    </Card.Text>
                    <Button 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer">
                            Go to deal
                    </Button>
                </Card.Body>
            </Card>
    )
}