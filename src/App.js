import React from 'react';
import Question from './Question';
import questions from './data'

const App = () => {
  return (
    <div>
      <h1>Project 2: FAQ/Accordion</h1>
      <div className='container'>
        <h2>Frequently Asked Questions</h2>
        <div className='question'>
          {
            questions.map((question)=>{
              return(
                <Question  key={question.id} info={question.info} title={question.title}/>
              )
              
            })

          }
          

        </div>
        
      </div>
      
    </div>
  );
};

export default App;