
function convertCurrency() {
    let sl = parseFloat(document.getElementById("soluong").value);
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let exRate = 23000;
    if (fromCurrency === "vnd" && toCurrency === "usd") {
        exRate = 1/23000;
        let result = exRate * sl;
        document.getElementById("ketqua").textContent = "Result :" + result + " usd";
        
    }else if ( fromCurrency === "usd" && toCurrency === "vnd") {
        exRate = 23000;
        let result = exRate * sl;
        document.getElementById("ketqua").textContent = "Result : " + result + " vnd";
    }
    
}
// // Gán sự kiện click cho nút "Convert" để gọi hàm chuyển đổi tiền tệ
// document.getElementById("demo").addEventListener("click", convertCurrency);
// document.getElementById('demo').addEventListener("click", convertCurrency)







