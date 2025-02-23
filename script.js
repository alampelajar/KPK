document.addEventListener("DOMContentLoaded", function() {
    const members = [
        { name: "Ahmad", photo: "kpklogo.gif", link: "ahmad.html" },
        { name: "Alam", photo: "kpklogo.gif", link: "alam.html" },
        { name: "Kevin", photo: "kpklogo.gif", link: "kevin.html" },
        { name: "Baim", photo: "kpklogo.gif", link: "baim.html" },
        { name: "Aby", photo: "kpklogo.gif", link: "aby.html" },
        { name: "Giri", photo: "kpklogo.gif", link: "giri.html" },
        { name: "Raffy", photo: "kpklogo.gif", link: "raffy.html" },
        { name: "Padil", photo: "kpklogo.gif", link: "padil.html" },
        { name: "Fajar", photo: "kpklogo.gif", link: "fajar.html" },
        { name: "Adit", photo: "kpklogo.gif", link: "adit.html" }
    ];
    
    const memberList = document.getElementById("member-list");
    const memberPhoto = document.getElementById("member-photo");
    const detailButton = document.getElementById("detail-button");
    let currentMemberLink = "";

    members.forEach(member => {
        let li = document.createElement("li");
        li.textContent = member.name;
        
        li.addEventListener("click", function() {
            memberPhoto.src = member.photo;
            memberPhoto.style.display = "block";
            detailButton.style.display = "block";
            currentMemberLink = member.link;
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

    window.goToDetails = function() {
        if (currentMemberLink) {
            window.location.href = currentMemberLink;
        }
    };
});
