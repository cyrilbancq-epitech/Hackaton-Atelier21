import React from 'react';
import './AdminLogin.scss';

export default function AdminLogin() {
    return (
        <div className="admin-login">
            <form className="login">
                <input type="text" placeholder="Utilisateur" />
                <input type="password" placeholder="Mot de passe" />
                <button>Connexion</button>
            </form>
        </div>
    )
}