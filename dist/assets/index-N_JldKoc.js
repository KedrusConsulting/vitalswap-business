import{c as p,a as r,F as u,I as o}from"./index-CrB6E3Jp.js";import{v as h}from"./vitalswap-logo2-D0-XlAVd.js";import{u as g}from"./user-3-CVuZ4EQJ.js";import{a as s,j as e,L as l}from"./index-B6cLTBcH.js";const N=()=>{const t={email:"",password:""},c=p().shape({email:r().email().required(),password:r().required()});return s("div",{className:"signup",children:[e("div",{className:"signup__left",children:s("div",{className:"signup__content",children:[e("figure",{className:"signup__vs-logo",children:e("img",{src:h,alt:"Vitalswap logo"})}),e("h2",{className:"signup__title",children:"Make payments to businesses across the globe"}),e("p",{className:"signup__text",children:"The hassle to receive payment from Africa ends here. VitalSwap for business opens doors to new opportunities for cross border transactions between Africa and the world."}),s("blockquote",{className:"signup__testimonial",children:[e("p",{className:"signup__quote",children:"I had an amazing experience! My transaction was seamless when I initiated a transfer from my wallet, my bank account was credited within seconds. Kudos!"}),s("cite",{className:"signup__cite",children:[e("img",{src:g,alt:"User avatar"}),e("span",{children:"Justin Tochukwu"})]})]})]})}),e("div",{className:"signup__right",children:s("div",{className:"signup__group",children:[s("div",{className:"signup__header",children:[e("h1",{children:"Welcome Back!"}),s("p",{children:["Don't have an account? ",e(l,{to:"#",children:"Sign Up"})]})]}),e(u,{initialValues:t,validationSchema:c,onSubmit:async(a,{resetForm:i},n)=>{},children:({values:a,handleChange:i,handleSubmit:n,dirty:m,isSubmitting:d})=>s("form",{className:"signup__form",onSubmit:n,children:[e(o,{type:"email",name:"email",id:"email",label:"Email Address",placeholder:"example@example.com",value:a.email,onChange:i}),e(o,{type:"password",name:"password",id:"password",label:"Password",placeholder:"********",value:a.password,onChange:i}),e("button",{type:"submit",className:"btn btn--primary",disabled:!m,children:d?"Please wait...":"Login"})]})}),s("p",{className:"signup__forgot",children:["Forgot Password? ",e(l,{to:"#",children:"Recover"})]})]})})]})};export{N as default};