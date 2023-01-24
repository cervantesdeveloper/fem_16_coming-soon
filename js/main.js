import formValidation from "./modules/formValidation.js";

const d = document;

d.addEventListener("DOMContentLoaded", e=>{
 formValidation({
    form: d.querySelector(".form"),
    input: d.querySelector("input[type='email']"),
    loader: d.querySelector(".loader"),
    response: d.querySelector(".form__response")
 })
});