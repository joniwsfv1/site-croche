function toggleMenu(){

    const menu = document.getElementById("menu");
    const btn = document.querySelector(".menu-btn");

    menu.classList.toggle("ativo");

    if(menu.classList.contains("ativo")){
        btn.innerHTML = "✕";
    }else{
        btn.innerHTML = "☰";
    }

}