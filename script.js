function askQuestion() {
    const userNameInput = document.getElementById('user-name').value;
    const userName = userNameInput ? userNameInput : '';
  
    console.log(`Hello, ${userName}!`);
  
    const userQuestion = document.getElementById('user-question').value;
    console.log(`You asked: ${userQuestion}`);
  
    const randomNumber = Math.floor(Math.random() * 8);
    
    let eightBall;
    switch (randomNumber) {
      case 0:
        eightBall = 'It is certain';
        break;
      case 1:
        eightBall = 'It is decidedly so';
        break;
      case 2:
        eightBall = 'Reply hazy try again';
        break;
      case 3:
        eightBall = 'Cannot predict now';
        break;
      case 4:
        eightBall = 'Do not count on it';
        break;
      case 5:
        eightBall = 'My sources say no';
        break;
      case 6:
        eightBall = 'Outlook not so good';
        break;
      case 7:
        eightBall = 'Signs point to yes';
        break;
      default:
        eightBall = 'No answer';
    }
  
    document.getElementById('answer').innerText = `Magic Eight Ball says: ${eightBall}`;
  }
  