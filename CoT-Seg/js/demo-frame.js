function showExample(frameId, index) {
    const frame = document.getElementById(frameId);
    const examples = frame.querySelectorAll('.example');
    examples.forEach((example, i) => {
        example.classList.toggle('active', i === index);
    });
}

function previousExample(frameId) {
    const frame = document.getElementById(frameId);
    const examples = frame.querySelectorAll('.example');
    let currentExampleIndex = Array.from(examples).findIndex(example => example.classList.contains('active'));
    currentExampleIndex = (currentExampleIndex === 0) ? examples.length - 1 : currentExampleIndex - 1;
    showExample(frameId, currentExampleIndex);
}

function nextExample(frameId) {
    const frame = document.getElementById(frameId);
    const examples = frame.querySelectorAll('.example');
    let currentExampleIndex = Array.from(examples).findIndex(example => example.classList.contains('active'));
    currentExampleIndex = (currentExampleIndex === examples.length - 1) ? 0 : currentExampleIndex + 1;
    showExample(frameId, currentExampleIndex);
}