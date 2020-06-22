const links = {
  setcolor: (color) => {
    const alist = document.querySelectorAll('a');
    let i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
const body = {
  setcolor: (color) => {
    document.querySelector('body').style.color = color;
  },
  setbackgroundcolor: (color) => {
    document.querySelector('body').style.backgroundColor = color;
  }
}
const nightdayhandler = (self) => {
  const target = document.querySelector('body');
  if(self.value === 'night'){
    body.setbackgroundcolor('black');
    body.setcolor('white');
    self.value = 'day';
    links.setcolor('powderblue')
  } else {
    body.setbackgroundcolor('white');
    body.setcolor('black');
    self.value = 'night';
    links.setcolor('blue')
  }
}