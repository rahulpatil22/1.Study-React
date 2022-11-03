import { useState } from 'react';
import { IProduct } from './Product.type';
import './ProductList.style.css';
import ProductModal from './ProductModal';

type Props = {
    list: IProduct[];
    onDeleteClickHnd: (data: IProduct) => void;
    onEdit: (data: IProduct) => void;
}

const ProductList = (props: Props) => {

    const { list, onDeleteClickHnd, onEdit } = props;

    const [showModal,setShowModal] = useState(false);
    const [dataToShow,setDataToShow] = useState(null as IProduct | null);

    const viewProduct = (data: IProduct) => {
        setDataToShow(data);
        setShowModal(true);
    }

    const onCloseModal = () => {
        setShowModal(false)
    }

    return (
        <div>
            <article>
                <h3 className='list-header'>Product List</h3>
            </article>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                {list.map(product => {
                    console.log(product);
                    return (
                        <tr key={product.id}>
                            <td>{`${product.title}`}</td>
                            <td>{`${product.description}`}</td>
                            <td>
                                <div>
                                    <input type="button" value="View" onClick={() => viewProduct(product)} />
                                    <input type="button" value="Edit" onClick={() => onEdit(product)} />
                                    <input type="button" value="Delete" onClick={() => onDeleteClickHnd(product)} />
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </table>
            {showModal && dataToShow !== null && (<ProductModal onClose={onCloseModal} data={dataToShow} />)}
        </div>
    )
}

export default ProductList