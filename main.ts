document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get references to form elements using their IDs
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactElement = document.getElementById('contact') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

// 
    const usernameElement = document.getElementById('username') as HTMLInputElement

    if ( nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement && usernameElement) {
    
    
    
        const name = nameElement.value;
        const email = emailElement.value;
        const contact = contactElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        const username = usernameElement.value;
        const uniquePath = `resume/${username.replace(/\s+/g, '_')}_resume.html`



        // Create resume output
        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

const downloadLink = document.createElement('a')
downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
downloadLink.download = uniquePath;
downloadLink.textContent = 'Download Your Latest Build Resume Here'



        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hiddens");

const buttonsContainer = document.createElement("div");
buttonsContainer.id = "buttonsContainer";
resumeOutputElement.appendChild(buttonsContainer);

// download pdf button
const downloadButton = document.createElement("button");
downloadButton.textContent = "Download as PDF";
downloadButton.addEventListener("click", () => {
    window.print()
})

buttonsContainer.appendChild(downloadButton)

// shareable link button
const shareLinkButton = document.createElement("button");
shareLinkButton.textContent = "Copy Link";
shareLinkButton.addEventListener("click", async () => {
     try{
        const shareableLink = `https://yourdomain.com/resume/${name.replace(
            /\s+/g,
            "_"

        )}_resume.html`;
await navigator.clipboard.writeText(shareableLink);
alert("Link copied to clipboard!");
} catch (err) {
    console.error("Failed to copy Link:" , err);
alert("Failed to copy Link to clipboard. Please try again.");

}
});

buttonsContainer.appendChild(shareLinkButton);
} else {
    console.error("Resume output container is not found");
}
} else {
    console.error("Form elements are missing");
}
});
