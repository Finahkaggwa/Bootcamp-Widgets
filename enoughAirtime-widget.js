document.addEventListener('alpine:init', () => {
    Alpine.data('enoughAirtimeWidget', function() {
      return  {
            airtimeUsage: '',
            availableAmount: '0.00',
            airtimeMessage: 'Amount of airtime left...',
            calculate() {
              const result = enoughAirtime(this.airtimeUsage, this.availableAmount);
              this.airtimeMessage = result;

              setTimeout(() => {
                this.airtimeMessage = 'That is your balance.';
            }, 5000)

            }
         }

    })
})