import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import CustomCard from "./CustomCard"
import Amazon from '../imgs/Amazon.jpg'
import BlizzardShop from "../imgs/Blizzard Shop.jpg"
import Direct2Drive from "../imgs/Direct2Drive.jpg"
import EpicGamesStore from "../imgs/EpicGamesStore.png"
import GamersGate from "../imgs/GamersGate.jpg"
import GameStop from "../imgs/GameStop.jpg"
import GOG from "../imgs/GOG.jpg"
import GreenManGaming from "../imgs/GreenManGaming.jpg"
import Origin from "../imgs/Origin.jpg"
import Steam from "../imgs/Steam.jpg"
import Other from "../imgs/Other.jpg"

export default function CardContainer({data}) {
    let imgMap = createMap()
    
    const listCards = data.map((game) => 
        <CustomCard
            cardData={{
                data: game,
                img: imgMap.has(game.storeID) ? 
                        imgMap.get(game.storeID) : 
                        imgMap.get('Other')
            }} 
        />
    )
    
    return(
        <Container>
            <Row>
                {listCards}
            </Row>
        </Container>
    )
}

function createMap() {
    let imgMap = new Map()
    imgMap.set('4', Amazon)
    imgMap.set('31', BlizzardShop)
    imgMap.set('6', Direct2Drive)
    imgMap.set('25', EpicGamesStore)
    imgMap.set('2', GamersGate)
    imgMap.set('5', GameStop)
    imgMap.set('7', GOG)
    imgMap.set('3', GreenManGaming)
    imgMap.set('8', Origin)
    imgMap.set('1', Steam)
    imgMap.set('Other', Other)

    return imgMap
}