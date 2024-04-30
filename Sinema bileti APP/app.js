
//seçilen koltuk için ücret hesaplama

const container = document.querySelector(".container");
container.addEventListener("click", hesapla);

const count = document.getElementById("count"); // sonradan tanımladık
const amount = document.getElementById("amount"); // sonradan tanımladık
const selectMovie = document.querySelector("#movie");

function hesapla(e) {
    // seat elementlerine tıklama eventını kontrol ediyoruz

    if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {
        e.target.classList.toggle("selected")

        totalCalculate();

    }
}

selectMovie.addEventListener("change", function (e) {

    totalCalculate();
})


function totalCalculate() { // burda her iki yerde de bu hesaplamayı kullanacağımız için functıon içine yazdık ve 2 yerde de çağırdık.

    const selectedSeat = container.querySelectorAll(".seat.selected");

    let selectedSeatCount = selectedSeat.length; //hem seat classına hem de selected classına sahip olanların sayısını seçiyoruz


    count.innerText = selectedSeatCount;

    let price = selectedSeatCount * (selectMovie.value);
    amount.innerText = price;

}
//buton işlemleri

const out = document.getElementById("out");
const button = document.getElementById("button");
button.addEventListener("click", tamamla);

function tamamla() {
    const paragraf = document.createElement("p")
    paragraf.className = "result";
    paragraf.textContent = "Ödemeniz başarıyla tamamlandı";

    out.appendChild(paragraf)
    button.style.display = "none";
    // button.disabled=true;  alternatif olarak butona tıkladığında pasif hale getirmek için

}
