

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
        "Alam kong ngayon, mga salita lang ito walang laman...",
        "Para sa’kin, ang mahalaga ay totoo at masaya ka.",
        "Pero balang araw, sisiguraduhin kong may laman at patunay ang lahat ng sinabi ko.",
        "Ako ‘to, si Arcee Santos at habang humihinga ako, hindi ako bibitaw sa mga salitang sinabi ko sa’yo.",
        "Congratulations, Maria 🫶👏🤍, For now, ito muna ang kaya kong ibigay sa’yo. Alam kong bawal pa tayong mag-meet kasi we’re both not ready yet, and that’s okay.Good luck sa journey na tatahakin mo, at sa lahat ng challenges na ibibigay sa’yo ni Lord, sana ma-embrace mo nang buong puso.If ever you need help or someone to talk to, you can always count on memessage mo lang ako.Again, congratulations! I hope all your dreams come true. Tiwala lang, padayon. Love yahhh — HAHAHA 😆",
        "At kung sakaling may makita kang ibang mas makakapagpasaya sa’yo, gusto ko maging honest ka lang sa’kin. Go for it, don’t mind me.",
        "Pangako, Hindi Salita🤍",
        "Nag-promise ako sa’yo na kapag naging successful ako, ipu-pursue kita gagawin ko ang lahat para tuparin ‘yon.",
        "Kapag dumating yung tamang panahon at okay na lahat, andito pa rin ako.",
        "Sa ngayon, gusto ko muna na mas makilala ka pa, at sana, hindi ka magsawa sa’kin sa pangungulit ko."
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
