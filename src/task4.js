const div = document.querySelector('.test');


function CreateButton(textContent, color, callBack) {

    this.textContent = textContent;
    this.color = color;
    this.callBack = callBack;


    this.layout = function() {
        const button = document.createElement('button');
        return button.innerHTML = `<input style="color: ${this.color}; onclick=${this.callBack}>${this.textContent}</button>`

    }
    
    this.setTextContent = function(value) {
        this.textContent = value;
    }
    
    this.setCallBack = function(newCallback) {
        this.callBack = newCallback;
    }
    
}
    
const button = new CreateButton('Нажми на меня', 'blue', ()=> console.log('колбэк'));
console.log(button.layout())
console.log(button.setTextContent('Жми'))
console.log(button.layout())
console.log(button.setCallBack(()=> console.log('новый колбэк')))
console.log(button.layout())


    
    
    class CreateInput {

        constructor(placeholder, value, callBack) {
        
        this.placeholder = placeholder;
        this.value = value;
        this.callBack = callBack;
        
        }
        
        layout(){
            const input = document.createElement('input');
            return input.innerHTML = `<input value="${this.value}" placeholder="${this.placeholder}" onclick=${this.callBack}></input>`
        };
        
        setPlaceholder(text){ this.placeholder = text };
        
        setCallBack(newCallBack){this.callBack = newCallBack;};
        
        }

    const input = new CreateInput("Введите текст", "Привет", () => {console.log("колбэк")});

    console.log(input.layout())
    console.log(input.setPlaceholder('Изменено'))
    console.log(input.layout())

