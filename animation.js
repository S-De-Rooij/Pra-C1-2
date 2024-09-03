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
  
  // window.onscroll = () =>{
  //   sections.forEach(sec =>{
  //     let top = window.scrollY;
  //     let id = sec.getAttribute('id')

  //     let height = document.getElementById(id)

  //     if(top >= offset && top < offset + height){
  //       navlinks.forEach(link => {
  //         link.classList.remove('active')
  //         document.querySelector('.nav nav a[href*='+ id +']').classList.add('active')
  //       })
  //     }
  //   })

  // }
  window.onscroll = () =>{
    let closest;
    console.log("Scroll: " + window.scrollY)

    sections.forEach(sec =>{
      let scroll = window.scrollY;
      let id = sec.getAttribute('id')
      let height = document.getElementById(id).scrollHeight;
      let rect = document.getElementById(id).getBoundingClientRect();
      

      // var rect = element.getBoundingClientRect();
      // console.log(rect.top, rect.right, rect.bottom, rect.left);
      console.log(`id:${id} height: ${height} rect-top: ${rect.top + scroll}`)


      if(scroll > rect.top - scroll + height *3){
        closest = id;
      }

      if(scroll <= 1 || closest == null){
        closest = "home";
      }
      navlinks.forEach(link => {
        link.classList.remove('active')
        document.querySelector('.nav nav a[href*='+ closest +']').classList.add('active')
      })
    })
  }

  console.log("Scroll: " + window.scrollY)
  squares.forEach((square) => observer.observe(square));


