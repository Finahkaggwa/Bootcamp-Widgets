document.addEventListener('alpine:init', () => {

    Alpine.data('wordGameWidget', function(){
        return {
            theSentence: '',
       longestMessage: '',
       longW(){
     this.longestMessage = longestWord(this.theSentence);
     setTimeout(() => {
        this.longestMessage = '';
        }, 4000);
     },
     shortestMessage: '',
     shortW(){
        this.shortestMessage = shortestWord(this.theSentence);
        setTimeout(() => {
           this.shortestMessage = '';
           }, 4000);
        },

        sentenceCount: '',
        wordCount(){
            this.sentenceCount = wordLengths(this.theSentence);
            setTimeout(() => {
               this.sentenceCount = '';
               }, 4000);
            },
        }
    })

})
