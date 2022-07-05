document.addEventListener('alpine:init', () => {

    Alpine.data('greetWidget', function(){
        return {
            theName: '',
            theMessage: '',
            greetMe() {
                this.theMessage = greet(this.theName);
                setTimeout(() => {
                    this.theMessage = '';
                }, 3000)
            }
        }
    })

})





