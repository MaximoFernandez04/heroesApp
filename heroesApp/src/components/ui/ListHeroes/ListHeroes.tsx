import { FC } from "react"
import { IHeroes } from "../../../types/IHeroes"
import styles from "./ListHeroes.module.css"
import CardHeroes from "../CardHeroes/CardHeroes"

interface IListHeroes{
    heroes: IHeroes[],
    title: string

}

export const ListHeroes: FC<IListHeroes> = ({heroes, title}) => {
  return (
    <div className={styles.containerPrincipalList}>
      
        <div className={styles.containerTitle}>
            <h2>{title}</h2>
        </div>

        <div className={styles.containerList}>
            {heroes.map((hero) => (
                <CardHeroes hero= {hero} key={hero.id}/>
            ))}

        </div>

    </div>
  )
}

export default ListHeroes
