import { IProduct } from "./Product.type";
import "./ProductModal.style.css";

type Props = {
    onClose: () => void;
    data: IProduct
}

const ProductModal = (props: Props) => {
    const {onClose, data} = props;
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div>
                    <h3>Product Data</h3>
                    <div>
                        <div>
                            <label htmlFor="">Title: {data.title}</label>
                        </div>
                        <div>
                            <label htmlFor="">Description: {data.description}</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductModal