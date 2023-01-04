import React from "react";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import warning from "../../assets/icons/warning.svg";
import heart from "../../assets/icons/purple-heart.svg";
import "./styles.css";

    function Form() {
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
                                <Select label="Matéria" name="matter"/>
                                <Input label="Custo Hora/Aula" name="cost"/>
                        </fieldset>
                            <footer>
                                <p>
                                    <img src={ warning } alt="Warning"/>
                                        Importante! <br/>
                                        Preencha todos os dados
                                </p>
                                    <button type="button">
                                        <img src={ heart } alt="Save"/>
                                        Salvar cadastro
                                    </button>
                            </footer>
                    </main>
            </div>
        );
    };

        export default Form;