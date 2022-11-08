import { useEffect, useState } from "react";
import "bootstrap/js/dist/modal";

const EditItem = ({ item, onSave }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categorie, setCategorie] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (item) {
      setName(item.name);
      setDescription(item.description);
      setCategorie(item.categorie);
      setPrice(item.price);
    }
  }, [item]);

  const handleSaveClick = () => {
    onSave({
      id: item.id,
      name,
      description,
      categorie,
      price,
    });
  };

  return (
    <div id="editModal" className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modification</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <input
                className="form-control form-control-sm"
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                className="form-control form-control-sm align-text-top"
                type="text"
                placeholder="Catégorie"
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
                required
              />

              <textarea
                className="form-control form-control-sm"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>

              <input
                className="form-control form-control-sm"
                type="number"
                placeholder="Prix"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClickCapture={handleSaveClick}
              data-bs-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
