    class CreateInput {

        constructor(placeholder, value, callBack) {
        
        this.placeholder = placeholder;
        
        this.value = value;
        
        this.callBack = callBack;
        
        }
        
        layout(){
            const input = document.createElement('div');
            input.innerHTML += `<input placeholder="${placeholder}" type="text" class="input">`
            
            return input;
        };
        
        setPlaceholder(text){};
        
        setCallBack(callBack){};
        
        }

    const input = new CreateInput("Введите текст", "Привет", () => {console.log("колбэк")});

    console.log(input)