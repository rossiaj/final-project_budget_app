// following is added code
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
    // added code
    const Currency = () => {
        const { dispatch,remaining  } = useContext(AppContext);
        
        const [curr, setCurr] = useState('');

        const handleCurrChange = (event) => {
            setNewCurr(event.target.value);
    
    }    

    // end added code

const submitEvent = () => {

return (
    <div>
    
        <div className="input-curr " style={{ marginLeft: '2rem' }}>
                
              <select className="custom-select" id="currSelect01" onChange={(event) => setCurr(event.target.value)}>
                    <option defaultValue>£</option>
                    <option value="$" name="dollar"> $ Dollar</option>
            <option value="£" name="pound">£ Pound</option>
            <option value="€" name="euro"> € Euro</option>
            <option value="₹" name="ruppee"> ₹ Ruppee</option>
              </select>

            </div>
        

    </div>
);
};

export default Currency;