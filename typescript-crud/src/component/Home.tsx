import { useEffect, useState } from 'react';
import { json } from 'stream/consumers';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import './Home.style.css';
import {  IProduct, PageEnum } from './Product.type';
import ProductList from './ProductList';

const Home = () => {
    const [productList, setProductList] = useState([] as IProduct[]);

    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [dataToEdit, setDataToEdit] = useState({} as IProduct);

    useEffect(() => {
       const listInString = window.localStorage.getItem("ProductList");
       if(listInString) {
           _setProductList(JSON.parse(listInString))
       }
    },[])

    const onAddProductClickHandler = () => {
        setShownPage(PageEnum.add)
    }
    
    const showListPage = () => {
        setShownPage(PageEnum.list);
    }

    const _setProductList = (list:IProduct[]) => {
        setProductList(list);
        window.localStorage.setItem("ProductList", JSON.stringify(list));
    }

    const addProduct = (data: IProduct) => {
        _setProductList([...productList,data]);
    }

    const deleteProduct = (data: IProduct) => {
        //to get index from array
        //splice that
        //update record
        const indexToDelete = productList.indexOf(data);
        const tempList = [...productList];

        tempList.splice(indexToDelete, 1);
        _setProductList(tempList);
    }

    const editProductData = (data:IProduct) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data)
    }

    const updateData = (data: IProduct) => {
        const filteredData = productList.filter(x => x.id === data.id)[0];
        const indexOfRecord = productList.indexOf(filteredData);
        const tempData = [...productList];
        tempData[indexOfRecord] = data;
        _setProductList(tempData)
    }
    return (
        <>
            <article className="article-header">
                <header>
                    <h1>Product List </h1>
                </header>
            </article>

            {/* Actual content */}
            <section className='section-content'>
                {shownPage === PageEnum.list && (
                    <>
                        <input type="button" value="Add Product" onClick={onAddProductClickHandler} className='add-product-btn' />
                        <ProductList list={productList} onDeleteClickHnd={deleteProduct} onEdit={editProductData}/>
                    </>
                )}

                {shownPage === PageEnum.add && <AddProduct onBackBtnClickHnd={showListPage} onSubmitClickHnd={addProduct} />}

                {shownPage === PageEnum.edit && <EditProduct data={dataToEdit} onBackBtnClickHnd={showListPage} onUpdateClickHnd={updateData} />}

            </section>
        </>
    )
}

export default Home