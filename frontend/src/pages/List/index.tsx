import React from "react";

import Header from "../../components/Header";
import "./styles.css";

    function List() {
        return(
            <div id="page_list" className="container">
                <Header title="Estes são os Proffys disponíveis">
                    <form id="teachers_search">
                        <div className="input-block">
                            <label htmlFor="matter"> Matéria </label>
                                <input id="matter" type="text"/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="week_day"> Dia da Semana </label>
                                <input id="week_day" type="text"/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="time"> Hora </label>
                                <input id="time" type="text"/>
                        </div>
                    </form>
                </Header> 
            </div>
        );
    };

        export default List;