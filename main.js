//顯示回覆留言區
$(".replyBtn").on("click", function (e) {
    e.preventDefault();
    document.querySelector('.replyArea').classList.add('show');
})

//隱藏回覆留言區
$(".cancelBtn").on("click", function (e) {
    e.preventDefault();
    document.querySelector('.replyArea').classList.remove('show');
})
