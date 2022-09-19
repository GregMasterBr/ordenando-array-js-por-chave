let dados = {
headers : [
          { "label": "#", 
            "fieldName": "id", 
            "icon":"GiFactory",
            "Order": 5,
             },
          { "label": "Order", 
            "fieldName": "ordernum", 
            "Order": 2,
             },
          { "label": "Product", 
            "fieldName": "product", 
            "Order": 3,
             },
          { "label": "Qty", 
            "fieldName": "quantity", 
            "Order": 1,
             },
            {
            "label": "Scrap",
            "fieldName": "scrap",
             "Order": 4,
            }
        ],
      data: [
		{ "id": 1, "ordernum": "E34532", "product": "Sensor m8", "quantity": "50", "scrap": "0" },
        { "id": 2, "ordernum": "E34533", "product": "Sensor m12", "quantity": "150", "scrap": "0" },
        { "id": 3, "ordernum": "E34534", "product": "Sensor m10", "quantity": "20", "scrap": "0" },
        { "id": 4, "ordernum": "E34535", "product": "Sensor m6", "quantity": "250", "scrap": "0" },
        { "id": 5, "ordernum": "E34535", "product": "Sensor m6", "quantity": "250", "scrap": "0" },
        { "id": 6, "ordernum": "E34535", "product": "Sensor m6", "quantity": "250", "scrap": "0" },
        { "id": 7, "ordernum": "E34535", "product": "Sensor m6", "quantity": "250", "scrap": "0" },
        { "id": 8, "ordernum": "E34535", "product": "Sensor m6", "quantity": "250", "scrap": "0" },
        { "id": 9, "ordernum": "E34535", "product": "Sensor m6", "quantity": "555", "scrap": "0" },
        { "id": 10, "ordernum": "E34535", "product": "Sensor m6", "quantity": "75", "scrap": "0" },
        { "id": 11, "ordernum": "E34535", "product": "Sensor m6", "quantity": "25", "scrap": "0" },
        { "id": 12, "ordernum": "E34535", "product": "Sensor m6", "quantity": "50", "scrap": "0" },
        { "id": 13, "ordernum": "E34535", "product": "Sensor m6", "quantity": "20", "scrap": "0" },
        { "id": 14, "ordernum": "E34535", "product": "Sensor m6", "quantity": "250", "scrap": "0" },
        { "id": 15, "ordernum": "E34535", "product": "Sensor m6", "quantity": "250", "scrap": "0" },
        { "id": 16, "ordernum": "E34535", "product": "Sensor m6", "quantity": "250", "scrap": "0" },
        { "id": 17, "ordernum": "E34535", "product": "Sensor m6", "quantity": "300", "scrap": "0" },
        { "id": 18, "ordernum": "E34535", "product": "Sensor m6", "quantity": "450", "scrap": "0" },
        { "id": 19, "ordernum": "E34535", "product": "Sensor m6", "quantity": "200", "scrap": "0" },
        { "id": 20, "ordernum": "E34535", "product": "Sensor m6", "quantity": "750", "scrap": "0" },
      ]
}

let headers = dados.headers
let data = dados.data

/*Se você quiser usar o order dentro do cabeçalho*/

headers.sort(function(a, b) {return (a.Order - b.Order)});

let  so_os_cabecalhos = headers.map(function(el, i) {
  return [el.fieldName];
})

/*Caso queira só criar um array posicional*/
let so_os_cabecalhos = [["ordenum"],["scrap"],["product"],["id"],["quantity"]]


data_ordenado = []

function reordenaLista(item, index, arr) {
	novo={}	
	for (var i = 0; i < so_os_cabecalhos.length; i++) {
		novo[so_os_cabecalhos[i]] = item[so_os_cabecalhos[i]]
	}
	data_ordenado.push(novo);
}

function reajustarColunas(){
	data_ordenado = []
	data.forEach(reordenaLista);
}

reajustarColunas();

console.log(data_ordenado)