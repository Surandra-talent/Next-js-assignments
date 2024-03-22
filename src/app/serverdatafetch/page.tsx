async function fetchData() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await data.json();
    console.log(data);
    return data;
  }
  
  async function Page() {
    let products = await fetchData();
    console.log(products);
  
    return (
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
            </tr>
            
        </thead>
        <tbody>
        {products?.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.title}</td>
          </tr>
        ))}
        </tbody>
        
      </table>
    );
  }
  
  export default Page;
  