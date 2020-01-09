
  window.onload=function(){
    show();
  }
  currentPage=0;
	imgLen=images.length;
  noPg=parseInt(imgLen/12);
  pgRem=imgLen-noPg*12;
  function showList(active){
    pages=document.getElementById("pages");
    pages.innerHTML="";
    i=1;
    prev=currentPage;
    next=currentPage+2;
    if(currentPage!=0){
      document.getElementById("pages").innerHTML+="<li class='page-item'><a class='page-link' onclick='showPage("+prev+")'>Previous</a></li>";
    }
    else{
      document.getElementById("pages").innerHTML+="<li class='page-item' style='opacity :30%' ><a class='page-link' onclick=''>Previous</a></li>";
    }
    for(i=1;i<=noPg;i++){
      if(i==active){
        clsName="page-item active";
      }
      else{
        clsName="page-item"
      }
      
      temp1="<li class='"+clsName+"' id='"+i+"'>";
      temp2="<a class='page-link' onclick='showPage("+i+")'>"+i+"</a>";
      temp3="</li>";
      pages.innerHTML+=temp1+temp2+temp3;
    }
    if(pgRem!=0){
      if(i==active){
        clsName="page-item active";
      }
      else{
        clsName="page-item"
      }
      temp1="<li class='"+clsName+"' id='"+i+"'>";
      temp2="<a class='page-link' onclick='showPage("+i+")'>"+i+"</a>";
      temp3="</li>";
      pages.innerHTML+=temp1+temp2+temp3;
    }
    if(currentPage!=i-1){
      document.getElementById("pages").innerHTML+="<li class='page-item'><a class='page-link' onclick='showPage("+next+")'>Next</a></li>";
    }
    else{
      document.getElementById("pages").innerHTML+="<li class='page-item' style='opacity :30%' ><a class='page-link' onclick=''>Next</a></li>";
    }
  }
  function showPage(no){
    currentPage=no-1;
    show();
  }

  var s;
  imagesHtml="";
  function show(){
    active=currentPage+1;
    showList(active);
    document.getElementById("column0").innerHTML="";
    document.getElementById("column1").innerHTML="";
    document.getElementById("column2").innerHTML="";
    document.getElementById("column3").innerHTML="";




    if(s=(currentPage*12+12<=noPg*12)){
      j=currentPage*12;
      for(k=0;k<3;k++){
        for(i=0;i<4;i++){
          imgID="img"+j;
          imagesHtml="<div class='zoomImg'>"+
          "<img src='images/"+images[j].src+"' class='class='card-img-top'' style='width:100%' onmouseover='titleOver("+j+")' onmouseout='titleOut("+j+")' onclick='imV("+j+")' id='"+imgID+"'>"+
          "<div class='top-left'><h4 style='color:white' class='card-title' id='imgTitle"+j+"' ></h4></div></div>";
          colId="column"+i;

          colId="column"+i;
          document.getElementById(colId).innerHTML+=imagesHtml;
          j++;
        }
      }
    }
    else{
      j=currentPage*12;
      console.log(j);
      console.log(images[j].src);
      imgPerCol=parseInt(pgRem/4);
      rem=pgRem-imgPerCol*4;
      for(k=0;k<imgPerCol;k++){
        for(i=0;i<4;i++){
          imgID="img"+j;
          console.log(imgID);
          imagesHtml="<div class='zoomImg'>"+
          "<img src='images/"+images[j].src+"' class='class='card-img-top'' style='width:100%' onmouseover='titleOver("+j+")' onmouseout='titleOut("+j+")' onclick='imV("+j+")' id='"+imgID+"'>"+
          "<div class='top-left'><h4 style='color:white' class='card-title' id='imgTitle"+j+"' ></h4></div></div>";
          colId="column"+i;
          colId="column"+i;
          document.getElementById(colId).innerHTML+=imagesHtml;
          j++;
        }
      }
      for(i=0;i<rem;i++){
          imgID="img"+j;
          console.log(j);
          imagesHtml="<div class='zoomImg'>"+
          "<img src='images/"+images[j].src+"' class='class='card-img-top'' style='width:100%' onmouseover='titleOver("+j+")' onmouseout='titleOut("+j+")' onclick='imV("+j+")' id='"+imgID+"'>"+
          "<div class='top-left'><h4 style='color:white' class='card-title' id='imgTitle"+j+"' ></h4></div></div>";
          colId="column"+i;
          colId="column"+i;
          document.getElementById(colId).innerHTML+=imagesHtml;
          j++;
      }
    }
  }
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  function imV(id){
    imgID="img"+id;
    console.log(id);
    img=document.getElementById(imgID);
    im=images[id];
    des=im.description;
    title=im.title;
    console.log(des);
    captionText=document.getElementById('caption');
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = "<h2>"+title+"</h2><p>"+des+"</p>";
  }
  function titleOver(id){
    idTitle="imgTitle"+id;
    document.getElementById(idTitle).innerHTML=images[id].title;
  }
  function titleOut(id){
    idTitle="imgTitle"+id;
    document.getElementById(idTitle).innerHTML="";
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  function closeImg() { 
    modal.style.display = "none";
  }
