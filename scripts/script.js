function toggle(id){
    const allFilterBtn = document.getElementById("all-filter-btn");
    const interViewFilterBtn = document.getElementById("interview-filter-btn");
    const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

    allFilterBtn.classList.remove("btn-primary");
    interViewFilterBtn.classList.remove("btn-primary");
    rejectedFilterBtn.classList.remove("btn-primary");


    const selected = document.getElementById(id);
    
    selected.classList.add('btn-primary');

    if(id==="all-filter-btn"){
        allCardSection.classList.remove("hidden");
        filterSection.classList.add("hidden");
    }else if(id==="interview-filter-btn"){
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderInterView();
    }

}


allCardSection.addEventListener("click", function(event){
    if(event.target.classList.contains("interview-btn")){
        const parentNode = event.target.parentElement.parentElement.parentElement;

        const jobCompany = parentNode.querySelector(".job-companies").innerText;
        const jobTitle = parentNode.querySelector(".job-title").innerText;
        const jobInfo = parentNode.querySelector(".job-info").innerText;
        const jobDescription = parentNode.querySelector(".job-description").innerText;
        let jobStatus = parentNode.querySelector(".job-status").innerText;
        
        jobStatus = "Interview";

        const job = {
            jobCompany,
            jobTitle,
            jobInfo,
            jobStatus,
            jobDescription
        }

        const jobExist = interViewList.find(item => item.jobTitle===job.jobTitle);
        if(!jobExist){
            interViewList.push(job);            
        }

        rejectedList = rejectedList.filter(item => item.jobTitle !== job.jobTitle);
        calculateCount();
        
    }
})

function renderInterView(){
    filterSection.innerHTML = "";
    for(let list of interViewList){
        const div = document.createElement("div");
        div.className = "job-card p-7 bg-white rounded-md border border-gray-200 shadow-sm hover:shadow-md flex justify-between";
        div.innerHTML = `
        <div class="card-left">
                <h2 class="job-companies mb-1 font-semibold text-lg text-[#002C5C]">${list.jobCompany}</h2>
                <p class="job-title text-[#64748B]">${list.jobTitle}</p>
                <p class="job-info my-5 text-[#64748B]">${list.jobInfo}</p>
                <h2 class="job-status text-[#002C5C] bg-[#EEF4FF] inline-block px-3 py-2 font-semibold text-sm rounded">${list.jobStatus}</h2>
                <p class="job-description mt-2 mb-5">${list.jobDescription}</p>

                <div class="job-card-buttons flex gap-3">
                    <button class="interview-btn btn btn-soft btn-success border-2 border-green-400">Interview</button>
                    <button class="rejected-btn btn btn-soft btn-error border-2 border-red-400">Rejected</button>
                </div>
            </div>
            <div class="card-right w-8 h-8 border border-gray-200 rounded-full cursor-pointer flex justify-center items-center shrink-0">
                <img src="./assets/images/Trash.png" alt="" class="">
            </div>
        </div>
        `
        filterSection.appendChild(div);
    }
}