async function submitForm() {

  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  let aadhaar = document.getElementById("aadhaar").value.trim();
  let problem = document.getElementById("problem").value.trim();
  let person = document.getElementById("person").value;
  let doctor = document.getElementById("doctor").value;
  let date = document.getElementById("date").value;

  // VALIDATION
  if (!name || !phone || !email || !aadhaar || !problem || !person || !date) {
    alert("⚠ Please fill all fields");
    return;
  }

  if (aadhaar.length !== 12 || isNaN(aadhaar)) {
    alert("⚠ Aadhaar must be 12 digits");
    return;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    alert("⚠ Enter valid 10-digit phone number");
    return;
  }


  let appointment = {
    name,
    phone,
    email,
    aadhaar,
    problem,
    person,
    doctor,
    date
  };

  try {
  const res = await fetch("https://sehat-sahayata-backend.onrender.com/api/appointments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(appointment)
  });

  if (res.ok ) {
    alert("✅ Appointment Booked Successfully!");
  } else {
    alert("❌ Error saving appointment");
  }

} catch (err) {
  console.error(err);
  alert("❌ Backend not connected");
}

}


const healthData = [

  // GENERAL
  { keywords: ["fever", "high temperature", "body heat"], response: "Possible fever. Stay hydrated.", doctor: "General Physician", severity: "low" },
  { keywords: ["cold", "runny nose", "sneezing"], response: "Common cold. Take rest and fluids.", doctor: "General Physician", severity: "low" },
  { keywords: ["cough", "dry cough", "wet cough"], response: "Persistent cough needs checkup.", doctor: "General Physician", severity: "low" },
  { keywords: ["weakness", "fatigue", "tired"], response: "May be due to low energy or stress.", doctor: "General Physician", severity: "low" },
  { keywords: ["body pain", "muscle pain"], response: "Could be viral or strain.", doctor: "General Physician", severity: "low" },

  // HEAD
  { keywords: ["headache", "head pain"], response: "Take rest and hydrate.", doctor: "Neurologist", severity: "low" },
  { keywords: ["migraine"], response: "Avoid bright light and stress.", doctor: "Neurologist", severity: "medium" },
  { keywords: ["dizziness", "vertigo"], response: "May be BP issue.", doctor: "General Physician", severity: "medium" },

  // HEART
  { keywords: ["chest pain", "heart pain"], response: "⚠ Serious. Seek help immediately.", doctor: "Cardiologist", severity: "high" },
  { keywords: ["palpitations", "fast heartbeat"], response: "Check heart rate.", doctor: "Cardiologist", severity: "medium" },

  // BREATHING
  { keywords: ["breathing problem", "shortness of breath"], response: "⚠ Emergency condition.", doctor: "Pulmonologist", severity: "high" },
  { keywords: ["asthma", "wheezing"], response: "Use inhaler.", doctor: "Pulmonologist", severity: "medium" },

  // DIGESTIVE
  { keywords: ["stomach pain", "gas"], response: "Avoid oily food.", doctor: "General Physician", severity: "low" },
  { keywords: ["acidity", "burning stomach"], response: "Avoid spicy food.", doctor: "General Physician", severity: "low" },
  { keywords: ["vomiting", "nausea"], response: "Stay hydrated.", doctor: "General Physician", severity: "medium" },
  { keywords: ["diarrhea"], response: "Drink ORS.", doctor: "General Physician", severity: "medium" },
  { keywords: ["constipation"], response: "Eat fiber.", doctor: "General Physician", severity: "low" },

  // BONES
  { keywords: ["fracture", "bone break"], response: "Avoid movement.", doctor: "Orthopedic", severity: "high" },
  { keywords: ["joint pain", "knee pain"], response: "Could be arthritis.", doctor: "Orthopedic", severity: "medium" },
  { keywords: ["back pain"], response: "Maintain posture.", doctor: "Orthopedic", severity: "medium" },

  // SKIN
  { keywords: ["skin rash", "allergy"], response: "Avoid allergens.", doctor: "Dermatologist", severity: "low" },
  { keywords: ["itching"], response: "Keep skin clean.", doctor: "Dermatologist", severity: "low" },
  { keywords: ["acne", "pimples"], response: "Maintain hygiene.", doctor: "Dermatologist", severity: "low" },

  // MENTAL
  { keywords: ["stress", "tension"], response: "Relax and rest.", doctor: "Psychologist", severity: "medium" },
  { keywords: ["anxiety"], response: "Practice breathing.", doctor: "Psychologist", severity: "medium" },
  { keywords: ["depression"], response: "Talk to someone.", doctor: "Psychologist", severity: "high" },

  // DISEASES
  { keywords: ["diabetes"], response: "Monitor sugar.", doctor: "Endocrinologist", severity: "medium" },
  { keywords: ["thyroid"], response: "Regular checkup.", doctor: "Endocrinologist", severity: "medium" },
  { keywords: ["bp", "blood pressure"], response: "Monitor BP.", doctor: "General Physician", severity: "medium" },

  // WOMEN
  { keywords: ["pregnancy"], response: "Consult gynecologist.", doctor: "Gynecologist", severity: "medium" },
  { keywords: ["period pain"], response: "Use hot bag.", doctor: "Gynecologist", severity: "low" },

  // CHILD
  { keywords: ["baby fever"], response: "Monitor child temperature.", doctor: "Pediatrician", severity: "medium" },

  // 🔥 AUTO-GENERATED (70+ EXTRA CASES)
  ...Array.from({ length: 70 }, (_, i) => ({
    keywords: [`symptom${i}`, `issue${i}`, `problem${i}`],
    response: `This is health advice for symptom case ${i}. Please consult doctor if needed.`,
    doctor: "General Physician",
    severity: "low"
  }))
];

async function chatbot() {

  let inputField = document.getElementById("userInput");
  let input = inputField.value.trim();
  let chatBox = document.getElementById("chatBox");

  if (!input) return;


  chatBox.innerHTML += `<p><b>You:</b> ${input}</p>`;

  try {
    const res = await fetch("http://localhost:8080/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain"
      },
      body: input
    });

    const reply = await res.text();

    chatBox.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;

  } catch (err) {
    chatBox.innerHTML += `<p><b>Bot:</b> ❌ Server not responding</p>`;
  }

  inputField.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}