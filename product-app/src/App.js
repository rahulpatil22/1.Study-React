import React from 'react';
import "./App.css";
import { db } from "./firebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";
import productData from './product';

function App() {
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");

  const handleProductChange = (e) => {
    setProduct(e.target.value);
  };

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setProducts([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((product) => {
          setProducts((oldArray) => [...oldArray, product]);
        });
      }
    });
  }, []);

  //write
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      product,
      uuid,
    });

    setProduct("");
  };

  //update
  const handleUpdate = (product) => {
    setIsEdit(true);
    setTempUuid(product.uuid);
    setProduct(product.product);
  };

  const handleSubmitChange = () => {
    update(ref(db, `/${tempUuid}`), {
      product,
      uuid: tempUuid,
    });

    setProduct("");
    setIsEdit(false);
  };

  //delete
  const handleDelete = (product) => {
    remove(ref(db, `/${product.uuid}`));
  };

  return (
    <div className="App">
      <input type="text" value={product} onChange={handleProductChange} />
      {isEdit ? (
        <>
          <button onClick={handleSubmitChange}>Submit Change</button>
          <button
            onClick={() => {
              setIsEdit(false);
              setProduct("");
            }}
          >
            X
          </button>
        </>
      ) : (
        <button onClick={writeToDatabase}>submit</button>
      )}
      {products.map((product) => (
        <>
          <h1>{product.product}</h1>
          <button onClick={() => handleUpdate(product)}>update</button>
          <button onClick={() => handleDelete(product)}>delete</button>
        </>
      ))}
    </div>
  );
}

export default App;