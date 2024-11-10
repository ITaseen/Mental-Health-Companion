function getResponse() { 
    const userText = document.getElementById("userInput").value;
    const chatbox = document.getElementById("chatbox");

    if (userText) {
        // Display the user's input
        const userDiv = document.createElement("p");
        userDiv.className = "userText";
        userDiv.innerHTML = `<span>${userText}</span>`;
        chatbox.appendChild(userDiv);

        // Clear the input field
        document.getElementById("userInput").value = "";

        // Get a mental health tip based on the user's input
        const botResponse = getMentalHealthTip(userText);
        const botDiv = document.createElement("p");
        botDiv.className = "botText";
        botDiv.innerHTML = `<span>${botResponse.tip}</span>`;
        chatbox.appendChild(botDiv);

        // Display personalized coping suggestion
        displayCopingSuggestion(botResponse.suggestion);
    }
}

function getMentalHealthTip(userText) {
    const feeling = userText.toLowerCase();
    let tip = "";
    let suggestion = "";

    if (feeling.includes("good") || feeling.includes("happy")) {
        tip = "That's great! Keep doing what makes you feel good.";
        suggestion = "Consider writing a gratitude journal or doing something you enjoy today!";
    } else if (feeling.includes("sad") || feeling.includes("down")) {
        tip = "I'm sorry to hear that. Take a moment to breathe deeply.";
        suggestion = "Try talking to a friend, meditating, or taking a short walk.";
    } else if (feeling.includes("stressed") || feeling.includes("anxious")) {
        tip = "Stress can be tough. Remember to take breaks and breathe.";
        suggestion = "Consider practicing mindfulness meditation or listening to calming music.";
    } else {
        tip = "It's important to take care of yourself. How about a little self-care today?";
        suggestion = "Remember to eat well, sleep enough, and engage in an activity you enjoy!";
    }

    return { tip, suggestion };
}

function displayCopingSuggestion(suggestion) {
    const recommendationDiv = document.getElementById("recommendation");
    recommendationDiv.innerHTML = `<p>${suggestion}</p>`;
}

// Placeholder function to simulate voice recording and sentiment analysis
function startVoiceRecording() {
    // Simulate the recorded audio being transcribed
    const simulatedTranscription = "I feel very stressed and anxious about my upcoming exams.";

    // Display the transcribed text as if it came from the user
    const chatbox = document.getElementById("chatbox");
    const userDiv = document.createElement("p");
    userDiv.className = "userText";
    userDiv.innerHTML = `<span>${simulatedTranscription}</span>`;
    chatbox.appendChild(userDiv);

    // Get mental health advice based on the transcription
    const botResponse = getMentalHealthTip(simulatedTranscription);
    const botDiv = document.createElement("p");
    botDiv.className = "botText";
    botDiv.innerHTML = `<span>${botResponse.tip}</span>`;
    chatbox.appendChild(botDiv);

    // Display personalized coping suggestion
    displayCopingSuggestion(botResponse.suggestion);
}

function getMentalHealthTip(userText) {
    const feeling = userText.toLowerCase();
    let tip = "";
    let suggestion = "";

    const positiveResponses = [
        "That's wonderful! Keep up the positivity and spread some joy!",
        "Awesome! Keep doing the things that make you happy.",
        "Glad to hear you're feeling good! How about writing down what made you feel this way to look back on later?",
        "Feeling great is amazing! Celebrate the little things that bring you joy."
    ];

    const sadResponses = [
        "I'm sorry to hear you're feeling down. Sometimes a little self-compassion goes a long way.",
        "Feeling sad can be hard. It might help to write down your thoughts or reach out to a loved one.",
        "Remember, it's okay to feel sad. Taking a few deep breaths or spending time in nature might help.",
        "You don’t have to handle it all alone. Maybe sharing your thoughts with a friend could lift your spirits."
    ];

    const stressedResponses = [
        "Stress can be overwhelming. Taking a short break or a deep breath can help ground you.",
        "Sometimes, a quick walk or a few stretches can relieve stress. Don’t hesitate to take a breather!",
        "Stress is tough. Practicing mindfulness or doing something you love might make a difference.",
        "Remember, stress is temporary. Consider taking time to unwind with a favorite activity."
    ];

    const defaultResponses = [
        "No matter how you're feeling, remember to take care of yourself. A small act of self-care can make a big difference.",
        "It's okay to not have it all figured out. Try journaling or taking a moment for yourself.",
        "Life has ups and downs. Consider a relaxing activity or reaching out to someone you trust.",
        "Self-care isn’t selfish. Take a few minutes for yourself, whether it's a favorite hobby or simply resting."
    ];

    // Choose a response based on the user's input
    if (feeling.includes("good") || feeling.includes("happy")) {
        tip = getRandomResponse(positiveResponses);
        suggestion = "Consider keeping a gratitude journal or planning a small activity you enjoy.";
    } else if (feeling.includes("sad") || feeling.includes("down")) {
        tip = getRandomResponse(sadResponses);
        suggestion = "Try talking to a friend, doing something creative, or practicing mindfulness.";
    } else if (feeling.includes("stressed") || feeling.includes("anxious")) {
        tip = getRandomResponse(stressedResponses);
        suggestion = "Consider deep breathing exercises, stretching, or taking a few moments to relax.";
    } else {
        tip = getRandomResponse(defaultResponses);
        suggestion = "Focus on self-care, whether it's a nourishing meal, exercise, or a creative outlet.";
    }

    return { tip, suggestion };
}

function getRandomResponse(responseArray) {
    return responseArray[Math.floor(Math.random() * responseArray.length)];
}
