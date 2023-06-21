function createStar() {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDuration = `${Math.random() * 5 + 1}s`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  document.querySelector('.stars').appendChild(star);
}

for (let i = 0; i < 100; i++) {
  createStar();
}

for (let i = 0; i < 100; i++) {
  createStar();
}
function bannerAnimation(){
  var h = document.getElementById("welcome-banner");
  h.style.animation = 'changeText 0.2s ease'
}
function stopBannerAnimation(){
  var h = document.getElementById("welcome-banner");
  h.style.animation = 'stopText 0.2s ease'
}
function changeBanner(){
  var h = document.getElementById("welcome-banner");
  stopBannerAnimation()
  h.style.transform = 'scale(0)'
    setTimeout(() => {
      h.style.transform = 'scale(1)'
    }, 100);
  var h = document.getElementById("welcome-banner");
  h.innerHTML = "Selamat Datang di Notabase Pengguna Baru!"

  setTimeout(() => {
    h.style.transform = 'scale(0)'
    setTimeout(() => {
      h.style.transform = 'scale(1)'
    }, 100);
    h.innerHTML = "Buat akun Notabase secara gratis!"

  }, 3000);
  setTimeout(() => {
    h.style.transform = 'scale(0)'
    setTimeout(() => {
    h.style.transform = 'scale(1)'
    }, 100);
    h.innerHTML = "Notabase adalah aplikasi pencatatan penjualan yang dijalankan di browser!"

  }, 6000);
  setTimeout(() => {
    h.style.transform = 'scale(0)'
    setTimeout(() => {
      h.style.transform = 'scale(1)'
    }, 100);
    h.innerHTML = "Notabase akan menyimpan datamu dengan aman!"

  }, 10000);
  setTimeout(() => {
    h.style.transform = 'scale(0)'
    setTimeout(() => {
      h.style.transform = 'scale(1)'
    }, 100);
    changeBanner()

  }, 14000);
}
changeBanner()
var loginData = JSON.parse(localStorage.getItem('loginData'));
if (loginData.activatedAccount == 'none' || loginData.activatedAccount == null) {
  document.getElementById("login-screen").style.display = "block"
}
function generateCode() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var code = '';
    const kodeInput = document.getElementById("kode-input")
    for (var i = 0; i < 8; i++) {
      var index = Math.floor(Math.random() * characters.length);
      code += characters[index];
    }

    kodeInput.value = code;
    var saldoPerusahaan = localStorage.getItem('saldo_perusahaan');

if (saldoPerusahaan) {
  document.getElementById('saldo_perusahaan').textContent = formatCurrency(parseInt(saldoPerusahaan));
}
  }
  
function downloadLocalStorage() {
    const keys = Object.keys(localStorage);
    const data = {};
    keys.forEach((key) => {
      data[key] = localStorage.getItem(key);
    });
    const jsonData = JSON.stringify(data);
    const blobData = new Blob([jsonData], { type: 'application/json' });
    const blobUrl = URL.createObjectURL(blobData);
    const downloadLink = document.createElement('a');
    downloadLink.href = blobUrl;
    downloadLink.download = 'local_storage_data.json';
    downloadLink.click();
    URL.revokeObjectURL(blobUrl);
  }
  function chooseFile(){
    const fileInput = document.getElementById('file_input');
    const file = fileInput.files[0];
    if (!file) {
      document.getElementById("chooserBtn").style.display = 'none'
      document.getElementById("restoreBtn").style.display = ''
    }
  }
  function uploadToLocalStorage(num) {
    if (num == 2) {
      var fileInput = document.getElementById("file_input2");
    }else{
      var fileInput = document.getElementById('file_input');
    }
    
    const file = fileInput.files[0];

    if (!file) {
        alert('Mohon pilih file JSON untuk diunggah');
        document.getElementById("chooserBtn").style.display = ''
        document.getElementById("restoreBtn").style.display = 'none'
        return;
        
    }
   
    const reader = new FileReader();

    reader.onload = function(event) {
        try {
          makeLoading(2000, "Mengkonfirmasi file JSON")
            const data = JSON.parse(event.target.result);
            setTimeout(() => {
              makeLoading(3000, "Memulihkan data...")
            }, 2000);
           setTimeout(() => {
             makeLoading(2000, "Loading...")
           }, 4000);
            Object.keys(data).forEach((key) => 
            {
                localStorage.setItem(key, data[key]);
            });

            setTimeout(() => {
              Swal.fire({
                title: "Data berhasil dipulihkan!",
                icon: "info"
              }).then((result)=>{
                if (result.isConfirmed) {
                  window.location.reload();
                }
              })
            }, 7000);
            
        } catch (error) {
          makeLoading(2000, "Mengkonfirmasi file JSON")
            setTimeout(() => {
              alert('Terjadi kesalahan dalam membaca file JSON');
              document.getElementById("chooserBtn").style.display = ''
              document.getElementById("restoreBtn").style.display = 'none'
            }, 2000);
        }
    };

    reader.readAsText(file);
}

      function formatCurrency(amount) {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  
    return formatter.format(amount);
  }
     document.getElementById("username_input").addEventListener("input", function(){
      document.getElementById("u_alert").style.display = 'none'
     });
     document.getElementById("password_input").addEventListener("input", function(){
      document.getElementById("p_alert").style.display = 'none'
     })
      function loginButton(){
        const loginData = JSON.parse(localStorage.getItem('loginData'));
       const getUsername = loginData.username;
       const getPassword = loginData.password;
       const getUsername2 = loginData.username2;
       const getPassword2 = loginData.password2;
       const username_input = document.getElementById("username_input").value;
       const password_input = document.getElementById("password_input").value;
       if (username_input == "") {
        document.getElementById("u_alert").style.display = ''
        document.getElementById("username_input").style.transition = '0.4s'
        document.getElementById("username_input").style.border = '1px solid rgb(231, 15, 15)'
        setTimeout(() => {
          document.getElementById("username_input").style.border = '1px solid #dadada'
        }, 2400);
       }
       if (password_input == "") {
        document.getElementById("p_alert").style.display = ''
        document.getElementById("password_input").style.transition = '0.4s'
        document.getElementById("password_input").style.border = '1px solid rgb(231, 15, 15)'
        setTimeout(() => {
          document.getElementById("password_input").style.border = '1px solid #dadada'
        }, 2400);
       }
       if (username_input == "" || password_input == "") {
        return false;
       }
       if (username_input == getUsername && password_input == getPassword) {
        document.getElementById("login-container").style.transition = '0.3s'
        document.getElementById
        ("login-container").style.transform = "scale(0.2) translate(-50%, -50%)"
        setTimeout(() => {
            document.getElementById("login-screen").style.display = 'none'
        }, 280);
        const loginData = JSON.parse(localStorage.getItem('loginData'));
        loginData.activatedAccount = "administrator"
        localStorage.setItem('loginData', JSON.stringify(loginData));
        globalFeatureCode()
        window.location.reload()
       }else{
          if (username_input == getUsername2 && password_input == getPassword2) {
            document.getElementById("login-container").style.transition = '0.3s'
        document.getElementById
        ("login-container").style.transform = "scale(0)"
        setTimeout(() => {
            document.getElementById("login-screen").style.display = 'none'
            
        }, 300);
       
        document.getElementById("rankLabel").innerHTML = "User"
        const loginData = JSON.parse(localStorage.getItem('loginData'));
        loginData.activatedAccount = "user"
        localStorage.setItem('loginData', JSON.stringify(loginData));
        
          nonGlobalFeatureCode()
          window.location.reload()
          return false
      }else{
          document.getElementById("wrong-label").style.visibility = 'visible'
          document.getElementById("wrong-label").style.transition = '0.2s'
          document.getElementById("wrong-label").style.transform = 'scale(1.1)'
          setTimeout(() => {
            document.getElementById("wrong-label").style.transform = 'scale(1)'
          }, 300);
          setTimeout(() => {
            document.getElementById("wrong-label").style.visibility = 'hidden'
          }, 5000);
          return false
      }
       }
      }
      function refresherBtn(){
        refreshTable()
      }
      function nonGlobalFeatureCode(){
        makeLoading(1200)
        const loginData = JSON.parse(localStorage.getItem('loginData'));
       const getUsername2 = loginData.username2;
       document.getElementById("h1_username").innerHTML = getUsername2
      const checkBtn = document.getElementById('check-btn');
      const resultBody = document.getElementById('result-body');
      var saldoPerusahaan = localStorage.getItem('saldo_perusahaan');
      document.getElementById("editNCell").remove()
      document.getElementById("editPCell").remove()
      document.getElementById("addCell").remove()
      document.getElementById("deleteCell").remove()
      document.getElementById("inputBarangDiv").remove()
      document.getElementById("cekBarangDiv")
      document.getElementById("display-input-div").remove()

    if (saldoPerusahaan) {
      document.getElementById('saldo_perusahaan').textContent = formatCurrency(parseInt(saldoPerusahaan));
    }
      function refreshTable() {
        resultBody.innerHTML = '';
  
        for (let i = 0; i < localStorage.length; i++) {
          const kodeBarang = localStorage.key(i);
          const barang = JSON.parse(localStorage.getItem(kodeBarang));
  
          const namaBarang = barang.nama;
          const hargaBarang = barang.harga;
          const quantity = barang.quantity;
  
          const row = document.createElement('tr');
          const kodeCell = document.createElement('td');
          const namaCell = document.createElement('td');
          const hargaCell = document.createElement('td');
          const quantityCell = document.createElement('td');
  
      if (kodeBarang === 'histori_pembayaran') {
        continue;
  
      }
      if (kodeBarang === 'saldoDanAlasan') {
        continue;
      }
      if (kodeBarang === 'saldo_perusahaan') {
        continue;
      }
      if (kodeBarang === 'loginData') {
        continue;
      }
      
      
          kodeCell.textContent = kodeBarang;
          namaCell.textContent = namaBarang;
          hargaCell.textContent = formatCurrency(barang.harga);
          quantityCell.textContent = quantity;
  
  
          row.appendChild(kodeCell);
          row.appendChild(namaCell);
          row.appendChild(hargaCell);
          row.appendChild(quantityCell);
  
          resultBody.appendChild(row);
        }
      }
      refreshTable();
      checkBtn.addEventListener('click', handleCheck);
      submitBtn.addEventListener('click', handleSubmit);
  
  
      }
      function globalFeatureCode(){
        makeLoading(1200, "Loading...", "clear")
        tampilkanHistoriPembayaran()
        const loginData = JSON.parse(localStorage.getItem('loginData'));
       const getUsername1 = loginData.username;
       document.getElementById("h1_username").innerHTML = getUsername1
        generateCode()
       const kodeInput = document.getElementById('kode-input');
      const namaInput = document.getElementById('nama-input');
      const hargaInput = document.getElementById('harga-input');
  
      const quantityInput = document.getElementById('quantity-input');
      const submitBtn = document.getElementById('submit-btn');
      const checkBtn = document.getElementById('check-btn');
      const resultBody = document.getElementById('result-body');
      function generateCode() {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var code = '';
        const kodeInput = document.getElementById("kode-input")
        for (var i = 0; i < 8; i++) {
          var index = Math.floor(Math.random() * characters.length);
          code += characters[index];
        }
  
        kodeInput.value = code;
        var saldoPerusahaan = localStorage.getItem('saldo_perusahaan');
  
    if (saldoPerusahaan) {
      document.getElementById('saldo_perusahaan').textContent = formatCurrency(parseInt(saldoPerusahaan));
    }
      }

      
      
  
      function handleDelete(kodeBarang) {
        if (confirm('Apakah Anda yakin ingin menghapus barang ini?')) {
          localStorage.removeItem(kodeBarang);
          refreshTable();
        }
      }
      
      submitBtn.addEventListener("click", handleSubmit)
      function refreshTable() {
        resultBody.innerHTML = '';
  
        for (let i = 0; i < localStorage.length; i++) {
          const kodeBarang = localStorage.key(i);
          const barang = JSON.parse(localStorage.getItem(kodeBarang));
  
          const namaBarang = barang.nama;
          const hargaBarang = barang.harga;
          const quantity = barang.quantity;
  
          const row = document.createElement('tr');
          const kodeCell = document.createElement('td');
          const namaCell = document.createElement('td');
          const hargaCell = document.createElement('td');
          const quantityCell = document.createElement('td');
          const editNameCell = document.createElement('td');
          const editPriceCell = document.createElement('td');
          const editNameBtn = document.createElement('button');
          const editPriceBtn = document.createElement('button');
          const addQuantityCell = document.createElement('td');
          const addQuantityBtn = document.createElement('button');
          const deleteCell = document.createElement('td');
          const deleteBtn = document.createElement('button');
          const downloadQRBtn = document.createElement('button');
          
          if (kodeBarang === 'histori_pembayaran') {
        continue;
  
      }
      if (kodeBarang === 'saldoDanAlasan') {
        continue;
      }
      if (kodeBarang === 'saldo_perusahaan') {
        continue;
      }
      if (kodeBarang === 'loginData') {
        continue;
      }
      if (kodeBarang === 'activatedAccount') {
        continue;
      }
      if (kodeBarang === 'histori_pembayaran') {
        continue;
      }
      if (kodeBarang === 'penambahanSaldoDanAlasan') {
        continue;
      }
      if (kodeBarang === 'total_saldo') {
        continue;
      }
          kodeCell.textContent = kodeBarang;
          kodeCell.classList.add("id-tr");
          kodeCell.style.userSelect = 'none'
          kodeCell.addEventListener("dblclick", function(){
            navigator.clipboard.writeText(kodeBarang)
            kodeCell.innerHTML = `Tersalin <ion-icon name="checkmark-circle-outline"></ion-icon> `
            setTimeout(() => {
              kodeCell.textContent = kodeBarang;
            }, 600);
            
          })
          namaCell.textContent = namaBarang;
          hargaCell.textContent = formatCurrency(barang.harga);
          quantityCell.textContent = quantity;
  
          editNameBtn.innerHTML = 'Edit  <ion-icon name="create"></ion-icon>';
          editNameBtn.addEventListener('click', () => handleEditName(kodeBarang, namaBarang));
          editNameCell.appendChild(editNameBtn);
  
          editPriceBtn.innerHTML = 'Edit <ion-icon name="pricetag"></ion-icon>';
          editPriceBtn.addEventListener('click', () => handleEditPrice(kodeBarang, hargaBarang));
          editPriceCell.appendChild(editPriceBtn);
            addQuantityBtn.innerHTML = 'Tambah <ion-icon name="add-circle-outline"></ion-icon>'
          
          addQuantityBtn.addEventListener('click', () => handleAddQuantity(kodeBarang));
          addQuantityCell.appendChild(addQuantityBtn);
          downloadQRBtn.innerHTML = '<ion-icon name="download"></ion-icon> QR'
          downloadQRBtn.style.width = '50px'
          downloadQRBtn.style.marginLeft = '10px'
          downloadQRBtn.style.float = 'left'
          deleteBtn.style.float = 'left'
          deleteBtn.style.backgroundColor = 'rgb(241, 67, 67)';
          deleteBtn.style.width = '25px'
          deleteBtn.style.border = '1px solid rgb(241, 67, 67)'
          deleteBtn.style.padding = '4px'
          deleteBtn.style.color = 'white'
          deleteBtn.innerHTML = '<ion-icon name="trash"></ion-icon>';
          downloadQRBtn.addEventListener("click", ()=> downloadQRById(kodeBarang))
          deleteBtn.addEventListener('click', () => handleDelete(kodeBarang));
          deleteCell.appendChild(deleteBtn);
          deleteCell.appendChild(downloadQRBtn)
          row.appendChild(kodeCell);
          row.appendChild(namaCell);
          row.appendChild(hargaCell);
          row.appendChild(quantityCell);
          row.appendChild(editNameCell);
          row.appendChild(editPriceCell);
          row.appendChild(addQuantityCell);
          row.appendChild(deleteCell);
  
          resultBody.appendChild(row);
          
        }
        
      }
  
      refreshTable();
  
      function handleCheck() {
        const kodeBarang = document.getElementById("kode_input").value;
        const barang = JSON.parse(localStorage.getItem(kodeBarang));
        if (kodeBarang == "") {
          document.getElementById("searchlabels").innerHTML = "Masukkan kode barang!"
          setTimeout(() => {
            document.getElementById("searchlabels").innerHTML = "Cari barang"
            
          }, 2000);
          
          return false;
        }
        if (kodeBarang.length != 8) {
          document.getElementById("searchlabels").innerHTML = "Masukkan kode barang yang valid!"
          setTimeout(() => {
            document.getElementById("searchlabels").innerHTML = "Cari barang"
            
          }, 2000);
          
          return false;
        }
        if (barang) {
          const namaBarang = barang.nama;
          const hargaBarang = barang.harga;
          const quantity = barang.quantity;
  
          const row = document.createElement('tr');
          const kodeCell = document.createElement('td');
          const namaCell = document.createElement('td');
          const hargaCell = document.createElement('td');
          const quantityCell = document.createElement('td');
          const editNameCell = document.createElement('td');
          const editPriceCell = document.createElement('td');
          const editNameBtn = document.createElement('button');
          const editPriceBtn = document.createElement('button');
          const addQuantityCell = document.createElement('td');
          const addQuantityBtn = document.createElement('button');
          const deleteCell = document.createElement('td');
          const deleteBtn = document.createElement('button');
  
          kodeCell.textContent = kodeBarang;
          namaCell.textContent = namaBarang;
          hargaCell.textContent = formatCurrency(hargaBarang);
      row.appendChild(hargaCell);
          quantityCell.textContent = quantity;
          editNameBtn.innerHTML = 'Edit  <ion-icon name="create"></ion-icon>';
          editNameBtn.addEventListener('click', () => handleEditName(kodeBarang, namaBarang));
          editNameCell.appendChild(editNameBtn);
  
          editPriceBtn.innerHTML = 'Edit <ion-icon name="pricetag"></ion-icon>';
          editPriceBtn.addEventListener('click', () => handleEditPrice(kodeBarang, hargaBarang));
          editPriceCell.appendChild(editPriceBtn);
            addQuantityBtn.innerHTML = 'Tambah <ion-icon name="add-circle-outline"></ion-icon>'
          
          addQuantityBtn.addEventListener('click', () => handleAddQuantity(kodeBarang));
          addQuantityCell.appendChild(addQuantityBtn);
          deleteBtn.style.backgroundColor = 'rgb(241, 67, 67)'
          deleteBtn.style.border = '1px solid rgb(241, 67, 67)'
          deleteBtn.style.padding = '4px'
          deleteBtn.style.color = 'white'
          deleteBtn.innerHTML = 'Hapus <ion-icon name="trash"></ion-icon>';
          deleteBtn.addEventListener('click', () => handleDelete(kodeBarang));
          deleteCell.appendChild(deleteBtn);
  
          row.appendChild(kodeCell);
          row.appendChild(namaCell);
          row.appendChild(hargaCell);
          row.appendChild(quantityCell);
          row.appendChild(editNameCell);
          row.appendChild(editPriceCell);
          row.appendChild(addQuantityCell);
          row.appendChild(deleteCell);
  
          resultBody.innerHTML = '';
          resultBody.appendChild(row);
        } else {
          resultBody.innerHTML = 'Barang tidak ditemukan';
          document.getElementById("kode_input").value = ""
        }
        document.getElementById("kode_input").value = ""
      }
  
      checkBtn.addEventListener('click', handleCheck);
      submitBtn.addEventListener('click', handleSubmit)
      function handleSubmit() {
        const kodeBarang = kodeInput.value;
        const namaBarang = namaInput.value;
        const hargaBarang = hargaInput.value;
        const quantity = quantityInput.value;
        if (kodeBarang && namaBarang && hargaBarang && quantity) {
          if (checkExistingKodeBarang(kodeBarang)) {
            alert('Kode barang sudah ada');
          } else {
            const barang = {
              nama: namaBarang,
              harga: hargaBarang,
              quantity: quantity
            };
            
            localStorage.setItem(kodeBarang, JSON.stringify(barang));
            addRowToTable(kodeBarang, namaBarang, hargaBarang, quantity);
            setTimeout(() => {
              refreshTable()
            }, 500);
            kodeInput.value = '';
            namaInput.value = '';
            hargaInput.value = '';
            quantityInput.value = '';
            generateCode();
          }
        } else {
          Swal.fire({
            title: "Gagal Menyimpan!",
            text: "Mohon lengkapi semua input",
            icon: "error"
          })
        }
      }
  
      function checkExistingKodeBarang(kodeBarang) {
        return localStorage.getItem(kodeBarang) !== null;
      }
  
      function addRowToTable(kodeBarang, namaBarang, hargaBarang, quantity) {
        const row = document.createElement('tr');
        const kodeCell = document.createElement('td');
        const namaCell = document.createElement('td');
        const hargaCell = document.createElement('td');
        const quantityCell = document.createElement('td');
        const editNameCell = document.createElement('td');
        const editPriceCell = document.createElement('td');
        const addQuantityCell = document.createElement('td');
        const deleteCell = document.createElement('td');
  
        kodeCell.textContent = kodeBarang;
        namaCell.textContent = namaBarang;
        hargaCell.textContent = formatCurrency(hargaBarang);
    row.appendChild(hargaCell);
        quantityCell.textContent = quantity;
  
        const editNameBtn = document.createElement('button');
        editNameBtn.textContent = 'Edit Nama';
        editNameBtn.addEventListener('click', () => handleEditName(kodeBarang, namaBarang));
        editNameCell.appendChild(editNameBtn);
  
        const editPriceBtn = document.createElement('button');
        editPriceBtn.textContent = 'Edit Harga';
        editPriceBtn.addEventListener('click', () => handleEditPrice(kodeBarang, hargaBarang));
        editPriceCell.appendChild(editPriceBtn);
  
        const addQuantityBtn = document.createElement('button');
        addQuantityBtn.textContent = 'Tambah Quantity';
        addQuantityBtn.addEventListener('click', () => handleAddQuantity(kodeBarang));
        addQuantityCell.appendChild(addQuantityBtn);
  
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => handleDelete(kodeBarang));
        deleteCell.appendChild(deleteBtn);
  
        row.appendChild(kodeCell);
        row.appendChild(namaCell);
        row.appendChild(hargaCell);
        row.appendChild(quantityCell);
        row.appendChild(editNameCell);
        row.appendChild(editPriceCell);
        row.appendChild(addQuantityCell);
        row.appendChild(deleteCell);
  
        resultBody.appendChild(row);
      }
      submitBtn.addEventListener('click', handleSubmit);
  
      function handleAddQuantity(kodeBarang) {
        const barang = JSON.parse(localStorage.getItem(kodeBarang));
        const currentQuantity = parseInt(barang.quantity);
  
        let additionalQuantity = parseInt(prompt('Masukkan tambahan quantity:'));
        additionalQuantity = isNaN(additionalQuantity) ? 0 : additionalQuantity;
  
        const newQuantity = currentQuantity + additionalQuantity;
  
        barang.quantity = newQuantity;
        localStorage.setItem(kodeBarang, JSON.stringify(barang));
        refreshTable();
        
      }
      function handleEditName(kodeBarang, currentNama) {
        Swal.fire({
          title: 'Masukkan nama baru',
          input: 'text',
          inputValue: currentNama,
          showCancelButton: true,
          confirmButtonText: "Simpan"
        })
        .then(function (result) {
          if (result.isConfirmed) {
            const newNama = result.value;
            if (newNama !== null && newNama.trim() !== "") {
              const barang = JSON.parse(localStorage.getItem(kodeBarang));
              barang.nama = newNama;
              localStorage.setItem(kodeBarang, JSON.stringify(barang));
              refreshTable();
            }
          }
        });
      }
  
      function handleEditPrice(kodeBarang, currentHarga) {
        Swal.fire({
          title: 'Masukkan harga baru',
          input: 'text',
          inputValue: currentHarga,
          showCancelButton: true,
          confirmButtonText: "Simpan"
        })
        .then(function (result) {
          const newHarga = parseFloat(result.value);
          if (!isNaN(newHarga)) {
          const barang = JSON.parse(localStorage.getItem(kodeBarang));
          barang.harga = newHarga;
          localStorage.setItem(kodeBarang, JSON.stringify(barang));
          refreshTable();
        }
        });
      }
      
      }
    function startLoadingData(){
      if (JSON.parse(localStorage.getItem("loginData"))) {
        
      if (JSON.parse(localStorage.getItem('loginData')).setup == "1") {
        document.getElementById("login-screen").style.display = 'block'
        document.getElementById("signup-container").style.display = 'none'
          document.getElementById("login-container").style.display = ''
      }
      
    }else{
      document.getElementById("login-screen").style.display = 'block'
        document.getElementById("signup-container").style.display = ''
          document.getElementById("login-container").style.display = 'none'
    }
    
        const loginData = JSON.parse(localStorage.getItem('loginData'));
        // if (loginData.setup == 1) {
        //   document.getElementById("signup-container").style.display = 'none'
        //   document.getElementById("login-container").style.display = ''
        // }else{
        //   document.getElementById("signup-container").style.display = ''
        //   document.getElementById("login-container").style.display = 'none'
        // }
        const activatedAccount = loginData.activatedAccount
        document.getElementById("username1_btn").innerText = loginData.username
        document.getElementById("username2_btn").innerText = loginData.username2
        if (loginData.theme == "t1") {
          setTheme(1)
          
        }
        if (loginData.theme == "t2") {
          setTheme(2)
        }
        
        if (activatedAccount == "administrator") {
            document.getElementById("login-screen").style.display = 'none'
            document.getElementById("username_h2").innerText = loginData.username
            document.getElementById("rankLabel").innerText = 'Administrator'
            document.getElementById("rankLabel_2").innerText = 'Administrator'
            globalFeatureCode()
        }
        if (activatedAccount == "user") {
          document.getElementById("username_h2").innerText = loginData.username2
            document.getElementById("login-screen").style.display = 'none'
            document.getElementById("rankLabel").innerText = 'User'
            document.getElementById("rankLabel_2").innerText = 'User'
            nonGlobalFeatureCode()
        }
        
    }
    function logoutButton(){
        const loginData = JSON.parse(localStorage.getItem('loginData'));
        Swal.fire({
            title: 'Logout akun?',
            text: "Anda akan keluar dari akun ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Keluar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Berhasil!',
                'Anda telah keluar dari akun.',
                'success'
              ).then((result) =>{
                if(result.isConfirmed){
                  makeLoading(1500)
              window.location.reload()
                }
               
              })
              loginData.activatedAccount = "none"
        localStorage.setItem('loginData', JSON.stringify(loginData));

              
            }
          })
       
    }
    function makeLoading(time,text,blurness){
      if (text) {
        document.getElementById("load-text").innerText = text
      }
      var l = document.getElementById("loading-screen");
      l.style.display = 'block'
      setTimeout(() => {
        l.style.display = 'none'
      }, time);
    }
function nameChanger(){
      var loginData = JSON.parse(localStorage.getItem('loginData'));
      if (loginData.activatedAccount == "administrator") {
        var pwConfirmation = prompt("Masukkan password:")
        if (pwConfirmation != loginData.password) {
          alert("Password salah!")
          return false
        }
        var prompter = prompt("Masukkan nama baru:");
        var confirmz = confirm("Apakah anda yakin ingin mengubah nama "+loginData.username+" menjadi "+ prompter + "?")
        if (confirmz == true) {
          loginData.username = prompter;
          localStorage.setItem('loginData', JSON.stringify(loginData));
          makeLoading(2000, "Mengganti nama...")
          setTimeout(() => {
            window.location.reload()
          }, 2000);
        }
        
      }
      if (loginData.activatedAccount == "user") {
        var loginData = JSON.parse(localStorage.getItem('loginData'));
      if (loginData.activatedAccount == "user") {
        var pwConfirmation = prompt("Masukkan password:")
        if (pwConfirmation != loginData.password) {
          alert("Password salah!")
          return false
        }
        var prompter = prompt("Masukkan nama baru:");
        var confirmz = confirm("Apakah anda yakin ingin mengubah nama "+loginData.username2+" menjadi "+ prompter + "?")
        if (confirmz == true) {
          loginData.username2 = prompter;
          localStorage.setItem('loginData', JSON.stringify(loginData));
          makeLoading(2000, "Mengganti nama...")
          setTimeout(() => {
            window.location.reload()
          }, 2000);
        }
        
      }
      }
    }

    function passwordChanger(){
      var loginData = JSON.parse(localStorage.getItem('loginData'));
      if (loginData.activatedAccount == "administrator") {
        var pwConfirmation = prompt("Masukkan password:")
        if (pwConfirmation != loginData.password) {
          alert("Password salah!")
          return false
        }
        var prompter = prompt("Masukkan password baru:");
        var confirmz = confirm("Apakah anda yakin ingin mengubah password?")
        if (confirmz == true) {
          loginData.password = prompter;
          localStorage.setItem('loginData', JSON.stringify(loginData));
          makeLoading(2000, "Mengganti password...")
          setTimeout(() => {
            window.location.reload()
          }, 2000);
        }
        
      }
      if (loginData.activatedAccount == "user") {
        var loginData = JSON.parse(localStorage.getItem('loginData'));
      if (loginData.activatedAccount == "user") {
        var pwConfirmation = prompt("Masukkan password:")
        if (pwConfirmation != loginData.password2) {
          alert("Password salah!")
          return false
        }
        var prompter = prompt("Masukkan password baru:");
        var confirmz = confirm("Apakah anda yakin ingin mengubah password?")
        if (confirmz == true) {
          loginData.password2 = prompter;
          localStorage.setItem('loginData', JSON.stringify(loginData));
          makeLoading(2000, "Mengganti password...")
          setTimeout(() => {
            window.location.reload()
          }, 2000);
        }
        
      }
      }
    }
    function toAdmin(num){
     const ui_b1 = document.getElementById("username1_btn")
     const ui_b2 = document.getElementById("username2_btn")
     var loginData = JSON.parse(localStorage.getItem('loginData'));
      if (num == 2) {
          var pwConfirmation = prompt("Masukkan password:")
          if (pwConfirmation != loginData.password) {
            alert("Password salah!")
            return false
          }
  var tempUsername = loginData.username;
  loginData.username = loginData.username2;
  loginData.username2 = tempUsername;

  var tempPassword = loginData.password;
  loginData.password = loginData.password2;
  loginData.password2 = tempPassword;
  loginData.activatedAccount = "none"
          localStorage.setItem('loginData', JSON.stringify(loginData));
          makeLoading(2500)
          setTimeout(() => {
            ui_b2.classList.add("active")
        ui_b1.removeAttribute("class")
        setTimeout(() => {
          window.location.reload()
        }, 500);
          }, 2500);
        }
        
        if (num == 1) {
          var pwConfirmation = prompt("Masukkan password:")
          if (pwConfirmation != loginData.password) {
            alert("Password salah!")
            return false
          }
          loginData.username2 = loginData.username;
          loginData.password2 = loginData.password;
          loginData.username = loginData.username2;
          loginData.password = loginData.password2;
          localStorage.setItem('loginData', JSON.stringify(loginData));
          makeLoading(2500)
          setTimeout(() => {
            ui_b1.classList.add("active")
        ui_b2.removeAttribute("class")
          }, 2500);
          
        }
      
    }
    function setTheme(num){
      const b1 = document.getElementById("theme1");
      const b2 = document.getElementById("theme2");
      const loginData = JSON.parse(localStorage.getItem('loginData'));
      if (num == 2) {
        b1.removeAttribute("class");
      b2.classList.add("active")
      document.getElementById("css-style").href = "style-dark-theme.css"
      loginData.theme = "t2"
      }
      if (num == 1) {
        b2.removeAttribute("class");
      b1.classList.add("active")
      document.getElementById("css-style").href = "style.css"
      loginData.theme = "t1"
      }
      localStorage.setItem('loginData', JSON.stringify(loginData));
    }
    function resetNew(){
      Swal.fire({
        title: "Peringatan!",
        icon: "warning",
        text: "Apakah anda yakin ingin me-reset seluruh data aplikasi?",
        showCancelButton: true
      }).then((result) => {
        if (result.isConfirmed) {
      reseterNew()
      reseterNew()
      reseterNew()
      reseterNew()
      makeLoading(3500)
      setTimeout(() => {
        Swal.fire({
          title: "Aplikasi telah di-reset",
          icon: "info"
          
        }).then((result) => {
          if (result.isConfirmed) {

            makeLoading(1500)
            setTimeout(() => {
              window.location.reload()
            }, 1500);
              }
             
        })
        
      }, 3500);
        }
      })
      
    }
    function reseterNew(){
      var exceptions = ["saldoDanAlasan", "loginData"];
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (!exceptions.includes(key)) {
      localStorage.removeItem(key);
    }
  }
  localStorage.setItem("saldo_perusahaan", 0)
  localStorage.setItem("histori_pembayaran", `[{"tanggal":"-","jam":"-","totalHarga":0,"barangDibeli":[{"nama":"-","quantity":0}]}]`)
    }
    function toggleFullscreen() {
      var element = document.documentElement;
      var fullscreenBtn = document.getElementById("fullscreenBtn");

      if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }

        fullscreenBtn.innerText = "Aktif";
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }

        fullscreenBtn.innerText = "Nonaktif";
      }
    }
    function sendToMail() {
      var data = document.getElementById("dataTextarea").value;
      
      var link = "mailto:stechyisme@gmail.com"
                + "?subject=Data yang Dikirim"
                + "&body=" + encodeURIComponent(data);
      
      window.location.href = link;
      data = ""
    }
    function helpBtn(num){
      if (num == 1) {
        Swal.fire({
          title: "Akun Administrator",
          text: "Akun administrator merupakan fitur yang dirancang untuk mencegah manipulasi data dengan membedakan hak akses tiap akun. Akun administrator memiliki fitur lengkap dalam mengelola database, sementara akun non-administrator (user) hanya memiliki akses untuk membaca database dan menjalankan kasir.",
          icon: "info"
        })
      }
      if (num == 2) {
        Swal.fire({
          title: "Backup",
          text: "Backup merupakan fitur yang dirancang untuk mengunduh seluruh data meliputi akun, database, setelan, dan lain-lain ke dalam format JSON untuk dicadangkan sehingga dapat dipulihkan di lain waktu.",
          icon: "info"
        })
      }
      if (num == 3) {
        Swal.fire({
          title: "Restore",
          text: "Restore merupakan fitur yang dirancang untuk memulihkan data pengguna yang telah hilang dengan memasukkan file JSON khusus yang berisi seluruh data-data pengguna dan memulihkannya kembali.",
          icon: "info"
        })
      }
    }

    function downloadQRById(xcode) {
      const kodeBarang = xcode;
      const barang = JSON.parse(localStorage.getItem(kodeBarang));
      if (kodeBarang == "") {
        alert("Masukkan kode barang!")
        return false;
      }
      if (kodeBarang.length != 8) {
        alert("Masukkan kode barang yang valid!")
        
        return false;
      }
      if (barang) {
        deleteAllElements()
        const namaBarang = barang.nama;
        var inputText = xcode;
var qrCodeDiv = document.getElementById("qr-code");
var qrMeaningDiv = document.getElementById("qr-meaning");
var text = inputText;
if (text.trim() !== "") {
  qrCodeDiv.innerHTML = "";
  qrMeaningDiv.textContent = "";
  var qrCode = new QRCode(qrCodeDiv, {
    text: text,
    width: 200,
    height: 200,
  });
  qrMeaningDiv.textContent = barang.nama;
  downloadQRCodeWithMeaning();
}


function downloadQRCodeWithMeaning() {
html2canvas(qrCodeDiv).then(function (canvas) {
  var qrCodeDataUrl = canvas.toDataURL("image/png");
  var qrMeaningText = qrMeaningDiv.textContent;

  var combinedCanvas = document.createElement("canvas");
  combinedCanvas.width = canvas.width;
  combinedCanvas.height = canvas.height + 50;

  var context = combinedCanvas.getContext("2d");
  context.fillStyle = "white";
  context.fillRect(0, 0, combinedCanvas.width, combinedCanvas.height);
  context.drawImage(canvas, 0, 0);
  context.font = "24px Arial";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.fillText(
    qrMeaningText,
    combinedCanvas.width / 2,
    combinedCanvas.height - 20
  );

  var qrCodeWithMeaningDataUrl = combinedCanvas.toDataURL("image/png");

  var downloadLink = document.createElement("a");
  downloadLink.href = qrCodeWithMeaningDataUrl;
  downloadLink.download = "QR_"+barang.nama+".png";

  downloadLink.click();
});
}

      } else {
        alert("Barang tidak tersedia!")
      }
  
  }
  function deleteAllElements() {
    var elemenBody = document.body;
    while (elemenBody.firstChild) {
      if (elemenBody.firstChild.id !== "downloadQR-div") {
        elemenBody.removeChild(elemenBody.firstChild);
      } else {
        break;
      }
    }
  }
  function autoRefresh(){
    setTimeout(() => {
      document.getElementById('saldo_perusahaan').textContent = formatCurrency(parseInt(localStorage.getItem("saldo_perusahaan")));
      ("saldo_perusahaan");
      autoRefresh()
    }, 5000);
  }
  autoRefresh()
  function signUpButton(){
    const username_input = document.getElementById("signup_username_input");
    const password_input = document.getElementById("signup_password_input");
    const confirm_input = document.getElementById("signup_confirm_input");
    const username_input2 = document.getElementById("signup_username_input_2");
    const password_input2 = document.getElementById("signup_password_input_2");
    const confirm_input2 = document.getElementById("signup_confirm_input_2");
    const u_alert = document.getElementById("u_alert");
    const p_alert = document.getElementById("p_alert");
    const c_alert = document.getElementById("c_alert");
    const u_alert2 = document.getElementById("u_alert2");
    const p_alert2 = document.getElementById("p_alert2");
    const c_alert2 = document.getElementById("c_alert2");
    if (username_input.value == "" && username_input2.value == "" && password_input.value == "" && password_input2.value == "" && confirm_input.value == "" && confirm_input2.value == "") {
      if (username_input.value == "") {
        u_alert.style.display = ''
        username_input.style.transition = '0.4s'
        username_input.style.border = '1px solid rgb(231, 15, 15)'
        username_input.oninput = function(){
          username_input.style.border = '1px solid #dadada'
          u_alert.style.display = 'none'
        }
        setTimeout(() => {
          username_input.style.border = '1px solid #dadada'
        }, 2400);
       }
  
       if (password_input.value == "") {
        p_alert.style.display = ''
        password_input.style.transition = '0.4s'
        password_input.style.border = '1px solid rgb(231, 15, 15)'
        password_input.oninput = function(){
          password_input.style.border = '1px solid #dadada'
          p_alert.style.display = 'none'
        }
        setTimeout(() => {
          password_input.style.border = '1px solid #dadada'
        }, 2400);
       }
  
       if (confirm_input.value == "") {
        c_alert.style.display = ''
        confirm_input.style.transition = '0.4s'
        confirm_input.style.border = '1px solid rgb(231, 15, 15)'
        confirm_input.oninput = function(){
          confirm_input.style.border = '1px solid #dadada'
          c_alert.style.display = 'none'
        }
        setTimeout(() => {
          confirm_input.style.border = '1px solid #dadada'
        }, 2400);
       }
  
       if (username_input2.value == "") {
        u_alert2.style.display = ''
        username_input2.style.transition = '0.4s'
        username_input2.style.border = '1px solid rgb(231, 15, 15)'
        username_input2.oninput = function(){
          username_input2.style.border = '1px solid #dadada'
          u_alert2.style.display = 'none'
        }
        setTimeout(() => {
          username_input2.style.border = '1px solid #dadada'
        }, 2400);
       }
  
       if (password_input2.value == "") {
        p_alert2.style.display = ''
        password_input2.style.transition = '0.4s'
        password_input2.style.border = '1px solid rgb(231, 15, 15)'
        password_input2.oninput = function(){
          password_input2.style.border = '1px solid #dadada'
          p_alert2.style.display = 'none'
        }
        setTimeout(() => {
          password_input2.style.border = '1px solid #dadada'
        }, 2400);
       }
  
       if (confirm_input2.value == "") {
        c_alert2.style.display = ''
        confirm_input2.style.transition = '0.4s'
        confirm_input2.style.border = '1px solid rgb(231, 15, 15)'
        confirm_input2.oninput = function(){
          confirm_input2.style.border = '1px solid #dadada'
          c_alert2.style.display = 'none'
        }
        setTimeout(() => {
          confirm_input2.style.border = '1px solid #dadada'
        }, 2400);
       }
       return false;
    }else{
      if (password_input.value == confirm_input.value && password_input2.value == confirm_input2.value) {
        makeLoading(3000, "Membuat akun...");
        setTimeout(() => {
        localStorage.setItem("histori_pembayaran", "[]");
        localStorage.setItem("saldoDanAlasan", "[]");
        localStorage.setItem(`loginData`,`{\"username\":\"`+username_input.value+`\",\"password\":\"`+password_input.value+`\",\"username2\":\"`+username_input2.value+`\",\"password2\":\"`+password_input2.value+`\",\"activatedAccount\":\"administrator\",\"theme\":\"t1\",\"language\":\"1\",\"setup\":\"1\"}`)
        localStorage.setItem("saldo_perusahaan", "0")
        window.location.reload()
      }, 3000);
      }else{
        alert("Pastikan bahwa konfirmasi password serupa dengan password yang telah Anda pilih.")
        return false;
      }
     
      
      
    }

    
  }
