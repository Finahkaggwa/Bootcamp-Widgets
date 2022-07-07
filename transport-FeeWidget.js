document.addEventListener('alpine:init', () => {

    Alpine.data('transportWidget', function(){
        return {
            theShift: '',
            theFeeMessage: '',
            shiftFee(){
                this.theFeeMessage = transportFee(this.theShift);
                 setTimeout(() => {
                this.theFeeMessage = 'This is your transport fee for the shift.';
                }, 3000);
      
                setTimeout(() => {
                  this.theFeeMessage = '';
                  this.theShift = '';
                  }, 7000);
              }
        }
    })

})
