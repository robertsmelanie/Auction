function prepareForAI() {
    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please upload an image for AI analysis.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function () {
        const imageBase64 = reader.result.split(',')[1]; // Remove base64 header

        const payload = {
            image: imageBase64,
            itemDescription: document.getElementById('itemDescription').value,
            title: document.getElementById('title').value,
            category: document.getElementById('category').value,
            dimensions: document.getElementById('dimensions').value,
            provenance: document.getElementById('provenance').value,
            estimate: document.getElementById('estimate').value,
            auctionDate: document.getElementById('auctionDate').value,
            premium: document.getElementById('premium').value,
            shipping: document.getElementById('shipping').value
        };

        document.getElementById('output').innerText = JSON.stringify(payload, null, 2);
    };
    reader.readAsDataURL(file);
}

function copyToClipboard() {
    const text = document.getElementById('output').innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Payload copied to clipboard!");
    });
}