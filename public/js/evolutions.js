let setTabView = function(elem) {
    
    let tabs = document.querySelectorAll(".trimester_tab button");

    for(let i in tabs) {
        if(tabs[i].classList.contains("selected")) {
            tabs[i].classList.remove("selected");
            break;
        }
    }

    elem.classList.add("selected");

    let tabsContent = document.querySelectorAll(".tab_content");

    for(let i in tabsContent) {
        if(tabsContent[i].classList.contains("selected")) {
            tabsContent[i].classList.remove("selected");
            break;
        }
    }

    document.getElementById(elem.dataset.tab_id).classList.add("selected");
};