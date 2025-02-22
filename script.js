document.addEventListener("DOMContentLoaded", function() {
    const members = [
        { name: "Ahmad", photo: "ahmad.jpg" },
        { name: "Alam", photo: "alam.jpg" },
        { name: "Kevin", photo: "kevin.jpg" },
        { name: "Baim", photo: "baim.jpg" },
        { name: "Aby", photo: "aby.jpg" },
        { name: "Giri", photo: "giri.jpg" },
        { name: "Raffy", photo: "raffy.jpg" },
        { name: "Padil", photo: "fadil.jpg" },
        { name: "Fajar", photo: "fajar.jpg" },
        { name: "Adit", photo: "adit.jpg" }
    ];
    
    const memberList = document.getElementById("member-list");
    const memberPhoto = document.getElementById("member-photo");
    
    members.forEach(member => {
        let li = document.createElement("li");
        li.textContent = member.name;
        
        li.addEventListener("click", function() {
            memberPhoto.src = member.photo;
            memberPhoto.style.display = "block";
        });
        
        li.addEventListener("mouseover", function() {
            li.style.backgroundColor = "#b266ff";
            li.style.color = "white";
        });
        
        li.addEventListener("mouseout", function() {
            li.style.backgroundColor = "#d8b3ff";
            li.style.color = "#4b0082";
        });
        
        memberList.appendChild(li);
    });
});
