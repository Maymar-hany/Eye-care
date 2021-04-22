
var compined={
  'amino+hyaluronic':'images/hyalfid.png',
  'ginkgo+hyaluronic':'images/trium.png',
  'nacl+hyaluronic':'images/edenorm.png',
  'amino+liposome':'images/tearfid.png',
  'carbopol+echinacea':'images/iridium-gel.png',
  'amino+lipoic':'images/tioretin.png'
}
var infictions = [
 { 
  'images/trium.png':'eye-post', 
 },
 {
  'images/hyalfid.png':'long-screen',
 },
 {
  'images/tioretin.png':'diabetic', 
 },
 {
  'images/edenorm.png':'post-surgery', 
 },
 {
  'images/tearfid.png':'Meibomian', 
 },
]
var compounds = [
  {
    id:'amino',
    name:'Amino Acid',
    img:'images/amino.png'
  },
  {
    id:'ginkgo',
    name:'Ginkgo biloba',
    img:'images/ginkgo.png'
  },
  {
    id:'hyaluronic',
    name:'Hyaluronic Acid',
    img:'images/hyaluronic.png'
  },
  {
    id:'carbopol',
    name:'Carbopol',
    img:'images/carbopol.png'
  },
  {
    id:'echinacea',
    name:'Echinacea',
    img:'images/echinacea.png'
  },
  {
    id:'hypromelose',
    name:'Hypromelose',
    img:'images/hypromelose.png'
  }
  ,
   {
    id:'aloevera',
    name:'Aloe Vera',
    img:'images/aloevera.png'
  }
  ,
  {
    id:'lipoic',
    name:'Lipoic',
    img:'images/lipoic.png'
  },
  {
    id:'liposome',
    name:'Liposome',
    img:'images/liposome.png'
  }
  ,
  {
    id:'nacl',
    name:'NaCL',
    img:'images/nacl.png'
  } 
]
var medicines=[
  {
    id:'hyalfid',
    class:'show-medic',
    img:'images/hyalfid.png'
  },
  {
    id:'trium',
    class:'show-medic',
    img:'images/trium.png'
  },
  {
    id:'edenorm',
    class:'show-medic',
    img:'images/edenorm.png'
  },
  {
    id:'tearfid',
    class:'show-medic',
    img:'images/tearfid.png'
  },
  {
    id:'tioretin',
    class:'show-medic',
    img:'images/tioretin.png'
  },
  {
    id:'iridium-gel',
    class:'show-medic',
    img:'images/iridium-gel.png'
  },
]
var patients =[
  {
    attribute:'images/trium.png',
    id:'eye-post',
    infiction:'Patients with dry eye post eye surgery',
    img:'images/icon-1.png'
  },
  {
    attribute:'images/hyalfid.png',
    id:'long-screen',
    infiction:'Patients with Multifactorial Dry eye e.g long screen time',
    img:'images/icon-4.png'
  },
  {
    attribute:'images/edenorm.png',
    id:'post-surgery',
    infiction:'',
    img:'images/icon-2.png'
  },
  {
    attribute:'images/tearfid.png',
    id:'Meibomian',
    infiction:'',
    img:'images/icon-3.png'
  },
  {
    attribute:'',
    id:'',
    infiction:'',
    img:'images/icon-5.png'
  },
  {
    attribute:'images/tioretin.png',
    id:'diabetic',
    infiction:'',
    img:'images/icon-6.png'
  }
]
var score =0;
var item2='';
var comp ='';
var show ='';
var compoundsdiv = document.getElementById('compounds');
var medicine = document.getElementById("medicine");
var patientsdiv=document.getElementById('patients')
var lab = document.getElementById('labs')
window.onload=function() {
  addCompounds();
  addPatients();
  showMedicine();
}
window.dragMoveListener = dragMoveListener
function showMedicine ( params  ){
 /*  var medic =medicines.find(med =>med.img== params);
  if(medic !== undefined){
    
    var med = ` 
    <div class="column is-6">
    <div id="${medic.id}">
      
    <img id="medicImg" width="150px" height="200px" src="${medic.img}" class="medicine-item">
    </div>
    </div>
    ` 
   medicine.innerHTML =med  }*/
    medicines.forEach(element => {
    var med = ` 
       
        <div id="${element.id}" class="single-medicine is-hidden">
      
    <img  id="medicImg" src="${element.img}" class="medicine-item">
    </div>
    
    
    `
   medicine.innerHTML +=med 
  }); 
  
}
function addCompounds (){
  compounds.forEach(element => {
    var compound = document.createElement('div')
    compound.innerHTML=
    ` 
    
   <img width="250" height="250" src="${element.img}" >
        `
     compound.classList.add('item')
   //  compound.classList.add('column')
    // compound.classList.add('is-2')
     compound.id=element.id
  compoundsdiv.insertBefore (compound , lab)
  });
}
function addPatients (){
  patients.forEach(element => {
    var patient = `
    <div class="column is-6">
    <div id="patient-icon">
    <div  id="${element.id}" class="dropzone-patient" data-medic="${element.attribute}">
   
     
    <img width="150" height="150"  src="${element.img}" >
     </div>   
    </div
    </div>
    `
    /*    <div class="card">
    <div  id="${element.id}" class="dropzone-patient" data-medic="${element.attribute}">
      <span class="icon is-large is-right has-text-success ">
        <i id="check" class=" fa fa-check"></i>
      </span>
      <div class="card-image has-text-centered ">
        <figure class="image is-64x64 is-inline-block">  
   <img src="${element.img}" >
        </figure>
      </div>
      <br>
      <div class="card-content">
        
        <div class="content">
          <p>
            ${element.infiction}
          </p>
        </div>
      </div>
    </div>
    </div> */

  patientsdiv.innerHTML +=patient
  });
}
function dragMoveListener (event) {
  var target = event.target
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

interact('.item')
  .draggable({
    listeners: {
       move: dragMoveListener
     },
     modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ], 
     inertia: true,
       
  })
  interact('.medicine-item')
  .draggable({
    listeners: { move: dragMoveListener } ,
    inertia: true,
  })
 
  interact('.dropzone')
  .dropzone({
    accept: '.item',
    overlap: 0.75,
    ondropactivate: function (event) {
      const item = event.relatedTarget
      item.classList.add('dragging')
      event.target.id="components"
    },
    ondropdeactivate: function (event) {
      const item = event.relatedTarget
      event.target.id=""
      item.classList.remove('dragging', 'cannot-drop')
    },
    ondragenter: function(event) {
      const item = event.relatedTarget
      if (item2===''){
        item2=event.relatedTarget.id
      }
      item.classList.remove('cannot-drop')
      item.classList.add('can-drop')
      item.classList.add('drop-target')
       var data = event.relatedTarget.id
       var target = event.target
       medicdiv = document.createElement('div')
       
       var medicTarget = compined[`${item2}+${data}`] ?? compined[`${data}+${item2}`]
      if(medicTarget!==undefined ){

        medicines.forEach(element => {
          if(element.img === medicTarget){
           // showMedicine(medicTarget)
            
            show = document.getElementById(element.id)
            show.classList.remove('is-hidden')
        
          }
        })
     }
    },
    ondragleave: function(event) {
      const item = event.relatedTarget
      item.classList.remove('can-drop')
      item.classList.add('cannot-drop')
      item.classList.remove('drop-target')
      item2=''
        medic=document.getElementById('medicine')
      var currentmedic = document.getElementById(show.id)
      if(currentmedic !== null){
      if(currentmedic.querySelector("#medicImg").className.includes('medicine-item')){
        currentmedic.classList.add('is-hidden')
      }
    }
    }
  }) 
  interact('.dropzone-patient')
  .dropzone({
    accept: '.medicine-item',
    overlap: 0.25,
   
    ondropactivate: function (event) {
      const item = event.relatedTarget
      item.classList.add('dragging')
    },
    ondropdeactivate: function (event) {
      const item = event.relatedTarget
      item.classList.remove('dragging', 'cannot-drop')
    },
    ondragenter: function(event) {
      const item = event.relatedTarget
      item.classList.remove('cannot-drop')
      item.classList.add('can-drop')  
      
       if(item.className.includes('medicine-item')){
         //currentmedic = item.querySelector("#"+show.id).querySelector('#medicImg').getAttribute('src') 
         currentmedic = item.getAttribute('src')
       }
       var targetid= event.target.id
      var attr=document.getElementById(targetid).getAttribute('data-medic')
      var toast = document.getElementById("snackbar");
     // var i = document.querySelector("#"+targetid).querySelector("#check")
      if (attr == currentmedic ){
         // i.style.display='flex' 
          toast.innerHTML= 'relieved'
          toast.style.backgroundColor="green"         
          toast.className = "show";
          
          setTimeout(function(){ toast.className = toast.className.replace("show", "");}, 2000);
          
          if (score===medicines.length){
            clearInterval(this.timer)
               openfinalscore();
           }
          }
          else{
            toast.innerHTML= 'still Suffering!'
            toast.style.backgroundColor="#ff531a"
            toast.className = "show";
            setTimeout(function(){ toast.className = toast.className.replace("show", "");}, 2000);
           }
           
    },
    ondragleave: function(event) {
      const item = event.relatedTarget
      item.classList.remove('can-drop')
      item.classList.add('cannot-drop')
      var d= event.target.id
     
     /*   var i = document.querySelector("#"+d).querySelector("#check")
      i.style.display = 'none' */
      
    },
    ondrop:function(event) {
      const item = event.relatedTarget
      item.classList.remove('medicine-item','dragging')
      if (!item.className.includes('medicine-item')){
        
      document.getElementById("score").innerHTML = ++score;
    }
    }

  })
  var sec = 0;
  var minutes =0;
  var seconds = 0;
  function pad ( val ) { return val > 9 ? val : "0" + val; }
  var timer= 0;
   function openfinalscore(){
    var winner =  document.getElementById("winner");
    winner.classList.add('is-active')
    document.getElementById("sc").innerHTML=score;
    document.getElementById("min").innerHTML=minutes
    document.getElementById("sec").innerHTML=seconds
  }
  function closefinalscore(){
    winner.classList.remove('is-active')
  }
function startGame() {
  var start = document.getElementById("startgame")
  start.classList.remove('is-active')
  timer=setInterval( function(){
    seconds=pad(++sec%60);
    minutes=pad(parseInt(sec/60,10))
       document.getElementById("seconds").innerHTML=seconds;
       document.getElementById("minutes").innerHTML= minutes;
   }, 1000);
}