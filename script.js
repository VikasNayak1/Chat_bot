
document.getElementById('msg_send').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
      sendMessage();
  }
});
function sendMessage() {
  var userInput = document.getElementById('msg_send').value;

  displayMessage(userInput, 'right');

  var botResponse = generateBotResponse(userInput);

  setTimeout(function () {
    displayMessage(botResponse, 'left');
  }, 500);

  document.getElementById('msg_send').value = '';
}

function displayMessage(message, sender) {
  var msgContainer = document.getElementById('chat-container');
  var msgDiv = document.createElement('div');
  msgDiv.className = sender;

  if (typeof message === 'object') {
    // Handle object display
    for (const key in message) {
      if (message.hasOwnProperty(key)) {
        var keyDiv = document.createElement('div');
        keyDiv.className = 'response-key';
        keyDiv.textContent = key + ':';

        var valueDiv = document.createElement('div');
        valueDiv.className = 'response-value';
        valueDiv.textContent = message[key].join(', ');

        msgDiv.appendChild(keyDiv);
        msgDiv.appendChild(valueDiv);
      }
    }
  } else {
   
    msgDiv.textContent = message;
  }

  msgContainer.appendChild(msgDiv);
  msgContainer.scrollTop = msgContainer.scrollHeight;
}


function generateBotResponse(userInput) {
  const responses = {
    'hi|hyy|hyyy|hii|hiii':'hello',
    'highest package|package':'The highest package offered was 15 LPA, the average package was 8.5 LPA, and the lowest package was 3 LPA. Top MNCs such as TCS, CTS, Infosys, Capgemini, Cognizant, and more participated in the recruitment process.',
    'what are you|who are you':"I am Chatbot, a virtual assistant created by team Mind Flayers. I'm here to help answer your questions and provide information on VCET campus. How can I assist you today?",
    'where is vcet|location|vcet':'Vivekananda College of Engineering & Technology is located in  Nehru Nagar, Puttur, Dakshina Kannada, Karnataka, 574203. INDIA',

    
    'your name|name':'vcet bot',
    'thanks|thanku|thank|thank you|thank u':'you are welcome💖',
    'hello|hy': 'Welcome to VCET BOT',
    'intro': 'Hello! How can I assist you today?',
    'how are u':'i am fine',
    //course

    'Course Fees' : 'INR 84000 per year',
    'cs|computer science|computer science and engineering':'To be a globally recognized center for imparting quality technical education through innovative research and incubation with moral values in the field of computer science and engineering',
    'ds|datascience|data cience':'The core data science subjects focus on Data Analytics, Visualization, Predictive Modelling and Analytics for data-driven decision-making',
    'ai|artificial|artificial engineering':'The Artificial Intelligence and Machine Learning course is an interdisciplinary field that is aimed at solving practical problems using scientific techniques',
    'cv|civil|civil engineering':'he respondents seem to believe the vision of civil engineering should include being a leader who is respected and is in a decision-making position.',
    'me|mechanical|mech|mechanical engineering':'To be a centre of excellence in education, innovation and incubation in the field of mechanical engineering to cater contemporary technological changes for sustainable development.',
   'electronics|ec|electronics engineering':'To establish the department as a center of excellence in creating globally competitive, socially responsible engineers to excel in the field of Electronics and Communication by transforming future challenges to sustainable opportunities',
    'mba':'To establish the department as a center of excellence in creating globally competitive, socially responsible engineers to excel in the field of Electronics and Communication by transforming future challenges to sustainable opportunities',
     'mtech':'To establish the department as a center of excellence in creating globally competitive, socially responsible engineers to excel in the field of Electronics and Communication by transforming future challenges to sustainable opportunities',
   
    'course offers|course|what are the course|name of course|What are courses|branchs|branch|what are the courses|courses': {
      'Computer Science and Engineering': ['to be a globally recognized center for imparting quality technical education through innovative research and incubation with moral values in the field of computer science and engineering'],
      'Data Science': ['The core data science subjects focus on Data Analytics, Visualization, Predictive Modelling and Analytics for data-driven decision-making'],
      'Artificial Intelligence and Machine learning': ['The Artificial Intelligence and Machine Learning course is an interdisciplinary field that is aimed at solving practical problems using scientific techniques'],
      'Civil Engineering': ['he respondents seem to believe the vision of civil engineering should include being a leader who is respected and is in a decision-making position.'],
      'Mechanical Engineering': ['To be a centre of excellence in education, innovation and incubation in the field of mechanical engineering to cater contemporary technological changes for sustainable development.'],
      'Electronics and Comunication Engineering':['To establish the department as a center of excellence in creating globally competitive, socially responsible engineers to excel in the field of Electronics and Communication by transforming future challenges to sustainable opportunities'],
      'MBA':['To establish the department as a center of excellence in creating globally competitive, socially responsible engineers to excel in the field of Electronics and Communication by transforming future challenges to sustainable opportunities'],
      'MTech':['To establish the department as a center of excellence in creating globally competitive, socially responsible engineers to excel in the field of Electronics and Communication by transforming future challenges to sustainable opportunities'],
    
    },
    //data
    'data science|ds': 'HOD:Dr Govindraj P  The core data science subjects focus on Data Analytics, Visualization, Predictive Modelling and Analytics for data-driven decision-making',
    'Artificial Intelligence and Machine learning|aiml|ai|ml|Artificial Intelligence|machine learning': 'HOD:Dr Govindraj P The Artificial Intelligence and Machine Learning course is an interdisciplinary field that is aimed at solving practical problems using scientific techniques',
    'Civil Engineering|civil': 'he respondents seem to believe the vision of civil engineering should include being a leader who is respected and is in a decision-making position.',
   
//establish
    'when does college established|establish|builded':'One of the reputed engineering colleges in the coastal region of Karnataka, was established in the year 2001 by Vivekananda Vidyavardhaka Sangha Puttur (R) with the vision of providing quality technical education to the rural parts of coastal Karnataka.',
    'campus information|campus|gardern|information': 'Serene lush green campus spread over 48 acres. Excellent Infrastructure and well-equipped laboratories and workshops. Internet browsing facility with 230Mbps dedicated leased line for internet browsing. Student counseling and guidance by experienced faculty.',
    
    'library information|library|books|book': 'The VCET Library is housed in a spacious new building Krishna Chetana(ground floor). The library has a floor area of 877 sq meters and is segregated into various sections like Lending, Reference, Digital library, Newspaper, Periodicals, Reading room, etc. digital library: Digital library having 12 systems with high speed internet facility. The digital Library exclusively used for the online access of e-Journals, e-books, conference proceedings, articles, educational videos and e-resources.',
    'hod|head of department|faculties':{
      CSE:[' Dr Krishna Mohan AJ'], AIML:['Dr Govindraj P'],CIVIL:['  Dr Prashanth'], ECE:['  Dr Srikanth rao'],MECH:[' Dr Manujesh']
  },

    'location|place|where is place|where is location|location of vcet|location vcet|adress':'Nehru Nagar, Puttur-574203 (Karnataka State, India)',
    'who is principal of vcet|principal|head|who is pricipal|who is principal of vcet':'Dr Mahesh Prasanna K-Principal-VCET',
    'who is cooridinater ieee|ieee coordinater|ieee':'Dr Jeevitha-IEEE-VCET',

    'events|college events|event|function|functions':{
      'Technical talk on “Cyber Security and Ethical Hacking': ['Technical talk on “Cyber Security and Ethical Hacking” Department of Computer Science and Engineering, Vivekananda College of Engineering and Technology, Puttur in association with ACES and IEEE VCET Student Branch, VCET Puttur, had organized a technical talk on “Cyber Security and Ethical Hacking” on 24th November 2023 at, Sir M Visvesvaraya Hall, VCET Puttur. The resource person was Shazin Shahul, Cyber Security Analyst in TechByHeart, Bengaluruu.\n\n'],
      'Technical talk on “AWS Cloud': ['Department of Computer Science and Engineering, Vivekananda College of Engineering and Technology, Puttur in association with ACES and IEEE VCET Student Branch, VCET Puttur, had organized a technical talk on “AWS Cloud” on 23rd November 2023 at, Sir M Visvesvaraya Hall, VCET Puttur. The resource person was Mr. Muhammad Mubashir T, AWS Cloud Associate, Appin Technology Lab, Bengaluru. He is a skilled AWS Cloud Engineer with a strong background in computer science. With experience working as an AWS Cloud Associate at Appin Technology Lab, he has developed expertise in cloud computing and AWS services.\n'],
      '\nTechnical talk on “Application of Natural Language Processing”': ['Department of Computer Science and Engineering, Vivekananda College of Engineering and Technology, Puttur in association with ACES and IEEE VCET Student Branch, VCET Puttur, had organized a technical talk on “Natural Language Processing” on 20th September 2023 at AV Hall, VCET Puttur. The resource person was Dr. H.L Shashirekha, Professor and Chairperson, Dept. Computer Science, Mangalore University\n\n'],
      '68th Kannada Rajyotsava': ['Our 68th Kannada Rajyotsava was celebrated on 2nd November at Vivekananda Tantric Vidyalaya by Bhumika Kala Sangha.']
  },

  

 
'contact':{
ph:['8251235955'], email:['pricipal@vcetputtur.ac.in'],

} ,
'cs|computer science|cse|computer science and engineering': 'HOD: Dr Krishna Mohan AJ\nVivekananda College of Engineering & Technology (VCET) in Puttur, Karnataka offers a BE Computer Science Engineering course. The college was established in 2001 and is considered one of the top engineering colleges in the coastal region of Karnataka.',
'bye|good bye|bye bye':'see you, have a nice day!',





  }; 
  
  

  const lowercaseInput = userInput.toLowerCase();

  for (const key in responses) {
    const keyVariations = key.split('|');
    if (keyVariations.some(variation => variation.toLowerCase() === lowercaseInput)) {
      return responses[key];
    }
  }
  
  return responses['default'] || "I'm not sure how to respond to that. Feel free to ask me something else!";
  
}
