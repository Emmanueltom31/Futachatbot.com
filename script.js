 (function() {
        // ---------- specific prompt response map ----------
        const responseMap = {
            'hello': 'Hello there! 👋 Welcome to Futa chatbot How can I assist you today?',
            'help': 'Available prompts:  hello, help, joke, time, weather, motivate , How many faculties are in futa, How many departments are in futa, What is the name of the Vc , How is result calculated, What is futa grading system, How many lecture theater are in futa, How many football fields are in Futa, How many entrance gates are in Futa, What is the name of futa football squad , How to apply for hostel in futa  How do i report a missing ID card . What are the names of the deans in futa, What are the names of departments in School of Argriculture  and Agricultural Technology, What are the names of the departments in School of Electrical Systems Engineering, What is the name of departments in School of Infrastructure Minerals and Manufacturing Engineering ,What are the names of the departments in School of Basic Medical Science,What are the names of the departments in School of EARTH AND MINERAL SCIENCE ,What are the names of the departments in School of ENVIRONMENTAL TECHNOLOGY,What are the names of the departments in School of LOGISTICS AND INNOVATION TECHNOLOGY,What are the names of the departments in School of Life Science,What are the names of the departments in School of Physical Science,What are the names of the departments in School of Computing, What is the name of the Deputy VC academics,What is the name of the Deputy Vice chancellor academics, What is the name of the Deputy VC development , What is the name of the Deputy Vice chancellor development, What is the name of futa Registar, What is the name of futa Bursar,What is the name of futa Librarian  — just ask!',
            
            'How old is Futa': 'The Federal University of Technology, Akure (FUTA) was established in 1981 by the Federal Government of Nigeria. As of 2026, it is 45 years old, having officially commenced academic activities in 1982. ',
    
            'How many faculties are in futa': 'The Federal University of Technology, Akure (FUTA) operates with approximately eight to ten academic schools (faculties), which house various departments and centers.    School of Infastructure and Manufacturing Engineering  (SIME) School of Electrical Systems Engineering (SESE) School of Computing (SOC)  School of Environmental Technology (SET) School of Earth and Mineral Sciences (SEMS) School of Life Sciences (SLS) School of Physical Sciences (SPS) School of Logistic and Innovation Technology (SLIT) School of Basic Medical Sciences (SBMS) ' ,

            'How many departments are in futa': 'The Federal University of Technology, Akure (FUTA) has over fifty academic departments organized across ten specialized academic schools/faculties. These schools cover diverse fields in engineering, science, computing, environmental technology, agricultural technology, and management technology, focusing on research-driven, technological education.',

           'What is the name of the Vc' : 'The current vice-chancellor of futa is Prof. Adenike Temidayo Oladiji',

           'What is the name of the vice-chancellor' : 'The current vice-chancellor of futa is Prof. Adenike Temidayo Oladiji',

           'How is result calculated' : 'The following terminologies and abbreviations are commonly used in the computation of Grade Point Average (GPA)     .(a) Total Load Units (TLU): This is the total number of course units carried by a student in a particular semester. It is the summation of the load units on all courses carried during the semester. For example, a student who is taking 6 courses of 3 units each has a TLU of 18 for that semester.  \n  (b) Cumulative Load Units (CLU): This is the summation of Total Load Units over all the semesters from the beginning to date. A student who is prone to repeating courses will finish (if he does not drop out) with a higher CLU than his non-repeating colleagues, and will most likely require a longer time to complete requirements for the award of degree.\n (c) Total Credit Points (TCP): This is the sum of the products of course units and rating in each course, for the entire semester. For example, consider a student who took 5 courses of 3 units each. Suppose the grades he obtained in the four courses were A, B, C, D and E. The TCP of this student is obtained as (3 x 5.0) + (3 x 4.0) + (3 x 3.0) + (3 x 2.0) + (3 x 1.0) = 15.00 + 12.0 + 9.0 + 6.0 + 3.0 = 45.0.  \n (d) Cumulative Credit Point (CCP): This is the summation of Total Credit Points over all semesters from the beginning to date.  \n  (e) Grade Point Average (GPA): This is the Total Credit Points (TCP) divided by the Total Load Unit (TLU). For example, consider the student’s scores referred to above. His/her TCP is 45.0 and his TLU is 15 (i.e. 5 courses at 3 units each for the semester). His GPA is therefore 45/15 = 3.00. The higher possible GPA that can be earned is 5.0 and that is when a student has earned a grade of “A” in every course during the semester. The lowest GPA obtained is 0.00.    \n  (f) Cumulative Grade Point Average (CGPA): This is not the summation of GPA’s for the semesters. Rather, is the summation of TCP for all semesters to date, divided by the summation of TLU for the said semesters. In effect, CGPA = CCP/CLU.     ',

           'What is futa grading system' : '70-100 = A with a grade point of 5. \n   60 – 69=B with a grade point of 4.   \n  50 – 59 = C with a grade point of 3.   \n  45 – 49 = D with a grade point of 2 .  \n  40 – 44 = E with a grade point of 1.  \n  43 – 0 = F with a grade point of 0',

           'What are futa Classes of Degree' :'First Class	4.50 - 5.00\n 2nd Class(UpperDivision)\n	3.50 - 4.49 \n2nd Class (Lower Division)	2.40 - 3.49 3rd Class	1.50 - 2.39 Pass	1.00 - 1.49', 

           'How many lecture theater are in futa' :'There are 12 lecture theater in Futa',

           'How many football fields are in Futa' : 'There are 2 major football fields in futa which are the mini and main pitch located at north gate',

           'How many entrance gates are in Futa' : 'Futa has 3 entrance gates which are south gate , North gate and west gate ',

           'What is the name of futa football squad' : 'Futa official football squad is called "FUTA TIGERS" ',

           'What are the names of the deans in futa' : 'Prof. ADEBAYO OLABODE THOMAS- Dean of SAAT\n   PROFESSOR ADEGOKE MELODI- Dean of SESE\n Prof. Prof. C. O. Akinbile- Dean of SIMME\n Prof. Akeem Olalekan Lawal- Dean of SBMS\n Professor A. Y. B. Anifowose- Dean of SEMS\n Prof. Isaac Olaniyi AJE- Dean of SET  Prof. O. O. Simon-Oke- Dean of SLIT\n Prof. Kola Oladunmoye- Dean of SLS\n Prof. F. B. Adebola- Dean of SPS\n  Prof. B. K Alese- Dean of SOC',


           'What are the names of departments in School of Argriculture  and Agricultural Technology' : ' Agricultural Extension & Communication Technology\n Agricultural & Resource Economics\n  Animal Production & Health\n Crop, Soil & Pest Management,\n Fisheries & Aquaculture Technology\n Ecotourism & Wildlife Management \nForestry & Wood Technology \n and Food Science & Technology.',

           'What are the names of the departments in School of Electrical Systems Engineering' : 'BIOMEDICAL ENGINEERING \n COMPUTER ENGINEERING DEPARTMENT \n ELECTRICAL AND ELECTRONICS ENGINEERING DEPARTMENT \n INFORMATION AND COMMUNICATION ENGINEERING DEPARTMENT \n  MECHATRONICS ENGINEERING DEPARTMENT',

           'What is the name of departments in School of Infrastructure Minerals and Manufacturing Engineering ' : 'Agricultural Engineering\n Chemical Engineering\n Civil and Environmental Engineering\n industrial and Production Engineering\n Mechanical Engineering\n Metallurgical and Materials Engineering; \nand Mining Engineering',

           'What are the names of the departments in School of Basic Medical Science' : ' Anatomy\n ,Biomedical Technology\n, Medical Laboratory Science\n ,Physiology\n ,Medicine And Surgery (Pre-Clinicals)\n, Department Of Public Health',

           'What are the names of the departments in School of EARTH AND MINERAL SCIENCE' : ' Applied Geophysics\n, Applied Geology\n, Meterology\n, Marine Science & Technology\n, Remote Sensing & GIS',

           'What are the names of the departments in School of ENVIRONMENTAL TECHNOLOGY' : ' Architecture\n, Building\n,Estate Management\n Industrial Design\n,Quantity Surveying,\nSurveying & GeoInformatics\n, Urban & Regional Planning',

           'What are the names of the departments in School of LOGISTICS AND INNOVATION TECHNOLOGY' : '»  Department Of Business Information Technology,\n Department Of Entrepreneurship Management Tech.,\n Department Of Project Management Technology,\nDepartment Of Logistics And Transport Technology,\nSecurities And Investment Management Technology',

           'What are the names of the departments in School of Life Science' : '  Biology,\n Biochemistry,\n Microbiology,\n Biotechnology',

           'What are the names of the departments in School of Physical Science' : '  Chemistry,\n Mathematics,\n Physics,\n Statistics',

           'What are the names of the departments in School of Computing' : '»  Computer Science,\n Information Technology,\n Cybersecurity,\n Information Systems,\n Data Science\n Software Engineering',

           'What is the name of the Deputy VC academics' : 'The name of the deputy Vice chancellor academics is Prof. Taiwo Timothy Amos',

            'What is the name of the Deputy Vice chancellor academics' : 'The name of the deputy Vice chancellor academics is Prof. Taiwo Timothy Amos',

           'What is the name of the Deputy VC development' : 'The name of the deputy Vice chancellor development is Prof. Sunday Samuel Oluyamo',

           'What is the name of the Deputy Vice chancellor development' : 'The name of the deputy Vice chancellor development is Prof. Sunday Samuel Oluyamo',

           'What is the name of futa Registar' : 'The name of futa Registar is Mr Charles Olusegun Adeleye',

          'What is the name of futa Bursar' : 'The name of futa Bursar is Mr. Peter Osadugba',

          'What is the name of futa Librarian' : 'The name of futa Librarian is Dr Robert Akinade Awoyemi',
 
           

           'How to apply for hostel in futa' : 'To apply for a hostel at the Federal University of Technology, Akure (FUTA), you must have paid your school fees, then log in to the FIRARS portal to select a room and pay via Remita. Accommodation is limited, often on a first-come, first-served basis, and requires immediate payment after selection to secure the space.  step1 Clearance & Fees: Ensure you have completed your bio-data registration and paid your full school fees.  step 2 Log in: Visit the FUTA FIRARS portal and log in using your matriculation number or JAMB registration number.  step 3 Select Hostel: Navigate to the accommodation section (often under "Accommodation").  step 4 Book Room: Select your preferred hostel/room. Note that for some, you may need to wait for approval, which can take 72 hours. step 5 Payment: Generate a Remita Invoice (RRR) on the portal and make payment within 48 hours. step 6 Confirmation: Re-log in to confirm payment, print the Hostel Fee Receipt/Allocation Form, and report to the Student Affairs Division for documentation.',

           'How do i report a missing ID card' : 'To report a missing ID card at the Federal University of Technology Akure (FUTA) and request a replacement, you should follow the procedures set by the Student Affairs Division.Here is the step-by-step process: Step 1 Obtain Required Documentation:Police Report: Get a police report confirming the loss of your ID card.Court Affidavit: Obtain a Sworn Affidavit from a High Court of Justice stating the loss of your identification.Letter from HOD: Write a formal letter to the Dean of Student Affairs, endorsed by your Head of Department (HOD).  Step 2 Make Necessary Payments:Generate a Remita Retrieval Reference (RRR) for the replacement fee (if applicable) and pay via the bank.Gather your evidence of payment, including your school fees receipt for the current session.  Step 3 Submit Documents:Take all documents (Affidavit, Police Report, Letter from HOD, Payment Receipt, and passport photographs) to the Student Affairs Unit (Block F) for clearance and processing.',



           
            'time': '🕒 Current time for you: ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            'weather': '🌤️ I wish I could check live weather, but try a specific prompt like "time" or "joke"!',
            'motivate': '🚀 You are capable of amazing things. Keep coding, stay curious!',
            'default': 'I only respond to specific prompts: hello, help, joke, time, weather, motivate , How many faculties are in futa, How many departments are in futa, What is the name of the Vc , How is result calculated, What is futa grading system, How many lecture theater are in futa, How many football fields are in Futa, How many entrance gates are in Futa, What is the name of futa football squad , How to apply for hostel in futa, How do i report a missing ID card . What are the names of the deans in futa, What are the names of departments in School of Argriculture  and Agricultural Technology, What are the names of the departments in School of Electrical Systems Engineering, What is the name of departments in School of Infrastructure Minerals and Manufacturing Engineering ,What are the names of the departments in School of Basic Medical Science,What are the names of the departments in School of EARTH AND MINERAL SCIENCE ,What are the names of the departments in School of ENVIRONMENTAL TECHNOLOGY,What are the names of the departments in School of LOGISTICS AND INNOVATION TECHNOLOGY,What are the names of the departments in School of Life Science,What are the names of the departments in School of Physical Science,What are the names of the departments in School of Computing, What is the name of the Deputy VC academics,What is the name of the Deputy Vice chancellor academics, What is the name of the Deputy VC development , What is the name of the Deputy Vice chancellor development, What is the name of futa Registar, What is the name of futa Bursar,What is the name of futa Librarian'
        };

        // DOM elements
        const chatWindow = document.getElementById('chatWindow');
        const userInput = document.getElementById('userInput');
        const sendBtn = document.getElementById('sendBtn');
        const chips = document.querySelectorAll('.chip');

        // scroll to latest message
        function scrollToBottom() {
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }

        // add a message to the chat (type = 'user' or 'bot')
        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');

            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            // simple bold/italic formatting for bot (optional)
            if (sender === 'bot') {
                // convert markdown-like   to bold (just for nicer display)
                let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                bubble.innerHTML = formattedText;
            } else {
                bubble.textContent = text;
            }

            messageDiv.appendChild(bubble);

            // tiny timestamp (optional)
            const timeSpan = document.createElement('div');
            timeSpan.classList.add('timestamp');
            timeSpan.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            messageDiv.appendChild(timeSpan);

            chatWindow.appendChild(messageDiv);
            scrollToBottom();
        }

        // handle sending a message (user input)
        function handleUserMessage(messageText) {
            if (!messageText || messageText.trim() === '') return;

            const trimmed = messageText.trim();

            // 1. add user message to UI
            addMessage(trimmed, 'user');

            // 2. determine bot answer (specific prompt logic)
            let reply = responseMap['default'];   // fallback


const lowerMsg = trimmed.toLowerCase();
            // check exact matches or if the message includes the keyword (loose, but we want specific)
            // we use a more controlled approach: map keys, but also allow "help me" to trigger help?
            // we'll check if lowerMsg includes any of the keys, but to keep it 'specific' we also allow
            // partial? but spec wants "specific prompts", we'll make it flexible but prefer exact match first.
            let matchedKey = null;
            // 1. exact match (full trimmed)
            if (responseMap.hasOwnProperty(lowerMsg)) {
                matchedKey = lowerMsg;
            } else {
                // 2. if not exact, check if the message starts with or equals a key (to avoid false on "joke123")
                // we want specific so only predefined words. use word boundary via includes but careful: 'help' in 'helpme'? avoid.
                const keys = ['hello', 'help', 'How old is Futa', 'How many faculties are in futa', 'What is the name of the Vc', 'How is result calculated', 'What is the name of the vice-chancellor' ,'What is futa grading system','What are futa Classes of Degree', 'How many lecture theater are in futa', 'How many football fields are in Futa', 'How many departments are in futa', 'How many entrance gates are in Futa', 'What is the name of futa football squad', 'How to apply for hostel in futa', 'How do i report a missing ID card', 'time', 'weather', 'motivate', 'What are the names of the deans in futa', 'What are the names of departments in School of Argriculture  and Agricultural Technology', 'What are the names of the departments in School of Electrical Systems Engineering', 'What is the name of departments in School of Infrastructure Minerals and Manufacturing Engineering ','What are the names of the departments in School of Basic Medical Science','What are the names of the departments in School of EARTH AND MINERAL SCIENCE','What are the names of the departments in School of ENVIRONMENTAL TECHNOLOGY','What are the names of the departments in School of LOGISTICS AND INNOVATION TECHNOLOGY','What are the names of the departments in School of Life Science','What are the names of the departments in School of Physical Science','What are the names of the departments in School of Computing', 'What is the name of the Deputy VC academics','What is the name of the Deputy Vice chancellor academics', 'What is the name of the Deputy VC development' , 'What is the name of the Deputy Vice chancellor development', 'What is the name of futa Registar', 'What is the name of futa Bursar','What is the name of futa Librarian' ];

                for (let key of keys) {
                    // if the message is exactly key or starts with key and after that only space/punctuation? simpler:
                    // we'll just detect if the word is present as a standalone word (rough)
                    const regex = new RegExp('\\b' + key + '\\b', 'i');
                    if (regex.test(lowerMsg)) {
                        matchedKey = key;
                        break;
                    }
                }
            }

            if (matchedKey) {
                // special case: time should be dynamic every time
                if (matchedKey === 'time') {
                    reply = '🕒 Current time for you: ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                } else {
                    reply = responseMap[matchedKey];
                }
            } else {
                reply = responseMap['default'];
            }

            // 3. small delay before bot answers (natural)
            setTimeout(() => {
                addMessage(reply, 'bot');
            }, 200);
        }

        // event listeners
        sendBtn.addEventListener('click', function() {
            const message = userInput.value;
            if (message.trim() !== '') {
                handleUserMessage(message);
                userInput.value = '';  // clear input
            }
        });

        userInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (userInput.value.trim() !== '') {
                    handleUserMessage(userInput.value);
                    userInput.value = '';
                }
            }
        });

        // chip click: fill prompt? we send directly as message for convenience
        chips.forEach(chip => {
            chip.addEventListener('click', function() {
                const promptText = this.getAttribute('data-prompt');
                if (promptText) {
                    // send as message (bypass input)
                    handleUserMessage(promptText);
                }
            });
        });

        // minor: update time chip if clicked to show dynamic
        // already handled in handleUserMessage because matchedKey 'time' creates fresh timestamp

        // on load, add a little extra space
        window.addEventListener('load', function() {
            scrollToBottom();
        });
    })();