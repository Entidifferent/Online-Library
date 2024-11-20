// Duyệt qua tất cả các nút bookmark, like, download
const bookmarkBtns = document.querySelectorAll('.bookmark-btn');
const likeBtns = document.querySelectorAll('.like-btn');
const downloadBtns = document.querySelectorAll('.download-btn');

// Xử lý sự kiện cho mỗi nút bookmark
bookmarkBtns.forEach((btn, index) => {
    const icon = btn.querySelector('.bookmark-icon');
    btn.addEventListener('click', function() {
        if (icon.src.includes("bookmark.png")) {
            icon.src = "Icons/bookmark-filled.png";
        } else {
            icon.src = "Icons/bookmark.png";
        }
    });
});

// Xử lý sự kiện cho mỗi nút like
likeBtns.forEach((btn, index) => {
    const icon = btn.querySelector('.like-icon');
    btn.addEventListener('click', function() {
        if (icon.src.includes("heart.png")) {
            icon.src = "Icons/heart-filled.png";
        } else {
            icon.src = "Icons/heart.png";
        }
    });
});

// Xử lý sự kiện cho mỗi nút download
downloadBtns.forEach((btn, index) => {
    const icon = btn.querySelector('.download-icon');
    btn.addEventListener('click', function() {
        if (icon.src.includes("download.png")) {
            icon.src = "Icons/download-filled.png";
        } else {
            icon.src = "Icons/download.png";
        }
    });
});
