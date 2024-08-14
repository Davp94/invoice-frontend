'use client';

import { findAllProducts } from "../service/product.service";
import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { InputNumber,InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { ProductDto } from "../method/product.dto";
import { Action } from "@/common/enum/action.enum";
// import FormProductComponent from "./form-product.component";
let emptyProduct: ProductDto = {
    pro_id: 0,
    pro_stock: 0,
    pro_name: '',
    pro_price: 0,
    category: null,
 };

//PROP DRILING
const TableProductComponent = ({ }) => {
    const [products, setProducts] = useState<ProductDto[]>();
    const [action, setAction] = useState<number>(0);
    const [productDialog, setProductDialog] = useState<boolean>(false);
    const [product, setProduct] = useState<ProductDto>(emptyProduct);
    const [globalFilter, setGlobalFilter] = useState<string>('');
    const [lazyState, setlazyState] = useState<LazyTableState>({
        first: 0,
        rows: 10,
        page: 1,
        sortField: '',
        sortOrder: 0,
    });
    const toast = useRef<Toast>(null);
    const initComponent = async () => {
      const response = await findAllProducts();
      setProducts(response);
    }

    const loadLazyData = () => {

        //imitate delay of a backend call
        networkTimeout = setTimeout(() => {
            CustomerService.getCustomers({ lazyEvent: JSON.stringify(lazyState) }).then((data) => {
                setTotalRecords(data.totalRecords);
                setProducts(products);
            });
        }, Math.random() * 1000 + 250);
    };

    const onPage = (event: DataTablePageEvent) => {
        setlazyState(event);
    };

    const onSort = (event: DataTableSortEvent) => {
        setlazyState(event);
    };

    const onFilter = (event: DataTableFilterEvent) => {
        event['first'] = 0;
        setlazyState(event);
    };
    
    useEffect(() => {
      loadLazyData();
    }, [lazyState])
 
     const openDialog = (action: Action, rowData: ProductDto | null) => {
         setProduct(rowData);
         setAction(action);
         setProductDialog(true);
     };
 
     const hideDialog = async (submitted: boolean = false) => {
         setProductDialog(false);
         if(submitted){
            await initComponent();
         }
     };
 
     const startToolbarTemplate = () => {
         return (
             <div className="flex flex-wrap gap-2">
                 <Button label="New" icon="pi pi-plus" severity="success" onClick={() => openDialog(Action.CREATE, null)} />
             </div>
         );
     };
 
     const endToolbarTemplate = () => {
         return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={() => alert('exporting file')} />;
     };
 
 
     const actionBodyTemplate = (rowData: ProductDto) => {
         return (
             <div className="flex gap-2">
                 <Button icon="pi pi-eye" rounded outlined severity="info" onClick={() => openDialog(Action.VIEW, rowData)} />
                 <Button icon="pi pi-pencil" rounded outlined severity="warning" onClick={() => openDialog(Action.UPDATE, rowData)} />
                 <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => openDialog(Action.DELETE, rowData)} />
             </div>
         );
     };
 
     const header = (
         <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
             <h4 className="m-0">Manage Products</h4>
             <IconField iconPosition="left">
                 <InputIcon className="pi pi-search" />
                  <InputText type="search" placeholder="Search..." onInput={(e) => {const target = e.target as HTMLInputElement; setGlobalFilter(target.value);}}  />
             </IconField>
         </div>
     );
  
    return (
        <div>
        <Toast ref={toast} />
        <div className="card">
            <Toolbar className="mb-4" start={startToolbarTemplate} end={endToolbarTemplate}></Toolbar>

            <DataTable value={products}
                    dataKey="id"  paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} categories" globalFilter={globalFilter} header={header}
            >
                <Column field="pro_id" header="Id" sortable></Column>
                <Column field="pro_name" header="Name" sortable></Column>
                <Column field="pro_stock" header="Stock"></Column>
                <Column field="pro_price" header="Price"></Column>
                <Column field="category.cat_name" header="Category"></Column>
                <Column header="Action" body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
            </DataTable>
        </div>

        <Dialog visible={productDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Product Operation" modal className="p-fluid" onHide={hideDialog}>
            {(() => {
                switch(action){
                    case Action.CREATE:
                    case Action.UPDATE:
                            // return <FormProductComponent category={category} action={action} hideDialog={hideDialog} toast={toast} />
                            return <div>Operation form</div>
                    case Action.DELETE:
                    case Action.VIEW:
                        //    return <ViewProductComponent category={category} action={action} hideDialog={hideDialog} toast={toast}/>
                           return <div>Operation view</div>
                    default: 
                        return <div>Operation dont allowed</div>
                }
            })()}
        </Dialog>
    </div>
    );
};

export default TableProductComponent;