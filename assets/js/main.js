var allAlerts = document.querySelectorAll('.alert');
            allAlerts.forEach(function (el) {
                new bootstrap.Alert(el);
            });