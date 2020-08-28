const tanah = document.querySelectorAll('.tanah')
const tikus = document.querySelectorAll('.tikus')
const score = document.querySelector('.papanSkor')
const ugh = document.querySelector('.ugh')
let tanahSebelumnya
let selesai
let skor

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length)
    tAcak = tanah[t]
    //Handle angka yg muncul sama dengan angka sebelumnya
    if(tAcak === tanahSebelumnya){
        randomTanah(tanah)
    }
    else{
        tanahSebelumnya = tAcak
    }
    return tAcak 
}

function randomWaktu(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
    
}

function munculkanTikus() {
    const tAcak = randomTanah(tanah)
    const wAcak = randomWaktu(400, 900)
    tAcak.classList.add('muncul')
    //Hilangkan Tikus setelah 500ms
    setTimeout(() =>{
        tAcak.classList.remove('muncul')
        if(!selesai){
            munculkanTikus()
        }
    }, wAcak)
}


//Fungi Inisialisasi
function mulai() {
    selesai = false
    skor = 0
    score.textContent = 0
    munculkanTikus()
    setTimeout(()=>{
        selesai = true
    },5000)
    
   
}

function tangkap() {
    skor++
    score.textContent = skor
    this.parentNode.classList.remove('muncul')
    ugh.play()
    this.style.transition = "TOP 0.1s";
    
}

for(i=0 ; i<tikus.length ; i++){
    tikus[i].addEventListener('click', tangkap)

}
