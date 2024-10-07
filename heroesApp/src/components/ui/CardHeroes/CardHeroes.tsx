import { Card } from "react-bootstrap"
import { IHeroes } from "../../../types/IHeroes"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./CardHeroes.module.css"

interface ICardHero{
    hero: IHeroes
}

const CardHeroes: FC<ICardHero> = ({hero}) => {

    const navigate = useNavigate()
    const handleNavigateHero = ()=>{
        navigate(`/hero/${hero.id}`)
    }

  return (
    <Card className={styles.card} onClick={handleNavigateHero} style={{ width: '100%', cursor: "pointer" }}>
      <Card.Img variant="top" src= {`/assets/heroes/${hero.id}.jpg`}/>
      <Card.Body>
        <Card.Title>{hero.superhero}</Card.Title>
        <Card.Text>
          <p><b>Alter Ego: </b>{hero.alter_ego}</p>
          <p><b>Publicadore: </b>{hero.publisher}</p>
          <p><b>Primera Aparicion: </b>{hero.first_appearance}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardHeroes
