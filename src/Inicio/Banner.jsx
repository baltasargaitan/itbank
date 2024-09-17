import React from 'react';
import { useDinero } from '../Cuentas/DineroContext'; 

function Accounts() {
  const { dinero } = useDinero(); 

  return (
    <div className="accounts">
        <div>
            <h1>Saldo disponible:  {dinero}</h1> 
        </div>
    </div>
  );
}

export default Accounts;

