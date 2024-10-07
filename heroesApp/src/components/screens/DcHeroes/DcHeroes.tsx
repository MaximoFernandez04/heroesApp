import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/IHeroes"
import { heroesData } from "../../../data/heroes"
import ListHeroes from "../../ui/ListHeroes/ListHeroes"

const DcHeroes = () => {
    const [heroes, setHeroes] = useState<IHeroes[]>([])
    const handleGetHeroesDc = ()=>{
        const result = heroesData.filter((hero) => hero.publisher =="DC Comics")
        setHeroes(result)
    }
    
    useEffect(()=>{
        handleGetHeroesDc()
    }, [])
  return <ListHeroes heroes={heroes} title="Heroes Dc Comics"/>
}

export default DcHeroes
