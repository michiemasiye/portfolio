//Array of projects
const projects = [
    {
        title: 'portfolio',
        description: "a show case of my portfolio",
        url: ''
    },
    {
        title: 'portfolio',
        description: "a show case of my portfolio",
        url: ''
    },
    {
        title: 'portfolio',
        description: "a show case of my portfolio",
        url: ''
    },
    {
        title: 'portfolio',
        description: "a show case of my portfolio",
        url: ''
    },
    {
        title: 'portfolio',
        description: "a show case of my portfolio",
        url: ''
    },
    {
        title: 'portfolio',
        description: "a show case of my portfolio",
        url: ''
    },
    {
        title: 'portfolio',
        description: "a show case of my portfolio",
        url: ''
    },
];
//Function to load projects
function loadprojects() {
    const projectsList = document.getElementById('project-list');
    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <iframe src="${project.url}" title="${project.title}" class="project-iframe"></iframe>
        `;

        projectsList.appendChild(projectCard);
        });
}

// load project when DOM is fully loaded 
document.addEventListener("DOMContentLoaded", loadprojects);
