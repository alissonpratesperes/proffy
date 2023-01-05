import React, { useState, FormEvent } from "react";

import Header from "../../components/Header";
import Teacher from "../../components/Teacher";
import Input from "../../components/Input";
import Select from "../../components/Select";
import smile from "../../assets/icons/smile.svg";
import TeacherItem from "../../interfaces/Teacher.interface";
import api from "../../services/api";
import "./styles.css";

    function List() {
        const [ matter, setMatter ] = useState("");
        const [ weekday, setWeekday ] = useState("");
        const [ time, setTime ] = useState("");
        const [ teachers, setTeachers ] = useState([]);

            function handleTeachersSearch(event: FormEvent) {
                event.preventDefault();

                    api.get("/classes", { params: { week_day: weekday, matter, time } }).then(response => {
                        setTeachers(response.data);
                    });    
            };

                return (
                    <div id="page_list" className="container">
                        <Header title="Estes são os Proffys disponíveis">
                            <form id="teachers_search" onSubmit={ handleTeachersSearch }>
                                <Select label="Matéria" name="matter" options={[
                                    { value: "Artes", label: "Artes" },
                                    { value: "Biologia", label: "Biologia" },
                                    { value: "Ciências", label: "Ciências" },
                                    { value: "Educação Física", label: "Educação Física" },
                                    { value: "Filosofia", label: "Filosofia" },
                                    { value: "Física", label: "Física" },
                                    { value: "Geografia", label: "Geografia" },
                                    { value: "História", label: "História" },
                                    { value: "Inglês", label: "Inglês" },
                                    { value: "Matemática", label: "Matemática" }, 
                                    { value: "Português", label: "Português" }, 
                                    { value: "Química", label: "Química" },
                                    { value: "Sociologia", label: "Sociologia" }
                                ]} value={ matter } onChange={ (event) => { setMatter(event.target.value) } }/>
                                <Select label="Dia da semana" name="week_day" options={[
                                    { value: "0", label: "Domingo" },
                                    { value: "1", label: "Segunda-feira" },
                                    { value: "2", label: "Terça-feira" },
                                    { value: "3", label: "Quarta-feira" },
                                    { value: "4", label: "Quinta-feira" },
                                    { value: "5", label: "Sexta-feira" },
                                    { value: "6", label: "Sábado" }
                                ]} value={ weekday } onChange={ (event) => { setWeekday(event.target.value) } }/>
                                    <Input label="Hora" name="time" type="time" value={ time } onChange={ (event) => { setTime(event.target.value) } }/>
                                        <button type="submit">
                                            <img src={ smile } alt="Smile"/>
                                                Buscar
                                        </button>
                            </form>
                        </Header>
                            <main>
                                { teachers.map((teacher: TeacherItem) => {
                                    return <Teacher key={ teacher.id } teacher={ teacher }/>;
                                }) }
                            </main>
                    </div>
                );
    };

        export default List;