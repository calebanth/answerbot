const questionBox = document.getElementById('questionInput')
const answerBox = document.getElementById('answer')

window.onload = () => {
  const question = questions[Math.floor(Math.random()*questions.length)]
  questionBox.placeholder = question
}

const getAnswer = (r) => {
  return r[Math.floor(Math.random()*r.length)]
}

questionBox.onkeydown = function(e){
   if(e.keyCode == 13){
     const question = questionBox.value.toLowerCase()

     // Basic NLP to determine question type
     if (question.indexOf('how many') > -1) {
       answerBox.innerHTML = getAnswer(howMany) }
     else if (question.indexOf('what if') > -1 || question.indexOf('if') == 0) {
       answerBox.innerHTML = getAnswer(whatIf) }
     else if (question.indexOf('where') == 0) {
       answerBox.innerHTML = getAnswer(where) }
     else if (question.indexOf('howCome') > -1) {
       answerBox.innerHTML = getAnswer(howCome) }
     else { answerBox.innerHTML = getAnswer(fallback) }

     return false
   }
};

const questions = [
  'Can there be a planet that revolves around two suns simultaneously?',
  'If I ate nothing but eggs for a month straight, would I die?',
  'Does the sky look prettier in Scotland?',
  'How many hats can I wear at the same time?',
  'What if there were no such thing as dirt?',
  'Where did I put my jacket with all the colors on it?',
  'Where do babies come from?',
  'How many summersaults in a row can I do before I throw up?',
  'How come there are no flowers in outer space?',
  'What if color blind people actually saw real colors?',
  'How come there aren\'t more songs about candy?',
  'If it didn\'t when it did, would it when it could?',
  'How many numbers are there?'
]

// Answers to 'how many' questions
const howMany = [
  'At least 35.',
  'If I said anything less than 400, I\'d be lying.',
  'I literally can\'t count that high.',
  '13. No more. No less.',
  'Over 300.',
  'Under 10, I\'d say.',
  'Forty-five.',
  '19,284.',
  'Sixteen.',
  'You know, I really couldn\'t say...',
  '11.',
  'Hmm...under 19, I think.',
  '64? Maybe 65?',
  '220, 221, whatever it takes.',
  'Half.',
  'All of them.',
  'Sixteen! Sweet!',
  'A baker\'s dozen.',
  'Five.',
  'Over one MILLION!',
  'How many beer cans are in your trash can?',
  'Come on, you think I can count that high?'
]

// Answers to 'what if' questions
const whatIf = [
  'I don\'t think anything would happen, really.',
  'People wouldn\'t stop talking about it for at LEAST a week.',
  'I\'ve heard of people getting frostbite from that.',
  'My great aunt Lucy got sick doing that, I wouldn\'t try it.',
  'We\'d all be a lot worse off.',
  'The world might be a happier place.',
  'My eyes got crossed when I thought too much about that.',
  'Do I look like a seer to you?'
]

// Answers to 'where' questions
const where = [
  'Over the hill and through the river.',
  'Just over there! I can see it from here!',
  'Have you checked under the bed?',
  'Under the couch, I just saw a second ago.',
  'Just around the corner over..yeah, over there.',
  'In your hand...',
  'I just saw your friend with it, I swear.',
  'Hey, I was just there!',
  'Wait...what?'
]

// Answers to 'how come' questions
const howCome = [
  'Because if so, we\'d all be in trouble.',
  'Things just don\'t work that way.',
  'Sometimes, it\'s just the way it has to be.',
  'You know, that\'s a great question.',
  'Are you crazy? Think about the repercussions before you ask next time.',
  'The answer is so obvious, it\'s not worth saying.',
  'Hey Caleb, can you believe this guy over here?'
]

// Fallback answers
const fallback = [
  'You couldn\'t come up with a better question?',
  'I\'ve not the slightest idea.',
  'Why ask that when you could just flip a coin and get a better answer?',
  'I have to say, I really like that question.',
  'For sure!',
  'Indubitably.',
  'You can\'t know the answer until you give it your best shot.',
  'If I could answer that, I\'d be rich.',
  'It\'s a possibility, I\'ll give you that much.',
  'Nope, nope, nope.',
  'Highly doubtful.',
  'Bro. Can I call you bro? No.',
  'I\'ve listened to washing machines with more sense in them than you.',
  'Hm...the chances are quite high.',
  'I\'d be more shocked if the outcome was negative.',
  'Congratulations!',
  'Wait, what?',
  'Come again?',
  'Yes.',
  'I honestly don\'t know how to respond right now.',
  'Is that an offensive question? I feel like that\'s offensive.'
]
