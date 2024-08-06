document.addEventListener('DOMContentLoaded', () => {
    const myTemplates = document.getElementById('my-templates');
    const exampleTemplates = document.getElementById('example-templates');
    const templateForm = document.getElementById('template-form');

    const exampleData = [
        { name: 'Legs', exercises: ['Squat', 'Leg Extension', 'Calf Raise'] },
        { name: 'Chest and Triceps', exercises: ['Bench Press', 'Incline Bench Press', 'Tricep Dip'] },
        { name: 'Back', exercises: ['Pull Up', 'Lat Pulldown', 'Rowing'] },
    ];

    const renderTemplates = (templates, container) => {
        container.innerHTML = '';
        templates.forEach(template => {
            const div = document.createElement('div');
            div.classList.add('template');
            div.innerHTML = `
                <h3>${template.name}</h3>
                <p>${template.exercises.join(', ')}</p>
            `;
            container.appendChild(div);
        });
    };

    renderTemplates(exampleData, exampleTemplates);

    templateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('template-name').value;
        const exercises = document.getElementById('template-exercises').value.split(',').map(exercise => exercise.trim());
        const newTemplate = { name, exercises };
        exampleData.push(newTemplate);
        renderTemplates(exampleData, exampleTemplates);
        templateForm.reset();
    });
});