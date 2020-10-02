function from() {
  if (r == undefined) alert('Ateast Perform An Operation !')
  else {
    document.getElementById('demo1').value = r
    document.getElementById('demo2').value = ''
  }
}
function to() {
  if (r == undefined) alert('Ateast Perform An Operation !')
  else {
    document.getElementById('demo1').value = ''
    document.getElementById('demo2').value = r
  }
}
