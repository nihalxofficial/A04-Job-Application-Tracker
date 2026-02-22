function toggle(id){
    const allFilterBtn = document.getElementById("all-filter-btn");
    const interViewFilterBtn = document.getElementById("interview-filter-btn");
    const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

    allFilterBtn.classList.remove("btn-primary");
    interViewFilterBtn.classList.remove("btn-primary");
    rejectedFilterBtn.classList.remove("btn-primary");


    const selected = document.getElementById(id);
    selected.classList.add('btn-primary');

    currentStatus = id;

    if(id==="all-filter-btn"){
        allCardSection.classList.remove("hidden");
        filterSection.classList.add("hidden");
        
        
    }else if(id==="interview-filter-btn"){
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderInterView();
        
        
       
    }else if(id==="rejected-filter-btn"){
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderRejected();
        
    }
    
}





mainSection.addEventListener("click", function(event){
    if(event.target.classList.contains("interview-btn")){
        let parentNode = event.target.parentElement.parentElement.parentElement;
        parentNode.classList.remove("border-gray-200");
        parentNode.classList.remove("border-red-400");
        parentNode.classList.add("border-green-400");
        

        const jobCompany = parentNode.querySelector(".job-companies").innerText;
        const jobTitle = parentNode.querySelector(".job-title").innerText;
        const jobInfo = parentNode.querySelector(".job-info").innerText;
        const jobDescription = parentNode.querySelector(".job-description").innerText;
        let jobStatus = parentNode.querySelector(".job-status").innerText;
        
        jobStatus =  parentNode.querySelector(".job-status").innerText = "INTERVIEW";
        parentNode.querySelector(".job-status").classList.remove("bg-[#EEF4FF]");
        parentNode.querySelector(".job-status").classList.remove("bg-red-200");
        parentNode.querySelector(".job-status").classList.add("bg-green-200");
        

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
        
        if(currentStatus==="rejected-filter-btn"){
            renderRejected();
        }

        calculateCount();
        
    }else if(event.target.classList.contains("rejected-btn")){
        let parentNode = event.target.parentElement.parentElement.parentElement;
        parentNode.classList.remove("border-gray-200");
        parentNode.classList.remove("border-green-200");
        parentNode.classList.add("border-red-400");
        

        const jobCompany = parentNode.querySelector(".job-companies").innerText;
        const jobTitle = parentNode.querySelector(".job-title").innerText;
        const jobInfo = parentNode.querySelector(".job-info").innerText;
        const jobDescription = parentNode.querySelector(".job-description").innerText;
        let jobStatus = parentNode.querySelector(".job-status").innerText;
        
        jobStatus =  parentNode.querySelector(".job-status").innerText = "REJECTED";
        parentNode.querySelector(".job-status").classList.remove("bg-[#EEF4FF]");
        parentNode.querySelector(".job-status").classList.add("bg-red-200");
        

        const job = {
            jobCompany,
            jobTitle,
            jobInfo,
            jobStatus,
            jobDescription
        }

        const jobExist = rejectedList.find(item => item.jobTitle===job.jobTitle);
        if(!jobExist){
            rejectedList.push(job);            
        }

        interViewList = interViewList.filter(item => item.jobTitle !== job.jobTitle);
        if(currentStatus==="interview-filter-btn"){
            console.log(currentStatus);
            renderInterView();
        }

        calculateCount();
        
    }
})

function renderInterView(){
    filterSection.innerHTML = "";
    if(interViewList.length<=0){
            const section = document.createElement("section");
            section.className = "no-jobs ";
            section.innerHTML = `
            <div class="text-center bg-white py-20 rounded-md border-gray-200 shadow-md"> 
                <img src="./assets/images/jobs.png" alt="" class="mx-auto mb-5">
                <h2 class="mb-1 font-semibold text-2xl text-[#002C5C]">No jobs available</h2>
                <p class="text-lg text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
            `
         filterSection.appendChild(section);   
    }else{

    
    for(let list of interViewList){
        const div = document.createElement("div");
        div.className = "job-card p-7 bg-white rounded-md border border-green-400 shadow-sm hover:shadow-md flex justify-between border-l-6";
        div.innerHTML = `
        <div class="card-left">
                <h2 class="job-companies mb-1 font-semibold text-lg text-[#002C5C]">${list.jobCompany}</h2>
                <p class="job-title text-[#64748B]">${list.jobTitle}</p>
                <p class="job-info my-5 text-[#64748B]">${list.jobInfo}</p>
                <h2 class="job-status text-[#002C5C] bg-green-200 inline-block px-3 py-2 font-semibold text-sm rounded">${list.jobStatus}</h2>
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
    }}
}
function renderRejected(){
    filterSection.innerHTML = "";
    for(let list of rejectedList){
        const div = document.createElement("div");
        div.className = "job-card p-7 bg-white rounded-md border border-red-400 shadow-sm hover:shadow-md flex justify-between border-l-6";
        div.innerHTML = `
        <div class="card-left">
                <h2 class="job-companies mb-1 font-semibold text-lg text-[#002C5C]">${list.jobCompany}</h2>
                <p class="job-title text-[#64748B]">${list.jobTitle}</p>
                <p class="job-info my-5 text-[#64748B]">${list.jobInfo}</p>
                <h2 class="job-status text-[#002C5C] bg-red-200 inline-block px-3 py-2 font-semibold text-sm rounded">${list.jobStatus}</h2>
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

