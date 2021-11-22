$( document ).ready(function() {
let datos = []	

	function tabla(data){
		let tablas = document.getElementById('miTabla')

		for (let i = 0; i < data.length; i++){
			let row = `<tr>
							<td>${data[i].fecha}</td>
							<td>${data[i].valor}</td>
							<td>${data[i].tipo}</td>
					</tr>`
			tablas.innerHTML += row
		}
	}
		const APIURL = '../lib/datos.json' ; 
		$("#boton").click(() => { 
			$.ajax({
				method: "GET",
				url:  APIURL,
				success: function(response){
					datos = response.data
					tabla(datos)
					console.log(datos)
				}
			});
		});
	});
	