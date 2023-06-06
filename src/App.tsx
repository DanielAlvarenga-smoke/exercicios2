import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import Simples from "./componentes/Simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";
import Familia from "./componentes/relacao/Familia";
import Membro from "./componentes/relacao/Membro";
import UsuarioLogado from "./componentes/UsuarioLogado";
import Botao from "./componentes/Botao";
import Contador from "./componentes/Contador";
import DimensoesFixas from "./componentes/DimensoesFixas";
import Mega from "./componentes/Mega";
import Calculadora from "./Calculadora/Calculadora";

export default class App extends Component {
  render() {
    return(
      
      <View style={estilos.container}>

        {/*<Contador valorInicial={50}/>*/}
        
        {/*<Botao />*/} 

        {/*<UsuarioLogado usuario={ {nome: 'teste', email: 'teste@teste.com'}} />
        <UsuarioLogado usuario ={ {nome: 'teste 2'}}/>
        <UsuarioLogado usuario ={ {email: 'teste@teste.com'}} />
        <UsuarioLogado usuario= {null}/>
        <UsuarioLogado usuario = { {}}/>*/}

    { /* <Simples texto = 'Daniel' />*/}
       {/*<Frag titulo = "Cadastro" 
          subTitulo = " Tela de cadastro de produto" />*/ }
     
    {/* <ParImpar numero = {10}  />} */}
     
     {/*<Familia>
       <Membro nome = "Ana" sobreNome = "Silva"/>
       <Membro nome = "José" sobreNome = "Silva" />
        </Familia>*/}

    {/* <Familia>
      <Membro nome = "Bianca" sobreNome = "Cunha"/>
      <Membro nome = "Gustavo" sobreNome = "Cunha"/>
      </Familia>*/}

      {/*<DimensoesFixas />*/}
     {/* <Mega qtdNumeros={7}/>*/}
     <Calculadora />

      </View>
    );

  }
}
const estilos = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },

  fonte: {
    fontSize: 40,
  },
});
