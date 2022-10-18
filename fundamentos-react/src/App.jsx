import React from 'react'
import "./App.css"
import Mega from "./components/mega/Mega"
import Contador from "./components/contador/Contador"
import Input from "./components/formulario/Input"
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/Condicional/UsuarioInfo'
import ParOuImpar from './components/Condicional/ParOuImpar'
import TabelaProdutos from './components/repetiçao/TabelaProdutos'
import ListaAlunos from './components/repetiçao/ListaAlunos'
import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio.jsx'
import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParametro.jsx'
import Fragmento from './components/basicos/Fragmento.jsx'
// poderia substitui o const app = _ => { .... } export default app; por //export default _ =>
//export default _ =>
const app = () => 

    <div className="App">
        <h1>Fundamentos React </h1>

 <div className='Cards'>
 <Card titulo="#13 - Mega" color="#B9006E">
       <Mega qtde={8}></Mega>
        </Card>



 <Card titulo="#12 - Contador" color="#424242">
       <Contador></Contador>
        </Card>


 <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
       <Input></Input>
        </Card>


 <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
       <IndiretaPai></IndiretaPai>
        </Card>

 <Card titulo="#09 - Comunicação Direta" color="#59323C">
       <DiretaPai></DiretaPai>
        </Card>


 <Card titulo="#08 - Renderização Condicional" color="#982395">
       <ParOuImpar numero={21}></ParOuImpar>
       <UsuarioInfo usuario={{ nome: 'Fernando'}}/>
       <UsuarioInfo usuario={{ email: 'Fernando.com'}} />
        </Card>

 <Card titulo="#07 - Desafio Repetiçao" color="#3A9AD9">
       <TabelaProdutos></TabelaProdutos>

        </Card>


 <Card titulo="#06 - Repetiçao" color="#FF4C65">
       <ListaAlunos></ListaAlunos>

        </Card>
 
 <Card titulo="05 - Componentes com Filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira">
            
        </Familia>
        </Card>

        <Card titulo="04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={10} max={60} />
        </Card>
        <Card titulo="03 - Fragmento" color="#E94C6F">
        <Fragmento />
        </Card>
        <Card titulo="02 - Com parâmetro" color="#E8B71A">
        <ComParametro
            titulo="Situação do aluno"
            aluno="Jedson Jhones"
            nota={9.3} />
            </Card>
            <Card titulo="01 - Primeiro" color="#588C73">
        <Primeiro></Primeiro>
        </Card>

 </div>
    </div>

export default app;