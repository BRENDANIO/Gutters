let lastHeadingWidth = 0;

function adjustParagraphWidth() {
    const heading = document.getElementById('text-header');
    const paragraph = document.getElementById('text-paragraph');
    const headingWidth = heading.offsetWidth;

    if (headingWidth !== lastHeadingWidth) {
        paragraph.style.maxWidth = headingWidth + 'px';
        lastHeadingWidth = headingWidth;
    }
  }
  
  window.addEventListener('resize', adjustParagraphWidth);
  window.addEventListener('load', adjustParagraphWidth);
  adjustParagraphWidth(); // Adjust the paragraph width initially
