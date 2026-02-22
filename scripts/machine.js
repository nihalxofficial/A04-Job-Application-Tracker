let interViewList = [];
let rejectedList = [];

let allCardSection = document.querySelector("#job-listings");
let filterSection = document.getElementById("filtered-listings");

function calculateCount(){
    let total = document.getElementById("total-counter");
    let interview = document.getElementById("interview-counter");
    let rejected = document.getElementById("rejected-counter");
    
    
    
    let interviewCount = interViewList.length;
    let rejectedCount = rejectedList.length;

    total.innerText = allCardSection.children.length;
    interview.innerText = interviewCount;
    rejected.innerText = rejectedCount;
    
}

calculateCount();