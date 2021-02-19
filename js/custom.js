async function getData (url) {
  try {
    const res = await fetch(url)
    return await res.text()
  } catch (error) {
    console.log(error)
  }
}

md = new markdownit()
var url = $('#url').val()
c = getData(url)
c.then(function (text) {
  var result = md.render(text)
  var mainContent = document.getElementById('main-content')
  var r = $(`<div>${result}</div>`)
  $('#main-content').append(r)
})

for (i = 0; i < $('img').length; i++) {
  if (i <= 1) continue
  var obj = $('img')[i]
  obj.className = 'center'
}
