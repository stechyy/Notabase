function formatCurrency(amount) {
  return amount.toLocaleString('id-ID');
}
       function onLoadData() {
        var saldoPerusahaan = localStorage.getItem('saldo_perusahaan');

  if (saldoPerusahaan) {
    document.getElementById('saldo_perusahaan').textContent = formatCurrency(parseInt(saldoPerusahaan));
  }
      var url = window.location.href;
      var queryString = url.split('?')[1];
      var params = queryString.split('&');
      var kodeBarangParam = params.find(function(param) {
        return param.startsWith('kode_input_cashier');
      });

      if (kodeBarangParam) {
        var kodeBarang = kodeBarangParam.split('=')[1];
        document.getElementById('kode_input_cashier').value = kodeBarang;
        document.getElementById('quantity_input').value = '1';
        document.getElementById('tambah_button').click();
      }
      loadBarangFromStorage();
      
    }

    function loadBarangFromStorage() {
      var barangBody = document.getElementById('barang_body');
      var storedBarang = localStorage.getItem('barang');

      if (storedBarang) {
        var barangData = JSON.parse(storedBarang);
        barangData.forEach(function(data) {
          var row = document.createElement('tr');
          row.innerHTML = '<td>' + data.kode + '</td><td>' + data.nama + '</td><td>' + data.harga + '</td><td>' + data.quantity + '</td><td><button class="hapus_button" onclick="hapusBarang(this)">Hapus</button></td>';
          barangBody.appendChild(row);
        });
      }
    }
    function tambahBarang() {
      var kodeBarang = document.getElementById('kode_input_cashier').value;
      var quantity = document.getElementById('quantity_input').value;

      if (!kodeBarang || !quantity) {
        alert('Kode barang dan quantity harus diisi');
        return;
      }


      var dataBarang = {
        kode: kodeBarang,
        nama: 'Nama Barang',
        harga: 1000,
        quantity: quantity
      };

      var barangBody = document.getElementById('barang_body');
      var row = document.createElement('tr');
      row.innerHTML = '<td>' + dataBarang.kode + '</td><td>' + dataBarang.nama + '</td><td>' + dataBarang.harga + '</td><td>' + dataBarang.quantity + '</td><td><button class="hapus_button" onclick="hapusBarang(this)">Hapus</button></td>';
      barangBody.appendChild(row);
      saveBarangToStorage(dataBarang);
      document.getElementById('kode_input_cashier').value = '';
      document.getElementById('quantity_input').value = '';
    }
    function getDataBarang(kodeBarang) {
      const dataBarang = localStorage.getItem(kodeBarang);
      return dataBarang ? JSON.parse(dataBarang) : null;
    }

  
    
    function tambahkanBarang() {
      const kodeBarang = document.getElementById('kode_input_cashier').value;
      const quantity = parseInt(document.getElementById('quantity_input').value);
      
      const dataBarang = getDataBarang(kodeBarang);

      if (dataBarang) {
        if (dataBarang.quantity - quantity >= 0) {
          const tableBody = document.getElementById('barang_body');
          const existingRow = tableBody.querySelector(`tr[data-kode="${kodeBarang}"]`);

          if (existingRow) {
            const quantityCell = existingRow.querySelector('.quantity-cell');
            const existingQuantity = parseInt(quantityCell.textContent);
            const newQuantity = existingQuantity + quantity;
            quantityCell.textContent = newQuantity;
            updateTotalHarga(dataBarang.harga, quantity);
          } else {
            const newRow = document.createElement('tr');
            newRow.setAttribute('data-kode', kodeBarang);
            const kodeCell = document.createElement('td');
            const namaCell = document.createElement('td');
            const hargaCell = document.createElement('td');
            const quantityCell = document.createElement('td');
            const batalCell = document.createElement('td');
            quantityCell.classList.add('quantity-cell');
            hargaCell.classList.add('harga-cell');

            kodeCell.textContent = kodeBarang;
            namaCell.textContent = dataBarang.nama;
            hargaCell.textContent = dataBarang.harga;
            quantityCell.textContent = quantity;
            batalCell.innerHTML = '<button class="batal_button">Batal</button>';

            newRow.appendChild(kodeCell);
            newRow.appendChild(namaCell);
            newRow.appendChild(hargaCell);
            newRow.appendChild(quantityCell);
            newRow.appendChild(batalCell);

            tableBody.appendChild(newRow);

         
            const batalButton = newRow.querySelector('.batal_button');
            batalButton.addEventListener('click', batalPesanan);
            updateTotalHarga(dataBarang.harga, quantity);
          }

        } else {
          alert(`Barang ${dataBarang.nama} tersisa ${dataBarang.quantity}`);
          return;
        }
      } else {
        alert('Barang tidak ditemukan!');
      }
      document.getElementById('kode_input_cashier').value = '';
      document.getElementById('quantity_input').value = '';
    }
    function updateTotalHarga(harga, quantity) {
      const totalHarga = document.getElementById('total_harga');
      const currentTotal = parseInt(totalHarga.textContent);
      const hargaBarang = parseInt(harga);
      const newTotal = currentTotal + hargaBarang * quantity;
      totalHarga.textContent =newTotal;
    }
    function kurangiQuantityBarang(kodeBarang, quantity) {
      const dataBarang = getDataBarang(kodeBarang);
      if (dataBarang) {
        dataBarang.quantity -= quantity;
        localStorage.setItem(kodeBarang, JSON.stringify(dataBarang));
      }
    }
    function batalPesanan(event) {
      const row = event.target.parentNode.parentNode;
      const quantityCell = row.querySelector('.quantity-cell');
      const quantity = parseInt(quantityCell.textContent);
      const hargaCell = row.querySelector('.harga-cell');
      const harga = parseInt(hargaCell.textContent);
      row.remove();
      updateTotalHarga(harga, -quantity);
    }
  function simpanHistoriPembayaran(histori) {
    const historiList = localStorage.getItem('histori_pembayaran');
    const historiPembayaran = historiList ? JSON.parse(historiList) : [];
    historiPembayaran.push(histori);
    localStorage.setItem('histori_pembayaran', JSON.stringify(historiPembayaran));
  }
  function hapusHistoriPembayaran(index) {
    const historiList = localStorage.getItem('histori_pembayaran');
    const historiPembayaran = historiList ? JSON.parse(historiList) : [];
    historiPembayaran.splice(index, 1);
    localStorage.setItem('histori_pembayaran', JSON.stringify(historiPembayaran));
  }
  function tampilkanHistoriPembayaran() {
    const historiTableBody = document.getElementById('histori_body_c');
    historiTableBody.innerHTML = '';
    const historiList = localStorage.getItem('histori_pembayaran');
    const historiPembayaran = historiList ? JSON.parse(historiList) : [];
    historiPembayaran.forEach(function(histori, index) {
      const row = document.createElement('tr');
      const tanggalCell = document.createElement('td');
      const jamCell = document.createElement('td');
      const totalHargaCell = document.createElement('td');
      const barangDibeliCell = document.createElement('td');
      const hapusCell = document.createElement('td');
      tanggalCell.textContent = histori.tanggal;
      jamCell.textContent = histori.jam;
      totalHargaCell.textContent = formatCurrency(histori.totalHarga);

      const barangDibeliList = histori.barangDibeli;
      let barangDibeliHTML = '';
      barangDibeliList.forEach(function(barang) {
        barangDibeliHTML += `${barang.nama} (${barang.quantity}), `;
      });
      barangDibeliHTML = barangDibeliHTML.slice(0, -2);

      barangDibeliCell.textContent = barangDibeliHTML;

      const hapusButton = document.createElement('button');
        hapusButton.textContent = 'Hapus';

      
      hapusButton.addEventListener('click', function() {
        hapusHistoriPembayaran(index);
        tampilkanHistoriPembayaran();
      });

      hapusCell.appendChild(hapusButton);

      row.appendChild(tanggalCell);
      row.appendChild(jamCell);
      row.appendChild(totalHargaCell);
      row.appendChild(barangDibeliCell);
      row.appendChild(hapusCell);
      historiTableBody.appendChild(row);
    });
  }
  tampilkanHistoriPembayaran();
    document.getElementById('tambah_button').addEventListener('click', tambahkanBarang);
    document.getElementById('bayar_button').addEventListener('click', function() {
      const tableBody = document.getElementById('barang_body');
      const rows = tableBody.querySelectorAll('tr');

      let outOfStockItems = ''; 
      let shouldStopPayment = false;

      const barangDibeliList = [];
      rows.forEach(function(row) {
        const kodeBarang = row.getAttribute('data-kode');
        const quantityCell = row.querySelector('.quantity-cell');
        const quantity = parseInt(quantityCell.textContent);
        const dataBarang = getDataBarang(kodeBarang);

        if (dataBarang && dataBarang.quantity < quantity) {
          outOfStockItems += `${dataBarang.nama}: tersisa ${dataBarang.quantity}\n`;
          shouldStopPayment = true;
        }

        if (!shouldStopPayment) {
          kurangiQuantityBarang(kodeBarang, quantity);
          row.remove();

          barangDibeliList.push({
            nama: dataBarang.nama,
            quantity: quantity
          });
        }
      });

      if (shouldStopPayment) {
        alert(`Maaf, stok barang tidak mencukupi:\n\n${outOfStockItems}\nProses pembayaran dihentikan.`);
      } else {
        const now = new Date();
        const tanggal = now.toLocaleDateString();
        const jam = now.toLocaleTimeString();
        const totalHarga = parseInt(document.getElementById('total_harga').textContent);
        const histori = {
          tanggal: tanggal,
          jam: jam,
          totalHarga: totalHarga,
          barangDibeli: barangDibeliList
        };
const saldoPerusahaan = getSaldoPerusahaan();
    setSaldoPerusahaan(saldoPerusahaan + totalHarga);

        simpanHistoriPembayaran(histori);
        tampilkanHistoriPembayaran();
        document.getElementById('total_harga').textContent = '0';

        
        Swal.fire({
          title: "Sukses!",
          text: "Pembayaran berhasil",
          icon: "success"
        })
      }
    });

    tampilkanHistoriPembayaran();

    
function getSaldoPerusahaan() {
  const saldo = localStorage.getItem('saldo_perusahaan');
  return saldo ? parseInt(saldo) : 0;
}

function setSaldoPerusahaan(saldo) {
  localStorage.setItem('saldo_perusahaan', saldo);
}

document.addEventListener("DOMContentLoaded", function() {
      var video = document.getElementById("video");
      var scanButton = document.getElementById("scan-button");
      var scanResult = document.getElementById("scan-result");
      var errorMessage = document.getElementById("error-message");
      var qrCodeReader = null;
      var aktifKameraButton = document.getElementById("aktifKamera");
      navigator.getUserMedia = navigator.getUserMedia ||
                                navigator.webkitGetUserMedia ||
                                navigator.mozGetUserMedia;

      function getMediaStream() {
        return new Promise(function(resolve, reject) {
          if (navigator.getUserMedia) {
            navigator.getUserMedia(
              { video: true },
              function(stream) {
                resolve(stream);
              },
              function(err) {
                reject("Error accessing camera: " + err);
              }
            );
          } else {
            reject("Browser does not support getUserMedia");
          }
        });
      }


      function enableCamera() {
        getMediaStream()
          .then(function(stream) {
            video.srcObject = stream;
            aktifKameraButton.style.animation = 'blinkbtn 1s ease-in-out infinite';
            scanButton.disabled = false;
          })
          .catch(function(error) {
            errorMessage.textContent = error;
          });
      }

      function disableCamera() {
        var stream = video.srcObject;
        var tracks = stream.getTracks();

        tracks.forEach(function(track) {
          track.stop();
        });

        video.srcObject = null;
        aktifKameraButton.style.color = 'rgb(170,170,170)'
        aktifKameraButton.style.animation = null;
        scanButton.disabled = true;
      }
      function startScanning() {
        if (!video.srcObject) {
  return;
}
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");

        function scanQRCode() {
          if (video.paused || video.ended) {
            return setTimeout(scanQRCode, 200);
          }

          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          var imageData = context.getImageData(0, 0, canvas.width, canvas.height);

          try {
            var qrCodeData = jsQR(imageData.data, imageData.width, imageData.height);
            if (qrCodeData) {
              var inputKode = document.getElementById("kode_input_cashier")
              scanResult.textContent = qrCodeData.data;
              inputKode.value = qrCodeData.data;
              document.getElementById("beep").play()
              stopScanning();
              disableCamera();
              
              setTimeout(() => {
                enableCamera()
              }, 2500);
  scanButton.textContent = "Memindai...";
              document.getElementById("quantity_input").value = 1;
              document.getElementById("tambah_button").click()
              scanResult.textContent = "No QR code detected"
              
            } else {
              scanResult.textContent = "No QR code detected";
            }
          } catch (error) {
            console.error("Error scanning QR code: ", error);
          }

          setTimeout(scanQRCode, 200);
        }

        qrCodeReader = setInterval(scanQRCode, 200);
      }

      function stopScanning() {
        clearInterval(qrCodeReader);
        qrCodeReader = null;
      }
      scanButton.addEventListener("click", function() {
        if (qrCodeReader) {
          stopScanning();
          scanButton.innerHTML = `Scan QR <ion-icon name="qr-scanner"></ion-icon>`;
        } else {
          startScanning();
          scanButton.textContent = "Berhenti";
        }
      });
      aktifKameraButton.addEventListener("click", function() {
        if (video.srcObject) {
          disableCamera();
        } else {
          enableCamera();
        }
      });

    });
    