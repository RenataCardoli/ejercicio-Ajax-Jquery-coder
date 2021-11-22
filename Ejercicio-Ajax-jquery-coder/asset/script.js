let datos = []	
	$.ajax({
		method:'GET',
		url:'../lib/datos.json',
		success:function(response){
			datos = response.data
			tabla(datos)
			console.log(datos)
		}
	})

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
