import Item from "./Item"

const Items = ({ items, onEdit, onDelete}) => {
    return(
        <table className="table mt-5">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col" className="pe-4">Nom</th>
                <th scope="col" className="pe-4">Catégorie</th>
                <th scope="col" className="pe-4">Description</th>
                <th scope="col" className="ps-3 pe-5">Prix</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {items.map((item)=>(
                    <Item key={item.id} item={item} onEdit={onEdit} onDelete={onDelete}/>
                ))}
            </tbody>
        </table>
    )
}

export default Items