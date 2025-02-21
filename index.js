// Predefined keywords for each question
const keywords = {
    color: ['red', 'blue', 'green', 'yellow'],
    fruits: ['apple', 'banana', 'orange', 'grapes'],
    ageGroup: ['under 18', '18-25', '26-35', '36-50', '50+'],
    experience: ['beginner', 'intermediate', 'advanced', 'expert'],
    cities: ['New York', 'Los Angeles', 'London', 'Tokyo']
};

// Function to validate answers
function validateAnswer(question, answer) {
    if (Array.isArray(answer)) {
        // For checklist or multiple-choice answers
        return answer.every(ans => keywords[question].includes(ans));
    } else {
        // For free-text answers
        return keywords[question].some(keyword => answer.toLowerCase().includes(keyword.toLowerCase()));
    }
}

// Event listener for form submission
document.getElementById('questionnaire-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let results = [];
    
    // Get and validate the answers
    const colorAnswer = document.getElementById('color').value;
    const fruitsAnswer = Array.from(document.querySelectorAll('input[name="fruits"]:checked')).map(el => el.value);
    const ageGroupAnswer = document.getElementById('ageGroup').value;
    const experienceAnswer = document.getElementById('experience').value;
    const citiesAnswer = Array.from(document.getElementById('cities').selectedOptions).map(el => el.value);
    
    const isColorValid = validateAnswer('color', colorAnswer);
    const isFruitsValid = validateAnswer('fruits', fruitsAnswer);
    const isAgeGroupValid = validateAnswer('ageGroup', ageGroupAnswer);
    const isExperienceValid = validateAnswer('experience', experienceAnswer);
    const isCitiesValid = validateAnswer('cities', citiesAnswer);
    
    // Collect results
    if (isColorValid) results.push('Favorite color is valid.');
    else results.push('Favorite color is invalid.');
    
    if (isFruitsValid) results.push('Fruits selection is valid.');
    else results.push('Fruits selection is invalid.');
    
    if (isAgeGroupValid) results.push('Age group is valid.');
    else results.push('Age group is invalid.');
    
    if (isExperienceValid) results.push('Experience with JavaScript is valid.');
    else results.push('Experience with JavaScript is invalid.');
    
    if (isCitiesValid) results.push('Cities selection is valid.');
    else results.push('Cities selection is invalid.');
    
    // Display results
    document.getElementById('result').innerHTML = results.join('<br>');
});
