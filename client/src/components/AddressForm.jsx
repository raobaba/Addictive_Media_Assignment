import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AddressForm.css';

function AddressForm() {
  const [addresses, setAddresses] = useState([{ id: 1 }]);

  const handleAddAddress = () => {
    const newAddressId = addresses.length + 1;
    setAddresses([...addresses, { id: newAddressId }]);
  };

  const handleRemoveAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className='address-form-container'>
      <form action='' onSubmit={handleSubmit}>
      <h2>Enter Your Personal Details</h2>
        {addresses.map((address) => (
          <div key={address.id}>
            <label>Previous Address {address.id}</label>
            <div className='input-address'>
              <input type='text' name={`address${address.id}_1`} placeholder='Address line 1' />
              <input type='text' name={`address${address.id}_2`} placeholder='Address line 2' />
              <input type='text' name={`address${address.id}_3`} placeholder='Address line 3' />
            </div>
            {addresses.length > 1 && (
              <Link to='#' className='remove' onClick={() => handleRemoveAddress(address.id)}>
                Remove Address
              </Link>
            )}
          </div>
        ))}
        <div className='address-button'>
          <button type='submit'>Submit</button>
          <Link to='#' onClick={handleAddAddress}>Add Another Address</Link>
        </div>
      </form>
    </div>
  );
}

export default AddressForm;
