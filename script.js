fetch('https://raw.githubusercontent.com/muhammedsamal/jsonapi/main/quiz.json')
  .then(response => response.json())
  .then(data => {
    const questionsContainer = document.getElementById('questions');
    data.forEach(question => {
      const questionElement = document.createElement('div');
      const questionText = document.createElement('h3');
      questionText.textContent = question.question;
      const answerText = document.createElement('p');
      answerText.textContent = question.answer;
      questionElement.appendChild(questionText);
      questionElement.appendChild(answerText);
      questionsContainer.appendChild(questionElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
