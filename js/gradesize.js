

//--- MODULOS

function modulos(){

document.getElementsByClassName("content")[0].innerHTML =
`
<label class="titulo"> Cálculo qtde de módulos de grade	</label> 
<label> Entre pilares:	</label> 
<input type="number" id="valor"></input>
<button id="btn" onclick="listarModulos()">OK</button></br>
<div class="res"> </div>
`;
}


//------ ListarModulos

function listarModulos(){
document.getElementsByClassName("res")[0] = "";

let input = document.getElementById("valor").value;
let larguraUtil = input - 78;
let count = 1;
let bool = true;
console.log(input);

function template(count, modulo){
let template = `
<div class="item ${count % 2 == 0? 'color': 'white'}" >
> ${count} módulo(s) de ${modulo}
</div>
`
return template;
}
let list = "";
do{
	let modulo = (larguraUtil / count) - 70;   

      if(modulo >= 500 && modulo <= 2000){ 
	
      	list += template(count, modulo.toFixed(2));

        bool = true;
      }
      else if(modulo<500){
      	bool = false;
      }     
     
      
    count++;

  }while(bool);
document.getElementsByClassName("res")[0].innerHTML = list;
}


//--- TUBOS

function tubos (){

document.getElementsByClassName("content")[0].innerHTML =
`
<label class="titulo"> Cálculo qtde de tubos </label> 

<label> Largura interna:</label> 
<input type="number" id="largura"></input>

<label> Cliente:</label> 
<select type="text" id="cliente"></input>
	<option value="GG">GG</option>
	<option value="lenouy">lenouy</option>	
	<option value="Outro">Outro</option>
</select>


<div class="dist">

</div>
	
<button id="btn" onclick="listarTubos()">OK</button></br>
<div class="res"> </div>
`;
}


//------ ListarTubos

function listarTubos(){

document.getElementsByClassName("res")[0] = "";

let max = document.getElementById("max");
let min = document.getElementById("min");
let cliente = document.getElementById("cliente");
let tubo = document.getElementById("tubo");
let largura = document.getElementById("largura");

let distDOM = document.getElementsByClassName("dist")[0];


function templateEspaco(count, espaco){
let template = `
<div class="item ${count % 2 == 0? 'color': 'white'}" >
> ${count} tubo(s) com espaço de ${espaco.toFixed(2)}
</div>
`
return template;
}

if(cliente.value == "Outro" && max==undefined){
	distDOM.innerHTML = 
	`
	<div>
	<label> Tubo:</label> 
		<select type="text" id="tubo"></input>
			<option value="70">70mm</option>
			<option value="100">100mm</option>
		</select>
	</div>
	<div>
		<label> Dist. entre tubos:</label> 
	
			<input type="number" id="max" placeholder="Max"></input>
			<input type="number" id="min" placeholder="Min"></input>
	</div>
	`
}
else{
	let count = 1;
	let bool = true;
	let list = "";
	switch(cliente.value){		

		case "lenouy" : {			
			let maxi = 75;
			let mini = 60;	
			let tub = 95;

			do{
				let espaco = (largura.value - (count * tub)) / (count+1);   

    				if(espaco >= mini && espaco <= maxi){ 	
   			   		list += templateEspaco(count, espaco);
    					bool = true;
   				}
    				else if(espaco <= mini) {
      					bool = false;
      				}        
   				count++;
 			}while(bool);	
			break;	
		}

		case "GG" : {
			let maxi = 110;
			let mini = 85;
			let tub = 70;

			do{
				let espaco = (largura.value - (count * tub)) / (count+1);  

    				if(espaco >= mini && espaco <= maxi){ 	
   			   		list += templateEspaco(count, espaco);
    					bool = true;
   				}
    				else if(espaco <= mini) {
      					bool = false;
      				}        
   				count++;
 			}while(bool);
			break;	
		}
		case "Outro" : {
			let maxi = max.value;
			let mini = min.value < 20? 20 : min.value;
			
			do{
				let espaco = (largura.value - (count * tubo.value)) / (count+1);  

    				if(espaco >= mini && espaco <= maxi){ 	
   			   		list += templateEspaco(count, espaco);
    					bool = true;
   				}
    				else if(espaco <= mini) {
      					bool = false;
      				}        
   				count++;
 			}while(bool);
			if(min.value<20){
				alert("Espaço mínimo modificado para 20mm");
				min.value = 20; 
			}
			break;	
		}

		default : {	
			alert("Erro!")		
			break;	
		}	
	
	}
	document.getElementsByClassName("res")[0].innerHTML = list;
}

}


//--- TRADITION

function tradition(){

document.getElementsByClassName("content")[0].innerHTML =
`
<label class="titulo"> Cálculo do espaço da extremidade Tradition</label> 
<label> Largura interna:</label> 
<input type="number" id="largura"></input>

<button id="btn" onclick="listarTradition()">OK</button></br>
<div class="res"> </div>
`;
}


//------ ListarTradition

function listarTradition(){

document.getElementsByClassName("res")[0] = "";

let largura = document.getElementById("largura");
let count = 1;
let bool = true;
let list = "";

	do{
		let espacoUtil = ((count-1)*120)+(count*18);
		let extremidade = Math.abs((espacoUtil - largura.value)/2);

    		if(extremidade <= 120){
   			list += templateEspaco(count, extremidade);
    			bool = true;
			break;
   		}
		count++;
    		
	}while(bool);	

list+= templatePortao(count);

document.getElementsByClassName("res")[0].innerHTML = list;

}


//--- VENTILADAS

function ventiladas(){

document.getElementsByClassName("content")[0].innerHTML =
`
<label class="titulo"> Cálculo de lâminas ventiladas</label> 
<label> Altura interna:</label> 
<input type="number" id="largura"></input>

<button id="btn" onclick="listarVentiladas()">OK</button></br>
<div class="res"> </div>
`;
}


//------ ListarVentiladas

function listarVentiladas(){

document.getElementsByClassName("res")[0] = "";

let largura = document.getElementById("largura");
let count = 1;
let bool = true;
let list = "";
let tamanho = 0;

	do{
		tamanho = (largura.value-64)/count;

    		if(tamanho <= 64){
   			list += templateVent(count, tamanho);
    			bool = true;
			break;
   		}
		count++;
    		
	}while(bool);	
	
	if(tamanho < 55){	
		let novaLargura = Number(largura.value) + ((55 - tamanho)*count);
		alert(`Espaço entre lâminas é de ${tamanho}mm! \nNão pode ser menor que 55mm. \nTente Altura de ${novaLargura}.`);
		largura.value = novaLargura;
	}
	else{
		list+= templateDetVent(largura.value, tamanho);
		document.getElementsByClassName("res")[0].innerHTML = list;
	}

}


//------
function templateVent(count, tamanho){
	let template = `
	<div class="item ${count % 2 == 0? 'color': 'white'}" >
	> 1 Lâm. com 64mm + ${count} Lâm.(s) com ${tamanho.toFixed(2)}mm
	</div>
	`
	return template;
}


//------
function templateDetVent(cotaMaior, cotaMenor){

let template = `
	<div class="detalheVent">
		<div class="total">
			<div class="cotaTotal"></div>
		</div>
		<div class="maior">
			<div class="cotaMaior">${cotaMaior}</div>
		</div>
		<div class="imagem">
		<img id="img-vent" src="./img/vent_img_cota.jpg" alt="Detalhe">
		</div>
		<div class="cotas">			
			<div class="cota64">64</div>
			<div class="cotaMenor">${cotaMenor.toFixed(2)}</div>
		</div>
	</div>
	`
	return template;
}


//------
function templateEspaco(count, espaco){
	let template = `
	<div class="item ${count % 2 == 0? 'color': 'white'}" >
	> ${count} tubo(s) com extremidades de ${espaco.toFixed(2)}mm
	</div>
	`
	return template;
}


//------
function templatePortao(qntTubos){

let template = `
<div class="portao">
	<div class="pru"></div>
	<div class="folha">
		<div class="setas"></div>
		<div class="trav"></div>
		<div class="tubos">
			${templateTubos(qntTubos)}
		</div>
		<div class="trav"></div>
		<div class="reguas"></div>
		<div class="trav"></div>
		<div class="taco"></div>
	</div>	
	<div class="pru"></div>	
	<div class="pru"></div>	
	<div class="folha">
		<div class="setas"></div>
		<div class="trav"></div>
		<div class="tubos">
			${templateTubos(qntTubos)}
		</div>
		<div class="trav"></div>
		<div class="reguas"></div>
		<div class="trav"></div>
		<div class="taco"></div>
	</div>
	<div class="pru"></div>	
</div>
	`
	return template;
}

//------
function templateTubos(qntTubos){
let list= "";

let template = `<div class="tubo"></div>`

for(let i = 0; i < qntTubos; i++){
	list += template;
	
	}
return list;
}