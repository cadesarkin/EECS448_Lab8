imgArr = ['goat.jpeg', 'index.jpeg', 'jt.jpeg', 'miamimiracle.jpeg', 'nextgoat.jpeg']
imgIndex = 0;

function nextImage()
{
  var image = document.getElementById('1');
  if(imgIndex == 4) {
    imgIndex = 0;
  } else {
    imgIndex = imgIndex+1;
  }
  image.src = "img/" + imgArr[imgIndex];
};

function previousImage()
{
  var image = document.getElementById('1');
  if(imgIndex == 0) {
    imgIndex = 4;
  } else {
    imgIndex = imgIndex-1;
  }
  image.src = "img/" + imgArr[imgIndex];
};
