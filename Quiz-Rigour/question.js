let questions = [
    {
        numb: 1,
        question: "What is the quotiant and remainder when you divide 6x^3 + x^2 -13x + 5 by 2x+1",
        answer: "C. 3x^2 - x - 6 R: 11",
        options: [
            "A. 3x^2 - x - 7 R: 12",
            "B. 6x^2 - 2x - 1 R: 1",
            "C. 3x^2 - x - 6 R: 11",
            "D. 3x^3 - 5x - 61 R: 0"
        ]
    },
    {
        numb: 2,
        question: "Solve the following inequality: 2x^3 -6x^2 >= 18x-54",
        answer: "B. x >= -3",
        options: [
            "A. x <= -3",
            "B. x >= -3",
            "C. x >= 3",
            "D. x <= 3"
        ]
    },
    {
        numb: 3,
        question: "Solve for x: log(x+2) + log(x-1) = 1",
        answer: "C. x = 3",
        options: [
            "A. x = 0.5",
            "B. x = 12",
            "C. x = 3",
            "D. x = -3"
        ]
    },
    {
        numb: 4,
        question: "Solve for x: 4^2x=5 = 8^x",
        answer: "A. x = 10",
        options: [
            "A. x = 10",
            "B. x = 5",
            "C. x = -10",
            "D. x = 10/3"
        ]
    },
    {
        numb: 5,
        question: "Determine solutions for each equation in the interval 0 ≤ x ≤ 2π: 2sin(x) + sqrt(3) = 0",
        answer: "D. x = 4π / 3 and x = 5π / 3",
        options: [
            "A. x = 2π / 3 and x = 3π / 3",
            "B. x = -2π / 5 and x = 5π / 2",
            "C. x = 4π + 3 and x = 5π - 3",
            "D. x = 4π / 3 and x = 5π / 3"
        ]
    },
    {
        numb: 6,
        question: "Use a compound angle formula to find an exact value for cos (7π)/12",
        answer: "B. sqrt(2)(1 - sqrt(3) / 4",
        options: [
            "A. sqrt(2)-sqrt(6) / 3",
            "B. sqrt(2)(1 - sqrt(3) / 4",
            "C. sqrt(2) * sqrt(3) / 4",
            "D. sqrt(2) / sqrt(3) * 4"
        ]
    },
    {
        numb: 7,
        question: "Solve the inequality: (2x-5) / (x-1) >= 1",
        answer: "A. (x-4) / (x-1) >= 0",
        options: [
            "A. (x-4) / (x-1) >= 0",
            "B. (x-4) * (x-1) >= 0",
            "C. x >= 4",
            "D. x >= 1"
        ]
    },
    {
        numb: 8,
        question: "Solve: ((x+10) / (3x+8)^3 ) + ((x) / (3x+8)^2)",
        answer: "C. (3x^2+9x+10) / (3x+8)^3",
        options: [
            "A. (x^2+6x+4) / (2x+1)^2",
            "B. (3x^3+9x^2+10x) / (3x+8)^2",
            "C. (3x^2+9x+10) / (3x+8)^3",
            "D. (6x^2+18x+20) / (6x+16)^3"
        ]
    },
    {
        numb: 9,
        question: "Find the derivative of (1+sinx) / (e^x+1) (Hint: Use Quotiant Rule)",
        answer: "D. (cos(e^x+1) - e^x(1+sinx)) / (e^x+1)^2",
        options: [
            "A. (sin(e^x+1) - e^x(1+cos)) / (e^x+1)^2",
            "B. (cos(e^x+1)^2 + e^x(1+cosx)) / (e^x+1)",
            "C. (cos(e^x+1) - (e^x+1)^2) / e^x(1+sinx)",
            "D. (cos(e^x+1) - e^x(1+sinx)) / (e^x+1)^2"
        ]
    },
    {
        numb: 10,
        question: "Find the derivative of f(g(x)) if f(x) = x^7 and g(x) = x^2 + 1",
        answer: "A. 14x(x^2 + 1)^6",
        options: [
            "A. 14x(x^2 + 1)^6",
            "B. 7x(x^2 + 1)^7",
            "C. 2x(7x)^6",
            "D. 14x / (x^2 + 1)^6"
        ]
    },
    
];


let physicsquestions = [
    {
        numb: 1,
        question: "What is Newtons Second Law?",
        answer: "C. Acceleration is proportional to force and inversely proportional to mass",
        options: [
            "A. An object at rest will remain at rest unless acted upon by an external force",
            "B. Every action has an equale an opposite reaction",
            "C. Acceleration is proportional to force and inversely proportional to mass",
            "D. The total energy of an isolated system is constant despite internal changes"
        ]
    },
    {
        numb: 2,
        question: "A picture frame falls down from the wall at a height of 13m. What is the velocity of the frame when it reaches the ground?",
        answer: "B. 15.97 m/s [down]",
        options: [
            "A. 15.97 m/s [up]",
            "B. 15.97 m/s [down]",
            "C. 255.06 m/s [down]",
            "D. 1.51 m/s [down]"
        ]
    },
    {
        numb: 3,
        question: "A 16kg box is sliding on a ramp. The angle between the line perpendicular to the ramp and directly below is 30 degrees. If the coefficent of kinetic friction is 0.29 how much force do you need to exert to stop the box?",
        answer: "C. 39.06 N [Up Ramp]",
        options: [
            "A. 39.06 N [Down Ramp]",
            "B. 55.72 N [Up Ramp]",
            "C. 39.06 N [Up Ramp]",
            "D. 110 N [Up Ramp]"
        ]
    },
    {
        numb: 4,
        question: "You have 2 ballS. You throw ball A at an 80 degree angle up and ball B at a 10 degrees angle (you threw each at same inital speed). The speed of ball B when it reaches the ground is",
        answer: "A. the same as ball A when it reaches the ground",
        options: [
            "A. the same as ball A when it reaches the ground",
            "B. larger than ball A when it reaches the ground",
            "C. smaller than ball A when it reaches the ground",
            "D. very slightly less then the speed of ball A when it reaches the ground"
        ]
    },
    {
        numb: 5,
        question: "A 1200 kg car starts from rest and accelerates to 72 / km hr in 20.0 s. Friction exerts an averageforce of 450 N on the car during this time. What is the net work done on the car??",
        answer: "D. 2.4 * 10^5 J",
        options: [
            "A. -2.4 * 10^5 J",
            "B. 24000 Watts",
            "C. 2.4 * 10^4 J",
            "D. 2.4 * 10^5 J"
        ]
    },
    {
        numb: 6,
        question: "A clarinet is 60.0 cm long. Find the first three harmonic frequencies given that the air tempature is 15 degrees Celcius",
        answer: "B. [142 Hz, 426 Hz, 709 Hz]",
        options: [
            "A. [142 Hz, 284 Hz, 568 Hz]",
            "B. [142 Hz, 426 Hz, 709 Hz]",
            "C. [71 Hz, 213 Hz, 405 Hz]",
            "D. [142 Hz, 426 Hz, 710 Hz]"
        ]
    },
    {
        numb: 7,
        question: "A cart is attached to a hanging mass. The mass is 0.5 kg and the cart is 0.26 kg assume no friction what is accleeration of cart",
        answer: "B. 6.46 m/s^2",
        options: [
            "A. 12.92 m/s^2",
            "B. 6.46 m/s^2",
            "C. 3.23 m/s^2",
            "D. 5.14 m/s^2",
        ]
    },
    {
        numb: 8,
        question: "When two waves pass through each other, they create a combined larger wave. The waves...",
        answer: "A. Constructivly interfere",
        options: [
            "A. Constructivly interfere",
            "B. destructivly interfere",
            "C. transmit upwards",
            "D. then reflect back in the opposite direction",
        ]
    },
    {
        numb: 9,
        question: "A cart is attached to a hanging mass. The cart is 2kg and the mass is 50g. There is a 0.1 N force of friction on the cart. What is the accleration and force exerted by the string?",
        answer: "C. a = 0.195 m/s^2 Ft = 0.490 N",
        options: [
            "A. a = 0.3 m/s^2 , Ft = 0.7 N",
            "B. a = 0.490 m/s^2 , Ft = 0.195 N",
            "C. a = 0.195 m/s^2 , Ft = 0.490 N",
            "D. a = 2 m/s^2 , Ft = 12 N",
        ]
    },
    {
        numb: 10,
        question: "Imagine you are a passenger upside-down at the top of a vertical looping roller coaster. The centripetal forceacting on you at this position",
        answer: "D. all of the above",
        options: [
            "A. is perhaps the least of anywhere in the loop",
            "B. is supplied at least partly by gravity",
            "C. is supplied partly by the seat of the roller coaster",
            "D. all of the above",
        ]
    }
];

let chemistryquestions = [
    {
        numb: 1,
        question: "Which of these is most soluable in water (You are allowed a Periodic Table for all Questions)?",
        answer: "C. CH3OH",
        options: [
            "A. H2S",
            "B. (Pb(OH)2)",
            "C. CH3OH",
            "D. CO2"
        ]
    },
    {
        numb: 2,
        question: "What is the molecular shape of NH3?",
        answer: "B. Trigonal Pyramidal",
        options: [
            "A. Trigonal Planar",
            "B. Trigonal Pyramidal",
            "C. Octahedral",
            "D. None of the Above"
        ]
    },
    {
        numb: 3,
        question: "Which type of reaction will an alkene not undergo?",
        answer: "C. Dehydration",
        options: [
            "A. hydration",
            "B. addition",
            "C. Dehydration",
            "D. polymerization"
        ]
    },
    {
        numb: 4,
        question: "Given the electron configuration [Ne]3s^2 3p^5, identify the element.",
        answer: "A. Chlorine",
        options: [
            "A. Chlorine",
            "B. Fluoride",
            "C. Bromide",
            "D. Iodine",
        ]
    },
    {
        numb: 5,
        question: "C8H18(l) + O2(g) --------> CO2(g) + H2O(g) Using this equation solve: A litre of octane h as a mass of 690.0g. What mass of oxygen gas is required to burn one litre octane? ",
        answer: "D. (2.42 x 10^3 g )",
        options: [
            "A. (2.42 x 10^2 g )",
            "B. (1.41 x 10^3 g )",
            "C. (4.84 x 10^3 g )",
            "D. (2.42 x 10^3 g )",
        ]
    },
    {
        numb: 6,
        question: "To generate hydrogen gas, a student adds 5.77 g of zinc to 80.1 mL of 4.00 mol/L hydrochloric acid in an Erlenmeyer flask. When the reaction is over, what is the concentration of aqueous zinc chloride in the flask?",
        answer: "B. 1.10 mol/L ",
        options: [
            "A. 2.50 mol/L ",
            "B. 1.10 mol/L ",
            "C. 1.09 mol/L ",
            "D. 0.78 mol/L ",
        ]
    },
    {
        numb: 7,
        question: "CaCO3(s) -----> CaO(s) + CO2(g) What volume of CO2(g), measured at STP, is produced if 15.2 grams of CaCO3(s) is heated?",
        answer: "C. 3.40 L",
        options: [
            "A. 4.40 L",
            "B. 2.90 L",
            "C. 3.40 L",
            "D. 1.75 L",
        ]
    },
    {
        numb: 8,
        question: "The percentage composition of chlorine, by mass, in the compound K2PtCl4 is",
        answer: "D. 34.2%",
        options: [
            "A. 50.2%",
            "B. 24.1%",
            "C. 74.9%",
            "D. 34.2%",
        ]
    },
    {
        numb: 9,
        question: "Which of the following are equal for a chemical system at equilibrium?",
        answer: "A. the rate of the forward and reverse reaction",
        options: [
            "A. the rate of the forward and reverse reaction",
            "B. the concentrations of reactant and products are equal",
            "C. the time that a particular atom or molecule spends as a reactant and product are equal",
            "D. all of the above",
        ]
    },
    {
        numb: 10,
        question: "What is the fuel value of a 3.00 g sample of banana that produces 12 110 J of energy? ",
        answer: "B. 4.04 KJ/g",
        options: [
            "A. 2.48 KJ/g",
            "B. 4.04 KJ/g",
            "C. 16.2 KJ/g",
            "D. 36.3 KJ/g",
        ]
    },
];

let biologyquestions = [
    {
        numb: 1,
        question: "Of the following, which is not considered to by a polymer?",
        answer: "C. Fats",
        options: [
            "A. Cellulose",
            "B. Protein",
            "C. Fats",
            "D. RNA",
        ]
    },
    {
        numb: 2,
        question: "The shape of an enzyme’s active site is complimentary to that of:",
        answer: "B. its substrate",
        options: [
            "A. the product formed in the reaction",
            "B. its substrate",
            "C. a quaternary protein structure",
            "D. the substrate’s primary structure",
        ]
    },
    {
        numb: 3,
        question: "Aerobic respiration involves which one of the following?",
        answer: "C. the release of energy in cells with an adequate supply of oxygen",
        options: [
            "A. the input of energy into cells without sufficient oxygen",
            "B. the sequence of events in fermentation",
            "C. the release of energy in cells with an adequate supply of oxygen",
            "D. breathing very rapidly, getting too much oxygen into the blood"
        ]
    },
    {
        numb: 4,
        question: "Where in the electron transport chain does the energy come from for the synthesis of ATP?",
        answer: "A. an electrochemical gradient across the inner mitochondrial membrane",
        options: [
            "A. an electrochemical gradient across the inner mitochondrial membrane",
            "B. the breakdown of water",
            "C. the combination of hydrogen ions, electrons, and oxygen to form water",
            "D. the cytochromes"
        ]
    },
    {
        numb: 5,
        question: "The percentage composition of a nucleic acid molecule found in bacterial cells is 32.3% adenine 30.7% thymine 19.1% cytosine 17.9% guanine The molecule is most likely to be?",
        answer: "D. single-stranded DNA",
        options: [
            "A. messenger RNA.",
            "B. mitochondrial DNA.",
            "C. double-stranded DNA.",
            "D. single-stranded DNA"
        ]
    },
    {
        numb: 6,
        question: "The enzyme which unwinds the double helix by disrupting hydrogen bonds is:?",
        answer: "B. helicase",
        options: [
            "A. gyrase",
            "B. helicase",
            "C. exonuclease",
            "D. none of the above"
        ]
    },
    {
        numb: 7,
        question: "What happens during capping and tailing?",
        answer: "C. a methyl 5’ cap and a 3’ poly A tail are added",
        options: [
            "A. a methyl 5’ tail and a 3’ poly A cap are added",
            "B.  a methyl 3’ tail and a 5’ poly A cap are added",
            "C. a methyl 5’ cap and a 3’ poly A tail are added",
            "D. a methyl 3’ cap and a 5’ poly A tail are added"
        ]
    },
    {
        numb: 8,
        question: "Gel electrophoresis separates fragments of DNA using",
        answer: "A. a sieving medium through which DNA molecules are moved by electrical forces",
        options: [
            "A. a sieving medium through which DNA molecules are moved by electrical forces",
            "B. a sieving medium through which DNA fragments are moved by gravitational forces.",
            "C. movement through a sieving medium by positively charged DNA molecules attracted by a negative pole",
            "D. movement of DNA fragments of different sizes at different speeds as a result of ultracentrifugation"
        ]
    },
    {
        numb: 9,
        question: "The coordination of motor activities in mammals is carried out by which of the following?",
        answer: "D. cerebellum",
        options: [
            "A. pons",
            "B. medulla",
            "C. cerebrum",
            "D. cerebellum"
        ]
    },
    {
        numb: 10,
        question: "The population dispersion pattern in which organisms are spread throughout their habitat in anunpredictable manner is known as which of the following?",
        answer: "B. random",
        options: [
            "A. patterned",
            "B. random",
            "C. ecological",
            "D. Uniform"
        ]
    }
];

let financequestions = [
    {
        numb: 1,
        question: "Which of the following is a true statement about financial advisors",
        answer: "B. They help clients execute trades in the market.",
        options: [
            "A. They only help clients with investing and budgeting",
            "B. They help clients execute trades in the market.",
            "C. They meet with their clients once",
            "D. They can only help wealthy people"
        ]
    },
    {
        numb: 2,
        question: "Which of the following statements best represents a seller’s market:",
        answer: "B. There is high demand, low supply, and rising prices",
        options: [
            "A. There is low demand, high supply, and low prices",
            "B. There is high demand, low supply, and rising prices",
            "C. Producers produce less and consumers buy more.",
            "D. It is the best time for consumers to buy"
        ]
    },
    {
        numb: 3,
        question: "Which of the following best explains the overall purpose of accounting",
        answer: "A. To control finances by keeping accurate financial information",
        options: [
            "A. To control finances by keeping accurate financial information",
            "B. To reduce financial uncertainty and make accidental loss manageable",
            "C. To help a business make the most money possible",
            "D. To identify external opportunities and threats"
        ]
    },
    {
        numb: 4,
        question: "Which of the following is the formula used to calculate retained earnings:",
        answer: "B. Beginning period retained earnings + Net income (or loss) − Net dividends",
        options: [
            "A. Beginning period retained earnings − Net income (or loss) + Net dividends",
            "B. Beginning period retained earnings + Net income (or loss) − Net dividends",
            "C. Capital expenditures + Net income (or loss) − Net dividends",
            "D. Operating cash flow − Capital expenditures + Net income (or loss)"
        ]
    },
    {
        numb: 5,
        question: "Cost accounting is an activity used mainly in __________ accounting.",
        answer: "A. managerial",
        options: [
            "A. managerial",
            "B. forensic",
            "C. electric",
            "D. financial"
        ]
    },
    {
        numb: 6,
        question: "Zach wants to better understand how his company compares to its competition. He intends to run financial analyses to compare the business practices and standards between firms in his industry. What strategy is Zach using?",
        answer: "B. Benchmarking",
        options: [
            "A. Smishing",
            "B. Benchmarking",
            "C. Forecasting",
            "D. Exporting"
        ]
    },
    {
        numb: 7,
        question: "Which of the following statements about professional associations in the finance industry is true:",
        answer: "D. Joining a professional association can help with networking.",
        options: [
            "A. The financial services industry only has national associations.",
            "B. Financial advisors are required to join a professional association.",
            "C. Professional associations are uniform in cost, size, and history.",
            "D. Joining a professional association can help with networking."
        ]
    },
    {
        numb: 8,
        question: "A company budgeted $20,000 for its monthly sales, but only earned $16,000 by the end of the month. When conducting a variance analysis, what is the variance in this situation?",
        answer: "A. $4,000",
        options: [
            "A. $4,000",
            "B. $36,000",
            "C. $16,000",
            "D. $20,000"
        ]
    },
    {
        numb: 9,
        question: "Which of the following is the best way to describe enterprise risk management:",
        answer: "D. Firmwide strategy",
        options: [
            "A. Traditional strategy",
            "B. Bottom-up approach",
            "C. Divisive approach",
            "D. Firmwide strategy"
        ]
    },
    {
        numb: 10,
        question: "Mina has a $3,000 investment held for four years in her savings account with 10% interest paid annually. Whatis the future value of her money?",
        answer: "C. $4,200",
        options: [
            "A. $5,100",
            "B. $3,500",
            "C. $4,200",
            "D. $3,400"
        ]
    },
];