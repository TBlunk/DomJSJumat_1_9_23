class Kendaraan {
    constructor(model, merk, harga){
    this.model = model;
    this.merk = merk;
    this.harga = harga;
    }
    juara() {
        return `kendaraan ${this.merk} ${this.model}   menjuarai kontes kendaraan`;
        }

    tidak() {
            return `kendaraan ${this.merk} ${this.model}  tidak menjuarai kontes`;
        }
}
    let mobil = new Kendaraan ("Supra", "Toyota", 200000);
    let motor = new Kendaraan ("CBR", "Honda", 30000);
   
    console.log(mobil.juara());
    console.log(motor.tidak());

class Siswa {
    constructor(nama, kelas, jurusan, nis){
    this.nama = nama;
    this.kelas = kelas;
    this.jurusan = jurusan;
    this.nis = nis;
    }

    mengikuti() {
        return `Siswa ${this.nama} kelas ${this.kelas} Dari jurusan ${this.jurusan}  Mengikuti lomba kompetensi siswa`;
        }

    tidak() {
            return `Siswa ${this.nama} kelas ${this.kelas} Dari jurusan ${this.jurusan}  Tidak Mengikuti lomba kompetensi siswa`;
        }
    }

    let siswa1 = new Siswa ("Hugo", "XI", "TJKT", 233120);
    let siswa2 = new Siswa ("Asep", "XI", "PPLG", 322212);
    let siswa3 = new Siswa ("Sudi", "X", "TBSM", 213331);
        
    console.log(siswa1.mengikuti());
    console.log(siswa2.tidak());
    console.log(siswa3.mengikuti());