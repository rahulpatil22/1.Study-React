import { IProduct } from "./Product.type"
import { useState } from "react";
import "./ProductForm.style.css";

type Props = {
    data: IProduct;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd: (data:IProduct) => void
}

const EditProduct = (props: Props) => {
    const {data, onBackBtnClickHnd, onUpdateClickHnd} = props;

    const [title, setTitle] = useState(data.title);
    const [description, setDescription] = useState(data.description);

    const onTitleChangeHnd = (e: any) => {
        setTitle(e.target.value);
    }

    const onDescriptionChangeHnd = (e: any) => {
        setDescription(e.target.value);
    }

    const onSubmitBtnClickHdn = (e:any) => {
        e.preventDefault();
        const updatedData: IProduct = {
            id: data.id,
            title: title,
            description: description
        }
        onUpdateClickHnd(updatedData);
        onBackBtnClickHnd();
    }

    return (
        <div className='form-container'>
            <div>
                <h3>Add Products Form</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHdn}>
                <div>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={onTitleChangeHnd} />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" value={description} onChange={onDescriptionChangeHnd} />
                </div>
                <div>
                    <input type="button" value="Back" onClick={onBackBtnClickHnd} />
                    <input type="submit" value="Update Product" />
                </div>
            </form>
        </div>
    )
}

export default EditProduct