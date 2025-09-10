// ===============================
// HEADER SCROLL HIDING
// ===============================
let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', () => {
    const header = document.getElementById("mainHeader");
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }
    prevScrollPos = currentScrollPos;
});

// ===============================
// RENT NOTIFICATION
// ===============================
function showRentNotification() {
    const note = document.getElementById("rentNotification");
    if (!note) return;
    note.style.display = "block";
    setTimeout(() => { note.style.display = "none"; }, 5000);
}

function closeNotification() {
    const note = document.getElementById("rentNotification");
    if (!note) return;
    note.style.display = "none";
}

// ===============================
// CONFIGURATOR CAR IMAGE
// ===============================

const carImg = document.getElementById('carImage');
if (carImg) {
    // Change car image when clicking option buttons
    const optionButtons = document.querySelectorAll('.config-section .options button');
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newSrc = `img/911-turbo-s/${button.dataset.image}`;
            carImg.style.opacity = 0;
            setTimeout(() => {
                carImg.src = newSrc;
                carImg.style.opacity = 1;
            }, 300);
        });
    });

    // Automatically update car image when scrolling into section
    const sections = document.querySelectorAll('.config-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const firstButton = entry.target.querySelector('.options button');
                if (firstButton && firstButton.dataset.image) {
                    const newSrc = `img/911-turbo-s/${firstButton.dataset.image}`;
                    carImg.style.opacity = 0;
                    setTimeout(() => {
                        carImg.src = newSrc;
                        carImg.style.opacity = 1;
                    }, 300);
                }
            }
        });
    }, { threshold: 0.6 });

    sections.forEach(section => observer.observe(section));

    // Parallax effect while scrolling
    window.addEventListener('scroll', () => {
        const carContainer = document.querySelector('.car-image-container');
        const scrollTop = window.pageYOffset;
        if (carContainer) {
            carContainer.style.transform = `translateY(calc(-50% + ${scrollTop * 0.05}px))`;
        }
    });
}
