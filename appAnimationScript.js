
var x = document.createElement("div")
    x.innerHTML = `<table id="barang_table" style='display:none'>
<thead>
  <tr>
    <th>Product ID</th>
    <th>Product Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th></th>
  </tr>
</thead>
<tbody id="barang_body"></tbody>
</table>`


document.getElementById("table_holder").appendChild(x)
const tabel = document.getElementById("tabel-li");
const cashier = document.getElementById("cashier-li");
const history = document.getElementById("history-li");
const settings = document.getElementById("settings-li");
const tabName = document.getElementById("tab_name");
const product_table = document.getElementById("result-table");
const cashier_table = document.getElementById("barang_table");
const display_input_btn = document.getElementById("display-input-div");
const console_box = document.getElementById("console-box");
const bayar_button = document.getElementById("bayar_button")
const histori_table = document.getElementById("histori_table");
const breakr = document.getElementById("breaker-br")
const settings_screen = document.getElementById("settings-screen");
const settings_box = document.getElementById("settings-box")

tabel.addEventListener("click", function(){
    cashier.removeAttribute("class")
    history.removeAttribute("class")
    settings.removeAttribute("class")
    tabel.classList.add("active")
    startTabelTab()
})

cashier.addEventListener("click", function(){
    tabel.removeAttribute("class")
    history.removeAttribute("class")
    settings.removeAttribute("class")
    cashier.classList.add("active")
    startCashierTab()
})

history.addEventListener("click", function(){
    cashier.removeAttribute("class")
    tabel.removeAttribute("class")
    settings.removeAttribute("class")
    history.classList.add("active")
    startHistoryTab()
})


settings.addEventListener("click", function(){
    
    startSettingsTab()
})

function startTabelTab(){
        tabName.innerText = "Tabel Barang"
    
    product_table.style.display = ''
    cashier_table.style.display = 'none'
    display_input_btn.style.display = ''
    console_box.style.display = 'none'
    histori_table.style.display = 'none'
    bayar_button.style.display = 'none'
    breakr.style.display = 'none'
    
}
function startCashierTab(){

        tabName.innerText = "Kasir"

    product_table.style.display = 'none'
    histori_table.style.display = 'none'
    cashier_table.style.display = ''
    display_input_btn.style.display = 'none'
    console_box.style.display = ''
    bayar_button.style.display = ''
    breakr.style.display = ''

}
function startHistoryTab(){
    tabName.innerText = "Histori"  
    console_box.style.display = 'none'
    bayar_button.style.display = 'none'
    cashier_table.style.display = 'none'
    display_input_btn.style.display = 'none'
    product_table.style.display = 'none'
    histori_table.style.display = ""
    breakr.style.display = 'none'
}
function startSettingsTab(){
    settings_screen.style.display = ''
    setTimeout(() => {
        settings_box.style.transition = '0.2s'
        settings_box.style.transform = ' translate(-50%, -50%) scale(1) '
    }, 200);
}