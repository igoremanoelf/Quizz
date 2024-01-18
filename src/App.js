import React, { useState } from 'react';
import './App.css';

const Quiz = () => {
  const questions = [
    {
      question: ' 1- Quais as duas línguas mais faladas no mundo?',
      options: [' Inglês e Espanhol', 'Inglês e Mandarim Chinês', 'Inglês e Francês', 'Francês e Espanhol'],
      correctAnswer: 'Inglês e Mandarim Chinês',
    },
        {
          question: '2- Quem inventou a lâmpada?',
          options: ['Graham Bell', 'Steve Jobs', 'Thomas Edison', 'Henry Ford'],
          correctAnswer: 'Thomas Edison',
        },
        {
          question: '3- Qual é o planeta mais próximo do Sol?',
          options: ['Mércurio', 'Júpiter', 'Vênus', 'Marte'],
          correctAnswer: 'Mércurio',
        },

        {
          question: '4- Qual o nome do presidente do Brasil que ficou conhecido como Jango?',
          options: ['Jânio Quadros', 'Luiz Inácio Lula da Silva', 'Getúlio Vargas', 'João Goulart'],
          correctAnswer: 'João Goulart',
        },

        {
          question: '5- Quantas casas decimais tem o número PI (π)?',
          options: ['Duas', 'Centenas', 'Infinitas', 'Milhares'],
          correctAnswer: 'Infinitas',
        },
        {
          question: '6 - Quanto tempo a luz do Sol demora para chegar à Terra?',
          options: ['12 minutos', '1 hora', '10 segundos', '8 minutos'],
          correctAnswer: '8 minutos',
        },
        {
          question: '7- Quem pintou o teto da Capela Sistina (Itália)?',
          options: ['Leonardo da Vinci', 'Michelangelo', 'Sandro Botticelli', 'Donatello'],
          correctAnswer: 'Michelangelo',
        },
        {
          question: '8- O que é o Acordo de Paris?',
          options: ['Acordo internacional que trata da restrição de imigrantes em Paris', ' Acordo internacional que trata do Desenvolvimento Sustentável', 'Acordo internacional que trata da poluição radioativa', 'Acordo internacional que trata do aquecimento global'],
          correctAnswer: 'Acordo internacional que trata do aquecimento global',
        },
        {
          question: '9- Chernobyl e Césio-137 fazem parte dos maiores acidentes nucleares da história. Em que países aconteceram?',
          options: ['Rússia e Espanha', 'Ucrânia e Brasil', 'Estados Unidos e Ucrânia', 'Taiwan e Alemanha'],
          correctAnswer: 'Ucrânia e Brasil',
        },
        {
          question: ' 10 - Quais países da América do Sul não fazem fronteira com o Brasil?',
          options: ['Chile e Equador', ' Guiana Francesa e Bolívia', 'Venezuela e Equador', 'Peru e Chile'],
          correctAnswer: 'Chile e Equador',
        },
      ];
    
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [selectedOption, setSelectedOption] = useState(null);
      const [showResults, setShowResults] = useState(false);
      const [correctAnswers, setCorrectAnswers] = useState([]);
      const [incorrectAnswers, setIncorrectAnswers] = useState([]);
    
      const handleAnswer = (option) => {
        if (selectedOption === null) {
          setSelectedOption(option);
    
          if (option === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
            setCorrectAnswers([...correctAnswers, currentQuestion + 1]);
          } else {
            setIncorrectAnswers([...incorrectAnswers, currentQuestion + 1]);
          }
    
          setTimeout(() => {
            setSelectedOption(null);
            const nextQuestion = currentQuestion + 1;
    
            if (nextQuestion < questions.length) {
              setCurrentQuestion(nextQuestion);
            } else {
              setShowResults(true);
            }
          }, 1000);
        }
      };
    
      const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedOption(null);
        setShowResults(false);
        setCorrectAnswers([]);
        setIncorrectAnswers([]);
      };
    
      if (showResults) {
        return (
          <div className="quiz-container">
            <h1>Resultado do Quiz</h1>
            <p>Pontuação: {score}/{questions.length}</p>
            <p>Perguntas Corretas: {correctAnswers.join(', ')}</p>
            <p>Perguntas Incorretas: {incorrectAnswers.join(', ')}</p>
            <button onClick={resetQuiz}>Reiniciar Quiz</button>
          </div>
        );
      }
    
      return (
        <div className="quiz-container">
          <h1>Quiz</h1>
          <p>{questions[currentQuestion].question}</p>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={selectedOption === option ? 'selected-answer' : ''}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    };
    
    function App() {
      return (
        <div className="App">
          < Quiz />
        </div>
      );
    }
    
    export default App;
    