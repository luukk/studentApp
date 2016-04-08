var pupilLeft = document.querySelector('.pupilLeft');
var pupilRight = document.querySelector('.pupilRight')

setInterval(function() {
    var verticalEyeLocation = Math.random() * 10;
    var horizontalEyeLocation = Math.random() * 14;

    pupilLeft.style.marginTop = "" + verticalEyeLocation + "px";
    pupilLeft.style.marginLeft = "" + horizontalEyeLocation + "px";
    pupilRight.style.marginTop = "" + verticalEyeLocation + "px";
    pupilRight.style.marginLeft = "" + horizontalEyeLocation + "px";
}, 2000);
