import React from "react";

import Header from "../../components/Header";
import Teacher from "../../components/Teacher";
import Input from "../../components/Input";
import "./styles.css";

    function List() {
        return (
            <div id="page_list" className="container">
                <Header title="Estes são os Proffys disponíveis">
                    <form id="teachers_search">
                        <Input label="Matéria" name="matter"/>
                        <Input label="Dia da semana" name="week_day"/>
                        <Input label="Hora" name="time" type="time"/>
                    </form>
                </Header>
                    <main>
                        <Teacher/>
                    </main>
            </div>
        );
    };

        export default List;