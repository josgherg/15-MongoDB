db.usuarios.insertMany([
    {
        nombre:"Andres",
        apellido:"Guevara",
        edad: 18,
        sexo:"M",
        salario: 150,
        empresa: "Comercial China.C.A."
    },
    {
        nombre:"Carlos",
        apellido:"Sarmiento",
        edad: 30,
        sexo:"M",
        salario: 600,
        empresa: "Servicios Contables.S.A."
    },
    {
        nombre:"Luis",
        apellido:"Perez",
        edad: 24,
        sexo:"M",
        salario: 300,
        empresa: "Servicios Contables.S.A."
    },
    {
        nombre:"Maria",
        apellido:"Iriarte",
        edad: 20,
        sexo:"F",
        salario: 450,
        empresa: "Vinilsart"
    },
    {
        nombre:"Sara",
        apellido:"Guerra",
        edad: 32,
        sexo:"F",
        salario: 700,
        empresa: "INGECOM"
    },
    {
        nombre:"Javier",
        apellido:"GonzÁlez",
        edad: 32,
        sexo:"F",
        salario: 700,
        empresa: "INGECOM"
    },
        {
        nombre:"Luisa",
        apellido:"Farias",
        edad: 18,
        sexo:"F",
        salario: 500,
        empresa: "Formatech"
    },
    {
        nombre:"Zuly",
        apellido:"Canache",
        edad: 22,
        sexo:"F",
        salario: 450,
        empresa: "Vinilsart"
    },
    {
        nombre:"Santiago",
        apellido:"Barreto",
        edad: 38,
        sexo:"M",
        salario: 900,
        empresa: "INGECOM"
    },
    {
        nombre:"Isabel",
        apellido:"Davila",
        edad: 42,
        sexo:"F",
        salario: 700,
        empresa: "El Tiempo.S.A."
    }
])

///////////////////////////////////////////////////////7777
db.empresas.insertMany([
    {
        nombre:"Librería Selecciones.C.A.",
        area:"Comercial",
        cantidad_empleados: 15,
        fecha_fundacion: 1998
    },
    {
        nombre:"INGECOM",
        area:"Servicios Profesionales",
        cantidad_empleados: 30,
        fecha_fundacion: 1994
    },
    {
        nombre:"Vinilsart",
        area:"Servicios de Diseño Gráfico",
        cantidad_empleados: 8,
        fecha_fundacion: 2008
    },
    {
        nombre:"El Tiempo.S.A.",
        area:"Audiovisual",
        cantidad_empleados: 55,
        fecha_fundacion: 1980
    },
    {
        nombre:"Intelingencia.C.A",
        area:"Servicios Profesionales",
        cantidad_empleados: 10,
        fecha_fundacion: 2018
    },
    {
        nombre:"Technostar",
        area:"Comercial",
        cantidad_empleados: 6,
        fecha_fundacion: 2016
    },
    {
        nombre:"Servicios Médicos.S.A.",
        area:"Servicios Profesionales",
        cantidad_empleados: 6,
        fecha_fundacion: 2016
    },
    {
        nombre:"Servicios Contables.S.A.",
        area:"Servicios Profesionales",
        cantidad_empleados: 6,
        fecha_fundacion: 2014
    },
    {
        nombre:"Formatech",
        area:"Educación",
        cantidad_empleados: 13,
        fecha_fundacion: 2020
    },
    {
        nombre:"Comercial China.C.A.",
        area:"Comercial",
        cantidad_empleados: 6,
        fecha_fundacion: 2005
    } 
])
///////////////////////////////////////////////7

//////////////////////////////////////////////////
db.inventario.insertMany([
    {
        nombre:"Librería Selecciones.C.A.",
        productos_fisicos:[{nombre:"Selecciones",Precio: 14}, {nombre:"Lecturas Vespertinas",Precio: 6},{nombre:"Lecturas para Niños",Precio: 8}],
        productos_digitales:[{nombre:"Audiolibros",Precio: 2}, {nombre:"Libros Digitales EPUB",Precio: 2}],
        inversion_inventario: 5000,
        costo_venta: 8000
    },
    {
        nombre:"INGECOM",
        productos_fisicos:[{nombre:"Paquete Estándar de Documentos y Planos de Diseño",Precio: 3000}, {nombre:" Adicionales",Precio: 500}],
        productos_digitales:[{nombre:"Paquete Estándar de Documentos y Planos de Diseño Digitales",Precio: 2400}, {nombre:"Adicionales",Precio: 450}],
        inversion_inventario: 20000,
        costo_venta: 15000
    },
    {
        nombre:"Vinilsart",
        productos_fisicos:[{nombre:"Impresiones Pendón 100x60cm",Precio: 400}, {nombre:" Impresiones Vinil 50x50cm",Precio: 200}, {nombre:" Diseño Logo",Precio: 2500}],
        productos_digitales:[{nombre:"Diseño Digitales",Precio: 2200}],
        inversion_inventario: 10000,
        costo_venta: 15000
    },
    {
        nombre:"El Tiempo.S.A.",
        productos_fisicos:[{nombre:"Revista Sol de Oriente",Precio: 50}, {nombre:" Periódico La Noticia",Precio: 10}],
        productos_digitales:[{nombre:"Subscrición Noticias Economía Digital",Precio: 20}],
        inversion_inventario: 12000,
        costo_venta: 8000
    },
    {
        nombre:"Intelingencia.C.A",
        productos_fisicos:[{nombre:"Piezas en metal",Precio: 2500}, {nombre:" Piezas en Plástico",Precio: 10}],
        productos_digitales:[{nombre:"Autodiseño",Precio: 20}],
        inversion_inventario: 1000,
        costo_venta: 1000
    },
    {
        nombre:"Technostar",
        productos_fisicos:[{nombre:"Curso Presencial 1",Precio: 500}, {nombre:"Curso Presencial 2",Precio: 600}],
        productos_digitales:[{nombre:"Curso a distancia 1",Precio: 400}],
        inversion_inventario: 8000,
        costo_venta: 4000
    },
        {
        nombre:"Servicios medicos.S.A.",
        productos_fisicos:[{nombre:"Consulta Presencial",Precio: 50}],
        productos_digitales:[{nombre:"Consulta a distancia ",Precio: 50}],
        inversion_inventario: 1000,
        costo_venta: 600
    },
        {
        nombre:"Servicios contables.S.A.",
        productos_fisicos:[{nombre:"Consulta Presencial",Precio: 50}],
        productos_digitales:[{nombre:"Consulta a distancia ",Precio: 50}],
        inversion_inventario: 1000,
        costo_venta: 600
    },
        {
        nombre:"Formatech",
        productos_fisicos:[{nombre:"Curso Presencial 1",Precio: 500}, {nombre:"Curso Presencial 2",Precio: 600}],
        productos_digitales:[{nombre:"Curso a distancia 1",Precio: 400}],
        inversion_inventario: 8000,
        costo_venta: 4000
    },
        {
        nombre:"Comercial China.C.A.",
        productos_fisicos:[{nombre:"Laptop 1",Precio: 500}, {nombre:"Laptop 2",Precio: 600}],
        productos_digitales:[{nombre:"Aplicaciones",Precio: 10}],
        inversion_inventario: 800,
        costo_venta: 4000
    },
])


//6) Trae todos los usuarios que formen parte de una empresa con la informacion de la empresa.
db.empresas.aggregate([
    {
        $lookup:{
            from: "usuarios", 
            localField: "nombre", 
            foreignField: "empresa", 
            as: "empleados_de_empresa" 
        }
    }
])
//7) Trae todos los usuarios mayores de 35 annos y dales un bono de 150$.
db.usuarios.update(
    {edad:{$gt:35}},
    {$push:{bono:150}},
    {multi:true}
)
db.usuarios.find()

//8) Trae todas las empresas que tengan una cantidad de empleados mayores a 50.
db.empresas.find(
    {cantidad_empleados:{$gt:50}},
)

//9) Trae todos los usuarios cuyo nombre empiece por "J".
db.usuarios.find({nombre:/^J/i})

//10) Borra solo dos usuarios cuya edad sea menor a 20.
db.usuarios.deleteMany({
    edad:{$lt:20}
})

db.usuarios.find()

   