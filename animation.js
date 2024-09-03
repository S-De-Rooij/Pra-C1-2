const sections = document.querySelectorAll('.sect')
const navlinks = document.querySelectorAll('.nav nav a')
const squares = document.querySelectorAll('.load-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('load-in-animation');
        return;
      }
  
      entry.target.classList.remove('load-in-animation');
    });
  });

    window.onscroll = () =>{
    console.log("Scroll: " + window.scrollY)

    sections.forEach(sec =>{
      let scroll = window.scrollY;
      let id = sec.getAttribute('id')
      let offset = document.getElementById(id).offsetTop;
      let height = document.getElementById(id).scrollHeight;
      let rect = document.getElementById(id).getBoundingClientRect();

      //console.log(`id:${id} height: ${height} rect-top: ${rect.top + scroll}`)

      if(scroll > offset - height){

        navlinks.forEach(link => {
           link.classList.remove('active')
           document.querySelector('.nav nav a[href*='+ id +']').classList.add('active')
         })

      }
    })

    console.log(closest);
  }
  squares.forEach((square) => observer.observe(square));


