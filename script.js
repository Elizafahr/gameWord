const themes = { // объект с темами слов
	words: ['программа', 'катастофа', 'макака', 'прекрасный',
		'динозавр', 'компьютер', 'оладушек', 'индекс', 'школа',
		'интроверт', 'вертолёт', 'институт', 'природа', 'алфавит',
		'мумия', 'почемучка', 'верба', 'гомодрил', 'куратор', 'поле',
		'исполнитель', 'заказчик', 'альтернатива', 'кавычки', 'строка',
		'ноль', 'животноводство', 'абсолютный', 'август', 'авиакомпания',
		'авокадо', 'агентство', 'адмирал', 'азбука', 'айсберг',
		'аккордеон', 'актер', 'акула', 'алгебра', 'алименты', 'аллергия',
		'альтернатива', 'амбар', 'америка', 'амплуа', 'амфитеатр',
		'ананас', 'ангел', 'анекдот', 'анкета', 'антенна', 'аппарат',
		'апрель', 'арабский', 'арбат', 'арена', 'арифметика', 'армия',
		'аромат', 'артист', 'архив', 'ассортимент', 'астрономия',
		'ателье', 'атлас', 'атом', 'аудитория', 'бабочка', 'багажник',
		'базар', 'бакалея', 'балансир', 'балет', 'бампер', 'банан',
		'банкет', 'банкомат', 'баран', 'бассейн', 'батарея', 'батут',
		'башня', 'бегемот', 'бедро', 'бездна', 'безопасность', 'белка',
		'белок', 'бензин', 'берег', 'беседка', 'бетон', 'библиотека',
		'бизнес', 'билет', 'биллиард', 'бинокль', 'биология', 'биржа',
		'бисер', 'битва', 'бицепс', 'благодарность', 'блеск', 'блин',
		'блокнот', 'блюдо', 'бобр', 'богатство', 'бодрость', 'бокал',
		'болезнь', 'больница', 'бомба', 'борода', 'бортник', 'ботинки',
		'боулинг', 'бочка', 'брак', 'браслет', 'братство', 'бревно',
		'бригада', 'бритва', 'бродяга', 'брусника', 'будильник',
		'булавка', 'бумага', 'буран', 'бургер', 'бутерброд', 'бутылка',
		'бухгалтерия', 'бык', 'быстрота', 'вагон', 'валенок', 'ванна',
		'варенье', 'вата', 'вдохновение', 'ведро', 'велосипед',
		'вентилятор', 'веревка', 'вертолет', 'веселость', 'весло',
		'ветеринар', 'вечеринка', 'видеоигра', 'визитка', 'вино',
		'виноград', 'виски', 'витамин', 'вишня', 'вкус', 'внук', 'вода',
		'водитель', 'воздух', 'война', 'волк', 'волна', 'вольер',
		'вопрос', 'ворона', 'воскресенье', 'воспитание', 'врач', 'выборы',
		'выгода', 'выдача', 'выдержка', 'выживание', 'вызов', 'выигрыш',
		'выключатель', 'вынужденный', 'выпечка', 'выполнение',
		'выражение', 'выращивание', 'выручка', 'высказывание', 'выставка',
		'выстрел', 'гадание', 'газета', 'галерея', 'галстук', 'гарантия',
		'гастрономия', 'гвоздь', 'генератор', 'герой', 'гигант',
		'гимнастика', 'гипотеза', 'гитара', 'глава', 'глазок', 'глубина',
		'глянец', 'гнев', 'годовщина', 'головоломка', 'голосование',
		'гонка', 'гордость', 'горизонт', 'горох', 'госпиталь',
		'гостиница', 'готовность', 'градусник', 'грамота', 'гранат',
		'график', 'гребень', 'гречка', 'грибы', 'громкость', 'группа',
		'давление', 'дама', 'дача', 'дверь', 'двигатель', 'дворец',
		'девушка', 'дежурство', 'декорация', 'деловой', 'деньги',
		'дерево', 'десерт', 'детали', 'детство', 'джаз', 'джинсовые',
		'диалог', 'диван', 'диплом', 'директор', 'дискотека', 'длина',
		'дневник', 'доброта', 'доверие', 'дощдь', 'документ', 'долг',
		'домашний', 'дорога', 'доска', 'доставка',
		'достопримечательность', 'доход', 'дракон', 'дрель', 'друг',
		'духи', 'душа', 'евро', 'еда', 'ежедневник', 'езда', 'елка',
		'емкость', 'енот', 'ершик', 'жалюзи', 'жареный', 'желание',
		'железо', 'желток', 'жемчуг', 'женщина', 'животное', 'жизнь',
		'жир', 'житель', 'журнал', 'забор', 'завод', 'завтрак', 'загадка',
		'заголовок', 'задание', 'зажигалка', 'закат', 'закон', 'залог',
		'замена', 'замок', 'занавеска', 'занятость', 'запах', 'запись',
		'запрос', 'зарплата', 'заслуга', 'заснеженный', 'затмение',
		'защита', 'заявка', 'звезда', 'звонок', 'здание', 'здоровье',
		'зебра', 'зелень', 'земля', 'зеркало', 'зерно', 'зима',
		'знакомство', 'значение', 'золото', 'зона', 'игла', 'игрушка',
		'идея'
	],
  cities: ['москва', 'екатеринбург', 'казань', 'абаза', 'алапаевск',
  'алейск', 'белгородск', 'белозерск', 'береговое',
  'жлаговещенская', 'волгоград', 'выборг', 'ейск', 'евпатория',
  'железнозаводск', 'иркутск', 'керчь', 'кучугуры'
],
	animals: ['лев', 'тигр', 'обезьяна', 'слон', 'крокодил', 'змея',
		'жираф', 'кенгуру', 'пингвин', 'кит', 'дельфин', 'черепаха',
		'кролик', 'лиса', 'волк', 'медведь', 'енот', 'бобр', 'белка',
		'хомяк', 'крыса', 'кошка', 'собака', 'корова', 'лошадь', 'овца',
		'курица', 'утка', 'гусь', 'индюк', 'павлин', 'фламинго', 'страус',
		'аллигатор', 'жаба', 'лягушка', 'ящерица', 'комар', 'муха',
		'пчела', 'оса', 'клоп', 'таракан', 'муравей', 'паук', 'скорпион',
		'заяц', 'олень', 'лось', 'кабан', 'ежик', 'барсук', 'хорек',
		'бизон', 'антилопа', 'лама', 'верблюд', 'носорог', 'буйвол',
		'гепард', 'пантера', 'краб', 'каракатица', 'осьминог', 'креветка',
		'коралл', 'медуза', 'белуга', 'тюлень', 'бабочка', 'жук'
	],
	flowers: ['Роза', 'тюльпан', 'гвоздика', 'лилия', 'ирис', 'крокус',
		'нарцисс', 'фиалка', 'орхидея', 'гладиолус', 'герань', 'петуния',
		'астра', 'маргаритка', 'пион', 'ромашка', 'сирень', 'земляника',
		'малина', 'калина', 'черника', 'голубика', 'мак', 'космея',
		'лаванда', 'амарант', 'василек', 'георгина', 'дельфиниум',
		'календула', 'барвинок', 'клематис', 'камелия', 'настурция',
		'незабудка', 'кропива', 'ландыш', 'мимоза', 'дубрава', 'листопад',
		'ореховый дерево', 'каштан', 'клен', 'берёза', 'сосна', 'ель',
		'пихта', 'дуб', 'ясень', 'граб', 'липа', 'яблоня', 'вишня',
		'груша', 'слива', 'абрикос', 'персик', 'айва', 'фикус', 'пальма',
		'драцена', 'кротон', 'монстера', 'сансевиерия', 'алоэ',
		'эхеверия', 'каланхоэ', 'бегония', 'гиацинт', 'хризантема',
		'цикламен', 'гортензия', 'розмарин', 'тимьян', 'базилик',
		'орегано', 'мята', 'петрушка', 'укроп', 'кинза', 'сельдерей',
		'редиска', 'морковь', 'лук-порей', 'капуста', 'помидоры',
		'огурцы', 'перец', 'баклажаны'
	]
}
var res = {
  // Объект для хранения статистики
  win: 0,
  try: 10,
  fail: 0
}
let theme = ''
let word = ''
let paused = false
const imageContainer = document.querySelector('.image-container')
let guessedLetters = []
let res_win = document.getElementById('win')
let res_fail = document.getElementById('fail')
let res_try = document.getElementById('try')
let res_theme = document.getElementById('theme')
let motion = 10
let themeOutput
let firstletter
const resInput = document.getElementById('resInput')
const themeButton = document.getElementsByClassName('theme-button')
for (let i = 0; i < themeButton.length; i++) {
  addEvent(themeButton[i])
}
function addEvent (themeButton) {
  // Функция для добавления обработчика события на ячейку игрового поля
  themeButton.addEventListener('click', step)
  themeButton = document.getElementsByClassName('theme-button') //получаю данные пользователю буквы

  function step () {
    let start = document.querySelector('.start')
    start.style.display = 'none'
    const selectedTheme = this.getAttribute('myAtr') //значение нажатой клавиши
    theme = selectedTheme
    var container = document.querySelector('.container') //отображаем саму игру
    container.style.display = 'grid'
    switch (theme) {
      case 'animals':
        themeOutput = 'животные'
        break
      case 'cities':
        themeOutput = 'города'
        break
      case 'flowers':
        themeOutput = 'растения'
        break
      case 'words':
        themeOutput = 'не задана'
        break
    }
    res['theme'] = themeOutput
    res_theme.innerHTML = res['theme']

    firstletter = word[0]
    gameRestart()
  }
}

//функция скрытия кнопок выбора темы и перехода к игре
function show () {
  word = ' '
  let start = document.querySelector('.start')
  start.style.display = 'grid'
  let container = document.querySelector('.container') //отображаем саму игру
  container.style.display = 'none'
  motion = 10
  guessedLetters = [] //обнуляю все необходимое
  answerArray = []
}

function win () {  // добавляем анимацию хлопушек на страницу при выигрыше
  let pyro = document.getElementById('pyro')
  pyro.style.display= 'flex';
  setTimeout(function () {
  pyro.style.display = 'none'
  message.style.display = 'none'
  }, 1500) 
}


// Функция начала игры
function startGame () {
  let answerArray = [] // массив для хранения отгадываемого слова
  res['try'] = 10  
  for (let i = 0; i < word.length; i++) {//заполняем слово пробелами
    answerArray[i] = '_'
  }

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[0]) {    // Добавляю код для отображения совпадающих букв
      answerArray[i] = word[i]
    }
  }

  remainingLetters = word.length // количество оставшихся неотгаданных букв
  document.getElementById('w').value = answerArray.join(' ')

  //получаю данные пользователю буквы()
  const letters = document.getElementsByClassName('letter')
  for (let i = 0; i < letters.length; i++) {
    addEvent(letters[i])
    letters[i].style.backgroundColor = 'white'
  }

  // Функция для добавления обработчика события на ячейку игрового поля
  function addEvent (letters) {
    letters.addEventListener('click', step)
    letters = document.getElementsByClassName('letter') //получаю данные пользователю буквы
  }

  //отмечаю кнопки первой буквы в слове как отгаданные
  document.getElementById(`${word[0]}`).style.backgroundColor = '#BDFF00'

  function step () {
    if (!paused) {
      const id = this.getAttribute('myAtr') //значение нажатой клавиши
      const guess = id.toLowerCase()
      for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answerArray[j] = guess
          remainingLetters--
          isHit = true
          document.getElementById('w').value = answerArray.join(' ')
          this.style.backgroundColor = '#BDFF00'
          guessedLetters.push(guess)
        }
      }

      if (!word.includes(guess)) {
        if (!guessedLetters.includes(guess)) {
          this.style.backgroundColor = '#FF007A'
          imageContainer.children[0].src = `img/${11 - motion}.png`
          motion--
          res['try']--
          document.getElementById('try').innerHTML = res['try']
          guessedLetters.push(guess)
        }
      }
      if (word === answerArray.join('')) {
        paused = true
        res['win']++
        imageContainer.children[0].src = `img/winning.png`
        res_win.innerHTML = res['win'] // Обновляем статистику побед
        res_fail.innerHTML = res['fail']
        resInput.style.display ='grid'
        resInput.style.color= '#06ad00'
        resInput.value="Вы выиграли!!!!"
        for (let k = 0; k < letters.length; k++) {
          letters[k].style.backgroundColor = '#BDFF00' // зеленый фон для всех букв при выигрыше
        }
        win()
        word = ' '
      }
      if (motion === 0) {
        imageContainer.children[0].src = `img/${10}.png`
        paused = true
        res['fail']++
        document.getElementById('win').innerHTML = res['win'] // Обновляем статистику побед
        document.getElementById('fail').innerHTML = res['fail']
        document.getElementById('w').value = word
        resInput.style.display ='grid'
        resInput.style.color= '#FF007A'
        resInput.value="Вы проиграли((("

        for (let k = 0; k < letters.length; k++) {
          letters[k].style.backgroundColor = '#FF007A'
        }
        word = ' '
      }
    }
  }
}

function gameRestart () {
  resInput.style.color= '#white'
  resInput.value=""
  resInput.style.display ='none'
  word = ''
  wordsArray = themes[theme]
  word = wordsArray[Math.floor(Math.random() * wordsArray.length)] // выбираем случайное слово из массива
  guessedLetters = []
  motion = 10
  res['try'] = 10
  document.getElementById('try').innerHTML = res['try']
  imageContainer.children[0].src = `img/${0}.png`
  guessedLetters = [] //обнуляю все необходимое
  answerArray = []
  remainingLetters = word.length
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_'
  }
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[0]) {
      answerArray[i] = word[i]
    }
  }
  paused = false
  document.getElementById('w').value = answerArray.join(' ')
  startGame()
}
