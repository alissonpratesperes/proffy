import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import warning from "../../assets/icons/warning.svg";
import heart from "../../assets/icons/purple-heart.svg";
import rocket from "../../assets/icons/rocket.svg";
import api from "../../services/api";
import "./styles.css";

    function Form() {
        const [ name, setName ] = useState("");
        const [ avatar, setAvatar ] = useState("");
        const [ whatsapp, setWhatsapp ] = useState("");
        const [ biography, setBiography ] = useState("");
        const [ matter, setMatter ] = useState("");
        const [ cost, setCost ] = useState("");
        const [ scheduleItems, setScheduleItems ] = useState([ { week_day: 0, from: "", to: "" } ]);
        const navigate = useNavigate();

            function addNewScheduleItem() {
                setScheduleItems([
                    ...scheduleItems,
                        { week_day: 0, from: "", to: "" }
                ]);
            };
            function handleCreateClass(event: FormEvent) {
                event.preventDefault();
                    api.post("/classes", { name, avatar, whatsapp, biography, matter, cost: Number(cost), schedule: scheduleItems }).then(response => {
                        alert("Cadastro salvo com sucesso! ✅");
                            navigate("/");
                    }).catch(() => {
                        alert("Não foi possível salvar o cadastro! ❌");
                    });
            };
            function setScheduleItemValue(position: number, field: string, value: string) {
                const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
                    if(index === position) {
                        return {
                            ...scheduleItem,
                                [field]: value
                        };
                    };
                        return scheduleItem;
                });
                    setScheduleItems(updatedScheduleItems);
            };

                return (
                    <div id="page_form" className="container">
                        <Header title="Que incrível que você quer dar aulas" description="O primeiro passo é preencher esse formulário de inscrição"/>
                            <main>
                                <form onSubmit={ handleCreateClass }>
                                    <fieldset>
                                        <legend>
                                            Seus dados
                                        </legend>
                                            <Input label="Nome" name="name" value={ name } onChange={ (event) => { setName(event.target.value) } }/>
                                            <Input label="Avatar" name="avatar" value={ avatar } onChange={ (event) => { setAvatar(event.target.value) } }/>
                                            <Input label="WhatsApp" name="whatsapp" value={ whatsapp } onChange={ (event) => { setWhatsapp(event.target.value) } }/>
                                                <Textarea label="Biografia" name="biography" value={ biography } onChange={ (event) => { setBiography(event.target.value) } }/>
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
                                                <Input label="Custo Hora/Aula" name="cost" value={ cost } onChange={ (event) => { setCost(event.target.value) } }/>
                                    </fieldset>
                                    <fieldset>
                                        <legend>
                                            Horários disponíveis
                                                <button type="button" onClick={ addNewScheduleItem }>
                                                    <img src={ rocket } alt="Rocket"/>
                                                        Novo horário
                                                </button>
                                        </legend>
                                            { scheduleItems.map((scheduleItem, index) => {
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
                                                        ]} value={ scheduleItem.week_day } onChange={ (event) => { setScheduleItemValue(index, "week_day", event.target.value ) } }/>
                                                            <Input label="Das" name="from" type="time" value={ scheduleItem.from } onChange={ (event) => { setScheduleItemValue(index, "from", event.target.value ) } }/>
                                                            <Input label="Até" name="to" type="time" value={ scheduleItem.to } onChange={ (event) => { setScheduleItemValue(index, "to", event.target.value ) } }/>
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
                                                <button type="submit">
                                                    <img src={ heart } alt="Heart"/>
                                                        Salvar cadastro
                                                </button>
                                        </footer>
                                </form>
                            </main>
                    </div>
                );
    };

        export default Form;