function say(val) {
  // fetch('https://watson-speech.mybluemix.net/api/text-to-speech/token').
  // then(function(response) {
  //     return response.text();
  //   }).then(function (token) {

      WatsonSpeech.TextToSpeech.synthesize({
        text: val,
        token: 'DzqxQynGSgvXKjbeSn6PVOokpIhIcKmbGFE0xTsW%2B4b0z5O6KAaew9znoN2blgqbelycu6%2BOrQ0w7N8xkk6LsmWV6VNr2R9j5ROxZLQsYf11%2B4N2pmJgOYvNpNfJpFU2%2BoaDgr7ANcfRe5AQbQLtN2yoHxrKpNQHatkEEsobB7wG62uTkKuF%2B562T%2BPpraOdf7vI1BG9quVNLefTv9Lbu3YodfOVdado9Ior7nh8RshDfLluQkrD44F8Qbs784N2ZdIppDufj1rhIupOERoFNeCkz6HMxrHiaUoaROxFLucAbWPzX5zmK8IN8F0qi4JUH0LnDw8OO7pA8PDk4hz%2FDQyK0t0VayxlQP43zMiKxBtW5nY5lWCBuIlzY9n67RpGcVMAFvKg5Pq4vwpV%2FmFLn8m%2FPpZI9wv0KQBDU5xNJtlHzvlmsGvhsTaH%2BwvqxuqjtaIAdelK38N4vd%2BJZ1ljsSrNnxKJCwbTCf3fcio0HMPV%2FKFAjKnio%2FLU5oW9%2BUsPV99hfMfnbqxi4GvVdNOCxmLRiY9I4J1NoUjbX4wo3WavjiNxP2yZnYwAat7EWKO%2FJ1qAF6wjdtmup4INkBFKJh94AfkNLiLeFX0f1V2h8HbcnrQ0yDG0%2BaZ38R8FpwIEWfLvJGeCnwFBQo4NS%2FpUBtRTa6hpkIGOvYW5uw7jbosGJuSWd4i6vaTfPw1LMm60dWWQRXRqv07v12P06S4%2B6SbL9Z7sOPrXVtaFguyZuZ%2F0VKwwqW8r5KDXoIm0kSEVsFSevzKP%2Frjy5lNwcYcXG%2BKsxPy9%2Fzl9DRwwibXKu%2FViMw2TvjDV2W1l6udMg%2F0aI2pXWeDAGptS9TH15iNWTxjRa8XkzDUqIYKAZbbzudKheXVssh2A7G%2FnKwbi2NHhyPborUs08Jn0d01Z2b3Sr6w8zEf59v3L4RYUEE97mKs0%2BVCTPAbRjsBKn2MZMIAARqqhThtXYeycKzjQ3YI1NaEd8KqTrxSsMq%2BLXbqwKayMqfbD6W8VY5gsrD0bAAI4rIwgoDHTeao%3D'
      })
    // });
}

var Jarvis = {
  say: say
}

$('.record-line').each(function(i, e) {
    const $word = $(this).find('.word')
    const word = $word.text()
    $word.append('<a class="say-btn">发音</a>')
    $(this).find('.say-btn').click(function() {
        Jarvis.say(word);
    })
})