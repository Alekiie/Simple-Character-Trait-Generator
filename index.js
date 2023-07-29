



// Generate answers based on the selections
function generateCharacterTraits(answers) {
  // Define my rules or mappings here to generate character traits
  const traits = [];

  // Trait 1 - Based on favorite color
  if (answers["q1"] === "c1") {
    traits.push("Passionate");
  } else if (answers["q1"] === "c2") {
    traits.push("Calm");
  } else if (answers["q1"] === "c3") {
    traits.push("Optimistic");
  } else if (answers["q1"] === "c4") {
    traits.push("Intelligent");
  }

  // Trait 2 - Based on favorite pet
  if (answers["q2"] === "c1") {
    traits.push("Loyal");
  } else if (answers["q2"] === "c2") {
    traits.push("Independent");
  } else if (answers["q2"] === "c3") {
    traits.push("Playful");
  } else if (answers["q2"] === "c4") {
    traits.push("Adventurous");
  }

  // Trait 3 - Based on hobby
  if (answers["q3"] === "c1") {
    traits.push("Knowledgeable");
  } else if (answers["q3"] === "c2") {
    traits.push("Enthusiastic");
  } else if (answers["q3"] === "c3") {
    traits.push("Creative");
  } else if (answers["q3"] === "c4") {
    traits.push("Innovative");
  }
  // Trait 4-Based on Social tendency
  if (answers["q4"] === "c1") {
    traits.push("Solitude");
  } else if (answers["q4" === "c2"]) {
    traits.push("Shy");
  } else if (answers["q4"] === "c3") {
    traits.push("Extrovert");
  } else if (answers["q4"] === "c4") {
    traits.push("Total Introvert");
  }
  //Trait 5 -Based on Tech Stack
  if (answers["q5"] === "c1") {
    traits.push("JavaScript developer");
  } else if (answers["q5"] === "c2") {
    traits.push("Python Developer");
  } else if (answers["q5"] === "c3") {
    traits.push("Ruby Developer");
  } else if (answers["q5"] === "c4") {
    traits.push("Tech enthauist only");
  }
  //Trait 6 -Based on Market Skills
  if (answers["q6"] === "c1") {
    traits.push("Beginner");
  } else if (answers["q6"] === "c2") {
    traits.push("Intermediate");
  } else if (answers["q6"] === "c3") {
    traits.push("Highly Experienced");
  } else if (answers["q6"] === "c4") {
    traits.push("Learner");
  }
  return traits;
}
//form handler
function submitForm() {
  const form = document.getElementById("questionnaire");
  const formData = new FormData(form);
  const answers = {};

  for (const [name, value] of formData) {
    answers[name] = value;
  }

  const traits = generateCharacterTraits(answers);
  displayCharacterTraits(traits);
}

function displayCharacterTraits(traits) {
  // Display the character traits on the page or use them as needed
  const resultContainer = document.getElementById("result");
  if (traits.length > 0) {
    const traitsList = traits.map((trait) => `<li>${trait}</li>`).join("");
    resultContainer.innerHTML = `<p style="text-align:center;">Possible character traits:</p><ul style="text-align:center; list-style:none;">${traitsList}</ul>`;
  } else {
    resultContainer.innerHTML = `<p style="color:red;">Please answer the answers above before Submitting!</p>`;
  }
}
