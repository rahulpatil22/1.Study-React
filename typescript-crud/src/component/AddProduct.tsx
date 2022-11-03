import { useState } from 'react';
import { IProduct } from './Product.type';
import './ProductForm.style.css';

type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd: (data: IProduct) => void;
}

const AddProduct = (props: Props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const { onBackBtnClickHnd, onSubmitClickHnd } = props

    const onTitleChangeHnd = (e: any) => {
        setTitle(e.target.value);
    }

    const onDescriptionChangeHnd = (e: any) => {
        setDescription(e.target.value);
    }

    const onSubmitBtnClickHdn = (e:any) => {
        e.preventDefault();
        const data: IProduct = {
            id: new Date().toJSON().toString(),
            title: title,
            description: description
        }
        onSubmitClickHnd(data);
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
                    <input type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    )
}

export default AddProduct