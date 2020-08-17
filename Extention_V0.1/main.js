
        fetch('data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
          localStorage.setItem('data', JSON.stringify(data));
          // console.log(data)
          var data = JSON.parse(localStorage.getItem('data'));
          console.log(data)
            var mainContainer = document.getElementById("myData");
            for (var i = 0; i < data.length; i++) {
                var element = document.createElement(data[i].elementType);
                element.innerHTML = 'Name: ' + data[i].name + ' ' + data[i].species;
                
                mainContainer.appendChild(element);
                document.getElementsByTagName(data[i].elementType)[0].setAttribute("id", data[i].id); 
                // document.getElementById(data[i].id).style = 'color:red; padding:20px';
                
            }
        }
    
