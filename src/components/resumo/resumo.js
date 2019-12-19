import React, { Component } from 'react';

class Resumo extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            consultas : {
                consultas_30dias_anteriores : 0,
                consultas_30dias_posteriores : 0
            },
            faturamento : {
                anterior : {
                    valor: 0,
                    comparativo : 0
                },
                previsao : {
                    valor: 0,
                    comparativo : 0
                }
            }
        }
    }
    render() { 
        return ( 
            <div>
                <h2 className="resumo-title">RESUMO</h2>
                <div className="col">
                    <h3>Faturamento</h3>
                    <div className="row">
                        <div className="col">
                            <div class="card">
                                <div class="card-header">
                                    30 dias anteriores
                                </div>
                                <div class="card-body">
                                    <p>{this.state.consultas.consultas_30dias_anteriores}</p>
                                </div>
                            </div>
                        </div> 
                        <div className="col">
                            <div class="card">
                                <div class="card-header">
                                    30 dias anteriores
                                </div>
                                <div class="card-body">
                                    <p>{this.state.consultas.consultas_30dias_anteriores}</p>
                                </div>
                            </div>
                        </div>  
                        <div className="col">
                            <div class="card">
                                <div class="card-header">
                                    30 dias anteriores
                                </div>
                                <div class="card-body">
                                    <p>{this.state.consultas.consultas_30dias_anteriores}</p>
                                </div>
                            </div>
                        </div> 
                        <div className="col">
                            <div class="card">
                                <div class="card-header">
                                    30 dias anteriores
                                </div>
                                <div class="card-body">
                                    <p>{this.state.consultas.consultas_30dias_anteriores}</p>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>                              
            </div>
         )
    }
}
 
export default Resumo;