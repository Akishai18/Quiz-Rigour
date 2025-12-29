# 📚 Quiz Rigour

**Challenge Your Knowledge, Sharpen Your Mind**

Discover our dynamic quiz platform, packed with challenging questions across diverse topics and concepts, designed to test your knowledge and help you grow smarter with every attempt. From mathematics to biology, push yourself to use everything you know and improve your skills!

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 🌟 Overview

Quiz Rigour is an interactive, web-based quiz application that challenges users across multiple academic disciplines. Whether you're a student looking to test your knowledge, a professional keeping your skills sharp, or simply someone who loves learning, Quiz Rigour provides an engaging platform to assess and improve your understanding of complex topics.

---

## ✨ Key Features

### 🎯 Multiple Subject Areas
- **Mathematics** - Functions, Trigonometry, Exponentials, Calculus
- **Physics** - Explore the laws of the universe
- **Chemistry** - Master chemical concepts and reactions
- **Biology** - Study the foundation of life
- **Finance** - Learn about the financial world

### 🎮 Interactive Quiz Experience
- **Real-time Scoring** - Track your performance as you progress
- **Instant Feedback** - Know immediately if your answer is correct
- **Visual Indicators** - Color-coded responses (correct/incorrect)
- **Progress Tracking** - See how many questions remain
- **Automatic Correct Answer Display** - Learn from mistakes instantly

### 📊 Results & Analytics
- **Circular Progress Display** - Beautiful animated percentage score
- **Detailed Score Breakdown** - See your total correct vs. total questions
- **Try Again Option** - Retake the quiz to improve your score
- **Performance Visualization** - Animated progress indicator

### 🎨 User Experience
- **Clean, Modern Interface** - Easy-to-navigate design
- **Responsive Layout** - Works on all devices
- **Smooth Animations** - Engaging visual transitions
- **Intuitive Navigation** - Simple quiz flow
- **Quiz Guide** - Clear instructions before starting

---

## 🏗️ How It Works

### Quiz Flow

```
Home Page
    ↓
Start Quiz Button
    ↓
Quiz Guide (Subject Selection)
    ↓
Choose Subject (Math, Physics, Chemistry, Biology, Finance)
    ↓
Quiz Section
    ↓
Answer Questions Sequentially
    • Select an option
    • Immediate feedback (correct/incorrect)
    • Auto-advance to next question
    ↓
Complete All Questions
    ↓
Results Page
    • Animated circular progress
    • Total score display
    • Options: Try Again or Go Home
```

### Interactive Features

**Question Progression:**
1. User clicks "Start Quiz"
2. Popup guide appears with subject options
3. User selects a subject (e.g., Math)
4. Quiz begins with first question
5. User selects an answer
6. Immediate visual feedback:
   - ✅ Correct answer turns green
   - ❌ Incorrect answer turns red
   - 📍 Correct answer is highlighted if user was wrong
7. All options become disabled after selection
8. "Next" button activates
9. User proceeds to next question
10. After final question, animated results appear

---

## 🧩 Technical Implementation

### Core Technologies

**Frontend:**
- Vanilla JavaScript (ES6)
- HTML5 semantic markup
- CSS3 with custom animations

**Architecture:**
- Event-driven programming
- DOM manipulation
- Dynamic content rendering
- State management with global variables
  
---

## 🎯 Subject Coverage

### Mathematics
**Topics Covered:**
- Functions and Relations
- Trigonometry (sin, cos, tan)
- Exponentials and Logarithms
- Calculus (Derivatives, Integrals)
- Advanced mathematical concepts

### Physics
**Topics Covered:**
- Classical Mechanics
- Electromagnetism
- Thermodynamics
- Quantum Physics
- Relativity

### Chemistry
**Topics Covered:**
- Atomic Structure
- Chemical Bonding
- Organic Chemistry
- Reactions and Equations
- Periodic Table

### Biology
**Topics Covered:**
- Cell Biology
- Genetics
- Evolution
- Ecology
- Human Anatomy

### Finance
**Topics Covered:**
- Investment Principles
- Financial Markets
- Risk Management
- Economics Fundamentals
- Personal Finance

---

## 🚀 Features in Detail

### 1. Subject Selection System

Users can choose from 5 different subjects:
```javascript
mathBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    showQuestions(0);
    questionCounter(1);
    headerScore();
}
```

### 2. Real-Time Scoring

Score updates immediately upon correct answer:
```javascript
if (userAnswer === correctAnswer) {
    answer.classList.add('correct');
    userScore += 1;
    headerScore();  // Update score display
}
```

### 3. Answer Validation

Smart answer checking with visual feedback:
```javascript
// Compare user's answer with correct answer
let userAnswer = answer.textContent.trim();
let correctAnswer = questions[questionCount].answer.trim();

// Show correct answer even if user was wrong
for (let i = 0; i < allOptions; i++) {
    if (optionList.children[i].textContent == correctAnswer) {
        optionList.children[i].setAttribute('class', 'option correct');
    }
}
```

### 4. Progress Tracking

Visual progress indicator:
```javascript
const questionTotal = document.querySelector(".question-total");
questionTotal.textContent = `${index} of ${questions.length} Questions`;
```

### 5. Animated Results

Smooth circular progress animation:
```javascript
let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = 
        `conic-gradient(#000ac4 ${progressStartValue * 3.6}deg, 
        rgba(255,255,255,.1) 0deg)`;
    
    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);
```

---
## 🚀 Future Enhancements

**Feature Roadmap:**
- [ ] Backend integration for question database
- [ ] User accounts and progress tracking
- [ ] Leaderboards and competition mode
- [ ] Timed quiz mode
- [ ] Difficulty levels (Easy, Medium, Hard)
- [ ] Explanation for correct answers
- [ ] Bookmarking questions for review
- [ ] Share results on social media
- [ ] Mobile app version
- [ ] Multiplayer quiz battles
- [ ] Achievement badges and rewards
- [ ] Custom quiz creation

**Technical Improvements:**
- [ ] Question randomization
- [ ] Option shuffling
- [ ] Local storage for progress saving
- [ ] Accessibility enhancements (ARIA labels)
- [ ] Internationalization (i18n)
- [ ] PWA capabilities
- [ ] Dark mode toggle
---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🎓 Educational Value

Quiz Rigour serves as:
- **Self-Assessment Tool** - Identify knowledge gaps
- **Study Aid** - Reinforce learning through testing
- **Progress Tracker** - Monitor improvement over time
- **Engaging Practice** - Make learning fun
- **Confidence Builder** - Build mastery through repetition
