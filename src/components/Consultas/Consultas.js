import React, { Component } from 'react';

class Consultas extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            realizadas : [], 
            marcadas : []
         };
    }

    componentDidMount(){
        fetch('http://www.devup.com.br/php/api-dashboard/api/consultas')
        .then(resultado => resultado.json().then(dados => this.setState(dados)));
    }

    render() { 
        return ( 
            <div>
                <h2 className="text-left mt-2 mx-3">Consultas</h2>
                <div className="row">
                    <div className="col ml-3">
                        <div className="card mt-2">
                            <div className="card-header">
                                Realizadas
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Especialidade</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.realizadas.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.especialidade}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col mx-2">
                        <div className="card mt-2">
                            <div className="card-header">
                                Marcadas
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Especialidade</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.marcadas.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.especialidade}</td>
                                                    <td>{item.quantidade}</td>
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
 
export default Consultas;