"use client";

const Products = ({ params }) => {
  console.log(params);

  return (
   
    <div>
    <h1>Project {params.id}</h1> <br />
    <br />
    All Routes
    {params.id.map((p) => (
      <li key={p}>{p}</li>
    ))}
  </div>
  );
};

export default Products;
