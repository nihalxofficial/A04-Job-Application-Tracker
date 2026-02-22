function toggle(id){
    const allFilterBtn = document.getElementById("all-filter-btn");
    const interViewFilterBtn = document.getElementById("interview-filter-btn");
    const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

    allFilterBtn.classList.remove("btn-primary");
    interViewFilterBtn.classList.remove("btn-primary");
    rejectedFilterBtn.classList.remove("btn-primary");


    const selected = document.getElementById(id);
    // console.log(selected);
    
    selected.classList.add('btn-primary');

}