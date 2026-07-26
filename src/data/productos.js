// Función helper para procesar la imagen con el proxy CDN
export const getImageUrl = (driveId) => {
  const googleUrl = `https://lh3.googleusercontent.com/d/${driveId}`
  return `https://images.weserv.nl/?url=${googleUrl}&output=webp&fit=contain`
}

export const productosData = [
  {
    id: "A004",
    name: "Auto metalico a friccion azul",
    category: "autos",    
    description: "autos de carrera, tamaño mediano de material metalico, color azul y funciona a friccion. 24 unidades",
    idimage: "1fVfzkSrjRUoqlecuaI4kn-leB9xDripg",
    image:getImageUrl("1fVfzkSrjRUoqlecuaI4kn-leB9xDripg"), 
    tipo:"nuevo"      
  },
  {
    id: "A003",
    name: "Camioneta metalico a friccion naranja",
    category: "autos",    
    description: "camioneta, tamaño mediano de material metalico, color naranja y funciona a friccion. 24 unidades",
    image:getImageUrl("1wRQ4QbbYGIs6L8rXQdgTqq3d4wgfaFZD"),
    tipo:"nuevo"

  },
  {
    id: "A002",
    name: "Auto metalico a friccion rojo",
    category: "autos",
    description: "autos de carrera, tamaño mediano de material metalico, color rojo y funciona a friccion. 24 unidades",
    image:getImageUrl("1M9WpGjctgYYOrfZOK8bxCPekkGEtcjoL"),  
    tipo:"nuevo"  
  },
  {
    id: "A001",
    name: "Auto de maqueta",
    category: "autos",
    description: "auto de maqueta, tamaño pequeño de material plastico, color verde. 56 unidades",
    image:getImageUrl("1DJAz36sk0voHedAlVQvjDv4VXaf98r6Z"),
    tipo:""
  },
  {
    id: "LMA001",
    name: "Lego de ninyago",
    category: "lego motos y alas",
    description: "Moto con ala tamaño pequeño, de material plastico, varios colores. 12 unidades",    
    image:getImageUrl("1ugFXHkLKgq7cXY890XiHePvAFd6AIW-E"),
    tipo:"nuevo"
    
  },
  {
    id: "LMA002",
    name: "lego ",
    category: "lego motos y alas",
    description: "tamaño x. 20 unidades",
    image:getImageUrl("15dWUL_TDq3R8JR7y2iO-Nw2iEP6K7q3d"),
    tipo:"nuevo"
  },
  {
    id: "LMA003",
    name: "***",
    category: "lego motos y alas",
    description: "tamaño x. 20 unidades",
    image:getImageUrl("1GiitIuYHZ10Tb9LKB677alPGuyE7O7Az"),
    tipo:"nuevo"
  },
  {
    id: "LMA004",
    name: "***",
    category: "lego motos y alas",
    description: "tamaño x. 20 unidades",    
    image:getImageUrl("1B-RluGvgNn0T38V4Ci692uivbOWjbtRd"),
    tipo:"nuevo"
  },
  {
    id: "LMA005",
    name: "***",
    category: "lego motos y alas",
    description: "tamaño x. 24 unidades",
    image:getImageUrl("16hPAtTiAl39nV3hw_Hs4iBdlaeQeGPyz"),
    tipo:""
  },
  {
    id: "L001",
    name: "***",
    category: "legos",
    description: "tamaño x. 20 unidades",
    image:getImageUrl("1S4KwMPEBlX8ETDUEsEpfjQNlFH3alU0S"),
    tipo:"nuevo"
  },
  {
    id: "L002",
    name: "***",
    category: "legos",
    description: "tamaño x. 20 unidades",
    //price: "450 BS",    
    image:getImageUrl("1mbV6lgQTlBcYHQlqTpVbAKqTXRWpOxnj"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1mbV6lgQTlBcYHQlqTpVbAKqTXRWpOxnj/view?usp=sharing
  },
  {
    id: "L003",
    name: "***",
    category: "legos",
    description: "tamaño x. 20 unidades",
    //price: "450 BS",    
    image:getImageUrl("1yk7Qz8800EKIB2rD_H2hEem9gfL92-rX"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1yk7Qz8800EKIB2rD_H2hEem9gfL92-rX/view?usp=sharing
  },
  {
    id: "L004",
    name: "***",
    category: "legos",
    description: "tamaño x. 20 unidades",
    //price: "450 BS",    
    image:getImageUrl("1rzEKVUEIlV5ZjJ8t2P02eEt2kWeZE4h7"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1rzEKVUEIlV5ZjJ8t2P02eEt2kWeZE4h7/view?usp=sharing
  },
  {
    id: "L005",
    name: "***",
    category: "legos",
    description: "tamaño x. 20 unidades",
    //price: "450 BS",    
    image:getImageUrl("1085O8lLsXBvfEEkfw6znPfS1tUw6WwJC"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1085O8lLsXBvfEEkfw6znPfS1tUw6WwJC/view?usp=sharing
  },
  {
    id: "L006",
    name: "***",
    category: "legos",
    description: "tamaño x. 20 unidades",
    //price: "450 BS",    
    image:getImageUrl("1sv1Pvaku_QMA8TDy9l6Y0iKskbMoLSWt"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1sv1Pvaku_QMA8TDy9l6Y0iKskbMoLSWt/view?usp=sharing
  },
  {
    id: "L007",
    name: "***",
    category: "legos",
    description: "tamaño x. 20 unidades",
    image:getImageUrl("1rIJbDCMdmxIO1Ih2M3BLMbenUI5wkC5Q"),
    tipo:"nuevo"
  },
  {
    id: "L008",
    name: "***",
    category: "legos",
    description: "tamaño x. 20 unidades",
    image:getImageUrl("1ERBYnhjkZ_vSqb30v_O8eKwfPhsQZdWc"),
    tipo:"nuevo"
  },
  {
    id: "L009",
    name: "***",
    category: "legos",
    description: "tamaño x. 20 unidades",
    //price: "450 BS",    
    image:getImageUrl("1Ke0r688Vh7_Qc6x07siesx3O3MxcBSol"),
    tipo:"nuevo"

  },
  {
    id: "L010",
    name: "***",
    category: "legos",
    description: "tamaño x. 20 unidades",
    //price: "450 BS",    
    image:getImageUrl("1WHVF9FzzY-cF4FzRtwRYvA6JslsTZuS1"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1WHVF9FzzY-cF4FzRtwRYvA6JslsTZuS1/view?usp=sharing
  },
  {
    id: "L011",
    name: "***",
    category: "legos",
    description: "tamaño x. 20 unidades",
    //price: "450 BS",    
    image:getImageUrl("1YgL6ejmVs90pddvNQKnma7l87NsPbByw"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1YgL6ejmVs90pddvNQKnma7l87NsPbByw/view?usp=sharing
  },
  {
    id: "L012",
    name: "***",
    category: "legos",
    description: "tamaño x. 20 unidades",
    //price: "450 BS",    
    image:getImageUrl("1_AUl9L1Q1kOFuJyK6SHu4_4pEi2VuyZM"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1_AUl9L1Q1kOFuJyK6SHu4_4pEi2VuyZM/view?usp=sharing
  },
  {
    id: "L013",
    name: "***",
    category: "legos",
    description: "tamaño x. 20 unidades",
    //price: "450 BS",    
    image:getImageUrl("1khVyV7o3WT4Tlp2Pn1C-HbiwBIFRLjTp"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1khVyV7o3WT4Tlp2Pn1C-HbiwBIFRLjTp/view?usp=sharing
  },
  {
    id: "L014",
    name: "***",
    category: "legos",
    description: "tamaño x. 16 unidades",
    //price: "450 BS",    
    image:getImageUrl("1kqwmY7hwd63HeYmarFUZTZQaGHs1nFkE"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1kqwmY7hwd63HeYmarFUZTZQaGHs1nFkE/view?usp=sharing
  },
  {
    id: "L015",
    name: "***",
    category: "legos",
    description: "tamaño x. 12 unidades",
    //price: "450 BS",    
    image:getImageUrl("1Itqdnb05AaHWJL-wcVqUS-P3qFZckxgZ"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1Itqdnb05AaHWJL-wcVqUS-P3qFZckxgZ/view?usp=sharing
  },
  {
    id: "L016",
    name: "***",
    category: "legos",
    description: "tamaño x. 20 unidades",
    //price: "450 BS",    
    image:getImageUrl("101I9pYECS6ITJHKvxLussBBQhhzXa4Kp"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/101I9pYECS6ITJHKvxLussBBQhhzXa4Kp/view?usp=sharing
  },
  {
    id: "L017",
    name: "***",
    category: "legos",
    description: "tamaño x. 16 unidades",
    //price: "450 BS",    
    image:getImageUrl("1-IiZl9g7uSAYBpUXC_my3645b4HwXoT1"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1-IiZl9g7uSAYBpUXC_my3645b4HwXoT1/view?usp=sharing
  },
  {
    id: "L018",
    name: "***",
    category: "legos",
    description: "tamaño x. 12 unidades",
    //price: "450 BS",    
    image:getImageUrl("1RsO_DJDzDzmv6O6DtSBIKZYI8heXVWRt"),
    tipo:""
    //https://drive.google.com/file/d/1RsO_DJDzDzmv6O6DtSBIKZYI8heXVWRt/view?usp=sharing
  },
  {
    id: "M001",
    name: "***",
    category: "mariquitas",
    description: "tamaño x. 24 unidades",
    //price: "450 BS",    
    image:getImageUrl("1AbQpTjPc0bx23cQknxvTD0AFjV8FDI7r"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1AbQpTjPc0bx23cQknxvTD0AFjV8FDI7r/view?usp=sharing
  },
  {
    id: "M002",
    name: "***",
    category: "mariquitas",
    description: "tamaño x",
    //price: "450 BS",    
    image:getImageUrl("1EWfERT4jdvG3IxtZy8Jqqw9wddf6vyvr"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1EWfERT4jdvG3IxtZy8Jqqw9wddf6vyvr/view?usp=sharing
  },
  {
    id: "P001",
    name: "***",
    category: "pokebolas",
    description: "tamaño x. 24 unidades",
    //price: "450 BS",    
    image:getImageUrl("1Gwe2Pjyq-ywiq5oBQYwXqheHG494Vbm9"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1Gwe2Pjyq-ywiq5oBQYwXqheHG494Vbm9/view?usp=sharing
  },
  {
    id: "P002",
    name: "***",
    category: "pokebolas",
    description: "tamaño x. 30 unidades",
    //price: "450 BS",    
    image:getImageUrl("1rsNmxsehjY80aaTlexUOh_YXj4-MAwxz"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1rsNmxsehjY80aaTlexUOh_YXj4-MAwxz/view?usp=sharing
  },
  {
    id: "RE001",
    name: "***",
    category: "resortes",
    description: "tamaño x. 12 unidades",
    //price: "450 BS",    
    image:getImageUrl("1ur-1qMO3UZIAEFJEb6mrbh3c6fDotKbM"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1ur-1qMO3UZIAEFJEb6mrbh3c6fDotKbM/view?usp=sharing
  },
  {
    id: "RE002",
    name: "***",
    category: "resortes",
    description: "tamaño x. 30 unidades",
    //price: "450 BS",    
    image:getImageUrl("1_1RgVMJZI4E4pauMLphZXmehaV-u84qU"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1_1RgVMJZI4E4pauMLphZXmehaV-u84qU/view?usp=sharing
  },  
  {
    id: "RE003",
    name: "***",
    category: "resortes",
    description: "tamaño x",
    //price: "450 BS",    
    image:getImageUrl("1z8WPIQjcY7CTXR1gxQ8Zb4VBTd8v6gNu")
    //https://drive.google.com/file/d/1z8WPIQjcY7CTXR1gxQ8Zb4VBTd8v6gNu/view?usp=sharing
  },
  {
    id: "R001",
    name: "***",
    category: "rompecabezas",
    description: "tamaño x. 16 unidades",
    //price: "450 BS",    
    image:getImageUrl("1b2NL-MV0d7ypI3eSA2zA7UwKaaq8ZRKd"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1b2NL-MV0d7ypI3eSA2zA7UwKaaq8ZRKd/view?usp=sharing
  },
  {
    id: "R002",
    name: "***",
    category: "rompecabezas",
    description: "tamaño x. 20 unidades",
    //price: "450 BS",    
    image:getImageUrl("1ko_lGl2M9-jTqrew3G704HC4NCddC802"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1ko_lGl2M9-jTqrew3G704HC4NCddC802/view?usp=sharing
  },
  {
    id: "SL001",
    name: "***",
    category: "slain liquido",
    description: "tamaño x. 30 unidades",
    //price: "450 BS",    
    image:getImageUrl("1rI6VwARB3jp_odGAeBKnbocnklMgPa2H"),
    tipo:""
    //https://drive.google.com/file/d/1rI6VwARB3jp_odGAeBKnbocnklMgPa2H/view?usp=sharing
  },
  {
    id: "SL002",
    name: "***",
    category: "slain liquido",
    description: "tamaño x. 40 unidades",
    //price: "450 BS",    
    image:getImageUrl("1d1v7UjEHQn7tu8siIXYJlddRCILwWFuJ"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1d1v7UjEHQn7tu8siIXYJlddRCILwWFuJ/view?usp=sharing
  },
  {
    id: "SL003",
    name: "***",
    category: "slain liquido",
    description: "tamaño x. 24 unidades",
    //price: "450 BS",    
    image:getImageUrl("1-HVbXnY4OIOUXxCSnxuNG5uPJR4ag9vL"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1-HVbXnY4OIOUXxCSnxuNG5uPJR4ag9vL/view?usp=sharing
  },
  {
    id: "S001",
    name: "***",
    category: "squishi",
    description: "tamaño x. 24 unidades",
    //price: "450 BS",    
    image:getImageUrl("1nCwErTe-rWcqHorUp32y56-sjjoRib4x"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1nCwErTe-rWcqHorUp32y56-sjjoRib4x/view?usp=sharing
  },
  {
    id: "S002",
    name: "***",
    category: "squishi",
    description: "tamaño x. 24 unidades",
    //price: "450 BS",    
    image:getImageUrl("1sn1ykzSZJzYcsB4vD3g2OFw81M3ovnJk"),
    tipo:""
    //https://drive.google.com/file/d/1sn1ykzSZJzYcsB4vD3g2OFw81M3ovnJk/view?usp=sharing
  },
  {
    id: "S003",
    name: "***",
    category: "squishi",
    description: "tamaño x. 24 unidades",
    //price: "450 BS",    
    image:getImageUrl("10UtevcRpQZ-BA3AxfXB1dva8amW9KbtX"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/10UtevcRpQZ-BA3AxfXB1dva8amW9KbtX/view?usp=sharing
  },
  {
    id: "S004",
    name: "***",
    category: "squishi",
    description: "tamaño x. 24 unidades",
    //price: "450 BS",    
    image:getImageUrl("1jkKX5d_q1r4-nxOsow2s7XnKPqSDfjuH"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1jkKX5d_q1r4-nxOsow2s7XnKPqSDfjuH/view?usp=sharing
  },
  {
    id: "S005",
    name: "***",
    category: "squishi",
    description: "tamaño x. 24 unidades",
    //price: "450 BS",    
    image:getImageUrl("1GYSe9tdR7bYHYO06cTSaXwyS9EsKubOw"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1GYSe9tdR7bYHYO06cTSaXwyS9EsKubOw/view?usp=sharing
  },
  {
    id: "T001",
    name: "***",
    category: "transformers",
    description: "tamaño x. 16 unidades",
    //price: "450 BS",    
    image:getImageUrl("10nXlOi5H3X9cCHatumgsoSFTomWmXMZw"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/10nXlOi5H3X9cCHatumgsoSFTomWmXMZw/view?usp=sharing
  },
  {
    id: "T002",
    name: "***",
    category: "transformers",
    description: "tamaño x. 25 unidades",
    //price: "450 BS",    
    image:getImageUrl("1gIBsRLGTLLqWowC3ORG9RGYhyORT_NPb"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1gIBsRLGTLLqWowC3ORG9RGYhyORT_NPb/view?usp=sharing
  },
  {
    id: "T003",
    name: "***",
    category: "transformers",
    description: "tamaño x. 20 unidades",
    //price: "450 BS",    
    image:getImageUrl("1GsaPlOatdUlmDXCy3x6lSc_g6rgTdtG8"),
    tipo:"nuevo"
    //https://drive.google.com/file/d/1GsaPlOatdUlmDXCy3x6lSc_g6rgTdtG8/view?usp=sharing
  },
];