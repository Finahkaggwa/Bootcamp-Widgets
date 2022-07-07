document.addEventListener('alpine:init', () => {

    Alpine.data('wordGameWidget', function(){
        return {
            theSentence: '',
       longestMessage: '',
       longW(){
     this.longestMessage = longestWord(this.theSentence);
     setTimeout(() => {
        this.longestMessage = '';
        this.theSentence = '';
        }, 6000);
     },
     shortestMessage: '',
     shortW(){
        this.shortestMessage = shortestWord(this.theSentence);
        setTimeout(() => {
           this.shortestMessage = '';
           this.theSentence = '';
           }, 6000);
        },

        sentenceCount: '',
        wordCount(){
            this.sentenceCount = wordLengths(this.theSentence);
            setTimeout(() => {
               this.sentenceCount = '';
               this.theSentence = '';
               }, 6000);
            },
        }
    })

})
