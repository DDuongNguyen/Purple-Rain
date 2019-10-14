function head_stuff(){
  const head = document.querySelector('#head')
  head.addEventListener('click', () => {
    const canvas = document.querySelector('#defaultCanvas0')
    const audio = document.querySelector('#audio')

    head.style.display='none'
    canvas.style.display= 'flex'
    audio.innerHTML= `<iframe id='music' src="./purple_rain.mp3" allow="autoplay" controls=0 class="hidden"></iframe>`
  })
}

head_stuff()
