import React, { useState } from 'react';
import '../styles/Home.css'; // Import CSS for styling

function Home() {
  const [data, setData] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', dob: '1990-01-01', phone: '123-456-7890', email: 'john@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', dob: '1995-05-15', phone: '987-654-3210', email: 'jane@example.com' },
    { id: 1, firstName: 'John', lastName: 'Doe', dob: '1990-01-01', phone: '123-456-7890', email: 'john@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', dob: '1995-05-15', phone: '987-654-3210', email: 'jane@example.com' }
  ]);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Delete</th>
            <th>See More</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.dob}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
              <td><button>More</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
