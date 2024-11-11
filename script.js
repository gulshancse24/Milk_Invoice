// const form = document.getElementById('invoice-form');
// const invoiceContainer = document.getElementById('invoice-container');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const customerName = document.getElementById('month').value;
//     const quantity = document.getElementById('quantity').value;
//     const pricePerLiter = document.getElementById('price-per-liter').value;
//     const total = document.getElementById('payableamt').value;
//     const subtotal = total;

//     const url = `invoice.html?customerName=${customerName}&quantity=${quantity}&pricePerLiter=${pricePerLiter}&subtotal=${subtotal}&total=${total}`;
//     window.open(url, '_blank');
// });



const form = document.getElementById('invoice-form');
const invoiceContainer = document.getElementById('invoice-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const customerName = document.getElementById('month').value;
    const quantity = document.getElementById('quantity').value;
    const pricePerLiter = document.getElementById('price-per-liter').value;
    const subtotal = quantity * pricePerLiter;
    const total = subtotal;

    const doc = new jsPDF();
    doc.text('Milk Invoice', 10, 10);
    doc.text(`Month/s: ${customerName}`, 10, 20);
    doc.text(`Quantity (Liters): ${quantity}`, 10, 30);
    doc.text(`Price per Liter (₹): ${pricePerLiter}`, 10, 40);
    doc.text(`Subtotal (₹): ${subtotal}`, 10, 50);
    doc.text(`Total (₹): ${total}`, 10, 60);

    doc.save('invoice.pdf');
});