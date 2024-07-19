import Image from "next/image";
import styles from "./page.module.css";
import MyComponent from "@/components/my-component";
import { Button } from 'primereact/button';

export default function Home() {
  return (
    <>
     <div className="card flex justify-content-center">
            <Button label="Check" icon="pi pi-check" />
            <Button label="Check" icon="pi pi-check" />
            <Button label="Check" icon="pi pi-check" />
            <Button label="Check" icon="pi pi-check" />
        </div>
    <MyComponent underline={true} text='hola mundo' />
    <MyComponent underline={true} text='hola mundo 2' />
    <MyComponent underline={true} text='hola mundo 3' />
    <MyComponent underline={true} text='hola mundo 4' />
    <MyComponent underline={true} text='hola mundo 5' />
    <MyComponent underline={true} text='hola mundo 6' />
    </>
  );
}
