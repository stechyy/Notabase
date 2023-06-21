const account = document.getElementById("account-li");
const personalization = document.getElementById("personalization-li");
const manageApp = document.getElementById("manageApp-li")
const backup = document.getElementById("backup-li")
const info = document.getElementById("info-li");
const account_c = document.getElementById("account-tab");
const personalization_c = document.getElementById("personalization-tab");
const manageApp_c = document.getElementById("manageApp-tab");
const backup_c = document.getElementById("backup-tab");
const info_c = document.getElementById("info-tab");
account.addEventListener("click", function(){
    backup.removeAttribute("class");
    personalization.removeAttribute("class")
    manageApp.removeAttribute("class")
    info.removeAttribute("class");
    account.classList.add("active")
    startAccountTab()
})
personalization.addEventListener("click", function(){
    backup.removeAttribute("class");
    info.removeAttribute("class")
    manageApp.removeAttribute("class")
    account.removeAttribute("class");
    personalization.classList.add("active")
    startPersonalizationTab()
})
manageApp.addEventListener("click", function(){
    account.removeAttribute("class");
    personalization.removeAttribute("class")
    manageApp.classList.add("active")
    info.removeAttribute("class")
    backup.removeAttribute("class")
    startManageAppTab()
})
backup.addEventListener("click", function(){
    account.removeAttribute("class");
    personalization.removeAttribute("class")
    manageApp.removeAttribute("class")
    backup.classList.add("active")
    info.removeAttribute("class")
    startBackupTab()
})
info.addEventListener("click", function(){
    backup.removeAttribute("class");
    personalization.removeAttribute("class")
    manageApp.removeAttribute("class")
    account.removeAttribute("class");
    info.classList.add("active")
    startInfoTab()
})
function startAccountTab(){
    personalization_c.style.display = 'none'
    manageApp_c.style.display = 'none'
    backup_c.style.display = 'none'
    info_c.style.display = 'none'

    account_c.style.display = ''
}
function startPersonalizationTab(){
    account_c.style.display = 'none'
    manageApp_c.style.display = 'none'
    backup_c.style.display = 'none'
    info_c.style.display = 'none'

    personalization_c.style.display = ''
}
function startManageAppTab(){
    account_c.style.display = 'none'
    personalization_c.style.display = 'none'
    backup_c.style.display = 'none'
    info_c.style.display = 'none'

    manageApp_c.style.display = ''
}
function startBackupTab(){
    account_c.style.display = 'none'
    manageApp_c.style.display = 'none'
    personalization_c.style.display = 'none'
    info_c.style.display = 'none'

    backup_c.style.display = ''
}
function startInfoTab(){
    account_c.style.display = 'none'
    manageApp_c.style.display = 'none'
    backup_c.style.display = 'none'
    personalization_c.style.display = 'none'

    info_c.style.display = ''
}
function closeDiv(){
    const div = document.getElementById("settings-box");
    const screen = document.getElementById("settings-screen");
    div.style.transition = '0.2s'
    div.style.transform = 'translate(-50%, -50%) scale(0)'
    setTimeout(() => {
        screen.style.display = 'none'
    }, 200);
}