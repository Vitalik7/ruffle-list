let btn = document.getElementById('create')
let video = document.getElementById('video')

const all = ['Віталік Лавренко', 'Віталік Лавренко', 'Віталік Лавренко', 'Віталік Лавренко', 'Віталік Лавренко', 'Віталік Лавренко', 'Віталік Лавренко', 'Віталік Лавренко', 'Віталік Лавренко', 'Віталік Лавренко', 'Віталік Лавренко', 'Віталік Лавренко'] 

const all1 = ['Віталік Лавренко', 'Віталік Лавренко', 'Віталік Лавренко', 'Віталік Лавренко'] 
const all2= ['Віталік Лавренко', 'Віталік Лавренко', 'Віталік Лавренко', 'Віталік Лавренко'] 
const all3 = ['Віталік Лавренко', 'Віталік Лавренко', 'Віталік Лавренко', 'Віталік Лавренко'] 


const allList = document.getElementById('table')
const group1 = document.getElementById('table1')
const group2 = document.getElementById('table2')
const group3 = document.getElementById('table3')

all.forEach((project, i) => {
  const liEl = document.createElement('li')
  liEl.className = 'table-row'
  liEl.id = `m${i}`
  liEl.innerText = `${project} - ${i}`

  allList.appendChild(liEl)
})

all1.forEach((project, i) => {
  const liEl = document.createElement('li')
  liEl.className = 'table-row group1'
  liEl.id = `p${i}`
  liEl.innerText = `${project} - ${i}`
  group1.appendChild(liEl)
})

all2.forEach((project, i) => {
  const liEl = document.createElement('li')
  liEl.className = 'table-row group2'

  const ind = all1.length + i
  liEl.id = `p${ind}`
  liEl.innerText = `${project} - ${ind}`
  group2.appendChild(liEl)
})

all3.forEach((project, i) => {
  const liEl = document.createElement('li')
  liEl.className = 'table-row group3'
  const ind = all1.length + all2.length + i
  liEl.id = `p${ind}`
  liEl.innerText = `${project} - ${ind}`
  group3.appendChild(liEl)
})

btn.onclick = () => {
  let arr = [...Array(12).keys()]
  video.style.display = 'block'
  video.play()

  var interval = 1000
  setTimeout(() => {
    video.style.display = 'none'

    arr.forEach(function (el, i) {
      setTimeout(function () {
        const el = document.getElementById(`m${i}`)
        if (el) {
          el.style.display = 'none'
          el.style.transition = `opacity ${1}s linear`
        }
        const item = document.getElementById(`p${i}`)
        if (item) {
          item.style.display = 'flex'
          setTimeout(() => {
            item.style.transform = i > 4 ? 'translateY(0vh)' : 'translateX(0vw)'
            item.style.transition = `${2}s`
          }, 200)
        }
      }, i * interval);
    });
  }, 5000);
}