let ans = []

let quest = [
    //'Какие есть типы данных в JS',
    'Как преобразовать один тип данных в другой?',
    'Что мы запишем в переменную в следующем случае, если пользователь нажмет "Отмена". <br>let p = prompt()',
    //'Для чего используется оператор "&&"?',
    //'Для чего используется оператор "||"?',
    `Что выведется в консоль <br>
    let i = 0 
    <br>i+2<br> console.log(i)`,
    //'Опишите работу DOM',
    'Как проверить переменную на числовое значение?',
    //'Что означает оператор "%"',
    `Выдаст нам следующий код? 
     console.log(isNaN("hello"))`,
    'Что такое for()',
    'Какой еще цикл вы знаете помимо for?',
    //'Как вывести данные на страницу браузера?',
    //'Как получить данные со страницы?',
    `Что выдаст следующий код?
    let i = 1 === "1"<br>

    console.log(i);
    `,

    'В чем разница между "==" и "==="?',
    //'Как узнать тип данных переменной?',
    'Что выведется в консоль:<br> console.log(typeof NaN)',
    `Что выведет следующий код?<br>
    if(null == undefiend){<br>
        cosole.log('yes')<br>
    }else{<br>
        console.log('no')<br>
    }`,
    `Как обратиться к последнему элементу массива`,
    `Как обратиться к определенному элементу массива`,
    'Как можно перебрать все элементы массива',
    `Как узнать кол-во элементов массива`,
    `Что такое итерация?`,
    `Сколько итераций совершит цикл for<br>
        for(let i = 1; i<10; i++){<br>
            //code<br>
        }<br>
    `,
    `Сколько раз выведется информация в консоль<br>
        for(let i = 0; i < 10; i++){<br>
            if( i%2 == 0 ) {<br>
                continue;<br>
            }<br>
            console.log(i)<br>

        }
    `, 
    `Опишите работу цикла while()`,
    `Опишите работу if()`,
    'Способы добавления у удаления элементов в массиве',
    `Сколько раз сработает цикл<br>
    while(0){<br>
        //code<br>
    }`,
    `Как объявить функцию?`,
    'Что такое функция?',
    ''
    
]

document.querySelector('.save').addEventListener('click', () => getNames())


document.querySelector('.btn').addEventListener('click', () => rand())

let rand = () => {
    
    if(quest.length == 0) {
        document.querySelector('.q').innerHTML = 'Вопросы закончились';
        document.querySelector('.wrapper').innerHTML = '';
        document.querySelector('.btn').setAttribute('disabled', true)
        return
    }
    
    document.querySelector('.wrapper').innerHTML = ans[Math.floor(Math.random()*ans.length)]
    let rand = Math.floor(Math.random()*(quest.length-1));
    console.log(rand, quest.length)
    document.querySelector('.q').innerHTML = quest[rand];
    quest.splice(rand,1);

}

let getNames = () => {
    let allNames = document.querySelectorAll('.input_checkbox')
    
    ans = []
    allNames.forEach(element => {

        if(element.checked){
            ans.push(element.value)
        }

    });

    console.log(ans)
}

