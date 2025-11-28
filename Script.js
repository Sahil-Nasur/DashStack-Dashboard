// Email data
const emailData = [
    {
        sender: "Jullu Jalal",
        subject: "Our Bachelor of Commerce program is ACBSP-accredited.",
        time: "8:38 AM"
    },
    {
        sender: "Minerva Barnett",
        subject: "Get Best Advertiser In Your Side Pocket",
        time: "8:13 AM"
    },
    {
        sender: "Peter Lewis",
        subject: "Vacation Home Rental Success",
        time: "7:52 PM"
    },
    {
        sender: "Anthony Briggs",
        subject: "Free Classifieds Using Them To Promote Your Stuff Online",
        time: "7:52 PM"
    },
    {
        sender: "Clifford Morgan",
        subject: "Enhance Your Brand Potential With Giant Advertising Blimps",
        time: "4:13 PM"
    },
    {
        sender: "Cecilia Webster",
        subject: "Always Look On The Bright Side Of Life",
        time: "3:52 PM"
    },
    {
        sender: "Harvey Manning",
        subject: "Curling Irons Are As Individual As The Women Who Use Them",
        time: "2:30 PM"
    },
    {
        sender: "Willie Blake",
        subject: "Our Bachelor of Commerce program is ACBSP-accredited.",
        time: "8:38 AM"
    },
    {
        sender: "Minerva Barnett",
        subject: "Get Best Advertiser In Your Side Pocket",
        time: "8:13 AM"
    },
    {
        sender: "Fanny Weaver",
        subject: "Free Classifieds Using Them To Promote Your Stuff Online",
        time: "7:52 PM"
    },
    {
        sender: "Olga Hogan",
        subject: "Enhance Your Brand Potential With Giant Advertising Blimps",
        time: "4:13 PM"
    },
    {
        sender: "Lora Houston",
        subject: "Vacation Home Rental Success",
        time: "7:52 PM"
    }
];

window.addEventListener('DOMContentLoaded', function() {
    loadEmails();
    setupEventListeners();
});

function loadEmails() {
    const emailList = document.getElementById('emailList');
    
    emailData.forEach(function(email) {
        const emailItem = document.createElement('div');
        emailItem.className = 'email-item';
        
        emailItem.innerHTML = `
            <input type="checkbox" class="email-checkbox">
            <span class="email-star">★</span>
            <span class="email-sender">${email.sender}</span>
            <span class="email-subject">${email.subject}</span>
            <span class="email-time">${email.time}</span>
        `;
        
        emailList.appendChild(emailItem);
    });
}

function setupEventListeners() {
    
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('email-star')) {
            e.target.style.color = e.target.style.color === 'rgb(255, 215, 0)' ? '#ddd' : '#ffd700';
        }
    });
  
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('email-checkbox')) {
            const emailItem = e.target.closest('.email-item');
            if (e.target.checked) {
                emailItem.style.background = '#f0f2ff';
            } else {
                emailItem.style.background = '';
            }
        }
    });
   
    const folderItems = document.querySelectorAll('.folder-item');
    folderItems.forEach(function(item) {
        item.addEventListener('click', function() {
            folderItems.forEach(function(el) {
                el.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    const searchInput = document.querySelector('.search-mail input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const emails = document.querySelectorAll('.email-item');
            
            emails.forEach(function(email) {
                const sender = email.querySelector('.email-sender').textContent.toLowerCase();
                const subject = email.querySelector('.email-subject').textContent.toLowerCase();
                
                if (sender.includes(searchTerm) || subject.includes(searchTerm)) {
                    email.style.display = 'flex';
                } else {
                    email.style.display = 'none';
                }
            });
        });
    }

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            console.log('Previous page clicked');
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            console.log('Next page clicked');
        });
    }
    
    const composeBtn = document.querySelector('.compose-btn');
    if (composeBtn) {
        composeBtn.addEventListener('click', function() {
            alert('Compose new email');
        });
    }
   
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            console.log('Action button clicked');
        });
    });
}