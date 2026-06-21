// DOM - Formulaire

const infosContainer    = document.querySelector('.infoContainer');
const firstNameInput    = document.querySelector('#firstNameInput');
const lastNameInput     = document.querySelector('#lastNameInput');
const titleInput        = document.querySelector('#titleProfessionalInput');
const emailInput        = document.querySelector('#emailInput');
const numberInput       = document.querySelector('#numberInput');
const addressInput      = document.querySelector('#addressInput');
const linkedinInput     = document.querySelector('#linkedinInput');
const avatarInput       = document.querySelector('#avatarInput');
const resumeInput       = document.querySelector('#resumeInput');

const expContainer      = document.querySelector('.expContainer');
const diplomeContainer  = document.querySelector('.diplomeContainer');
const skillContainer    = document.querySelector('.skillContainer');
const interetContainer  = document.querySelector('.interetContainer');
const langueContainer   = document.querySelector('.langueContainer');

// DOM — Prévisualisation

const cvPreview         = document.querySelector('#cvPreview');
const firstNameCV       = document.querySelector('#firstNameCV');
const lastNameCV        = document.querySelector('#lastNameCV');
const titleCV           = document.querySelector('#titleCV');
const resumeCV          = document.querySelector('#resumeCV');
const avatarCV          = document.querySelector('#avatarCV');

const emailWrapper      = document.querySelector('#emailWrapper');
const numberWrapper     = document.querySelector('#numberWrapper');
const addressWrapper    = document.querySelector('#addressWrapper');
const linkedinWrapper   = document.querySelector('#linkedinWrapper');
const emailCV           = document.querySelector('#emailCV');
const numberCV          = document.querySelector('#numberCV');
const addressCV         = document.querySelector('#addressCV');
const linkedinCV        = document.querySelector('#linkedinCV');

const expContainerCV    = document.querySelector('.expContainerCV');
const diplomeContainerCV = document.querySelector('.diplomeContainerCV');
const skillContainerCV  = document.querySelector('.skillContainerCV');
const interetContainerCV = document.querySelector('.interetContainerCV');
const langueContainerCV  = document.querySelector('.langueContainerCV');

//  Gestion du thème

let currentTheme = 'default';

document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        switchTheme(btn.dataset.theme);
    });
});

function switchTheme(theme) {
    cvPreview.classList.remove('theme-default', 'theme-modern', 'theme-simple');
    cvPreview.classList.add('theme-' + theme);
    currentTheme = theme;
}

//   Formulaire → Prévisualisation

infosContainer.addEventListener('input', infoPersoPreview);
resumeInput.addEventListener('input', resumePreview);
expContainer.addEventListener('input', updateAllExp);
diplomeContainer.addEventListener('input', updateAllDiplome);
skillContainer.addEventListener('input', updateAllSkill);
interetContainer.addEventListener('input', updateAllInteret);
langueContainer.addEventListener('input', updateAllLangue);

document.querySelector('#addExp').addEventListener('click', addExp);
document.querySelector('.addDiplome').addEventListener('click', addDiplome);
document.querySelector('.addSkill').addEventListener('click', addSkill);
document.querySelector('.addInteret').addEventListener('click', addInteret);
document.querySelector('.addLangue').addEventListener('click', addLangue);

document.querySelector('#convertToPDF').addEventListener('click', exportPDF);
document.querySelector('#saveCV').addEventListener('click', saveCV);

// Info personnelles

function infoPersoPreview() {
    firstNameCV.textContent = firstNameInput.value || 'Prénom';
    lastNameCV.textContent  = lastNameInput.value  || 'Nom';
    titleCV.textContent     = titleInput.value     || 'Titre professionnel';

    // Email : afficher l'icône + texte seulement si renseigné
    if (emailInput.value.trim()) {
        emailCV.textContent = emailInput.value.trim();
        emailWrapper.classList.remove('d-none');
    } else {
        emailWrapper.classList.add('d-none');
    }

    // Téléphone
    if (numberInput.value.trim()) {
        numberCV.textContent = numberInput.value.trim();
        numberWrapper.classList.remove('d-none');
    } else {
        numberWrapper.classList.add('d-none');
    }

    // Adresse
    if (addressInput.value.trim()) {
        addressCV.textContent = addressInput.value.trim();
        addressWrapper.classList.remove('d-none');
    } else {
        addressWrapper.classList.add('d-none');
    }

    // LinkedIn
    if (linkedinInput.value.trim()) {
        linkedinCV.textContent = linkedinInput.value.trim();
        linkedinWrapper.classList.remove('d-none');
    } else {
        linkedinWrapper.classList.add('d-none');
    }
}

function resumePreview() {
    resumeCV.textContent = resumeInput.value || 'Votre résumé professionnel';
}

//  AVATAR

avatarInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            avatarCV.src = e.target.result;
            avatarCV.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

//  Fonction d'ajout d'éxpériences

function addExp() {
    const divExp = document.createElement('div');
    divExp.classList.add('newExpContainer');
    divExp.innerHTML = `
    <div class="border border-success p-3 rounded mt-3">
        <div class="row g-3">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <label class="form-label mb-0">Titre du poste</label>
                    <i class="bi bi-trash text-danger deleteExp" style="cursor:pointer;"></i>
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
                <label class="form-label">Date de fin <span class="text-muted">(facultatif)</span></label>
                <input type="date" class="form-control endDateExp">
            </div>
            <div class="col-12">
                <label class="form-label">Description des missions</label>
                <textarea class="form-control descripExpInput" rows="2" placeholder="Décrivez vos missions…"></textarea>
            </div>
        </div>
    </div>`;
    expContainer.appendChild(divExp);

    const divExpCV = document.createElement('div');
    divExpCV.classList.add('newExpContainerCV', 'cv-entry');
    divExpCV.innerHTML = `
    <div class="cv-entry-row">
        <strong class="titlePostCV">Titre du poste</strong>
        <span class="cv-date-badge">
            <span class="startDateExpCV">Date de début</span> – <span class="endDateExpCV">Date de fin</span>
        </span>
    </div>
    <div class="cv-entry-sub">
        <span class="companyCV">Entreprise</span>
        <span class="cv-sub-sep">–</span>
        <span class="localExpCV">Lieu</span>
    </div>
    <p class="descripExpCV cv-text">Description de votre expérience professionnelle</p>`;
    expContainerCV.appendChild(divExpCV);

    divExp.querySelector('.deleteExp').addEventListener('click', () => {
        divExp.remove();
        divExpCV.remove();
        updateAllExp();
    });
}

function updateAllExp() {
    const allExp   = expContainer.querySelectorAll('.newExpContainer');
    const allExpCV = expContainerCV.querySelectorAll('.newExpContainerCV');

    allExp.forEach((block, i) => {
        const cv = allExpCV[i];
        if (!cv) return;
        cv.querySelector('.titlePostCV').textContent    = block.querySelector('.titlePostInput').value    || 'Titre du poste';
        cv.querySelector('.companyCV').textContent      = block.querySelector('.companyInput').value      || 'Entreprise';
        cv.querySelector('.localExpCV').textContent     = block.querySelector('.localExpInput').value     || 'Lieu';
        cv.querySelector('.startDateExpCV').textContent = block.querySelector('.startDateExp').value      || 'Date de début';
        cv.querySelector('.endDateExpCV').textContent   = block.querySelector('.endDateExp').value        || 'Date de fin';
        cv.querySelector('.descripExpCV').textContent   = block.querySelector('.descripExpInput').value   || 'Description de votre expérience professionnelle';
    });
}

//  Fonction d'ajout de diplôme

function addDiplome() {
    const divDiplome = document.createElement('div');
    divDiplome.classList.add('newDiplomeContainer');
    divDiplome.innerHTML = `
    <div class="border border-success p-3 rounded mt-3">
        <div class="row g-3">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <label class="form-label mb-0">Diplôme / Formation</label>
                    <i class="bi bi-trash text-danger deleteDiplome" style="cursor:pointer;"></i>
                </div>
                <input type="text" class="form-control diplomeFormInput">
            </div>
            <div class="col-md-6">
                <label class="form-label">Établissement</label>
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
                <label class="form-label">Date de fin <span class="text-muted">(facultatif)</span></label>
                <input type="date" class="form-control endDateFormInput">
            </div>
            <div class="col-12">
                <label class="form-label">Description</label>
                <textarea class="form-control descripFormInput" rows="2" placeholder="Description de la formation…"></textarea>
            </div>
        </div>
    </div>`;
    diplomeContainer.appendChild(divDiplome);

    const divDiplomeCV = document.createElement('div');
    divDiplomeCV.classList.add('newDiplomeContainerCV', 'cv-entry');
    divDiplomeCV.innerHTML = `
    <div class="cv-entry-row">
        <strong class="diplomeCV">Diplôme / Formation</strong>
        <span class="cv-date-badge">
            <span class="startDateFormCV">Date de début</span> – <span class="endDateFormCV">Date de fin</span>
        </span>
    </div>
    <div class="cv-entry-sub">
        <span class="etabFormCV">Établissement</span>
        <span class="cv-sub-sep">–</span>
        <span class="localFormCV">Lieu</span>
    </div>
    <p class="descripFormCV cv-text">Description de votre formation</p>`;
    diplomeContainerCV.appendChild(divDiplomeCV);

    divDiplome.querySelector('.deleteDiplome').addEventListener('click', () => {
        divDiplome.remove();
        divDiplomeCV.remove();
        updateAllDiplome();
    });
}

function updateAllDiplome() {
    const all   = diplomeContainer.querySelectorAll('.newDiplomeContainer');
    const allCV = diplomeContainerCV.querySelectorAll('.newDiplomeContainerCV');

    all.forEach((block, i) => {
        const cv = allCV[i];
        if (!cv) return;
        cv.querySelector('.diplomeCV').textContent        = block.querySelector('.diplomeFormInput').value   || 'Diplôme / Formation';
        cv.querySelector('.etabFormCV').textContent       = block.querySelector('.etabFormInput').value      || 'Établissement';
        cv.querySelector('.localFormCV').textContent      = block.querySelector('.localFormInput').value     || 'Lieu';
        cv.querySelector('.startDateFormCV').textContent  = block.querySelector('.startDateFormInput').value || 'Date de début';
        cv.querySelector('.endDateFormCV').textContent    = block.querySelector('.endDateFormInput').value   || 'Date de fin';
        cv.querySelector('.descripFormCV').textContent    = block.querySelector('.descripFormInput').value   || 'Description de votre formation';
    });
}

//  Fonction d'ajout de compétence

function addSkill() {
    const divSkill = document.createElement('div');
    divSkill.classList.add('newSkillContainer');
    divSkill.innerHTML = `
    <div class="border border-success p-3 rounded mt-3">
        <div class="row g-3">
            <div class="col-md-6">
                <label class="form-label">Compétence</label>
                <input type="text" class="form-control skillInput">
            </div>
            <div class="col-md-6">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <label class="form-label mb-0">Niveau</label>
                    <i class="bi bi-trash text-danger deleteSkill" style="cursor:pointer;"></i>
                </div>
                <input type="text" class="form-control levelInput" placeholder="ex: Expert">
            </div>
        </div>
    </div>`;
    skillContainer.appendChild(divSkill);

    const divSkillCV = document.createElement('div');
    divSkillCV.classList.add('newSkillContainerCV');
    divSkillCV.innerHTML = `
    <span class="cv-skill-pill">
        <strong class="skillCV">Compétence</strong>
        <span class="cv-pill-sep">|</span>
        <span class="levelCV">Niveau</span>
    </span>`;
    skillContainerCV.appendChild(divSkillCV);

    divSkill.querySelector('.deleteSkill').addEventListener('click', () => {
        divSkill.remove();
        divSkillCV.remove();
        updateAllSkill();
    });
}

function updateAllSkill() {
    const all   = skillContainer.querySelectorAll('.newSkillContainer');
    const allCV = skillContainerCV.querySelectorAll('.newSkillContainerCV');

    all.forEach((block, i) => {
        const cv = allCV[i];
        if (!cv) return;
        cv.querySelector('.skillCV').textContent  = block.querySelector('.skillInput').value  || 'Compétence';
        cv.querySelector('.levelCV').textContent  = block.querySelector('.levelInput').value  || 'Niveau';
    });
}

//  Fonction d'ajout des centres d'intérèts

function addInteret() {
    const divInteret = document.createElement('div');
    divInteret.classList.add('newInteretContainer');
    divInteret.innerHTML = `
    <div class="border border-success p-3 rounded mt-3">
        <div class="row g-3">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <label class="form-label mb-0">Centre d'intérêt</label>
                    <i class="bi bi-trash text-danger deleteInteret" style="cursor:pointer;"></i>
                </div>
                <input type="text" class="form-control interetInput" placeholder="ex: Photographie">
            </div>
        </div>
    </div>`;
    interetContainer.appendChild(divInteret);

    const divInteretCV = document.createElement('div');
    divInteretCV.classList.add('newInteretContainerCV');
    divInteretCV.innerHTML = `
    <span class="cv-interet-pill">
        <span class="interetCV">Centre d'intérêt</span>
    </span>`;
    interetContainerCV.appendChild(divInteretCV);

    divInteret.querySelector('.deleteInteret').addEventListener('click', () => {
        divInteret.remove();
        divInteretCV.remove();
        updateAllInteret();
    });
}

function updateAllInteret() {
    const all   = interetContainer.querySelectorAll('.newInteretContainer');
    const allCV = interetContainerCV.querySelectorAll('.newInteretContainerCV');

    all.forEach((block, i) => {
        const cv = allCV[i];
        if (!cv) return;
        cv.querySelector('.interetCV').textContent = block.querySelector('.interetInput').value || "Centre d'intérêt";
    });
}

//  Fonction des langues

function addLangue() {
    const divLangue = document.createElement('div');
    divLangue.classList.add('newLangueContainer');
    divLangue.innerHTML = `
    <div class="border border-success p-3 rounded mt-3">
        <div class="row g-3">
            <div class="col-md-6">
                <label class="form-label">Langue</label>
                <input type="text" class="form-control langueInput" placeholder="ex: Français">
            </div>
            <div class="col-md-6">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <label class="form-label mb-0">Niveau</label>
                    <i class="bi bi-trash text-danger deleteLangue" style="cursor:pointer;"></i>
                </div>
                <input type="text" class="form-control niveauLangueInput" placeholder="ex: Courant">
            </div>
        </div>
    </div>`;
    langueContainer.appendChild(divLangue);

    const divLangueCV = document.createElement('div');
    divLangueCV.classList.add('newLangueContainerCV');
    divLangueCV.innerHTML = `
    <span class="cv-skill-pill">
        <strong class="langueCV">Langue</strong>
        <span class="cv-pill-sep">|</span>
        <span class="niveauLangueCV">Niveau</span>
    </span>`;
    langueContainerCV.appendChild(divLangueCV);

    divLangue.querySelector('.deleteLangue').addEventListener('click', () => {
        divLangue.remove();
        divLangueCV.remove();
        updateAllLangue();
    });
}

function updateAllLangue() {
    const all   = langueContainer.querySelectorAll('.newLangueContainer');
    const allCV = langueContainerCV.querySelectorAll('.newLangueContainerCV');

    all.forEach((block, i) => {
        const cv = allCV[i];
        if (!cv) return;
        cv.querySelector('.langueCV').textContent      = block.querySelector('.langueInput').value      || 'Langue';
        cv.querySelector('.niveauLangueCV').textContent = block.querySelector('.niveauLangueInput').value || 'Niveau';
    });
}

//  Export PDF

function exportPDF() {
    document.querySelector('#cv_content_input').value = cvPreview.outerHTML;
    document.querySelector('#cv_theme_input').value   = currentTheme;
    document.querySelector('#pdfForm').submit();
}

//  Sauvegarde du CV

function getCVData() {
    const data = {
        theme:     currentTheme,
        firstName: firstNameInput.value,
        lastName:  lastNameInput.value,
        title:     titleInput.value,
        email:     emailInput.value,
        phone:     numberInput.value,
        address:   addressInput.value,
        linkedin:  linkedinInput.value,
        resume:    resumeInput.value,
        avatarSrc: avatarCV.style.display !== 'none' ? avatarCV.src : '',
        experiences: [],
        formations:  [],
        skills:      [],
        interets:    [],
        langues:     []
    };

    expContainer.querySelectorAll('.newExpContainer').forEach(b => {
        data.experiences.push({
            title:       b.querySelector('.titlePostInput').value,
            company:     b.querySelector('.companyInput').value,
            location:    b.querySelector('.localExpInput').value,
            startDate:   b.querySelector('.startDateExp').value,
            endDate:     b.querySelector('.endDateExp').value,
            description: b.querySelector('.descripExpInput').value
        });
    });

    diplomeContainer.querySelectorAll('.newDiplomeContainer').forEach(b => {
        data.formations.push({
            diplome:     b.querySelector('.diplomeFormInput').value,
            etablissement: b.querySelector('.etabFormInput').value,
            location:    b.querySelector('.localFormInput').value,
            startDate:   b.querySelector('.startDateFormInput').value,
            endDate:     b.querySelector('.endDateFormInput').value,
            description: b.querySelector('.descripFormInput').value
        });
    });

    skillContainer.querySelectorAll('.newSkillContainer').forEach(b => {
        data.skills.push({
            skill: b.querySelector('.skillInput').value,
            level: b.querySelector('.levelInput').value
        });
    });

    interetContainer.querySelectorAll('.newInteretContainer').forEach(b => {
        data.interets.push({ interet: b.querySelector('.interetInput').value });
    });

    langueContainer.querySelectorAll('.newLangueContainer').forEach(b => {
        data.langues.push({
            langue: b.querySelector('.langueInput').value,
            niveau: b.querySelector('.niveauLangueInput').value
        });
    });

    return data;
}

async function saveCV() {
    const data = getCVData();
    try {
        const res = await fetch('cv_storage.php?action=save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        if (result.success) {
            showToast('CV sauvegardé avec succès !', 'success');
            loadSavedCVsList();
        } else {
            showToast('Erreur lors de la sauvegarde.', 'danger');
        }
    } catch (e) {
        showToast('Erreur réseau.', 'danger');
    }
}


// Chargement d'un CV enregistré

async function loadCV(id) {
    try {
        const res = await fetch(`cv_storage.php?action=get&id=${encodeURIComponent(id)}`);
        const data = await res.json();
        restoreCVData(data);
        // Ferme l'offcanvas
        bootstrap.Offcanvas.getInstance(document.getElementById('savedCvsOffcanvas'))?.hide();
        showToast('CV chargé !', 'success');
    } catch (e) {
        showToast('Impossible de charger ce CV.', 'danger');
    }
}

function restoreCVData(data) {
    // Thème
    const theme = data.theme || 'default';
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    switchTheme(theme);

    // Infos perso
    firstNameInput.value = data.firstName || '';
    lastNameInput.value  = data.lastName  || '';
    titleInput.value     = data.title     || '';
    emailInput.value     = data.email     || '';
    numberInput.value    = data.phone     || '';
    addressInput.value   = data.address   || '';
    linkedinInput.value  = data.linkedin  || '';
    resumeInput.value    = data.resume    || '';

    // Avatar
    if (data.avatarSrc) {
        avatarCV.src = data.avatarSrc;
        avatarCV.style.display = 'block';
    } else {
        avatarCV.src = '';
        avatarCV.style.display = 'none';
    }

    // Expériences : supprimer les ajouts dynamiques, garder le 1er bloc
    clearDynamicBlocks(expContainer, '.newExpContainer', 1);
    clearDynamicBlocks(expContainerCV, '.newExpContainerCV', 1);

    if (data.experiences && data.experiences.length > 0) {
        fillExpBlock(expContainer.querySelector('.newExpContainer'), data.experiences[0]);
        for (let i = 1; i < data.experiences.length; i++) {
            addExp();
            const blocks = expContainer.querySelectorAll('.newExpContainer');
            fillExpBlock(blocks[blocks.length - 1], data.experiences[i]);
        }
    }

    // Formations
    clearDynamicBlocks(diplomeContainer, '.newDiplomeContainer', 1);
    clearDynamicBlocks(diplomeContainerCV, '.newDiplomeContainerCV', 1);

    if (data.formations && data.formations.length > 0) {
        fillDiplomeBlock(diplomeContainer.querySelector('.newDiplomeContainer'), data.formations[0]);
        for (let i = 1; i < data.formations.length; i++) {
            addDiplome();
            const blocks = diplomeContainer.querySelectorAll('.newDiplomeContainer');
            fillDiplomeBlock(blocks[blocks.length - 1], data.formations[i]);
        }
    }

    // Compétences
    clearDynamicBlocks(skillContainer, '.newSkillContainer', 1);
    clearDynamicBlocks(skillContainerCV, '.newSkillContainerCV', 1);

    if (data.skills && data.skills.length > 0) {
        fillSkillBlock(skillContainer.querySelector('.newSkillContainer'), data.skills[0]);
        for (let i = 1; i < data.skills.length; i++) {
            addSkill();
            const blocks = skillContainer.querySelectorAll('.newSkillContainer');
            fillSkillBlock(blocks[blocks.length - 1], data.skills[i]);
        }
    }

    // Intérêts
    clearDynamicBlocks(interetContainer, '.newInteretContainer', 1);
    clearDynamicBlocks(interetContainerCV, '.newInteretContainerCV', 1);

    if (data.interets && data.interets.length > 0) {
        fillInteretBlock(interetContainer.querySelector('.newInteretContainer'), data.interets[0]);
        for (let i = 1; i < data.interets.length; i++) {
            addInteret();
            const blocks = interetContainer.querySelectorAll('.newInteretContainer');
            fillInteretBlock(blocks[blocks.length - 1], data.interets[i]);
        }
    }

    // Langues
    clearDynamicBlocks(langueContainer, '.newLangueContainer', 1);
    clearDynamicBlocks(langueContainerCV, '.newLangueContainerCV', 1);

    if (data.langues && data.langues.length > 0) {
        fillLangueBlock(langueContainer.querySelector('.newLangueContainer'), data.langues[0]);
        for (let i = 1; i < data.langues.length; i++) {
            addLangue();
            const blocks = langueContainer.querySelectorAll('.newLangueContainer');
            fillLangueBlock(blocks[blocks.length - 1], data.langues[i]);
        }
    }

    // Rafraîchir la prévisualisation
    infoPersoPreview();
    resumePreview();
    updateAllExp();
    updateAllDiplome();
    updateAllSkill();
    updateAllInteret();
    updateAllLangue();
}

function clearDynamicBlocks(container, selector, keepFirst) {
    const blocks = container.querySelectorAll(selector);
    blocks.forEach((b, i) => { if (i >= keepFirst) b.remove(); });
}

function fillExpBlock(block, d) {
    if (!block || !d) return;
    block.querySelector('.titlePostInput').value  = d.title       || '';
    block.querySelector('.companyInput').value    = d.company     || '';
    block.querySelector('.localExpInput').value   = d.location    || '';
    block.querySelector('.startDateExp').value    = d.startDate   || '';
    block.querySelector('.endDateExp').value      = d.endDate     || '';
    block.querySelector('.descripExpInput').value = d.description || '';
}

function fillDiplomeBlock(block, d) {
    if (!block || !d) return;
    block.querySelector('.diplomeFormInput').value   = d.diplome       || '';
    block.querySelector('.etabFormInput').value      = d.etablissement || '';
    block.querySelector('.localFormInput').value     = d.location      || '';
    block.querySelector('.startDateFormInput').value = d.startDate     || '';
    block.querySelector('.endDateFormInput').value   = d.endDate       || '';
    block.querySelector('.descripFormInput').value   = d.description   || '';
}

function fillSkillBlock(block, d) {
    if (!block || !d) return;
    block.querySelector('.skillInput').value = d.skill || '';
    block.querySelector('.levelInput').value = d.level || '';
}

function fillInteretBlock(block, d) {
    if (!block || !d) return;
    block.querySelector('.interetInput').value = d.interet || '';
}

function fillLangueBlock(block, d) {
    if (!block || !d) return;
    block.querySelector('.langueInput').value       = d.langue || '';
    block.querySelector('.niveauLangueInput').value = d.niveau || '';
}

//  LISTE DES CV SAUVEGARDÉS

async function loadSavedCVsList() {
    try {
        const res  = await fetch('cv_storage.php?action=list');
        const cvs  = await res.json();
        renderSavedCVsList(cvs);
    } catch (e) {
        // fail silently
    }
}

function renderSavedCVsList(cvs) {
    const container = document.getElementById('savedCvsList');
    const emptyMsg  = document.getElementById('emptySavedMsg');

    // Supprimer les anciennes cartes
    container.querySelectorAll('.cv-card-item').forEach(el => el.remove());

    if (!cvs || cvs.length === 0) {
        emptyMsg.style.display = '';
        return;
    }
    emptyMsg.style.display = 'none';

    cvs.forEach(cv => {
        const themeBadgeClass = {
            default: 'theme-badge-default',
            modern:  'theme-badge-modern',
            simple:  'theme-badge-simple'
        }[cv.theme] || 'theme-badge-default';

        const themeLabel = { default: 'Défaut', modern: 'Moderne', simple: 'Simple' }[cv.theme] || cv.theme;

        const card = document.createElement('div');
        card.classList.add('cv-card-item', 'mb-3');
        card.innerHTML = `
        <div class="d-flex justify-content-between align-items-start">
            <div>
                <div class="cv-card-name">${escapeHtml(cv.name) || 'Sans nom'}</div>
                <div class="cv-card-title">${escapeHtml(cv.title) || ''}</div>
                <div class="cv-card-meta">
                    <span class="theme-badge ${themeBadgeClass}">${themeLabel}</span>
                    &nbsp; ${cv.saved_at}
                </div>
            </div>
            <div class="d-flex flex-column gap-1 ms-2">
                <button class="btn btn-sm btn-outline-success btn-load-cv" data-id="${escapeHtml(cv.id)}">
                    <i class="bi bi-upload"></i> Charger
                </button>
                <button class="btn btn-sm btn-outline-danger btn-delete-cv" data-id="${escapeHtml(cv.id)}">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>`;
        container.appendChild(card);

        card.querySelector('.btn-load-cv').addEventListener('click', () => loadCV(cv.id));
        card.querySelector('.btn-delete-cv').addEventListener('click', () => deleteCV(cv.id, card));
    });
}

async function deleteCV(id, cardEl) {
    if (!confirm('Supprimer ce CV sauvegardé ?')) return;
    try {
        const res = await fetch(`cv_storage.php?action=delete&id=${encodeURIComponent(id)}`);
        const result = await res.json();
        if (result.success) {
            cardEl.remove();
            showToast('CV supprimé.', 'success');
            // Afficher le message vide si plus rien
            const remaining = document.querySelectorAll('#savedCvsList .cv-card-item');
            if (remaining.length === 0) document.getElementById('emptySavedMsg').style.display = '';
        }
    } catch (e) {
        showToast('Erreur lors de la suppression.', 'danger');
    }
}
//  UTILITAIRES


function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function showToast(msg, type = 'success') {
    const toastEl = document.getElementById('saveToast');
    document.getElementById('toastMsg').textContent = msg;
    toastEl.className = `toast align-items-center text-bg-${type} border-0`;
    const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
    toast.show();
}

//  INITIALISATION

// Charger la liste des CVs sauvegardés au chargement
document.getElementById('savedCvsOffcanvas').addEventListener('show.bs.offcanvas', loadSavedCVsList);
