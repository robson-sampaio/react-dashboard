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
                <h2 className="mt-2 text-left mx-4">RESUMO</h2>
                <div className="row mx-2">
                    <div className="col">
                        <div className="row mx-0">
                            <h3>Consultas</h3>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card mt-2 text-center">
                                    <div className="card-header"> 30 dias anteriores</div>
                                    <div className="card-body">{this.state.consultas.consultas_30dias_anteriores}</div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card mt-2 text-center">
                                    <div className="card-header">Próximos 30 dias</div>
                                    <div className="card-body">{this.state.consultas.consultas_30dias_posteriores}</div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row mx-0">
                            <h3>Faturamento</h3>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card mt-2 text-center">
                                    <div className="card-header"> 30 dias anteriores</div>
                                    <div className="card-body">
                                        {this.state.faturamento.anterior.valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
                                        <span className="badge badge-success ml-1">
                                            {this.state.faturamento.previsao.comparativo} %
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card mt-2 text-center">
                                    <div className="card-header">Próximos 30 dias</div>
                                    <div className="card-body">
                                        {this.state.faturamento.previsao.valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
                                        <span className="badge badge-danger ml-1">
                                            {this.state.faturamento.previsao.comparativo} %
                                        </span>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>                
                
                {/* <h2 className="mt-2 text-left">RESUMO</h2>
                <div className="row">
                    <div className="col">
                        <h3>Consultas</h3>
                        <div className="row">
                            <div className="col">                            
                                <div class="card mt-2 text-center">
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
                                <h3>Faturamento</h3>
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
                </div> */}
            </div>
         )
    }
}
 
export default Resumo;