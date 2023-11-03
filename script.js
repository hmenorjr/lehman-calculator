document.getElementById("calculate-btn").addEventListener("click", function () {
    const assets = parseFloat(document.getElementById("assets").value);
    const liabilities = parseFloat(document.getElementById("liabilities").value);

    if (!isNaN(assets) && !isNaN(liabilities)) {
        const lehmanRatio = assets / liabilities;
        document.getElementById("result").textContent = `Lehman Ratio: ${lehmanRatio.toFixed(2)}`;
    } else {
        document.getElementById("result").textContent = "Please enter valid numbers.";
    }
});
