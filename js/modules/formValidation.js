function formValidation({form, input, loader, response}){
    const d = document;
    
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("hidden");
    input.insertAdjacentElement("afterend", $span);
    form.setAttribute("novalidate", "");

    
    

    d.addEventListener("submit", e=>{
        e.preventDefault();
        
        let pattern = input.pattern,
            regex = new RegExp(pattern);

        if(!input.value){
            $span.textContent = "Whoops! It looks like you forgot to add your email";
            $span.classList.remove("hidden");
            $span.classList.add("form__error");
            input.style = "border-color: var(--red)";
            setTimeout(()=>{
                $span.classList.add("hidden");
                $span.classList.remove("form__error");
                input.style = "border-color: var(--blue-light)";
            }, 3000)
        } else if (!regex.exec(input.value)){
            $span.textContent = "Please provide a valid email address";
            input.style = "border-color: var(--red)";
            $span.classList.remove("hidden");
            $span.classList.add("form__error");
            setTimeout(()=>{
                $span.classList.add("hidden");
                $span.classList.remove("form__error");
                input.style = "border-color: var(--blue-light)";
            }, 3000)
        } else{
            loader.parentNode.classList.remove("hidden");
            loader.parentNode.style = "display: flex";
            setTimeout(()=>{
                loader.classList.add("hidden");
                response.classList.remove("hidden");
                setTimeout(()=>{
                    loader.parentNode.classList.add("hidden");
                    loader.parentNode.style = "display: none";
                    loader.classList.remove("hidden");
                    response.classList.add("hidden");
                    form.reset();
                }, 3000)
            }, 3000)
        }
    })
}

export default formValidation;