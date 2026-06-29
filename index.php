<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV Maker</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="./assets/css/cv-themes.css">
</head>
<body>

    <!--Navbar-->
    <header>
        <nav class="navbar bg-body-tertiary shadow-sm">
            <div class="container-fluid d-flex flex-column flex-md-row align-items-center px-4">
                <a href="#" class="navbar-brand d-flex flex-column align-items-center align-items-md-start mb-3 mb-md-0 text-center text-md-start">
                    <img src="./assets/img/logo.svg" alt="Logo CV Maker" height="40">
                    <p class="mb-0 small text-muted">Créer votre CV professionnel en quelques minutes</p>
                </a>
                <button class="btn btn-outline-success ms-md-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#savedCvsOffcanvas">
                    <i class="bi bi-folder2-open me-1"></i> Mes CV sauvegardés
                </button>
            </div>
        </nav>
    </header>

    <!--OFFCANVAS : CVs sauvegardés-->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="savedCvsOffcanvas" style="width: 360px;">
        <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title"><i class="bi bi-bookmark-star me-2 text-success"></i>Mes CV sauvegardés</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body p-3" id="savedCvsList">
            <p class="text-muted text-center mt-4" id="emptySavedMsg">Aucun CV sauvegardé pour l'instant.</p>
        </div>
    </div>

    <!--Main-->
    <main class="container-fluid mt-4">
        <div class="row g-4">

            <!--Formulaire-->
            <div class="col-12 col-lg-6">

                <!-- Informations personnelles -->
                <section class="infos border border-success rounded p-3 mb-4">
                    <h2 class="text-success h4 mb-4">Informations personnelles</h2>
                    <form class="row g-3 infoContainer">
                        <div class="col-md-6">
                            <label for="firstNameInput" class="form-label">Prénom</label>
                            <input type="text" class="form-control" id="firstNameInput">
                        </div>
                        <div class="col-md-6">
                            <label for="lastNameInput" class="form-label">Nom</label>
                            <input type="text" class="form-control" id="lastNameInput">
                        </div>
                        <div class="col-12">
                            <label for="titleProfessionalInput" class="form-label">Titre professionnel</label>
                            <input type="text" class="form-control" id="titleProfessionalInput">
                        </div>
                        <div class="col-md-6">
                            <label for="emailInput" class="form-label">Email</label>
                            <input type="email" class="form-control" id="emailInput">
                        </div>
                        <div class="col-md-6">
                            <label for="numberInput" class="form-label">Téléphone</label>
                            <input type="text" class="form-control" id="numberInput">
                        </div>
                        <div class="col-12">
                            <label for="addressInput" class="form-label">Adresse</label>
                            <input type="text" class="form-control" id="addressInput">
                        </div>
                        <div class="col-12">
                            <label for="linkedinInput" class="form-label">LinkedIn</label>
                            <input type="text" class="form-control" id="linkedinInput">
                        </div>
                        <div class="col-12">
                            <label for="avatarInput" class="form-label">Photo de profil</label>
                            <input type="file" class="form-control" id="avatarInput" accept="image/*">
                        </div>
                    </form>
                </section>

                <!-- Résumé professionnel -->
                <section class="infos border border-success rounded p-3 mb-4">
                    <h2 class="text-success h4 mb-4">Résumé professionnel</h2>
                    <textarea class="form-control" rows="4" id="resumeInput" placeholder="Résumez votre parcours professionnel…"></textarea>
                </section>

                <!-- Expériences professionnelles -->
                <section class="infos border border-success rounded p-3 mb-4">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h2 class="text-success h4 mb-0">Expérience professionnelle</h2>
                        <button type="button" class="btn btn-sm btn-success" id="addExp"><i class="bi bi-plus-lg"></i> Ajouter</button>
                    </div>
                    <div class="expContainer">
                        <div class="newExpContainer">
                            <div class="border border-success p-3 rounded">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <label class="form-label">Titre du poste</label>
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
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Formations -->
                <section class="infos border border-success rounded p-3 mb-4">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h2 class="text-success h4 mb-0">Formation</h2>
                        <button type="button" class="btn btn-sm btn-success addDiplome"><i class="bi bi-plus-lg"></i> Ajouter</button>
                    </div>
                    <div class="diplomeContainer">
                        <div class="newDiplomeContainer">
                            <div class="border border-success p-3 rounded">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <label class="form-label">Diplôme / Formation</label>
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
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Compétences -->
                <section class="infos border border-success rounded p-3 mb-4">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h2 class="text-success h4 mb-0">Compétences</h2>
                        <button type="button" class="btn btn-sm btn-success addSkill"><i class="bi bi-plus-lg"></i> Ajouter</button>
                    </div>
                    <div class="skillContainer">
                        <div class="newSkillContainer">
                            <div class="border border-success p-3 rounded">
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <label class="form-label">Compétence</label>
                                        <input type="text" class="form-control skillInput">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Niveau</label>
                                        <input type="text" class="form-control levelInput" placeholder="ex: Expert">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Centres d'intérêts -->
                <section class="infos border border-success rounded p-3 mb-4">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h2 class="text-success h4 mb-0">Centres d'intérêts</h2>
                        <button type="button" class="btn btn-sm btn-success addInteret"><i class="bi bi-plus-lg"></i> Ajouter</button>
                    </div>
                    <div class="interetContainer">
                        <div class="newInteretContainer">
                            <div class="border border-success p-3 rounded">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <label class="form-label">Centre d'intérêt</label>
                                        <input type="text" class="form-control interetInput" placeholder="ex: Photographie">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Langues -->
                <section class="infos border border-success rounded p-3 mb-4">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h2 class="text-success h4 mb-0">Langues</h2>
                        <button type="button" class="btn btn-sm btn-success addLangue"><i class="bi bi-plus-lg"></i> Ajouter</button>
                    </div>
                    <div class="langueContainer">
                        <div class="newLangueContainer">
                            <div class="border border-success p-3 rounded">
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <label class="form-label">Langue</label>
                                        <input type="text" class="form-control langueInput" placeholder="ex: Français">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Niveau</label>
                                        <input type="text" class="form-control niveauLangueInput" placeholder="ex: Courant">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Boutons d'action -->
                <div class="d-flex justify-content-center gap-3 mb-5 flex-wrap">
                    <button type="button" class="btn btn-outline-success btn-lg px-4 shadow-sm" id="saveCV">
                        <i class="bi bi-bookmark-plus me-2"></i>Sauvegarder
                    </button>
                    <button type="button" class="btn btn-success btn-lg px-4 shadow" id="convertToPDF">
                        <i class="bi bi-download me-2"></i>Exporter en PDF
                    </button>
                </div>
            </div>

            <!--Prévisualisation-->
            <div class="col-12 col-lg-6">
                <div class="sticky-top pt-2">

                    <!-- Sélecteur de thème -->
                    <div class="d-flex gap-2 mb-3 justify-content-center flex-wrap">
                        <button class="theme-btn active" data-theme="default">
                            <span class="theme-dot bg-success"></span> Défaut
                        </button>
                        <button class="theme-btn" data-theme="modern">
                            <span class="theme-dot" style="background: linear-gradient(135deg, #7c3aed, #4361ee);"></span> Moderne
                        </button>
                        <button class="theme-btn" data-theme="simple">
                            <span class="theme-dot bg-dark"></span> Simple
                        </button>
                    </div>

                    <!-- CV Preview -->
                    <div class="cv-preview theme-default" id="cvPreview">

                        <div class="cv-header">
                            <div class="cv-header-inner">
                                <div class="cv-header-text">
                                    <h2 class="cv-fullname">
                                        <span id="firstNameCV">Prénom</span>
                                        <span id="lastNameCV">Nom</span>
                                    </h2>
                                    <p class="cv-jobtitle" id="titleCV">Titre professionnel</p>
                                    <div class="cv-contacts">
                                        <span class="cv-contact d-none" id="emailWrapper">
                                            <i class="bi bi-envelope"></i>
                                            <span id="emailCV"></span>
                                        </span>
                                        <span class="cv-contact d-none" id="numberWrapper">
                                            <i class="bi bi-telephone"></i>
                                            <span id="numberCV"></span>
                                        </span>
                                        <span class="cv-contact d-none" id="addressWrapper">
                                            <i class="bi bi-geo-alt"></i>
                                            <span id="addressCV"></span>
                                        </span>
                                        <span class="cv-contact d-none" id="linkedinWrapper">
                                            <i class="bi bi-linkedin"></i>
                                            <span id="linkedinCV"></span>
                                        </span>
                                    </div>
                                </div>
                                <div class="cv-header-avatar">
                                    <div class="cv-avatar-circle" id="avatarCircle">
                                        <img id="avatarCV" src="" alt="Photo de profil" style="display:none;">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="cv-body">

                            <div class="cv-section">
                                <h4 class="cv-section-title">Résumé professionnel</h4>
                                <p class="cv-text" id="resumeCV">Votre résumé professionnel</p>
                            </div>
                            <hr class="cv-divider">

                            <div class="cv-section">
                                <h4 class="cv-section-title">Expérience professionnelle</h4>
                                <div class="expContainerCV">
                                    <div class="newExpContainerCV cv-entry">
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
                                        <p class="descripExpCV cv-text">Description de votre expérience professionnelle</p>
                                    </div>
                                </div>
                            </div>
                            <hr class="cv-divider">

                            <div class="cv-section">
                                <h4 class="cv-section-title">Formation</h4>
                                <div class="diplomeContainerCV">
                                    <div class="newDiplomeContainerCV cv-entry">
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
                                        <p class="descripFormCV cv-text">Description de votre formation</p>
                                    </div>
                                </div>
                            </div>
                            <hr class="cv-divider">

                            <div class="cv-section">
                                <h4 class="cv-section-title">Compétences</h4>
                                <div class="skillContainerCV d-flex flex-wrap gap-2">
                                    <div class="newSkillContainerCV">
                                        <span class="cv-skill-pill">
                                            <strong class="skillCV">Compétence</strong>
                                            <span class="cv-pill-sep">|</span>
                                            <span class="levelCV">Niveau</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr class="cv-divider">

                            <div class="cv-section">
                                <h4 class="cv-section-title">Centres d'intérêts</h4>
                                <div class="interetContainerCV d-flex flex-wrap gap-2">
                                    <div class="newInteretContainerCV">
                                        <span class="cv-interet-pill">
                                            <span class="interetCV">Centre d'intérêt</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr class="cv-divider">

                            <div class="cv-section">
                                <h4 class="cv-section-title">Langues</h4>
                                <div class="langueContainerCV d-flex flex-wrap gap-2">
                                    <div class="newLangueContainerCV">
                                        <span class="cv-skill-pill">
                                            <strong class="langueCV">Langue</strong>
                                            <span class="cv-pill-sep">|</span>
                                            <span class="niveauLangueCV">Niveau</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Formulaire caché pour l'export PDF -->
        <form action="generate.php" method="POST" id="pdfForm" class="d-none">
            <input type="hidden" name="cv_content" id="cv_content_input">
            <input type="hidden" name="cv_theme" id="cv_theme_input">
        </form>

    </main>

    <!-- Toast notification -->
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 1100">
        <div id="saveToast" class="toast align-items-center text-bg-success border-0" role="alert">
            <div class="d-flex">
                <div class="toast-body">
                    <i class="bi bi-check-circle me-2"></i><span id="toastMsg">CV sauvegardé !</span>
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
