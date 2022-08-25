import { useEffect, useState } from "react";
import { supabase } from "./../utils/supabaseClient";

export default function UserArea() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(supabase.auth.user());
    }, []);

    const handleLogout = async () => {
        try {
            const { error } = await supabase.auth.signOut();

            if (error) throw error;
            alert("Sesión cerrada");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Bienvenido {user.email}</p>
            {/* <p>{JSON.stringify(user)}</p> */}
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
}
