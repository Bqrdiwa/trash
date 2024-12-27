const wrapper = document.querySelector(".wrapper");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const range = 40;


const cards = document.querySelectorAll(".card");

const collab_details = {
  'Soheil':{
    name: 'Soheil',
    image: 'assets/soheil.jpg',
    video:"assets/soheil-vid.mp4",
    heading: "Project Manager",
    detail: `I have organized the project by coordinating team members' tasks and collaboration using Trello 📋, ensuring clear assignments ✅, deadlines ⏰, and effective communication 📞 for smooth progress.`,
    button: "Trello",
    telegram : "@soheil_basirat",
    link: "https://trello.com/b/l9unqQak/website-design-project"
  },
  "Taha": {
    name: "Taha",
    video:"assets/taha-vid.mp4",
    image: 'assets/taha.jpg',
    heading: "Script Writer",
    detail :"I coded the script.bat file for the project 💻. Simply click on the script file to magically change the website's behavior ✨.",
    button: "Script",
    link: "magic.bat",
    telegram: '@Twopi_user'
  },
  "Ilia": {
    name: "Ilia",
    video: "assets/ilia-vid.mp4",
    image: 'assets/ilia.jpg',
    heading: "Ui Designer",
    detail: "I designed the UI concepts and managed the website components, ensuring a cohesive black and white theme. 🎨💻",
    link: "UI",
    telegram: "@ILIASADGHI"
  },
  'Bardia':{
    name: 'Bardia',
    image: 'assets/bardia.jpg',
    video:"assets/bardia-vid.mp4",
    heading: "Website Design",
    detail: `I have designed and developed the website by crafting the layout and structure with HTML 🖥️, styling it using CSS 🎨, and adding interactive elements through JavaScript ⚡. This process ensured a responsive, visually appealing, and user-friendly experience across all devices.`,
    telegram : "@bqrdiwa"
  },
  'Mahan':{
    name: 'Mahan',
    image: 'assets/mahan.jpg',
    video:"assets/mahan-vid.mp4",
    heading: "Video Creator",
    detail: `I created engaging videos 🎥 by collaborating with the project team 🤝, gathering footage 📹, and ensuring the final edit reflected the project's vision. I organized and incorporated all necessary content, ensuring a polished and cohesive final product.`,
    telegram : "@Mahan_ebr"
  },
  'Sadra':{
    name: 'Sadra',
    image: 'assets/sadra.jpg',
    video:"assets/sadra-vid.mp4",
    heading: "Word",
    detail: `I created and managed a Word document 📄 to track team members' tasks ✅, deadlines ⏰, and proof of completed work 📝, ensuring accountability and transparency throughout the project.`,
    telegram : "@Sadra_ab0"
  },
}

let videos = []


const videoEnd = (event) => {
  const stageId = wrapper.getAttribute('stage')
  console.log(stageId)
  if(stageId === "1"){
    const stage = document.querySelector(".collab-wrapper")
    console.log(event.target.getAttribute("image"))
    var image = document.createElement("img");
    image.style.height = "100%"
    image.id= 'image'
    image.src = event.target.getAttribute("image"); 
    event.target.parentNode.replaceChild(image,event.target)
    videos =[]
  }
}

const changeStage = (to) => {
  let after = 0
  videos.forEach(video=>{
    const videoElement = document.getElementById(video)
    videoElement.pause()
    videoElement.removeEventListener('ended', videoEnd)
  })
  const stageId = wrapper.getAttribute('stage')
  const stage = document.getElementById(`stage-${stageId}`)

  switch (stageId) {
    case "0":
      after = 100*(cards.length)
      stage.classList.add("fadeToBottom")


      
      break
    default:
      document.querySelector(".collab-wrapper").classList.add("fadeToLeft")
      after = 500
      break 
  }
  setTimeout(()=>{
    const data = collab_details[to]
    stage.classList.remove("fadeToBottom")
    stage.classList.add('vanish')
    switch (stageId) {
      case "0":
        document.getElementById('stage-1').classList.remove('vanish')
        wrapper.setAttribute("stage",'1')
        let video = document.getElementById("video")
        if(!video){
          const img = document.getElementById("image")
          video = document.createElement('video')
          video.id = "video"
          img.parentNode.replaceChild(video, img)
        } 
        video.setAttribute('image', data.image)
        video.innerHTML = `
         <source src="${data.video}" type="video/mp4">
        `
        video.load()
        video.play()
        video.addEventListener('ended',videoEnd)
        videos.push("video")
        document.getElementById('c-name').innerText = data.name
        document.getElementById('wtd').innerText = data.heading
        document.getElementById('detail').innerText = data.detail
        const btn = document.getElementById('btn')
        btn.style.display="block"
        if(data.button){
              btn.innerText = data.button
                  }else{
                    console.log(data.button)
          btn.style.display="none"
        }
 
       
        document.getElementById("telegram").innerText = data.telegram

        break
      default:
        document.getElementById('stage-1').classList.add('vanish')
        document.getElementById('stage-0').classList.remove('vanish')
        document.querySelector(".collab-wrapper").classList.remove("fadeToLeft")
        wrapper.setAttribute("stage",'0')

        break 
    }
    
    
  },after)


}

cards.forEach(card=>{
  card.addEventListener('click', ()=>{
    changeStage(card.getAttribute('name'))
  })
})

const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1);

let timeout;
document.addEventListener('mousemove', ({ x, y }) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }

  timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    wrapper.style.transform = `rotateX(${yValue/2}deg) rotateY(${xValue/2}deg)`;

    [].forEach.call(images, image => {
      image.style.transform = `translateX(${-xValue/2}px) translateY(${yValue/2}px)`;
    });

    [].forEach.call(backgrounds, background => {
      background.style.backgroundPosition = `${xValue * 2}px ${-yValue * 2}px`;
    });
  });
}, false);