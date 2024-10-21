import{a as t,j as e,r as _,L as y,b as g}from"./index-D8Gisdep.js";import{c as b,a as r,F as N,I as h}from"./index-Byi6xUcd.js";import{v as w}from"./vitalswap-logo2-D0-XlAVd.js";import{u as v}from"./user-3-CVuZ4EQJ.js";function x({label:m,id:l,name:p,onChange:o,options:u,value:d,errorMessage:f}){return t("fieldset",{className:"inputfield__group",children:[e("label",{className:"inputfield__label",htmlFor:l,children:m}),e("select",{name:p,id:l,value:d,onChange:o,className:"inputfield__select",children:u.map((a,s)=>e("option",{value:a.value,children:a.label},s))})]})}function S({value:m,label:l,id:p,name:o,onChange:u,placeholder:d,errorMessage:f}){return t("fieldset",{className:"inputfield__group",children:[e("label",{className:"inputfield__label",htmlFor:p,children:l}),e("textarea",{name:o,id:p,value:m,onChange:u,className:"inputfield__description",placeholder:d})]})}function C(){const[m,l]=_.useState([{label:"Select Country",value:""}]),[p,o]=_.useState(!1),u={firstname:"",lastname:"",companyName:"",email:"",phone:"",countryOfBusiness:"",description:""},d=b().shape({firstname:r().required(),lastname:r().required(),companyName:r().required(),email:r().email().required(),phone:r().required(),countryOfBusiness:r().required(),description:r().required()}),f=async(a,{resetForm:s},c)=>{try{const i={first_name:a.firstname,last_name:a.lastname,company_name:a.companyName,email_address:a.email,email:a.email,phone_number:a.phone,business_description:a.description,country_of_Business:a.countryOfBusiness},n=await g.post("https://vitalswap.com/test/api_v2/users/webForm",i);n.status===200&&(await(c==null?void 0:c.setSubmitting(!1)),s(),o(!0),setInterval(()=>o(!1),1e4)),console.log(n)}catch(i){console.log(i)}};return _.useEffect(()=>{(async()=>{const i=(await g.get("https://restcountries.com/v2/all")).data.map(n=>({label:n.name,value:n.name}));l(n=>[...n,...i])})()},[]),t("div",{className:"signup",children:[e("div",{className:"signup__left",children:t("div",{className:"signup__content",children:[e("figure",{className:"signup__vs-logo",children:e("img",{src:w,alt:"Vitalswap logo"})}),e("h2",{className:"signup__title",children:"Make payments to businesses across the globe"}),e("p",{className:"signup__text",children:"The hassle to receive payment from Africa ends here. VitalSwap for business opens doors to new opportunities for cross border transactions between Africa and the world."}),t("blockquote",{className:"signup__testimonial",children:[e("p",{className:"signup__quote",children:"I had an amazing experience! My transaction was seamless when I initiated a transfer from my wallet, my bank account was credited within seconds. Kudos!"}),t("cite",{className:"signup__cite",children:[e("img",{src:v,alt:"User avatar"}),e("span",{children:"Justin Tochukwu"})]})]})]})}),e("div",{className:"signup__right",children:t("div",{className:"signup__group",children:[t("div",{className:"signup__header",children:[e("h1",{children:"Sign Up"}),t("p",{children:["Already have an account? ",e(y,{to:"#",children:"Login"})]})]}),e(N,{initialValues:u,validationSchema:d,onSubmit:f,children:({values:a,handleChange:s,handleSubmit:c,dirty:i,isSubmitting:n})=>t("form",{className:"signup__form",onSubmit:c,children:[t("div",{className:"signup__wrapper",children:[e(h,{type:"text",name:"firstname",id:"firstname",label:"First Name",placeholder:"John",value:a.firstname,onChange:s}),e(h,{type:"text",name:"lastname",id:"lastname",label:"Last Name",placeholder:"Adebayo",value:a.lastname,onChange:s})]}),e(h,{type:"text",name:"companyName",id:"companyName",label:"Company Name",placeholder:"VitalSwap",value:a.companyName,onChange:s}),e(h,{type:"email",name:"email",id:"email",label:"Email Address",placeholder:"example@example.com",value:a.email,onChange:s}),e(h,{type:"text",name:"phone",id:"phone",label:"Phone Number",placeholder:"+234 805 438 3489",value:a.phone,onChange:s}),e(x,{options:m,name:"countryOfBusiness",id:"countryOfBusiness",label:"Country of Business",value:a.countryOfBusiness,onChange:s}),e(S,{name:"description",id:"description",label:"Description of Business",value:a.description,placeholder:"Tell us about your business",onChange:s}),e("button",{type:"submit",className:"btn btn--primary",disabled:!i,children:n?"Please wait...":"Get Started"})]})})]})})]})}export{C as default};
