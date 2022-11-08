import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/Sidebar";
import About from "./components/About";
import Items from "./components/item/Items";
import AddItem from "./components/item/AddItem";
import EditItem from "./components/item/EditItem";

const fetchItems = async () => {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();
    console.log(data);
    return data;
}

const createItem = async (item) => {
  const res = await fetch("http://localhost:5000/items", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(item),
  });
  return await res.json();
};

const updateItem = async (item) => {
  const res = await fetch(`http://localhost:5000/items/${item.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(item),
  });
  return await res.json();
};

const eraseItem = async (id) => {
  await fetch(`http://localhost:5000/items/${id}`, {
    method: "DELETE",
  });
};

const App = () => {
    const [editedItem, setEditedItem] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(()=> {
        const getItems = async () => {
        const itemsFromServer = await fetchItems();
        setItems(itemsFromServer);
        };
        getItems()
    }, []);

    

    const addItem = async (item) => {
        const id = Math.floor(Math.random() * 1000) + 1;
        const newItem = { id, ...item };

        const createdItem = await createItem(newItem);
        setItems((prev) => [...prev, createdItem]);
    };


    const deleteItem = async (id) => {
        await eraseItem(id);
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const editItem = (item) => {
        setEditedItem(item);
    };

    const handleOnSave = async (updatedItem) => {
        const product = await updateItem(updatedItem);
        setItems((prev) =>
        prev.map((item) => (item.id === product.id ? product : item))
    );

  };
  return (
    <BrowserRouter>
      <div className="d-flex min-vh-100">
        <SideBar />
        <div className="container mx-5">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header title="Accueil" />
                  <About />
                </>
              }
            />
            <Route
              path="/catalogue"
              element={
                <>
                  <EditItem item={editedItem} onSave={handleOnSave} />
                  <Header title="Mes Produits" />
                  <AddItem onAdd={addItem} />
                  {items.length > 0 ? (
                    <Items
                      items={items}
                      onDelete={deleteItem}
                      onEdit={editItem}
                    />
                  ) : (
                    "Aucun produit à afficher"
                  )}
                </>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
