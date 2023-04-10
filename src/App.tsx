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


export default class App extends Component {
  render() {
    return(
      <View style = {estilos.container}>

        <Contador valorInicial={50}/>
        
        {/*<Botao />*/} 



        {/*<UsuarioLogado usuario={ {nome: 'teste', email: 'teste@teste.com'}} />
        <UsuarioLogado usuario ={ {nome: 'teste 2'}}/>
        <UsuarioLogado usuario ={ {email: 'teste@teste.com'}} />
        <UsuarioLogado usuario= {null}/>
        <UsuarioLogado usuario = { {}}/>*/}

    { /* <Simples texto = 'Ruan' />*/}
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
