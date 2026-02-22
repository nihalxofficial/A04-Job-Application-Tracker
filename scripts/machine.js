let interViewList = [];
let rejectedList = [];


function calculateCount(){
    let total = document.getElementById("total-counter");
    let interview = document.getElementById("interview-counter");
    let rejected = document.getElementById("rejected-counter");
    
    
    let allCardSection = document.getElementById("job-listings");
    let interviewCount = interViewList.length;
    let rejectedCount = rejectedList.length;

    total.innerText = allCardSection.children.length;
    interview.innerText = interviewCount;
    rejected.innerText = rejectedCount;
    
}

calculateCount();


