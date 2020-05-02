import React,{useState,useEffect} from 'react'
import {withFormik,Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
function PizzaForm(props) {
  console.log(props);
const [orders,setOrders]=useState([]);
useEffect(() => {
    props.status && setOrders(orders => [...orders, props.status]); //&&不理解
  }, [props.status]);
    return (
    <div>
        <Form>
        <label htmlFor='name'>Order Name</label>
        <Field  type ='text' name='name'/>
        {props.touched.name && <p>{props.errors.name}</p>}
        <label htmlFor='size'>select Size</label>
        <Field className='select' as = 'select' name='size'>
         <option />
         <option value="small">Small</option>
         <option value="medium">Medium</option>
         <option value="large">Large</option>
        </Field>
        {props.touched.size && <p>{props.errors.size}</p>}
        <span>Choice Sauce</span>
        <label htmlFor="original Red">
        <Field type="checkbox" name="originalRed"  value='original Red'/>
        original Red
        </label>
        <label htmlFor="Ranch">
        <Field type="checkbox" name="ranch"  value='Ranch'/>
        Ranch sauce
        </label>
        <label htmlFor="soy sauce">
        <Field type="checkbox" name="soysauce"  value='soy sauce'/>
        Soy sauce
        </label>
        <label htmlFor="bbq sauce">
        <Field type="checkbox" name="bbqsauce"  value='bbq sauce'/>
        BBQ sauce
        </label>
        <label htmlFor='instructions'>Fill your special instructions here</label>
        <Field  className='area'component='textarea' name='instructions' />
        <button>Sumbit</button>
        </Form>
        {orders.map(b=>{
            return(
            <div className='order' key={b.id}>
                <div>order name: {b.name}</div>
                <div>order size:{b.size}</div>
            <div>suace:{b.originalRed} {b.ranch} {b.soysauce} {b.bbqsauce}</div>
            <div>instructions:{b.instructions}</div>
            </div>)
        })}
    </div>
    )
};
const formikForm = withFormik({
    mapPropsToValues({name,size}){
        return{
            name:'',
            size:'',
            originalRed:'',
            ranch:'',
            soysauce:'',
            bbqsauce:'',
            instructions:''
         }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("name is required"),
        size: Yup.string().required("size is required")
      }),
    handleSubmit(values, { setStatus, resetForm }) {
       
        axios
          .post("https://reqres.in/api/users", values)
          .then(res => {
            console.log(res);
            setStatus(res.data);
            resetForm();
          })
          .catch(err => console.log("error!!"));
      } //handlesubmit&values系统自带
})(PizzaForm);
export default formikForm;
