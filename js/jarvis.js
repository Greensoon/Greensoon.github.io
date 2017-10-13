function say(val) {
  var utterThis = new window.SpeechSynthesisUtterance();
  utterThis.text = val;
  window.speechSynthesis.speak(utterThis);
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