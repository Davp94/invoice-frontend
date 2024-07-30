

const FormCategoryComponent = ({action, category, hideDialog}) => {

    // const saveProduct = () => {
    //     setSubmitted(true);

    //     if (product.name.trim()) {
    //         let _products = [...products];
    //         let _product = { ...product };

    //         if (product.id) {
    //             const index = findIndexById(product.id);

    //             _products[index] = _product;
    //             toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
    //         } else {
    //             _product.id = createId();
    //             _product.image = 'product-placeholder.svg';
    //             _products.push(_product);
    //             toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
    //         }

    //         setProducts(_products);
    //         setProductDialog(false);
    //         setProduct(emptyProduct);
    //     }
    // };
    // const editProduct = (product: Product) => {
    //     setProduct({ ...product });
    //     setProductDialog(true);
    // };
    // const productDialogFooter = (
    //     <React.Fragment>
    //         <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
    //         <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
    //     </React.Fragment>
    // );
    return (
        <>
            {action}
            {JSON.stringify(category)}
            <h1>FORM COMPONENT</h1>
        </>
    )
}

export default FormCategoryComponent;