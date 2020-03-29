import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api'




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    
    const history = useHistory();

    async function handleRegeister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        }

        try { 
            const response = await api.post('ongs', data);
            
            alert(`Seu ID de acesso: ${response.data.id}, Sua key de acesso: ${response.data.key}. Guarde-os bem.`);

            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente');
        }
    }


    return (
        <div className="register-conteiner">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Faça seu cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Retornar
                    </Link>
                </section>

                <form onSubmit={handleRegeister}>
                    <input 
                      placeholder="Nome da ONG"
                      value={name}
                      onChange={e => setName(e.target.value)}  
                    />

                    <input 
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={e => setEmail(e.target.value)}  
                    />
                    <input
                      placeholder="Whatsapp (Começando com 55 + ddd)"
                      value={whatsapp}
                      onChange={e => setWhatsapp(e.target.value)}  
                    />

                    <div className="input-group">
                        <input
                          placeholder="Cidade"
                          value={city}
                          onChange={e => setCity(e.target.value)}  
                        />
                        <input
                          placeholder="UF"
                          style={{ width: 80 }}
                          value={uf}
                          onChange={e => setUf(e.target.value)}  
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}