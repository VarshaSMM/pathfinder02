document.addEventListener('DOMContentLoaded', loadPage);

        function loadPage() {
            const pharmacyImageArray = [
                "https://i.postimg.cc/RZwtZnHg/pharmacy2.png",
                "https://i.postimg.cc/v8jx7v7P/pharmacy3.png"
            ];

            const pharmacyShowImageButton = document.getElementById('pharmacy-showImage');
            const pharmacyImageDisplay = document.getElementById('pharmacy-currentImage');

            let pharmacyCurrentIndex = 0;

            pharmacyShowImageButton.addEventListener('click', pharmacyButtonListener);

            function pharmacyButtonListener() {
                if (pharmacyCurrentIndex < pharmacyImageArray.length) {
                    pharmacyImageDisplay.src = pharmacyImageArray[pharmacyCurrentIndex];
                    pharmacyCurrentIndex++;
                } else {
                    pharmacyImageDisplay.src = pharmacyImageArray[pharmacyCurrentIndex];
                    pharmacyShowImageButton.removeEventListener('click', pharmacyButtonListener);
                    displayPharmacyHomeButton();
                }
            }

            function displayPharmacyHomeButton() {
                const pharmacyHomeButton = document.getElementById('homeButton');
                pharmacyShowImageButton.style.display = "none";
                pharmacyImageDisplay.style.display = "none";
                pharmacyHomeButton.style.display = 'block';
            }

            document.getElementById('pharmacyButton').addEventListener('click', function () {
                const pharmacyHomeElement = document.getElementById('home');
                const pharmacyImagesElement = document.getElementById('pharmacy-images');

                pharmacyHomeElement.style.display = 'none';
                pharmacyImagesElement.style.display = 'block';
            });

            document.getElementById('homeButton').addEventListener('click', function () {
                const pharmacyHomeElement = document.getElementById('home');
                const pharmacyImagesElement = document.getElementById('pharmacy-images');
                pharmacyHomeElement.style.display = 'block';
                pharmacyImagesElement.style.display = 'none';
            });
        }
