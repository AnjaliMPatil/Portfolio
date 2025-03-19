/* script.js */
function openTab(event, tabId) {
    let tabButtons = document.querySelectorAll(".tab-button");
    let tabContents = document.querySelectorAll(".tab-content");
    
    tabButtons.forEach(button => button.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));
    
    event.currentTarget.classList.add("active");
    document.getElementById(tabId).classList.add("active");
}