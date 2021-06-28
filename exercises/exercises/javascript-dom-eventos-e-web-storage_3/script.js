function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
  
    weekDaysList.appendChild(dayListItem);
  };
};
  
  createDaysOfTheWeek();

  function createDaysMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let element = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
      let newElement = document.createElement('li');
      newElement.className = 'day'
        if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
          newElement.className = 'holiday'
        } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
          newElement.className = 'friday';
        }
    newElement.innerHTML = dezDaysList[index];
    element.appendChild(newElement);
    }
  }

  createDaysMonth();

  function createButtonHoliday() {
    let holiday = 'Feriados';
    let element = document.querySelector('.buttons-container');
    let newElement = document.createElement('button');
    newElement.className = 'btn-holiday';
    newElement.innerHTML = holiday;
    newElement.style.fontSize = '16px';
    newElement.style.padding = '6px, 16px';
    element.appendChild(newElement);
  }

  createButtonHoliday();

  function displayHolidays() {
    let getHolidayButton = document.querySelector('.btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'yellow';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };
  
  displayHolidays();

  function createButtonFriday() {
    let friday = 'Sexta-feira';
    let element = document.querySelector('.buttons-container');
    let newElement = document.createElement('button');
    newElement.className = 'btn-friday';
    newElement.innerHTML = friday;
    newElement.style.padding = '6px, 16px';
    newElement.style.fontSize = '16px';
    element.appendChild(newElement);
  }

  createButtonFriday();

  function displayFridays(fridaysArray) {
    let getFridayButton = document.querySelector('.btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/';
  
    getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
    })
  };
  
  let dezFridays = [ 4, 11, 18, 25 ];
  displayFridays(dezFridays);

  function zoomElementTarget() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseover', function(event){
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  }

  function zoomElementTargetOut() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    })
  }

  zoomElementTarget();
  zoomElementTargetOut();

  function addTask(taskName) {
    let element = document.querySelector('.my-tasks');
    let newElement = document.createElement('span');
    newElement.innerHTML = taskName;
    element.appendChild(newElement);
  }

  addTask('cozinhar');

  function newTaskDiv(color) {
    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
  };
  
  newTaskDiv('blue');

  function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
  
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };
  
  setTaskClass();

  function addColorDayTask() {
    let element = document.querySelector('.task selected');
    let dayElement = document.getElementsByTagName('li');
    dayElement.addEventListener('click', function(){
      for (let index = 0; index < dayElement.length; index += 1) {
        dayElement.style.backgroundColor = element.style.backgroundColor;
      }
    })
  }

  addColorDayTask();

  function setCookie() {
    let element = document.querySelector('.task-list');
    document.cookie = "email=lucaspinheiroalberdanha@gmail.com; expires=Thu, 01 Jun 2020 12:00:00 UTC";
    let newDocument = document.createElement('p');
    newDocument.innerHTML = document.cookie;
    element.appendChild(newDocument);
  }

  setCookie();
  
  // Escreva seu código abaixo.