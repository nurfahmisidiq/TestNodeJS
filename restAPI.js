const express=require('express');
const app=express();
const bodyParser=require('body-parser');
    
app.use(bodyParser.urlencoded({extended:false}))
app.get('/siswa/:nama',(req,res)=>{
    let namaSiswa=req.params.nama;
    res.end("Menampilkan nama siswa "+ namaSiswa);
});
app.post('/siswa',(req,res)=>{
    let namaSiswa=req.body.nama;
    let alamat=req.body.address;
    res.end("Menampilkan siswa baru "+ namaSiswa+",yang beralamat di "+alamat);
});
app.delete('/siswa/:id',(req,res)=>{
let id=req.params.id;
let namaSiswa=req.body.nama;
res.end("id "+id+" telah dihapus,dengan nama : "+namaSiswa);
});
app.put('/siswa/:id',(req,res)=>{
    let id =req.params.id;
    let namaSiswa=req.params.nama;
    let alamat=req.body.address;
    res.end('siswa dengan id: '+id+' telah diupdate');
});
app.listen('8080',(e)=>{
    console.log(e);
});