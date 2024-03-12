import React, { Component, useState } from "react";

const Home = () => {
   const [name, setName] = useState("Welcome");

   return (
      <div>
         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

         <h1>{name}</h1>
         <h2>{name}</h2>
         
         {name !== "junior" ? <h1>Bem vindo</h1> : <h2>tchau</h2>}

      </div>
   );
};

export default Home;
