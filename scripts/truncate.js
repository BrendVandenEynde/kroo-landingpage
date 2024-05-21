const wordLimits = {
    calendar: 5,
    search: 6,
    tools: 7,
    eye: 5,
    timer: 7
};

function truncateText(text, wordLimit) {
    const punctuationlessText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    const words = punctuationlessText.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ');
    }
    return punctuationlessText;
}

function applyTruncation() {
    if (window.innerWidth <= 722) {
        document.querySelectorAll('.how_content_div').forEach((div, index) => {
            const p = div.querySelector('p');
            switch (index) {
                case 0:
                    p.textContent = truncateText(p.dataset.fullText, wordLimits.calendar);
                    break;
                case 1:
                    p.textContent = truncateText(p.dataset.fullText, wordLimits.search);
                    break;
                case 2:
                    p.textContent = truncateText(p.dataset.fullText, wordLimits.tools);
                    break;
                case 3:
                    p.textContent = truncateText(p.dataset.fullText, wordLimits.eye);
                    break;
                case 4:
                    p.textContent = truncateText(p.dataset.fullText, wordLimits.timer);
                    break;
            }
        });
    } else {
        document.querySelectorAll('.how_content_div p').forEach(p => {
            p.textContent = p.dataset.fullText;
        });
    }
}

document.querySelectorAll('.how_content_div p').forEach(p => {
    p.dataset.fullText = p.textContent;
});

window.addEventListener('resize', applyTruncation);

applyTruncation();
