import { useState, KeyboardEvent } from 'react'

import classes from "./Search.module.css"

import {BsSearch} from "react-icons/bs"

type SearchProps = {
  loadUser: (useName: string) => Promise<void> //Promise nesse caso é porque na função tem um async/await
}


export default function Search({loadUser}: SearchProps) {
  const [userName, setUserName] = useState("")

  //Resumo: Função criada para quando o usuario digitar "Enter", fazer a busca pelo usuario. Ou seja, agora busca pelo Enter e pelo botão "buscar";
  function handleKeyDown(e: KeyboardEvent){   //KeyboardEvent = É um evento de teclado. Tipo proprio do React (importado do proprio React);
    if(e.key === "Enter"){    //Verifica se a tecla que foi digitada foi igual a "Enter"
      loadUser(userName)
    }
  }

  return (
    <div className={classes.search}>
        <h2>Busque por um usuário:</h2>
        <p>Conheça seus melhores repositórios</p>
        <div className={classes.search_container}>
            <input type="text" placeholder='Digite o nome do usuário' onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown}/> {/*onKeyDown = Evento que tem que pressionar alguma tecla*/}
            <button onClick={() => loadUser(userName)}>
                <BsSearch/>
            </button>
        </div>
    </div>
  )
}
