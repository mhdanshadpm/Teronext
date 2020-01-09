crntPg=0;
show(crntPg);
crntPgNoOfItem=0;
var flag=0;
document.getElementById("error").innerHTML='All fields are mandatory';
function validate(){
	let id=document.getElementById('id').value;
	let name=document.getElementById('name').value;
	let mark1=document.getElementById('mark1').value;
	let mark2=document.getElementById('mark2').value;
	let mark3=document.getElementById('mark3').value;
	var values = [];
	keys = Object.keys(localStorage);


	if(id==null || id==""){
		document.getElementById("error").innerHTML='Pleas enter Student ID';
		document.getElementById('btnModal3').click();
	}
	else if(!(id.match(/(\d+)/))){
        document.getElementById("error").innerHTML='Invalid ID';
        document.getElementById('btnModal3').click();
    }
    else if(name==null || name==""){
		document.getElementById("error").innerHTML='Please enter Student Name';
		document.getElementById('btnModal3').click();
	}
	else if(mark1==null || mark1==""){
		document.getElementById("error").innerHTML='Please enter the mark of English';
		document.getElementById('btnModal3').click();
	}
	else if(!(mark1.match(/(\d+)/)) || mark1>100 || mark1<0){
		document.getElementById("error").innerHTML="Please check mark of English";
		document.getElementById('btnModal3').click();
	}
	else if(mark2==null || mark2==""){
		document.getElementById("error").innerHTML='Please enter the mark of Maths';
		document.getElementById('btnModal3').click();
	}
	else if(!(mark2.match(/(\d+)/)) || mark2>100 || mark2<0){
		document.getElementById("error").innerHTML="Please check mark of English";
		document.getElementById('btnModal3').click();
	}
	else if(mark3==null || mark3==""){
		document.getElementById("error").innerHTML='Please enter the mark of Science';
		document.getElementById('btnModal3').click();
	}
	else if(!(mark3.match(/(\d+)/)) || mark3>100 || mark3<0){
		document.getElementById("error").innerHTML="Please check mark of English";
		document.getElementById('btnModal3').click();
	}
	else if(keys.indexOf(id)!=-1){
    		document.getElementById("error").innerHTML='Student id Already Exist';
    		document.getElementById('btnModal3').click();
    }
	else{
		storeData();
	}
}
function storeData()
{
	let id=document.getElementById('id').value;
	let name=document.getElementById('name').value;
	let mark1=document.getElementById('mark1').value;
	let mark2=document.getElementById('mark2').value;
	let mark3=document.getElementById('mark3').value;
	var stdObj = { 
		sid:id,
		sname:name,
		smark1:mark1,
		smark2:mark2,
		smark3:mark3
	};
	if (typeof(Storage) !== "undefined") {
		// Store
		let newStdObj = JSON.stringify(stdObj);
		localStorage.setItem(id, newStdObj); 
		document.getElementById('btnModal2').click();
		show(crntPg);
	}
	else {
			document.getElementById("display").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}
function show(page){
    crntPg=page;
	var values = [];
	keys = Object.keys(localStorage);
	i = keys.length-page*5;
	temp=i;
	if (localStorage.length !== 0) {
		document.getElementById("display").innerHTML = "<thead><tr><th>Sl. No.</th><th>Student ID</th><th>Name</th><th>English</th><th>Maths</th><th>Science</th><th></th><th></th></tr></thead>";
	}
	else{
		document.getElementById("display2").innerHTML = "<h5 align='center' style='color:#8842d5' >There is no student details</h5><p align='center'>Add a student</p>";
	}
	LSlength=localStorage.length;
	sln=page*5+1;
	no=0;
	while ( i--> temp-5) {
		if(localStorage.getItem(keys[i])!=null){
			++no;
			var stdJSONStringFromLS = localStorage.getItem(keys[i]);
			var stdObjFromLS = JSON.parse(stdJSONStringFromLS);
			k=stdObjFromLS.sid;
			kid="id"+k;
			kn="name"+k;
			km1="mark1"+k;
			km2="mark2"+k;
			km3="mark3"+k;
			document.getElementById("display").innerHTML += 
			"<tbody><tr><td><input type='text'  value='"+(sln++)+"' class='disable'  id='"+k+
			"' ></td><td><input type='text'   value='"+stdObjFromLS.sid+"' style='width:60px; background-color:Transparent; border:0px solid' id='"+kid+
			"' ></td><td><input type='text'  value='"+stdObjFromLS.sname+"' style='width:150px; background-color:Transparent; border:0px solid' id='"+kn+
			"' ></td><td><input type='text'   value='"+stdObjFromLS.smark1+"' style='width:60px; background-color:Transparent; border:0px solid'  id='"+km1+
			"' ></td><td><input type='text'   value='"+stdObjFromLS.smark2+"' style='width:60px; background-color:Transparent; border:0px solid' id='"+km2+
			"' ></td><td><input type='text'   value='"+stdObjFromLS.smark3+"' style='width:60px; background-color:Transparent; border:0px solid' id='"+km3+
			"' ></td><td><i class='fa fa-edit' onclick=editStd("+keys[i]+") id='btn"+keys[i]+"' ></i><i class='' onclick=save("+keys[i]+") id='btn2"+keys[i]+"' ></i></td><td><i class='fa fa-remove' onclick=deleteStd("+keys[i]+")></i></td></tr>";
			disable(k)
			disable(kid);
			disable(kn);
			disable(km1);
			disable(km2);
			disable(km3);

		}
	}
	crntPgNoOfItem=no;
	document.getElementById("display").innerHTML += "</tbody>";
	document.getElementById('page').innerHTML="";
	pageSelected="page"+(page+1);
	console.log(pageSelected);
	if(localStorage.length>5){
		for(p=1;LSlength>0;p++){
			document.getElementById('page').innerHTML+="<input type='button' value ="+p+" onclick=show("+(p-1)+") id='page"+p+"' class='btn btn-default'>";
			// LSlength=LSlength/5;
			LSlength=LSlength-5;
		}
	}
	if (localStorage.length >5) {
		document.getElementById(pageSelected).className="btn btn-primary";
	}
}
function deleteStd(key){
	localStorage.removeItem(key);
	if(localStorage.length>5 && crntPgNoOfItem ==0){
		show(crntPg-1);
	}
	else if(localStorage.length<=5){
		show(0);
	}
	else{
		show(crntPg);
	}
}
function editStd(key){
	id='id'+key;
	n='name'+key;
	m1='mark1'+key;
	m2='mark2'+key;
	m3='mark3'+key;
	icon="btn"+key;
	icon2="btn2"+key;
	enable(n);
	enable(m1);
	enable(m2);
	enable(m3);
	document.getElementById(icon).className="";
	document.getElementById(icon2).className="fa fa-save";

}
function save(key){

    k='id'+key;
	n='name'+key;
	m1='mark1'+key;
	m2='mark2'+key;
	m3='mark3'+key;
	icon="btn"+key;
	let id=document.getElementById(k).value;
	let name=document.getElementById(n).value;
	let mark1=document.getElementById(m1).value;
	let mark2=document.getElementById(m2).value;
	let mark3=document.getElementById(m3).value;
	var stdObj = { 
		sid:id,
		sname:name,
		smark1:mark1,
		smark2:mark2,
		smark3:mark3
	};
	if (typeof(Storage) !== "undefined") {
		// Store
		let newStdObj = JSON.stringify(stdObj);
		localStorage.setItem(id, newStdObj);
		document.getElementById('btnModal').click();
		show(crntPg);

	}
	else {
			document.getElementById("display").innerHTML = "Sorry, your browser does not support Web Storage...";
	}

}
function enable(name){
	console.log(name);
	document.getElementById(name).disabled = false; 
	if(name.search("name")!=-1){

		document.getElementById(name).className="form-control";
		document.getElementById(name).style="width:150px";
	}
	else if(name.search("mark")!=-1){
		document.getElementById(name).className="form-control";
		document.getElementById(name).style="width:60px";
	}

}
function disable(name) { 
	console.log(name);
	document.getElementById(name).disabled = true; 
}
