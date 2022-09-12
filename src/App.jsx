import suppliers from "./data/suppliers";


function App() {
  let count = 1;
  return (
    <>
    <div className="container">
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Company Name</th>
          <th scope="col">Contact Name</th>
          <th scope="col">Contact Title</th>
          <th scope="col">Country/City</th>
          <th scope="col">Postal Code</th>
        </tr>
      </thead>
      <tbody>
        {suppliers.map((supplier)=>
          <tr>
            <th scope="row">{count++}</th>
            <td>{supplier.companyName}</td>
            <td>{supplier.contactName}</td>
            <td>{supplier.contactTitle}</td>
            <td style={{
            backgroundColor: supplier.address?.country?.toLocaleLowerCase()==="japan"? 'blue' : '#212529'
          }}>{supplier.address.country}/ {supplier.address.city}</td>
            <td>{supplier.address.postalCode}</td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
    </>
  );
}

export default App;
