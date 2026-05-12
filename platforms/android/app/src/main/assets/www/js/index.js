document.addEventListener('deviceready', onDeviceReady);

function onDeviceReady() {

    const scanBtn = document.getElementById('scanBtn');
    const barcodeText = document.getElementById('barcodeText');

    scanBtn.addEventListener('click', function () {

        cordova.plugins.barcodeScanner.scan(

            function (result) {

                if (!result.cancelled) {

                    barcodeText.value = result.text;

                    console.log('Barcode:', result.text);
                    console.log('Format:', result.format);

                }

            },

            function (error) {

                alert('Scanning failed: ' + error);

            },

            {
                preferFrontCamera: false,
                showFlipCameraButton: false,
                showTorchButton: true,
                torchOn: false,
                saveHistory: false,
                prompt: "Place barcode inside area",
                resultDisplayDuration: 300,
                formats: "QR_CODE,CODE_128,EAN_13",
                orientation: "portrait",
                disableAnimations: true,
                disableSuccessBeep: false
            }

        );

    });

}