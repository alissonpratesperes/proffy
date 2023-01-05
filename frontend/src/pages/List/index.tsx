import React from "react";

import Header from "../../components/Header";
import Teacher from "../../components/Teacher";
import Input from "../../components/Input";
import Select from "../../components/Select";
import "./styles.css";

    function List() {
        return (
            <div id="page_list" className="container">
                <Header title="Estes são os Proffys disponíveis">
                    <form id="teachers_search">
                        <Select label="Matéria" name="matter" options={[
                            { value: "Artes", label: "Artes" },
                            { value: "Biologia", label: "Biologia" },
                            { value: "Ciências", label: "Ciências" },
                            { value: "Educação Física", label: "Educação Física" },
                            { value: "Física", label: "Física" },
                            { value: "Geografia", label: "Geografia" },
                            { value: "História", label: "História" },
                            { value: "Matemática", label: "Matemática" },
                            { value: "Português", label: "Português" },
                            { value: "Química", label: "Química" }
                        ]}/>
                        <Select label="Dia da semana" name="week_day" options={[
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda-feira" },
                            { value: "2", label: "Terça-feira" },
                            { value: "3", label: "Quarta-feira" },
                            { value: "4", label: "Quinta-feira" },
                            { value: "5", label: "Sexta-feira" },
                            { value: "6", label: "Sábado" }
                        ]}/>
                            <Input label="Hora" name="time" type="time"/>
                    </form>
                </Header>
                    <main>
                        <Teacher/>
                        <Teacher/>
                    </main>
            </div>
        );
    };

        export default List;