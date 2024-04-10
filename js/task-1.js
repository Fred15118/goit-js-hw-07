const liItems = document.querySelectorAll('.item');
console.log('Number of categories:', liItems.length);
liItems.forEach(function (item) {
    console.log('Category:',item.firstElementChild.textContent);
    console.log('Elements:',item.lastElementChild.children.length);
})