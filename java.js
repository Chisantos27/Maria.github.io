

document.querySelectorAll('.flower-container').forEach(el => {
  el.innerHTML = `<div class="flower-top">
                  <div class="flower-petal flower-petal__1"></div>
                  <div class="flower-petal flower-petal__2"></div>
                  <div class="flower-petal flower-petal__3"></div>
                  <div class="flower-petal flower-petal__4"></div>
                  <div class="flower-petal flower-petal__5"></div>
                  <div class="flower-petal flower-petal__6"></div>
                  <div class="flower-petal flower-petal__7"></div>
                  <div class="flower-petal flower-petal__8"></div>
                  <div class="flower-circle"></div>
                  <div class="flower-light flower-light__1"></div>
                  <div class="flower-light flower-light__2"></div>
                  <div class="flower-light flower-light__3"></div>
                  <div class="flower-light flower-light__4"></div>
                  <div class="flower-light flower-light__5"></div>
                  <div class="flower-light flower-light__6"></div>
                  <div class="flower-light flower-light__7"></div>
                  <div class="flower-light flower-light__8"></div>
                  </div>

                  <div class="flower-bottom">
                  <div class="flower-stem"></div>
                  <div class="flower-leaf flower-leaf__1"></div>
                  <div class="flower-leaf flower-leaf__2"></div>
                  <div class="flower-leaf flower-leaf__3"></div>
                  <div class="flower-leaf flower-leaf__4"></div>
                  <div class="flower-leaf flower-leaf__5"></div>
                  <div class="flower-leaf flower-leaf__6"></div>

                  <div class="flower-grass flower-grass__1"></div>
                  <div class="flower-grass flower-grass__2"></div>
                  <div class="flower-grass flower-grass__3"></div>
                  <div class="flower-grass flower-grass__4"></div>
                  </div>`;
    });

    const flowers = Array.from(document.querySelectorAll('.flower-container'));
    const animatedClass = 'animate';
    
    flowers[0].classList.add(animatedClass);
    
    setTimeout(() => {
      for (let i = 1; i <= 2 && i < flowers.length; i++) {
        flowers[i].classList.add(animatedClass);
      }
    
      let remaining = flowers.slice(3); 
      const interval = setInterval(() => {
        if (remaining.length === 0) {
          clearInterval(interval);
          return;
        }
    
        const randomIndex = Math.floor(Math.random() * remaining.length);
        const el = remaining.splice(randomIndex, 1)[0]; 
        el.classList.add(animatedClass);
      }, 500);
    
    }, 3000);

    document.addEventListener("DOMContentLoaded", () => {
    // Messages for each flower
    const flowerMessages = [
        "Pero sana sa tamang panahon, kapag handa na lahat…",
        "Hindi mo naman kailangang maghintay.",
        "Doon ko maipapakita sa’yo yung totoo kong plano.",
        "Ako ’to si Chichay, tahimik man minsan, pero nandito pa rin. Hindi lahat kailangang madalas ipaalala, minsan mas maganda kapag sa tamang oras mo mararamdaman.",
        "Alam kong marami ka pang pagdadaanan at haharapin sa journey mo, at normal lang ‘yon. Gusto ko lang malaman mo na kahit hindi tayo madalas mag-usap, nandito lang ako. Kung kailangan mo ng makikinig o makakatulong kahit sa maliit na bagay, huwag kang mahihiya message mo lang ako.",
        "May mga bagay pa akong kailangang ayusin, kaya nagbigay ako ng panahon hindi para itali ka, kundi para ipakita sa’yo na seryoso ako sa mga sinabi ko.",
        "Napansin mo siguro na medyo bihira na ako mag-message ngayon.",
        "Hindi dahil nawalan ako ng gana, kundi ayokong maging istorbo o parang routine na lang ako sa’yo.",
        "Sinabi ko na dati, hindi pa ngayon yung oras para ipursue kita.",
        "Salamat sa mga pagkakataon na nag-open up ka sa’kin nitong mga araw na ‘to kahit sa laro lang tayo unang nagkakilala, mahalaga na ‘yon para sa’kin."
    ];

    const flowers = document.querySelectorAll('.flower-container');
    const hoverMessage = document.getElementById('hoverMessage');

    flowers.forEach((flower, index) => {
        flower.addEventListener('mousemove', (e) => {
            hoverMessage.style.display = 'block';
            hoverMessage.textContent = flowerMessages[index] || `Flower #${index + 1}`;
            hoverMessage.style.left = e.pageX + 10 + 'px';
            hoverMessage.style.top = e.pageY + 10 + 'px';
        });

        flower.addEventListener('mouseleave', () => {
            hoverMessage.style.display = 'none';
        });
    });
});

