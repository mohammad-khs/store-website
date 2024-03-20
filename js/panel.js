
let userName = document.querySelector(".name");
let arrow = document.querySelector(".fa-solid");
let menuBtnsName = document.querySelectorAll(".item span");
let menuBtns = document.querySelectorAll(".menu-btns .item");


function togglePanel() {
    let panel = document.querySelector("#panel");

    if (panel.className == "panel") {
        panel.classList.replace("panel", "min-panel")
        userName.style.display = "none"
        menuBtnsName.forEach(element=>{
            element.style.display = "none"
        })
        menuBtns.forEach(element=>{
            element.style.justifyContent = "center"
            element.style.padding = "25px"
        })
        arrow.style.display = "none"
        toggleUserDetails(true)
    }else{
         
        panel.classList.replace("min-panel", "panel")
        userName.style.display = "inline"
        menuBtnsName.forEach(element=>{
            element.style.display = "inline"
        })
        menuBtns.forEach(element=>{
            element.style.justifyContent = "flex-start"
            element.style.padding = "20px 30px 20px 0"
        })
        arrow.style.display = "inline"
    }
    
   
}

function toggleUserDetails(flag) {
    let userDetails = document.querySelector(".details")
    let userInfo = document.querySelector(".user-info")

    arrow.style.userSelect = "none"
    
    if (flag == true || userDetails.style.display == "block") {
        userDetails.style.display = "none"
        userInfo.style.height = "88px"
        
        arrow.classList.replace("fa-angle-up", "fa-angle-down")

    } else {
        userDetails.style.display = "block"
        userInfo.style.height = "155px"

        arrow.classList.replace("fa-angle-down", "fa-angle-up")

    }
}



const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [9, 6, 4, 3, 8, 7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },

    }
});