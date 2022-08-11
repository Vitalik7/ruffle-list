let btn = document.getElementById('create')
let video = document.getElementById('video')
let members = document.getElementById('memb')

const a = ['Вознюк Альона',
'Дзюба Катя',
'Вишневська Анастасія',
'Коломієць Назар',
'Гладун Влад',
'Кравченко Назар',
'Кубрак Анна',
'Кравченко Веня',
'Тонкопряд Владислав',
'Кравченко Зоряна',
'Складанна Надія',
'Чернова Софія',
'Гладун Лілія',
'Коваленко Софія',
'Ямковий Дмитро',
'Богач Марія',
'Тищенко Юлія',
'Боковня Віка',
'Братко Анастасія',
'Пономаренко Софія',
'Білецький Андрій',
'Шаповал Владислав',
'Яковенко Дмитро',
'Ракітін Даниїл',
'Мащенко Поліна',
'Шраменко Марія',
'Крижанівська Лера',
'Онищенко Кароліна',
'Кодак Олександр',
'Швед Світлана',
'Івченко Нікіта',
'Кравченко Аріна',
]

const b = ['Кравченко Давид',
'Саприкіна Вікторія',
'Пацалюк Марк',
'Коломієць Ніка',
'Коваль Дарина',
'Драчук Каріна',
'Бунчук Давид',
'Білецька Надія',
'Карпова Катя',
'Гладун Надя',
'Чернець Олександра',
'Шраменко Артур',
'Пацалюк Кароліна',
'Лесич стефанія',
'Василенко Влад',
'Люлько Тамара',
'Мащенко Ліза',
'Костюк Василь',
'Озеран Катерина',
'Коломієць Тіма',
'Люлько Данило',
'Шевченко Назар',
'Кравченко Віка',
'Цегельник Юлія',
'Темченко Даніела',
'Бунчук Ангеліна',
'Грош Діана',
'Жовтоштан Микола',
'Гончарова Ліза',
'Жупанас Анатолій',
'Швед Анна',
]

const c = ['Чепурна Каріна',
'Дьоміна Анастасія',
'Мащенко Ярослав',
'Коваленко Дарія',
'Гладун Аня',
'Сотченко Ульяна',
'Квасніцький Ілля',
'Йосипенко Богдан',
'Приходько Маріна',
'Медик Аня',
'Шако Антон',
'Кравченко Аня',
'Коломієць Тіна',
'Вербівська Софія',
'Пащенко Глеб',
'Темченко Джесіка',
'Аня Стасьо',
'Сокуренко Наталія',
'Мусієнко Валерія',
'Пономаренко Софія',
'Кравченко Назар',
'Лавренко Владислав',
'Люлька Данило',
'Козлов Паша',
'Любченко Євангеліна',
'Казека Софія',
'Котенко Єва',
'Гапоненко Арсен',
'Пилипенко Каміла',
'Жабокирицький Ілля',
'Гасай Анна',
'Пилипенко Артем',
]



const all1 = shuffle(a)
const all2 = shuffle(c)
const all3 = shuffle(b)

const all = shuffle([...all1, ...all2, ...all3])

members.innerText = `Учасники - ${all.length}`

const allList = document.getElementById('table')
const group1 = document.getElementById('table1')
const group2 = document.getElementById('table2')
const group3 = document.getElementById('table3')

all.forEach((project, i) => {
  const liEl = document.createElement('li')
  liEl.className = 'table-row'
  liEl.id = `m${i}`
  liEl.innerText = `${project}`

  allList.appendChild(liEl)
})

all1.forEach((project, i) => {
  const liEl = document.createElement('li')
  liEl.className = 'table-row group1'
  liEl.id = `p${i}`
  liEl.innerText = `${project}`
  group1.appendChild(liEl)
})

all2.forEach((project, i) => {
  const liEl = document.createElement('li')
  liEl.className = 'table-row group2'

  const ind = all1.length + i
  liEl.id = `p${ind}`
  liEl.innerText = `${project}`
  group2.appendChild(liEl)
})

all3.forEach((project, i) => {
  const liEl = document.createElement('li')
  liEl.className = 'table-row group3'
  const ind = all1.length + all2.length + i
  liEl.id = `p${ind}`
  liEl.innerText = `${project}`
  group3.appendChild(liEl)
})

btn.onclick = () => {
  video.style.display = 'block'
  video.play()

  var interval = 1000
  setTimeout(() => {
    video.style.display = 'none'

    all.forEach(function (el, i) {
      setTimeout(function () {
        // const el = document.getElementById(`m${i}`)
        // if (el) {
        //   el.style.display = 'none'
        //   el.style.transition = `opacity ${1}s linear`
        // }
        const item = document.getElementById(`p${i}`)
        if (item) {
          item.style.display = 'block'
          setTimeout(() => {
            item.style.transform = i > 4 ? 'translateY(0vh)' : 'translateX(0vw)'
            item.style.transition = `${2}s`
          }, 200)
        }
      }, i * interval);
    });
  }, 6000);
}


let fullscreen = document.querySelector("body");
let button = document.getElementById("fullButton");

button.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    fullscreen?.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}