const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Clean formatted PDF of Vinay Bharadwaj's official resume
const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 1200 >>
stream
BT
/F1 22 Tf
220 740 Td
(Vinay Bharadwaj) Tj
/F1 10 Tf
-120 -20 Td
(+91 8147836287 | bharadwajvinay40@gmail.com | LinkedIn | GitHub) Tj
0 -25 Td
(PROFESSIONAL SUMMARY) Tj
0 -12 Td
(Final-year Computer Science and Engineering \(AIML\) student with a strong foundation in Python, machine learning,) Tj
0 -12 Td
(and software development. Passionate about building practical, real-world solutions through AI and continuously) Tj
0 -12 Td
(improving technical skills by working on hands-on projects and internships.) Tj
0 -20 Td
(EDUCATION) Tj
0 -12 Td
(Bachelor of Engineering - Computer Science \(AI & ML\) | Present) Tj
0 -12 Td
(Maharaja Institute of Technology Mysore) Tj
0 -20 Td
(PROJECTS) Tj
0 -12 Td
(Sentiment Analysis using NLP \(Python, Scikit-learn, NLTK, Pandas\) - 2025) Tj
0 -12 Td
(- Developed an NLP-based sentiment analysis model achieving 85% classification accuracy.) Tj
0 -15 Td
(Rain Detection System using ESP8266 - 2025) Tj
0 -12 Td
(- IoT rain detection system to monitor rainfall, temperature, and humidity with real-time visualization.) Tj
0 -15 Td
(AI Unit Converter \(Flutter\) - 2025) Tj
0 -12 Td
(- Cross-platform unit converter application built with Flutter & Dart featuring offline functionality.) Tj
0 -15 Td
(People Meet Agent - 2025) Tj
0 -12 Td
(- AI-powered event management platform automating event discovery & personalized recommendations.) Tj
0 -15 Td
(Agritech Start up website - 2026) Tj
0 -12 Td
(- Built responsive website from scratch for an agritech startup within 24 hours.) Tj
0 -20 Td
(TECHNICAL SKILLS) Tj
0 -12 Td
(Programming: Python, C++ \(Oops\), Basics of Java) Tj
0 -12 Td
(Machine Learning/AI: NLP, Basics of Deep Learning, Data Science) Tj
0 -12 Td
(Databases & Tools: SQL, MongoDB, Data Visualization | Version Control: GitHub) Tj
0 -12 Td
(Frontend: HTML, CSS | Soft Skills: Leadership, Communication, Team Collaboration) Tj
0 -20 Td
(ACHIEVEMENTS & ADDITIONAL INFO) Tj
0 -12 Td
(- 2X Ideathon Winner | Finalist in multiple technical innovation competitions) Tj
0 -12 Td
(- Languages: English, Kannada, Hindi) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000246 00000 n 
0000001500 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
1570
%%EOF`;

fs.writeFileSync(path.join(publicDir, 'Vinay_Bharadwaj_Resume.pdf'), pdfContent);
console.log('Successfully generated official Vinay_Bharadwaj_Resume.pdf!');
