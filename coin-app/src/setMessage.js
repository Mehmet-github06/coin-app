//? npm i sweetalert2 ile kütüphaneyi kurduk.
//? Gerekli importu yaptık ( https://sweetalert2.github.io/#usage )
import Swal from "sweetalert2"

//? alert'leri sweetalert ile kolay bir şekilde vermek icin setMessage adinda bir fonksiyon yazdik
//? Fonks. nun ilk parametresi mesajin texti
//? 2. parametresi ise icon türü, Mevcut icon türleri icin: (https://sweetalert2.github.io/#icons  )
const setMessage = (msg, type = "warning") => {
  Swal.fire({
    position: "top-top",
    icon: type,
    title: msg,
    showConfirmButton: true,
    timer: 2000,
  })
}
export default setMessage