const ACTIVE = 'active';

const active_video = document.querySelectorAll(
    ".main-structure .content video"
);

const active_video_overlay = document.querySelector(
    ".main-structure .content .video-overlay"
);

const menu_logo = document.querySelector("header .menu-logo");
const main_structure = document.querySelector(".main-structure");
const main_header = document.querySelector(".content .text-description h1");
const second_header = document.querySelector(".content .text-description h2");
const paragraph = document.querySelector(".content .text-description p");
const text_link = document.querySelector(".content .text-description a");
const menu_button = document.querySelectorAll(".aside-menu a");

active_video[0].classList.remove(ACTIVE);
active_video[0].classList.add(ACTIVE);
active_video_overlay.className = "video-overlay video-overlay-home";

main_header.innerHTML = CONTENT_INFO.home.h1;
second_header.innerHTML = CONTENT_INFO.home.h2;
paragraph.innerHTML = CONTENT_INFO.home.p;
text_link.innerHTML = "Explore";

menu_logo.addEventListener('click', () => {
    menu_logo.classList.toggle(ACTIVE);
    main_structure.classList.toggle(ACTIVE);
});

menu_button.forEach((button, index) => {
    button.addEventListener('click', () => {
        active_video.forEach((video) => {
            video.classList.remove(ACTIVE);
        });
        active_video[index].classList.add(ACTIVE);
        modify_content(index);
    });
});

function modify_content(index) {
    switch (index) {
        case 0:
            main_header.innerHTML = CONTENT_INFO.home.h1;
            second_header.innerHTML = CONTENT_INFO.home.h2;
            paragraph.innerHTML = CONTENT_INFO.home.p;
            active_video_overlay.className = "video-overlay video-overlay-home";
            break;
        case 1:
            main_header.innerHTML = CONTENT_INFO.resume.h1;
            second_header.innerHTML = CONTENT_INFO.resume.h2;
            paragraph.innerHTML = CONTENT_INFO.resume.p;
            active_video_overlay.className = "video-overlay video-overlay-resume";
            break;
        case 2:
            main_header.innerHTML = CONTENT_INFO.portfolio.h1;
            second_header.innerHTML = CONTENT_INFO.portfolio.h2;
            paragraph.innerHTML = CONTENT_INFO.portfolio.p;
            active_video_overlay.className = "video-overlay video-overlay-portfolio";
            break;
        case 3:
            main_header.innerHTML = CONTENT_INFO.blog.h1;
            second_header.innerHTML = CONTENT_INFO.blog.h2;
            paragraph.innerHTML = CONTENT_INFO.blog.p;
            active_video_overlay.className = "video-overlay video-overlay-blog";
            break;
        case 4:
            main_header.innerHTML = CONTENT_INFO.contact.h1;
            second_header.innerHTML = CONTENT_INFO.contact.h2;
            paragraph.innerHTML = CONTENT_INFO.contact.p;
            active_video_overlay.className = "video-overlay video-overlay-contact";
            break;
        default:
            break;
    }
}