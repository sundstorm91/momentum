export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return `${Math.floor(Math.random() * (max - min)) + min}`.padStart(2, 0)
  }


  export function showGreeting(current) {
    const greetElement = document.querySelector('.const-greet');
    return greetElement.textContent = `Good ${current}`
}