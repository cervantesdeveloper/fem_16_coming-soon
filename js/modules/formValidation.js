function formValidation({form, input, loader, response}){
    const d = document;
    
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("hidden");
    input.insertAdjacentElement("afterend", $span);

    
    

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
            input.style = "border-color: var(--red)";
            $span.classList.remove("hidden");
            $span.classList.add("form__error");
            setTimeout(()=>{
                $span.classList.add("hidden");
                $span.classList.remove("form__error");
                input.style = "border-color: var(--blue-light)";
            }, 3000)
        }
    })
}

export default formValidation;