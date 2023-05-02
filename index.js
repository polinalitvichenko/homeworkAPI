const dogs = () => {

  fetch('https://random.dog/doggos')
    .then(response => response.json())
    .then(images => {
      const container = document.createElement('div');
      const dogsTitle1 = document.createElement('h2');
      const dogsContainer1 = document.createElement('div');
      const dogImg1 = document.createElement('img');
      const dogsTitle2 = document.createElement('h3');
      const dogsContainer2 = document.createElement('div');
      const dogImg2 = document.createElement('img');

      container.classList.add('container');
      dogsTitle1.classList.add('first-title');
      dogsContainer1.classList.add('first-container');
      dogImg1.classList.add('img1');
      dogsTitle2.classList.add('second-title');
      dogsContainer2.classList.add('second-container');
      dogImg2.classList.add('img2');

      dogsTitle1.textContent = 'Есть разные собачки:';
      dogsTitle2.textContent = 'Но я люблю эту:';
      const randomDogs = Math.floor(Math.random() * images.length);
      dogImg1.src = `https://random.dog/${images[randomDogs]}`;
      dogImg1.alt = 'Другие собачки';
      dogImg2.src = './992accf3-287e-4650-ba33-9dd49cad5746.jpg';
      dogImg2.alt = 'Моя собачка';

      document.body.append(container)
      container.append(dogsTitle1, dogsContainer1, dogsTitle2, dogsContainer2)
      dogsContainer1.append(dogImg1)
      dogsContainer2.append(dogImg2)

      return container;
    })
    .catch(error => {
      console.log(error);
    });
};

dogs();


// fetch('https://restcountries.com/v3.1/all')
//   // then принимает в себя какие-либо callback функции и цепляет какое-то действие на предыдущую функцию (тут в неё попадает объект, который мы взяли по ссылке и преобразуется в формат json)
//   .then(response => response.json())
//   // берет массив-json и выводит в консоль
//   .then(data => displayData(data))

// // data и response просто названные переменные (аргументы)

// // создаём ul. НА каждом цикле создаём li элемент и вкладываем в него страну (data[i].name.common)
// //вкладываем в боди ul и выводим на экран весь список
// const displayData = (data) => {
//   const ul = document.createElement('ul')

//   for (let i = 0; i < data.length; i++) {
//     const li = document.createElement('li')
//     li.innerHTML = data[i].name.common
//     ul.append(li)
//   }
//   document.body.append(ul)