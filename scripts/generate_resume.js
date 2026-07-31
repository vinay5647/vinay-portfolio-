const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Minimal valid PDF structure for Vinay Bharadwaj Resume
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
<< /Length 580 >>
stream
BT
/F1 24 Tf
50 720 Td
(VINAY BHARADWAJ) Tj
/F1 12 Tf
0 -25 Td
(AI & Machine Learning Engineer | Python & FastAPI Developer) Tj
0 -15 Td
(Email: bharadwajvinay40@gmail.com | Phone: +91 8147836287) Tj
0 -15 Td
(GitHub: https://github.com/vinay5647/vinay-portfolio-) Tj
0 -30 Td
(EDUCATION) Tj
0 -15 Td
(Bachelor of Engineering in Computer Science - AI & ML) Tj
0 -15 Td
(Maharaja Institute of Technology Mysore | 2021 - 2025) Tj
0 -30 Td
(TECHNICAL SKILLS) Tj
0 -15 Td
(Languages & Tools: Python, C++, Java, FastAPI, REST APIs, SQL, MongoDB) Tj
0 -15 Td
(AI/ML & Frontend: Machine Learning, NLP, Deep Learning, React, Next.js) Tj
0 -30 Td
(PROJECTS) Tj
0 -15 Td
(1. People Meet Agent - Autonomous AI Scheduling & Matching Agent) Tj
0 -15 Td
(2. Sentiment Analysis using NLP - Deep Learning Transformer Classification) Tj
0 -15 Td
(3. Rain Detection System - Machine Learning Meteorological Forecast Model) Tj
0 -15 Td
(4. AI Unit Converter - Contextual Natural Language Conversion Engine) Tj
0 -15 Td
(5. Agritech Startup Website - Full-Stack Crop Diagnostics & Analytics Portal) Tj
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
0000000877 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
948
%%EOF`;

fs.writeFileSync(path.join(publicDir, 'Vinay_Bharadwaj_Resume.pdf'), pdfContent);
console.log('Successfully generated Vinay_Bharadwaj_Resume.pdf!');
