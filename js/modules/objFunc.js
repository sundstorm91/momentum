const objFunc = {
    getRandomInt : function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return `${Math.floor(Math.random() * (max - min)) + min}`.padStart(2, 0)
      },

      showGreeting : function (current) {
        const greetElement = document.querySelector('.const-greet');
        return greetElement.textContent = `Good ${current}`
    }
}

export const getRandomInt = objFunc.getRandomInt
            /*улица*/               /* ссылка */

export const showGreeting = objFunc.showGreeting