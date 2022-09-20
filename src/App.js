import './App.css';
import logo_if from './logo_if.png';
import logobw from './logobocaweb.png';
import {Component} from 'react';
import Busca from './components/Busca';
import Lista from './components/Lista';
import Rodape from './components/Rodape';
import Cabecalho from './components/Cabecalho';

 
class App extends Component{
  
  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODAs = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs();
  }

  render(){
    return(
      <section className='container'>
        <Cabecalho
          logobw = {logobw}
        />
        <Busca
          busca={this.state.busca}
          buscaODA={this.buscaODAs} 
        />

        <Lista
          odas = {this.state.odas}
        />

        <Rodape
          logo = {logo_if}
        />
      </section>
    )
  }

}

export default App;
