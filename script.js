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
    'hello': 'Welcome to Vivekanada',
    'intro': 'Hello! How can I assist you today?',
      
    'course offers': {
      'Computer Science and Engineering': ['to be a globally recognized center for imparting quality technical education through innovative research and incubation with moral values in the field of computer science and engineering'],
      'Data Science': ['The core data science subjects focus on Data Analytics, Visualization, Predictive Modelling and Analytics for data-driven decision-making'],
      'Artificial Intelligence and Machine learning': ['The Artificial Intelligence and Machine Learning course is an interdisciplinary field that is aimed at solving practical problems using scientific techniques'],
      'Civil Engineering': ['he respondents seem to believe the vision of civil engineering should include being a leader who is respected and is in a decision-making position.'],
      'Mechanical Engineering': ['To be a centre of excellence in education, innovation and incubation in the field of mechanical engineering to cater contemporary technological changes for sustainable development.'],
      'Electronics and Comunication Engineering':['To establish the department as a center of excellence in creating globally competitive, socially responsible engineers to excel in the field of Electronics and Communication by transforming future challenges to sustainable opportunities'],
      'MBA':['To establish the department as a center of excellence in creating globally competitive, socially responsible engineers to excel in the field of Electronics and Communication by transforming future challenges to sustainable opportunities'],
      'MTech':['To establish the department as a center of excellence in creating globally competitive, socially responsible engineers to excel in the field of Electronics and Communication by transforming future challenges to sustainable opportunities'],
      
    },
    // 'prerequisites': 'Look for prerequisite details in the course catalog or department website.',
    // 'course schedule': 'Check the course catalog or the registrar\'s website when schedules are released.',
    // 'course_cost': 'Tuition fees vary, find specific information on the college\'s financial aid website.',
    // 'syllabus': 'Usually available from the instructor or the course website.',
    // 'instructor info': 'Found in the course catalog or department website.',
    // 'course content': 'You\'ll find detailed course descriptions in the catalog or on the department website.',
    // 'learning objectives': 'Typically outlined in the course syllabus.',
    // 'assessment methods': 'Exams, papers, projects – usually detailed in the course syllabus.',
    // 'workload': 'Varies by instructor, material, and student pace. Syllabus gives a general idea.',
    // 'textbooks': 'Available in the course catalog or department website.',
    // 'instructor office hours': 'Check the syllabus or the instructor\'s webpage.',
    // 'online resources': 'Look for platforms like Blackboard or Canvas used for course materials and assignments.',
    // 'core requirements': 'Essential courses listed in the catalog or department website for a major.',

    'when does college established':'One of the reputed engineering colleges in the coastal region of Karnataka, was established in the year 2001 by Vivekananda Vidyavardhaka Sangha Puttur (R) with the vision of providing quality technical education to the rural parts of coastal Karnataka.',
    'campus information': 'Serene lush green campus spread over 48 acres. Excellent Infrastructure and well-equipped laboratories and workshops. Internet browsing facility with 230Mbps dedicated leased line for internet browsing. Student counseling and guidance by experienced faculty.',
    
    'library information': 'The VCET Library is housed in a spacious new building Krishna Chetana(ground floor). The library has a floor area of 877 sq meters and is segregated into various sections like Lending, Reference, Digital library, Newspaper, Periodicals, Reading room, etc. digital library: Digital library having 12 systems with high speed internet facility. The digital Library exclusively used for the online access of e-Journals, e-books, conference proceedings, articles, educational videos and e-resources.',
  
    'location':'Nehru Nagar, Puttur-574203 (Karnataka State, India)',
    'who is principal of vcet':'Dr Mahesh Prasanna K-Principal-VCET',
    'who is cooridinater ieee':'Dr Jeevitha-IEEE-VCET',
    'events':{
      'Technical talk on “Cyber Security and Ethical Hacking': ['Technical talk on “Cyber Security and Ethical Hacking” Department of Computer Science and Engineering, Vivekananda College of Engineering and Technology, Puttur in association with ACES and IEEE VCET Student Branch, VCET Puttur, had organized a technical talk on “Cyber Security and Ethical Hacking” on 24th November 2023 at, Sir M Visvesvaraya Hall, VCET Puttur. The resource person was Shazin Shahul, Cyber Security Analyst in TechByHeart, Bengaluruu.\n\n'],
      'Technical talk on “AWS Cloud': ['Department of Computer Science and Engineering, Vivekananda College of Engineering and Technology, Puttur in association with ACES and IEEE VCET Student Branch, VCET Puttur, had organized a technical talk on “AWS Cloud” on 23rd November 2023 at, Sir M Visvesvaraya Hall, VCET Puttur. The resource person was Mr. Muhammad Mubashir T, AWS Cloud Associate, Appin Technology Lab, Bengaluru. He is a skilled AWS Cloud Engineer with a strong background in computer science. With experience working as an AWS Cloud Associate at Appin Technology Lab, he has developed expertise in cloud computing and AWS services.\n'],
      '\nTechnical talk on “Application of Natural Language Processing”': ['Department of Computer Science and Engineering, Vivekananda College of Engineering and Technology, Puttur in association with ACES and IEEE VCET Student Branch, VCET Puttur, had organized a technical talk on “Natural Language Processing” on 20th September 2023 at AV Hall, VCET Puttur. The resource person was Dr. H.L Shashirekha, Professor and Chairperson, Dept. Computer Science, Mangalore University\n\n'],
      '68th Kannada Rajyotsava': ['Our 68th Kannada Rajyotsava was celebrated on 2nd November at Vivekananda Tantric Vidyalaya by Bhumika Kala Sangha.']
  },

  'highest package': 'The highest package offered was 15 LPA, the average package was 8.5 LPA, and the lowest package was 3 LPA. Top MNCs such as TCS, CTS, Infosys, Capgemini, Cognizant, and more participated in the recruitment process.',


  'hod':{
    CSE:[' Dr Krishna Mohan AJ'], AIML:[' Dr Govindraj P'],CIVIL:['  Dr Prashanth'], ECE:['  Dr Srikanth rao'],MECH:[' Dr Manujesh']
},

  };
  


  const lowercaseInput = userInput.toLowerCase();

  for (const key in responses) {
    if (lowercaseInput.includes(key.replace(/_/g, ' '))) {
      return responses[key];
    }
  }

  return responses['default'] || "I'm not sure how to respond to that. Feel free to ask me something else!";
}
