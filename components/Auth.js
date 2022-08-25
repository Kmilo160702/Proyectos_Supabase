import react from 'react';
import { supabase } from './../utils/supabaseClient';
import { useState } from 'react';

export default function Auth() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isSingUp, setIsSingUp] = useState(true);

    const handleSingUp = async () => {
        try {
            const { user, session, error } = await supabase.auth.signUp({
                email,
                password,
            })

            if (error) throw error
            alert("Revise su correo para activar su cuenta")
        } catch (e) {
            alert(e.message)
        }
    };

    const handleSingIn = async () => {
        try {
            const { user, session, error } = await supabase.auth.signIn({
                email,
                password,
            })

            if (error) throw error
            alert("Bienvenido")
        } catch (e) {
            alert(e.message)
        }
    };

    const changeForm = () => {
        setIsSingUp(value => !value)
    }

    return (
        <div>
            <h1>{isSingUp ? 'Resgistrarse' : 'Iniciar Sesión'}</h1>
            <div>
                <div className="">
                    <label htmlFor="">Correo</label>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="">
                    <label htmlFor="">Contraseña</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                {
                    isSingUp &&
                    <button onClick={handleSingUp}>Registrarse</button>
                }
                {
                    !isSingUp &&
                    <button onClick={handleSingIn}>Iniciar Sesión</button>
                }
                <a href='#' onClick={changeForm}>{isSingUp ? 'Iniciar Sesión' : 'Resgistrarse'}</a>
            </div>
        </div>
    );
}
