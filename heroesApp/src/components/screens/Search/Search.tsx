import { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";
import { FormControl, InputGroup } from "react-bootstrap";
import CardHeroes from "../../ui/CardHeroes/CardHeroes";
import styles from "./Search.module.css";

const Search = () => {
  const { values, handleChange } = useForm({
    search: "",
  });
  const { search } = values;
  const [heroes, setHeroes] = useState<IHeroes[]>([]);
  useEffect(() => {
    const result = heroesData.filter((h) =>
      h.superhero.toLowerCase().trim().includes(search)
    );
    setHeroes(result);
  }, [search]);

  return (
    <div className={styles.containerSearch}>
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text>Ingrese Heroes</InputGroup.Text>
          <FormControl onChange={handleChange} type="text" name="search" />
        </InputGroup>

        <div className={styles.containerListHeroes}>
        {heroes.length > 0 ? (
          <div style={{width: "80%"}}>
            {heroes.map((hero) => (
              <div key={hero.id}>
                <CardHeroes hero={hero} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2>No coincide la busqueda</h2>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Search;
