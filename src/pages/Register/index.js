import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api.js';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }
        
        try {
            const response = await api.post('ongs', data)
            history.push('/');
            alert(`Seu ID de acess ${response.data.id}`);
        } catch (error) {
            alert('Erro no seu cadastro, tente novamente.');
        }
    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </section>

                <form >
                    <input 
                        placeholder="Nome da ONG"
                        valeu={name}
                        onChange={e => setName(e.target.value)}    
                    />

                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        valeu={email}
                        onChange={e => setEmail(e.target.value)}  
                    />
                    
                    <input 
                        placeholder="WhatsApp" 
                        valeu={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}  
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            valeu={city}
                            onChange={e => setCity(e.target.value)}  
                        />

                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }}
                            valeu={uf}
                            onChange={e => setUf(e.target.value)}  
                        />
                    </div>

                    <button className="button" type="submit" onClick={handleRegister}> Cadastrar </button>
                </form>
            </div>
        </div>

    );
}
