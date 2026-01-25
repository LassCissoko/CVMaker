// Récupérations des inputs Infos persos
const infosContainer = document.querySelector('.infoContainer');
const firstNameInput = document.querySelector('#firstNameInput');
const lastNameInput = document.querySelector('#lastNameInput');
const titleInput = document.querySelector('#titleProfessionalInput');
const emailInput = document.querySelector('#emailInput');
const numberInput = document.querySelector('#numberInput');
const addressInput = document.querySelector('#addressInput');
const linkedinInput = document.querySelector('#linkedinInput');
const avatarInput = document.querySelector('#avatarInput');
const resumeInput = document.querySelector('#resumeInput');

// Experience Pro
const expContainer = document.querySelector('.expContainer');
const expContainerCV = document.querySelector('.expContainerCV');;
const btnAddExp = document.querySelector('#addExp');
const btnDeleteExp = document.querySelector('.deleteExp');

// Diplômes
const diplomeContainer = document.querySelector('.diplomeContainer');
const diplomeContainerCV = document.querySelector('.diplomeContainerCV');
const btnAddDiplome = document.querySelector('.addDiplome');

// compétences
const skillContainer = document.querySelector('.skillContainer');
const skillContainerCV = document.querySelector('.skillContainerCV');
const btnAddSkill = document.querySelector('.addSkill');

// Télécharger CV
const btnDownload = document.querySelector('#convertToPDF');

// Récupération balises CV

// Infos Perso
const firstNameCV = document.querySelector('#firstNameCV');
const lastNameCV = document.querySelector('#lastNameCV');
const titleCV = document.querySelector('#titleCV');
const emailCV = document.querySelector('#emailCV');
const numberCV = document.querySelector('#numberCV');
const addressCV = document.querySelector('#addressCV');
const linkedinCV = document.querySelector('#linkedinCV');
const avatarCV  = document.querySelector('#avatarCV');
const resumeCV = document.querySelector('#resumeCV');

// Compétences
const skillCV = document.querySelector('.skillCV');
const levelCV = document.querySelector('.levelCV');

// Ajout de la fonction dynamique des infos à renseigner
infosContainer.addEventListener('input', infoPersoPreview);
resumeInput.addEventListener('input', resumePreview);
expContainer.addEventListener('input', updateAllExp);
diplomeContainer.addEventListener('input', updateAllDiplome);
skillContainer.addEventListener('input', updateAllSkill)

// Ajout de la fonction ajout des blocs
btnAddExp.addEventListener('click', addExp);
btnAddDiplome.addEventListener('click', addDiplome);
btnAddSkill.addEventListener('click', addSkill);


function resumePreview() {
    resumeCV.textContent = resumeInput.value || 'Votre résumé professionnel'
};

// Créations des fonctions ajouts des blocs
function addExp() {
    const divExp = document.createElement('div');
    divExp.classList.add('newExpContainer');
    divExp.innerHTML = `<div class="border border-success p-3 rounded mt-3">
        <div class="row g-3">
            <div class="col-12">
                <div class="d-flex justify-content-between mb-2">
                    <label class="form-label">Titre du poste</label>
                    <i class="bi bi-trash text-danger deleteExp" style="cursor:pointer"></i>
                </div>
                <input type="text" class="form-control titlePostInput">
            </div>
            <div class="col-md-6">
                <label class="form-label">Entreprise</label>
                <input type="text" class="form-control companyInput">
            </div>
            <div class="col-md-6">
                <label class="form-label">Lieu</label>
                <input type="text" class="form-control localExpInput">
            </div>
            <div class="col-md-6">
                <label class="form-label">Date de début</label>
                <input type="date" class="form-control startDateExp">
            </div>
            <div class="col-md-6">
                <label class="form-label">Date de fin</label>
                <input type="date" class="form-control endDateExp">
            </div>
            <div class="col-12 mt-3">
                <textarea class="form-control descripExpInput" rows="2" placeholder="Description de vos missions"></textarea>
            </div>
        </div>
    </div>`;
    expContainer.appendChild(divExp);

        const divExpCV = document.createElement('div');
        divExpCV.classList.add('newExpContainerCV')
        divExpCV.innerHTML = `<hr>
            <div>
                <div class="post-date-resume d-flex justify-content-between">
                    <h5 class="titlePostCV">Titre du poste </h5>
                        <div class="rounded-pill p-2 bg-secondary text-white ">
                        <strong class="startDateExpCV">Date de début</strong> - <strong class="endDateExpCV">Date de fin</strong></div>
                </div>
                <div class="d-flex gap-3">
                    <h6 class="companyCV">Entreprise </h6>
                    <h6 class="localExpCV">Lieu</h6>
                </div>
                <p class="descripExpCV">Description de votre experience professionnel</p>
                </div>`;
                expContainerCV.appendChild(divExpCV);

    function deleteExp() {
        divExp.remove();
        divExpCV.remove()
        updateAllExp()
    };

    const currentDeleteBtn = divExp.querySelector('.deleteExp')
    currentDeleteBtn.addEventListener('click', deleteExp);
};

function addDiplome() {
    const DivDiplome = document.createElement('div');
    DivDiplome.classList.add('newDiplomeContainer');
    DivDiplome.innerHTML = `
    <div class="border border-success p-3 rounded mt-3">
        <form class="row g-3 ">
            <div class="col-12">
                <div class="d-flex justify-content-between mb-2">
                    <label class="form-label">Diplôme</label>
                    <i class="bi bi-trash text-danger deleteDiplome" style="cursor:pointer"></i>
                </div>
                <input type="text" class="form-control diplomeFormInput">
            </div>
            <div class="col-md-6">
                <label class="form-label">Etablissement</label>
                <input type="text" class="form-control etabFormInput">
            </div>
            <div class="col-md-6">
                <label class="form-label">Lieu</label>
                <input type="text" class="form-control localFormInput">
            </div>
            <div class="col-md-6">
                <label class="form-label">Date de début</label>
                <input type="date" class="form-control startDateFormInput">
            </div>
            <div class="col-md-6">
                <label class="form-label">Date de fin</label>
                <input type="date" class="form-control endDateFormInput">
            </div>
            <div class="col-12 mt-3">
                <textarea class="form-control descripFormInput" rows="2" placeholder="Description de vos missions"></textarea>
            </div>
        </form>
    </div>`;

    diplomeContainer.appendChild(DivDiplome);

    const DivDiplomeCV = document.createElement('div');
    DivDiplomeCV.classList.add('newDiplomeContainerCV');
    DivDiplomeCV.innerHTML = `<hr>
    <div>
        <div class="post-date-formation d-flex justify-content-between">
                                                <h5 class="diplomeCV">Diplôme obtenue</h5>
                                                <div class="border rounded-pill p-2 bg-secondary text-white">
                                            <strong class="startDateFormCV">Date de début</strong> - <strong class="endDateFormCV">Date de fin</strong></div>
                                        </div>
                                        <div class="d-flex gap-3">
                                            <h6 class="etabFormCV">Etablissement</h6>
                                            <h6 class="localFormCV">Lieu</h6>
                                        </div>
                                        <p class="descripFormCV">Description de votre formation</p>
                                        </div>`
    diplomeContainerCV.appendChild(DivDiplomeCV);

    function deleteDiplome() {
        DivDiplome.remove();
        DivDiplomeCV.remove();
        updateAllDiplome();
    };

    const currentDeleteBtn = DivDiplome.querySelector('.deleteDiplome');
    currentDeleteBtn.addEventListener('click',deleteDiplome);
};

function addSkill() {
    const divSkill = document.createElement('div');
    divSkill.classList.add('newSkillContainer');
    divSkill.innerHTML = `<div class="border border-success p-3 rounded mt-3">
    <form class="row g-3">
        <div class="col-md-6">
            <label class="form-label">Compétence</label>
                <input type="text" class="form-control skillInput">
            </div>
            <div class="col-md-6 ">
                <label class="form-label">Niveau</label>
                <div class="d-flex">
                    <input type="text" class="form-control levelInput">
                    <i class="bi bi-trash text-danger ps-5 deleteSkill" style="cursor:pointer"></i>
                </div>
            </div>
        </form>
    </div>`;
    skillContainer.appendChild(divSkill);

    const divSkillCV = document.createElement('div');
    divSkillCV.classList.add('newSkillContainerCV');
    divSkillCV.innerHTML = `
    <div class="d-inline-flex bg-secondary text-white border rounded-pill p-2 gap-5 justify-content-between">
        <strong class="skillCV">Compétences</strong>
        <span class="levelCV">Niveau</span>
    </div>`;
    skillContainerCV.appendChild(divSkillCV);

    function deleteSkill() {
        divSkill.remove();
        divSkillCV.remove();
        updateAllSkill()
    };

    const currentDeleteBtn = divSkill.querySelector('.deleteSkill');
    currentDeleteBtn.addEventListener('click', deleteSkill)
};


// Créations des fonctions pour afficher en temps réel
function infoPersoPreview() {
    firstNameCV.textContent = firstNameInput.value || 'Prénom';
    lastNameCV.textContent = lastNameInput.value || 'Nom';
    titleCV.textContent = titleInput.value || 'Titre profesionnel';
    emailCV.textContent = emailInput.value || 'mail';
    numberCV.textContent = numberInput.value || 'téléphone';
    addressCV.textContent = addressInput.value || 'Adresse';
    linkedinCV.textContent = linkedinInput.value || 'Linkedin';
};


function updateAllExp() {
    const allExpContainer = expContainer.querySelectorAll('.newExpContainer');
    const allExpCV = expContainerCV.querySelectorAll('.newExpContainerCV');

    allExpContainer.forEach((input, index) => {
        const CVBlock = allExpCV[index];

        if (CVBlock) {
            CVBlock.querySelector('.titlePostCV').textContent = input.querySelector('.titlePostInput').value || 'Titre du poste';
            CVBlock.querySelector('.companyCV').textContent = input.querySelector('.companyInput').value || 'Entreprise';
            CVBlock.querySelector('.localExpCV').textContent = input.querySelector('.localExpInput').value || 'Lieu';
            CVBlock.querySelector('.startDateExpCV').textContent = input.querySelector('.startDateExp').value || 'Date de début';
            CVBlock.querySelector('.endDateExpCV').textContent = input.querySelector('.endDateExp').value || "Date de fin";
            CVBlock.querySelector('.descripExpCV').textContent = input.querySelector('.descripExpInput').value || 'Description de votre experience profesionnelles';
        };
    });
};


function updateAllDiplome() {
    const allDiplomeContainer = diplomeContainer.querySelectorAll('.newDiplomeContainer');
    const allDiplomeCV = diplomeContainerCV.querySelectorAll('.newDiplomeContainerCV');

    allDiplomeContainer.forEach((input, index) => {
        const CVBlock = allDiplomeCV[index];

        if (CVBlock) {
            CVBlock.querySelector('.diplomeCV').textContent = input.querySelector('.diplomeFormInput').value || 'Diplome obtenue';
            CVBlock.querySelector('.etabFormCV').textContent = input.querySelector('.etabFormInput').value || 'Etablissement';
            CVBlock.querySelector('.localFormCV').textContent = input.querySelector('.localFormInput').value || 'Lieu';
            CVBlock.querySelector('.startDateFormCV').textContent = input.querySelector('.startDateFormInput').value || 'Date de début';
            CVBlock.querySelector('.endDateFormCV').textContent = input.querySelector('.endDateFormInput').value || 'Date de fin';
            CVBlock.querySelector('.descripFormCV').textContent = input.querySelector('.descripFormInput').value || 'Description de votre formation';
        };
    });
};


function updateAllSkill() {
    const allSkillContainer = skillContainer.querySelectorAll('.newSkillContainer');
    const allSkillContainerCV = skillContainerCV.querySelectorAll('.newSkillContainerCV');

    allSkillContainer.forEach((input, index) => {
        const CVBlock = allSkillContainerCV[index];

        if (CVBlock) {
            CVBlock.querySelector('.skillCV').textContent = input.querySelector('.skillInput').value || 'Compétence';
            CVBlock.querySelector('.levelCV').textContent = input.querySelector('.levelInput').value || 'Niveau';
        };
    })
};

// Fonction qui permet de séléctionner une image

avatarInput.addEventListener('change', function()  {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            avatarCV.src = e.target.result;
        };

        reader.readAsDataURL(file)
    }
});



// Evénement qui permet au click de convertir notre en PDF
btnDownload.addEventListener('click', () => {
    const cvHTML = document.querySelector('article').innerHTML;
    document.querySelector('#cv_content_input').value = cvHTML;
    document.querySelector('#pdfForm').submit();
})