

const ViewCategoryComponent = ({ action, category, hideDialog }) => {
  // const deleteProduct = () => {
  //     let _products = products.filter((val) => val.id !== product.id);

  //     setProducts(_products);
  //     setDeleteProductDialog(false);
  //     setProduct(emptyProduct);
  //     toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
  // };
  return (
    <>
      {action}
      {JSON.stringify(category)}
      <h1>VIEW COMPONENT</h1>
    </>
  );
};

export default ViewCategoryComponent;