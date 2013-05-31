/*
@Author : Hemanth.HM
@email : hemanth.hm@gmail.com
@license : GNU GPLv3
 */

b = document.createElement('button')
b.className='class="yt-uix-tooltip-reverse  yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty'
s = document.createElement('span')
b.appendChild(s)
s.innerHTML="<b>Notes</b>"
b.appendChild(s)
d=document.querySelector('div#watch7-sentiment-actions')
d.appendChild(b)
code = document.createElement('div')
notes = document.createElement('textarea')
notes.id='yt-notes'
notes.style.cssText="background: url(http://i.stack.imgur.com/ynxjD.png) repeat-y ;width:600px;height:300px;line-height:25px;padding: 2px 10px;border:soild 1px #ddd;"
notes.style.display='none'
code.appendChild(notes)
d.appendChild(code);
if (window.localStorage) {
      var new_notes = 'Save your notes here.',
      unsupported = 'Snap, get a good browser first!';
      var key = window.location.href.split("v=")[1].substring(0, 11)
      var p = document.querySelector('#yt-notes');
      if (localStorage.getItem(key) == null) {
          p.value = new_notes
          localStorage.setItem(key,p.value);
      } else {
          p.value = localStorage.getItem(key)
      }   
      p.addEventListener('keyup', function(){ localStorage.setItem(key,p.value); }, false);
  } else {
      document.getElementById('yt-notes').value = unsupported;
  }
b.onclick = function () {notes.style.display == 'none' ? notes.style.display = 'block' : notes.style.display='none'}

