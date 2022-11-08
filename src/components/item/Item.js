
const Item = ({ item, onDelete, onEdit }) => {
    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.categorie}</td>
            <td>{item.description}</td>
            <td className="text-nowrap ps-3">{item.price} $</td>
            <td className="align-middle">
                <div className="d-flex justify-content-end align-items-center">
                    <button className="btn btn-outline-primary me-2" onClick={() => onEdit(item)} data-bs-toggle="modal" data-bs-target="#editModal"><i className="bi bi-pencil-fill"></i></button> 
                    <button className="btn btn-outline-danger" onClick={() => onDelete(item.id)}><i className="bi bi-trash-fill"></i></button> 
                </div>
            </td>
        </tr>
    )
}

export default Item