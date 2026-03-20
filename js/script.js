document.addEventListener("DOMContentLoaded", () => {
    // Animação do título
    const header = document.querySelector("header h1");
    let i = 0;
    const text = header.innerText;
    header.innerText = "";
    function typeWriter() {
        if(i < text.length){
            header.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }
    typeWriter();


const btnFotos = document.getElementById("btnFotos");
const inputFotos = document.getElementById("inputFotos");

btnFotos.addEventListener("click", () => {
    inputFotos.click(); // abre a galeria do celular
});

inputFotos.addEventListener("change", (event) => {
    const files = event.target.files;
    const galleryDiv = document.getElementById("gallery");
    galleryDiv.innerHTML = ""; // limpa fotos antigas

    Array.from(files).forEach((file, idx)=>{
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        if(idx===0) img.classList.add("active");
        galleryDiv.appendChild(img);
    });

    let currentIndex = 0;
    const galleryImages = document.querySelectorAll("#gallery img");

    document.getElementById("nextBtn").onclick = () => {
        galleryImages[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % galleryImages.length;
        galleryImages[currentIndex].classList.add("active");
    };

    document.getElementById("prevBtn").onclick = () => {
        galleryImages[currentIndex].classList.remove("active");
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        galleryImages[currentIndex].classList.add("active");
    };

    setInterval(() => {
        galleryImages[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % galleryImages.length;
        galleryImages[currentIndex].classList.add("active");
    }, 5000);
});

 // --- GALERIA DE FOTOS ---
    const inputFotos = document.getElementById("inputFotos");
    inputFotos.addEventListener("change", (event) => {
        const files = event.target.files;
        const galleryDiv = document.getElementById("gallery");
        galleryDiv.innerHTML = "";

        Array.from(files).forEach((file, idx)=>{
            const img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            if(idx === 0) img.classList.add("active");
            galleryDiv.appendChild(img);
        });

        let currentIndex = 0;
        const galleryImages = document.querySelectorAll("#gallery img");

        document.getElementById("nextBtn").onclick = () => {
            galleryImages[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % galleryImages.length;
            galleryImages[currentIndex].classList.add("active");
        };

        document.getElementById("prevBtn").onclick = () => {
            galleryImages[currentIndex].classList.remove("active");
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            galleryImages[currentIndex].classList.add("active");
        };

        setInterval(() => {
            galleryImages[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % galleryImages.length;
            galleryImages[currentIndex].classList.add("active");
        }, 5000);
    });

    // --- VÍDEOS ---
    const inputVideos = document.getElementById("inputVideos");
    inputVideos.addEventListener("change", (event) => {
        const files = event.target.files;
        const videosDiv = document.getElementById("videos");
        videosDiv.innerHTML = "";

        Array.from(files).forEach((file, idx)=>{
            const video = document.createElement("video");
            video.src = URL.createObjectURL(file);
            video.controls = true;
            if(idx===0) video.classList.add("active");
            videosDiv.appendChild(video);
        });
    });
});
