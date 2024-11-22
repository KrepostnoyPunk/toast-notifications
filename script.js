const btnsEls = document.querySelectorAll('.btn')
const notificationsListEl = document.querySelector('.notification-list')

btnsEls.forEach(btn => { // на каждую кнопку добавляем обработчик события клика...
    btn.addEventListener('click', () => createToast(btn.id)) // при срабатывании которого вызывается функция которая аргументом принимает значение id отдельной кнопки на каждой итерации
})

function createToast(id){ // id в данном случае это идентификатор типа уведомления (успех, ошибка...)

    const states = { // объект состояний уведомлений
        success: {
            icon: 'fa-circle-check', // иконка
            text: 'Success: This is a success toast!' // соответствующий состоянию текст
        },
        info: {
            icon: 'fa-circle-info',
            text: 'Info: This is an info toast!'
        },
        warning: {
            icon: 'fa-triangle-exclamation',
            text: 'Warning: This is a warning toast!'
        },
        error: {
            icon: 'fa-circle-xmark',
            text: 'Success: This is an error toast!'
        },
    }

    let {icon, text} = states[id] // деструктурируем значения из вложенных объектов по id которое совпадает с названиями объектов (btn.id = info === info: {...})
    
    let toastEl = document.createElement('li') // создаем элемент списка

    toastEl.classList.add('notification', `${id}`) // добавляем классы которые стилизуют этот элемент должным образом, первый - базовый класс, второй - модификатор для определенного состояния

    // заполняем элемент списка базовой разметкой + шаблон со специфичными иконкой и текстом из определенного объекта состояния
    toastEl.innerHTML = ` 
        <div class="message">
            <i class="fa-solid ${icon} fa-lg"></i>
            <p>${text}</p>
        </div>
    `
    notificationsListEl.append(toastEl) // добавляем в список созданный нами элемент уведомления

    return removeToast(toastEl) // передаем в функцию удаления сам элемент уведомления
}

function removeToast(element){
    setTimeout(() => {
        element.style.animation = 'slideout 2s' // через 7 секунд изменить и выполнить анимацию исчезновения элемента уведомления
    }, 7000); 

    setTimeout(() => {
        element.remove() // после исчезновения уведомления из поля зрения - удалить элемент уведомления
    }, 8010);
}