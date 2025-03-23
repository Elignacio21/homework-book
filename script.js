document.addEventListener("DOMContentLoaded",(e) =>{
    const $buttonPost = document.querySelector(".post")
    const $form = document.querySelector(".myform")
    const $container = document.querySelector(".container")
    const $input = document.querySelector(".entrada")
    $buttonPost.addEventListener("click",(e) =>{
        let valor = $input.value
        e.preventDefault()
        
        const $parrafo = document.createElement("p")
        $parrafo.textContent ="-"+ valor
        const $buttonDelete = document.createElement("button")
        $buttonDelete.textContent = "Eliminar"
        
        $container.appendChild($parrafo)
        $parrafo.appendChild($buttonDelete)
        $input.value = " "
        
        $buttonDelete.addEventListener("click",(e) =>{
            $container.removeChild($parrafo)
        })
        
    })
} )