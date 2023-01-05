import React, { useState } from "react";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import warning from "../../assets/icons/warning.svg";
import heart from "../../assets/icons/purple-heart.svg";
import rocket from "../../assets/icons/rocket.svg";
import "./styles.css";

    function Form() {
        const [ scheduleItems, setScheduleItems ] = useState([
            { week_day: 0, from: "", to: "" }
        ]);

            function addNewScheduleItem() {
                setScheduleItems([
                    ...scheduleItems,
                        { week_day: 0, from: "", to: "" }
                ]);
            };

            return (
                <div id="page_form" className="container">
                    <Header title="Que incrível que você quer dar aulas" description="O primeiro passo é preencher esse formulário de inscrição"/>
                        <main>
                            <fieldset>
                                <legend>
                                    Seus dados
                                </legend>
                                    <Input label="Nome" name="name"/>
                                    <Input label="Avatar" name="avatar"/>
                                    <Input label="WhatsApp" name="whatsapp"/>
                                        <Textarea label="Biografia" name="biography"/>
                            </fieldset>
                            <fieldset>
                                <legend>
                                    Sobre a aula
                                </legend>
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
                                        <Input label="Custo Hora/Aula" name="cost"/>
                            </fieldset>
                            <fieldset>
                                <legend>
                                    Horários disponíveis
                                        <button type="button" onClick={ addNewScheduleItem }>
                                            <img src={ rocket } alt="Rocket"/>
                                                Novo horário
                                        </button>
                                </legend>
                                    { scheduleItems.map(scheduleItem => {
                                        return (
                                            <div key={ scheduleItem.week_day } className="schedule-item">
                                                <Select label="Dia da semana" name="week_day" options={[
                                                    { value: "0", label: "Domingo" },
                                                    { value: "1", label: "Segunda-feira" },
                                                    { value: "2", label: "Terça-feira" },
                                                    { value: "3", label: "Quarta-feira" },
                                                    { value: "4", label: "Quinta-feira" },
                                                    { value: "5", label: "Sexta-feira" },
                                                    { value: "6", label: "Sábado" }
                                                ]}/>
                                                    <Input label="Das" name="from" type="time"/>
                                                    <Input label="Até" name="to" type="time"/>
                                            </div>
                                        );
                                    }) }
                            </fieldset>
                                <footer>
                                    <p>
                                        <img src={ warning } alt="Warning"/>
                                            Importante! <br/>
                                            Preencha todos os dados
                                    </p>
                                        <button type="button">
                                            <img src={ heart } alt="Heart"/>
                                                Salvar cadastro
                                        </button>
                                </footer>
                        </main>
                </div>
            );
    };

        export default Form;