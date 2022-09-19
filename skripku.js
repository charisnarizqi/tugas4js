function dataSiswa() {
  // tangkap id form
  let forms = document.getElementById("frm");
  let siswa = forms.nama.value;
  let pekerjaan = forms.pekerjaan.value;
  let hobi = forms.hobi.value;
  let data = `data siswa : ${siswa} <br/> pekerjaan :${pekerjaan} <br/> hobi : ${hobi}`;
  document.getElementById("isi").innerHTML = data;
}
