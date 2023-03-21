class Carrito {
	constructor(productos) {
		this.productos = productos;
	}

	// agregarProducto(cantidadSeleccionada, producto) {
		
	// 	const productoRepetido = productosCarrito.some(
	// 		(prod) => prod.nombre === producto.nombre
	// 	);

	// 	if (productoRepetido) {
	// 		productosCarrito.forEach((prod) => {
	// 			if (prod.nombre === producto.nombre) {
	// 				prod.cantidad = prod.cantidad + cantidadSeleccionada;
	// 				carrito.totalizar();				
	// 			}
	// 		});
	// 	} else {
	// 		producto.cantidad = Number(cantidadSeleccionada);
	// 		this.productos.push(producto);
	// 		carrito.totalizar();
	// 	}
	// }

	agregarProducto(cantidadSeleccionada, producto) {
		const productoRepetido = this.productos.some(
			(prod) => prod.nombre === producto.nombre
		);

		if (productoRepetido) {
			this.productos.forEach((prod) => {
				if (prod.nombre === producto.nombre) {
					prod.cantidad = prod.cantidad + cantidadSeleccionada;
					this.totalizar();				
				}
			});
		} else {
			producto.cantidad = Number(cantidadSeleccionada);
			this.productos.push(producto);
			this.totalizar();
		}
	}

	quitarProducto(producto) {
		// const index = this.productos.findIndex((element) => element === producto);
		// this.productos.splice(index, 1);
	

		this.productos =  this.productos.filter(element => element !== producto);
		productosCarrito = this.productos;
		
	}

	totalizar() {
		let cantidades = 0;
		let suma = 0;

		for (let i = 0; i < this.productos.length; i++) {
			let producto = this.productos[i];
			cantidades += parseFloat(producto.cantidad);
			suma += parseFloat(producto.precio * producto.cantidad);
		}
		contadorCarrito.innerText = cantidades;
		return suma;
	}
}
