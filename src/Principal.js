import React from 'react';

const Principal = ({handleLogout}) => {
    return (
        <section className="hero">
            <nav>
                <h2>WELCOME</h2>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </nav>
        </section>
      );
}
 
export default Principal;
