import React, { Component } from 'react';

class Faturamento extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            detalhamento : []
         }
    }
    
    componentDidMount(){
        fetch('http://www.devup.com.br/php/api-dashboard/api/faturamento')
        .then(resultado => resultado.json().then(dados => this.setState(dados)))
    }

    render() { 
        return ( 
            <div>
                <h2 className="mt-2 text-left ml-3">Faturamento</h2>
                <div className="row mt-2">
                    <div className="col">
                    <div className="card mx-3">
                        <div className="card-header text-left">
                            Total por forma de pagamento
                        </div>
                        <table className="table">
                            <thead>
                                <th className="text-left">Descrição</th>
                                <th className="text-right">Valor</th>
                            </thead>
                            <tbody>
                                {this.state.detalhamento.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="text-left">{item.descricao}</td>
                                            <td className="text-right">
                                                {item.valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
                                            </td>
                                        </tr>
                                         )
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Faturamento;