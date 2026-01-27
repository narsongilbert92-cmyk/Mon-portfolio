

document.addEventListener ("DOMContentLoaded", () => {
    const sect = document.querySelectorAll("section");

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(Entry => {
            if(Entry.isIntersecting) {
                Entry.target.classList.add("visible");
            }
        });
    },
    {threshold : 0.2} );


sect.forEach(section => obs.observe(section));


const car = document.querySelectorAll(".card");

car.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";
    });
});


const profil = document.querySelector(".tof-trois img");

   if(profil) {
      profil.style.transition = "transform 0.4s ease";

      profil.addEventListener("mouseenter", () => {
        profil.style.transform = "scale(1.08)";
   });

       profil.addEventListener("mouseleave", () => {
        profil.style.transform = "scale(1)";
       });
   }


   const formulaire = document.querySelector(".special-form");

     if(formulaire) {
        formulaire.addEventListener("submit", (e) => {
            e.preventDefault();

            const put = formulaire.querySelectorAll("input, textarea");
            let valid = true;

            put.forEach (input =>{
                if(input.value.trim() === "") {
                 input.style.border ="2px solid red";
                  valid = false;
            }  else {
                    input.style.border = "none";
            }
        });

            if(valid) {
                alert("Message envoyé");
                 formulaire.reset();
            }
        });    
     }

    });   