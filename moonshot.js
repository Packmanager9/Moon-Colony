// moonshot


const locationsURL = 'http://localhost:3000/locations'
const materialsURL = 'http://localhost:3000/material_resources'
const matDistributionsURL = 'http://localhost:3000/mat_distributions'
const basesURL = 'http://localhost:3000/bases'


let timer1 = 0
let landed = 0
let maxspeed = 3.5
let takeoff = 0
let iframe = 0
let tradetotal = 0
//let rocketarray[0].xacc = 0

// let rocketarray[0].yacc = 0

let credits = 25000
let fuel = 500
let healthstat = 100000
let solarpanels = 0
let reactors = 0
let houses = 1
let farms = 0
let wastereclamation = 0
let lux = 0
let mines = 0
//let rocketuranium = 1000
//let rockethelium = 1000

let moonorganics = 10000
let moonuranium = 1000
let moonhelium = 1000
let moonmetals = 100000
let moonmetaloids = 100000
let moonelectricity = 1000
let moonpopulation = 10000

let rocketorganics = 0
let rocketuranium = 0
let rockethelium = 0
let rocketmetals = 0
let rocketmetaloids = 0
let rocketelectricity = 0
let rocketpopulation = 0

window.addEventListener('DOMContentLoaded', (event) =>{


   let asteroids = []

   let sold = document.getElementById("sale")
   let unload = document.getElementById("unload")

    let storage = document.getElementById("asteroidmake")
    let retrieve = document.getElementById("asteroidcrush")
     storage.innerText = "Store Resources in a new Asteroid"
     retrieve.innerText = "Retrieve Resources in an Asteroid"
    let submitbox = document.getElementById("gimmie")
    let submitmbox = document.getElementById("gimmu")
    let uranload = document.getElementById("load-u")
    let heliload = document.getElementById("load-he")
    let contentbox = document.getElementById("comment_input")
    let loadme = document.getElementById("load-input")


    sold.addEventListener('click', ev => {
        ev.preventDefault()
        tradetotal = (rocketuranium + rockethelium)
        if((landed === 1) && (rocketarray[0].x<(tutorial_canvas.width/2)) ){
        credits += tradetotal*10
        rockethelium = 0
        rocketuranium = 0
        }

        displayTexts()
      })
      unload.addEventListener('click', ev => {
                        
        if((landed === 1) && (rocketarray[0].x>(tutorial_canvas.width/2)) ){
                moonorganics += rocketorganics
                moonuranium += rocketuranium
                moonhelium += rockethelium
                moonmetals += rocketmetals
                moonmetaloids += rocketmetaloids
                moonelectricity += rocketelectricity
                moonpopulation += rocketpopulation

                rocketorganics = 0
                rocketuranium = 0
                rockethelium = 0
                rocketmetals = 0
                rocketmetaloids = 0
                rocketelectricity = 0
                rocketpopulation = 0
        }
          displayTexts()
        })


      storage.addEventListener('click', ev => {
          if((moonmetaloids >= 1000) && (moonmetals >= 1000)){
        if(asteroids.length < 40){
      for(let h = 0; h < 1; h++){

          let a1 = new Circle(moon.x, moon.y, 10, "#555555", Math.random()-.5, Math.random()-.5, 40 )
      
         planets.push(a1)
      
         asteroids.push(a1)
         }
      }
      moonmetals -= 1000
      moonmetaloids -= 1000
    }
    displayTexts()
    })

    retrieve.addEventListener('click', ev => {
        if(asteroids.length >= 25){

         planets.pop()
            asteroids.pop()
      moonmetals += 1000
      moonmetaloids += 1000
      }

    displayTexts()
    })

      uranload.addEventListener('click', ev => {
        ev.preventDefault()
        tradetotal = parseInt(loadme.value,10)
        if((landed === 1) && (rocketarray[0].x>(tutorial_canvas.width/2)) ){
            if(moonuranium >= tradetotal){
                rocketuranium += tradetotal
                moonuranium -= tradetotal
            }
        }
        
        displayTexts()
      })
      heliload.addEventListener('click', ev => {
          ev.preventDefault()
          tradetotal = parseInt(loadme.value,10)

        if((landed === 1) && (rocketarray[0].x>(tutorial_canvas.width/2)) ){
            if(moonhelium >= tradetotal){
                rockethelium += tradetotal
                moonhelium -= tradetotal
            }
        }

          displayTexts()
        })

      submitbox.addEventListener('click', ev => {
          ev.preventDefault()
          tradetotal = parseInt(contentbox.value,10)
          if((landed === 1) && (rocketarray[0].x<(tutorial_canvas.width/2)) ){
          if(credits >= tradetotal){
          credits -= tradetotal
          rocketmetals += tradetotal
          }
        }
          displayTexts()
        })


      submitmbox.addEventListener('click', ev => {
        ev.preventDefault()
        tradetotal = parseInt(contentbox.value,10)
        if((landed === 1) && (rocketarray[0].x<(tutorial_canvas.width/2)) ){
        if(credits >= tradetotal){
        credits -= tradetotal
        rocketmetaloids += tradetotal
        }
    }
        displayTexts()
      })
        
    let moneybox = document.getElementById("credits");

    let buysolar = document.getElementById("solar");
    buysolar.innerText = "Build Solar Panel"
    let buyfarming = document.getElementById("farming");
    buyfarming.innerText = "Build Hydroponic Farm"
    let buynuclear = document.getElementById("nuclear");
    buynuclear.innerText = "Build Reactor"
    let buyhouse = document.getElementById("housing");
    buyhouse.innerText = "Build Biodome"
    let buymine = document.getElementById("resources");
    buymine.innerText = "Build Mine"
    let buywaste = document.getElementById("waste");
    buywaste.innerText = "Improve Waste Reclamation"
    let buyluxuries = document.getElementById("luxury");
    buyluxuries.innerText = "Build Luxury Facilities"

    let repair = document.getElementById("repair");
    repair.innerText = "Repair Ship"


    repair.addEventListener('click', e => {

        if(landed == 1){ 
            healthstat += 1


            if((landed === 1) && (rocketarray[0].x>(tutorial_canvas.width/2)) ){


                if(healthstat > 90000){
                    moonmetals -= 1
                }else if(healthstat > 80000){
                    moonmetals -= 2
                }else if(healthstat > 70000){
                    moonmetals -= 4
                }else if(healthstat > 60000){
                    moonmetals -= 8
                }else if(healthstat > 50000){
                    moonmetals -= 16
                }else if(healthstat > 40000){
                    moonmetals -= 32
                }else if(healthstat > 30000){
                    moonmetals -= 64
                }else if(healthstat > 20000){
                    moonmetals -= 128
                }else if(healthstat > 10000){
                    moonmetals -= 256
                }else if(healthstat > 0){
                    moonmetals -= 512
                }
    
    
    
    
            healthstat = 100000
    
            }

            if((landed === 1) && (rocketarray[0].x<(tutorial_canvas.width/2)) ){
    
    
                if(healthstat > 90000){
                    credits -= 1
                }else if(healthstat > 80000){
                    credits -= 2
                }else if(healthstat > 70000){
                    credits -= 4
                }else if(healthstat > 60000){
                    credits -= 8
                }else if(healthstat > 50000){
                    credits -= 16
                }else if(healthstat > 40000){
                    credits -= 32
                }else if(healthstat > 30000){
                    credits -= 64
                }else if(healthstat > 20000){
                    credits -= 128
                }else if(healthstat > 10000){
                    credits -= 256
                }else if(healthstat > 0){
                    credits -= 512
                }
    
    
    
    
            healthstat = 100000
    
            }
        }

        displayTexts()
    })


    buysolar.addEventListener('click', e => {

        if(moonmetaloids >= 100){
            if(moonmetals >= 100){

        solarpanels+=1
        moonmetaloids-=100
        moonmetals-=100

        }
    }
   
        displayTexts()
   
       })
       buyfarming.addEventListener('click', e => {

        if(moonmetaloids >= 800){
            if(moonmetals >= 200){
        farms+=1
        moonmetaloids-=800
        moonmetals-=200
            }
        }
        displayTexts()
   
       })
       buynuclear.addEventListener('click', e => {

        if(moonmetaloids >= 250){
            if(moonmetals >= 750){
        reactors+=1
        moonmetaloids-=250
        moonmetals-=750
            }
        }
   
        displayTexts()
   
       })
       buyhouse.addEventListener('click', e => {

        if(moonmetaloids >= 500){
            if(moonmetals >= 500){
        houses+=1
        moonmetaloids-=500
        moonmetals-=500
            }
        }
        displayTexts()
   
       })
       buywaste.addEventListener('click', e => {

        if(moonmetaloids >= 1000){
            if(moonmetals >= 1000){
        wastereclamation+=1
        moonmetaloids-=1000
        moonmetals-=1000
            }
        }
   
        displayTexts()
   
       })
       buyluxuries.addEventListener('click', e => {

        if(moonmetaloids >= 2500){
            if(moonmetals >= 2500){
        lux+=1
        moonmetaloids-=2500
        moonmetals-=2500
            }
        }
   
        displayTexts()
   
       })
       buymine.addEventListener('click', e => {

        if(moonmetaloids >= 750){
            if(moonmetals >= 250){
        mines+=1
        moonmetaloids-=750
        moonmetals-=250
            }
        }
   
        displayTexts()
   
       })
    let organics = document.getElementById("organics");
    let uranium = document.getElementById("uranium");
    let helium = document.getElementById("helium");
    let metals = document.getElementById("metals");
    let metaloids = document.getElementById("metaloids");
    let electricity = document.getElementById("electricity");
    let population = document.getElementById("population");

   
    displayTexts()


    let eaten = document.getElementById("eaten");
    let momentum = document.getElementById("momentum");
    eaten.innerText = "0"
    let health = document.getElementById("health");
    health.innerText = `${healthstat}`
    momentum.innerText = "0"
    let tutorial_canvas = document.getElementById("tutorial");
    let tutorial_canvas_context = tutorial_canvas.getContext('2d');

    tutorial_canvas.style.background =  "#000000"

    class Circle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, mass = 1, xacc = 0, yacc = 0, tail = []) {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.mass = mass
            this.xacc = xacc
            this.yacc = yacc
            this.tail = tail
        }
        draw(context){
            context.lineWidth =22;

            if((this === rocketarray[0])){
                context.lineWidth = this.radius/1.41;
            }
            context.strokeStyle = this.color
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), true)
            context.fillStyle = this.color
            if((this === rocketarray[0])&&(iframe == 0)){
                context.fillStyle = "#FFFF88"
            }
            if((this === rocketarray[0])&&(iframe == 1)){
                context.fillStyle = "#222222"
            }
          context.fill()
            context.stroke();  
        }
        move(){
            this.x += this.xmom
            this.y += this.ymom

        }
        stop(){
            this.xmom = 0
            this.xacc = 0
            this.ymom = 0
            this.yacc = 0
        }
    }

    class Rectangle {
        constructor(top, left, width, height, color) {
            this.top = top
            this.left = left
            this.width = width
            this.height = height
            this.color = color
        }
        draw(context){
            context.fillStyle = this.color
            context.fillRect(this.left, this.top, this.width, this.height)
        }
    }



    document.onkeydown = function(event) {

        
        switch (event.keyCode) {
           case 65:  
           takeoff = 0
           landed = 0
           if(fuel > 0){
           rocketarray[0].xmom -= 3000/rocketarray[0].mass
           fuel--
           }
              break;
           case 87:
                takeoff = 0
                landed = 0
                if(fuel > 0){
                rocketarray[0].ymom -= 3000/rocketarray[0].mass
                fuel--
                }
              break;
           case 68 :

                takeoff = 0
                landed = 0
                if(fuel > 0){
                rocketarray[0].xmom += 3000/rocketarray[0].mass
                fuel--
                }
              break;
              case 83:
                
                    takeoff = 0
                    landed = 0
           if(fuel > 0){
                    rocketarray[0].ymom += 3000/rocketarray[0].mass
                    fuel--
                    }
                 break;
                 case 32:
      // spacebar
      rocketarray[0].mass += 100
      rocketarray[0].radius += .2
                    break;
        }
    };


    let comet = []
    let rocket = new Circle(2500, 1000, 12, "#FF0000", 0, 0, 1000 )
   let   rocketarray = [rocket]
   let planets = []
   let moon = new Circle(4300, 1000, 100, "#BBBBBB", 0, 0, 100000 )
   let crater = new Circle(4000, 1000, 40, "#999999")
   let crater2 = new Circle(4000, 1000, 20, "#DDDDDD")
   let crater3 = new Circle(4000, 1000, 10, "#999999" )


   let land1 = new Circle(4000, 1000, 50, "#00aa00")
   let land2 = new Circle(4000, 1000, 30, "#009900")
   let land3 = new Circle(4000, 1000, 10, "#008800" )
   let land4 = new Circle(4000, 1000, 40, "#00dd00")
   let land5 = new Circle(4000, 1000, 20, "#99ff00")
   let land6 = new Circle(4000, 1000, 5, "#0099ff" )
   let land7  = new Rectangle(0,0, 33, 75, "#ccAA00")
   let earth = new Circle(500, 1000, 150, "#0000FF", 0, 0, 100000 )

   let stars = []


   for(let h = 0; h < 16; h++){

    let basicstat = (Math.random()*8.5)+5
    let a1 = new Circle((Math.random()*tutorial_canvas.width), Math.random()*tutorial_canvas.height, basicstat, "#DDAA00", 0, 0, basicstat*19 )

   planets.push(a1)

   asteroids.push(a1)
   }


   for(let h = 0; h < 8; h++){
   let a1 = new Circle((Math.random()*tutorial_canvas.width), Math.random()*tutorial_canvas.height, 25, "#00FFFF", 0, 0, -10 )

   planets.push(a1)
   asteroids.push(a1)
   comet.push(a1)
   }

   for(let h = 0; h < 800; h++){
   let a1 = new Rectangle((Math.random()*tutorial_canvas.height), Math.random()*tutorial_canvas.width, ((Math.random()*5)+1),((Math.random()*5)+1), getRandomLightColor())

   stars.push(a1)
   }
 //   asteroids.push(earth)
  //  asteroids.push(moon)
   comet.push(rocket)
  planets.push(moon) 

   planets.push(earth)

window.setInterval(function(){ 


    eaten.innerText = `Fuel: ${Math.ceil(fuel/10)}%`

    tutorial_canvas_context.clearRect(0, 0, tutorial_canvas.width, tutorial_canvas.height)




    for (let n = 0; n < stars.length; n++){
            stars[n].draw(tutorial_canvas_context)
    }


    for (let f = 0; f < comet.length; f++){



        //if(landed != 1){

            if(comet[f] !== rocket){
       comet[f].tail.pop()
    if(comet[f].tail.length < 35){
        comet[f].tail.unshift([comet[f].x, comet[f].y])
        comet[f].tail.unshift([comet[f].x, comet[f].y])
     }
    }else{


       comet[f].tail.pop()
       if(comet[f].tail.length < 20){
           comet[f].tail.unshift([comet[f].x, comet[f].y])
           comet[f].tail.unshift([comet[f].x, comet[f].y])
        }
    }
  //   if(foodeaten > snakebody.length){
  //     snakebody.push([ship.x, ship.y])
  //   }

  //  }

    if(comet[f] !== rocket){
        var widthline = 70
    }else{
        var widthline = 40

        var widthlinex = 20
    
    }
  for (let t = 0; t < comet[f].tail.length; t++){






    if(comet[f] !== rocket){

        tutorial_canvas_context.beginPath(); 
        tutorial_canvas_context.moveTo(comet[f].x, comet[f].y); 
      tutorial_canvas_context.lineTo(comet[f].tail[t][0], comet[f].tail[t][1]); 
      tutorial_canvas_context.lineWidth = widthline; 
      widthline *= .95
      widthline--
      tutorial_canvas_context.strokeStyle = '#00FFFF';  
    tutorial_canvas_context.stroke();  
    }else{

        tutorial_canvas_context.beginPath(); 
        tutorial_canvas_context.moveTo(comet[f].x, comet[f].y); 
      tutorial_canvas_context.lineTo(comet[f].tail[t][0], comet[f].tail[t][1]); 
      tutorial_canvas_context.lineWidth = widthline; 
        widthline *= .90
        widthline--
        tutorial_canvas_context.strokeStyle = '#FF0000';  
        tutorial_canvas_context.stroke();  



      tutorial_canvas_context.beginPath(); 
      tutorial_canvas_context.moveTo(comet[f].x, comet[f].y); 
      tutorial_canvas_context.lineTo(comet[f].tail[t][0], comet[f].tail[t][1]); 
      tutorial_canvas_context.lineWidth = widthlinex; 
      widthlinex *= .10
      widthlinex--
      tutorial_canvas_context.strokeStyle = '#FFFF00';  
    tutorial_canvas_context.stroke();  
    }
  
  }
    tutorial_canvas_context.stroke();  
      //console.log(comet[f].tail)

    }


    for(let w = 0; w < planets.length; w++){
        for(let g = 0; g < asteroids.length; g++){

            let masses = 0
        
            if(planets[w] !== asteroids[g]){
         masses = planets[w].mass*asteroids[g].mass
         
        let distance = Math.abs(Math.abs(planets[w].x) - Math.abs(asteroids[g].x))
        let distancey = Math.abs(Math.abs(planets[w].y) - Math.abs(asteroids[g].y))

        let hypotenuse = Math.sqrt((distancey*distancey)+(distance*distance))

        ////console.log(hypotenuse)
        let squaredisy = hypotenuse*hypotenuse/2
        let squaredis = hypotenuse*hypotenuse/2
        let forcevec = (masses/squaredis) 
        let forcevecy = (masses/squaredisy)

        forcevec /= 1
        forcevecy /= 1


        if(Math.abs(forcevec) > 20){
            forcevec = 20

        }
        if(Math.abs(forcevecy) > 20){
            forcevecy = 20

        }

        if(asteroids[g].yacc > 20){
            asteroids[g].yacc = 20
        }
        if(asteroids[g].yacc < -20){
            asteroids[g].yacc = -20
        }
        if(asteroids[g].xacc  > 20){
            asteroids[g].xacc  = 20
        }
        if(asteroids[g].xacc  < -20){
            asteroids[g].xacc  = -20
        }

        if(asteroids[g].x < planets[w].x){
            asteroids[g].xacc += forcevec
            }else{
                asteroids[g].xacc  += 0-forcevec
            }
            if(asteroids[g].y < planets[w].y){
                asteroids[g].yacc  += forcevecy
            }else{
                asteroids[g].yacc += 0-forcevecy
            }

            asteroids[g].xmom += asteroids[g].xacc/70000
            asteroids[g].ymom += asteroids[g].yacc/70000


            if(asteroids[g].xmom  > .433){
                asteroids[g].xmom  = .433
            }
            if(asteroids[g].xmom  < -.433){
                asteroids[g].xmom  = -.433
            }
            if(asteroids[g].ymom  > .433){
                asteroids[g].ymom  = .433
            }
            if(asteroids[g].ymom  < -.433){
                asteroids[g].ymom  = -.433
            }


          //  if(landed == 0){
                asteroids[g].move()
          //      }
    
                if(asteroids[g].x < 0){
                    asteroids[g].x = tutorial_canvas.width
    
                    asteroids[g].tail = []
                }
                
                if(asteroids[g].x > tutorial_canvas.width){
                    asteroids[g].x = 0
    
                    asteroids[g].tail = []
                }
                if(asteroids[g].y < 0){
                    asteroids[g].y = tutorial_canvas.height
    
                    asteroids[g].tail = []
                }
                
                if(asteroids[g].y > tutorial_canvas.height){
                    asteroids[g].y = 0
                    asteroids[g].tail = []
                }
    
  if(landed == 0){
    if(((rocketarray[0].x-rocketarray[0].radius)  < (asteroids[g].x + asteroids[g].radius) && ((rocketarray[0].x+rocketarray[0].radius) > (asteroids[g].x - asteroids[g].radius)) && ((rocketarray[0].y+rocketarray[0].radius)  > (asteroids[g].y - asteroids[g].radius))&&((rocketarray[0].y-rocketarray[0].radius)  < (asteroids[g].y + asteroids[g].radius)))){
      let damage = Math.abs(asteroids[g].mass)*(Math.abs(asteroids[g].xmom)+Math.abs(asteroids[g].ymom))*1.5 + ((rocketarray[0].mass +Math.abs(asteroids[g].mass))*11) 
      
      rocketarray[0].xmom*= -1 
      rocketarray[0].ymom*= -1 
      asteroids[g].xmom *= -1 
       asteroids[g].ymom *= -1
    //    let kine1 = rocketarray[0].xmom*rocketarray[0].mass  
    //      let kine2 = rocketarray[0].ymom*rocketarray[0].mass 

    //      let smak1 = asteroids[g].xmom * asteroids[g].mass
    //      let smak2 = asteroids[g].ymom * asteroids[g].mass

    //      rocketarray[0].xmom = smak1/rocketarray[0].mass
    //      rocketarray[0].ymom = smak2/rocketarray[0].mass


    //      asteroids[g].xmom = kine1/asteroids[g].mass
    //      asteroids[g].ymom = kine2/asteroids[g].mass



       while(((rocketarray[0].x-rocketarray[0].radius)  < (asteroids[g].x + asteroids[g].radius) && ((rocketarray[0].x+rocketarray[0].radius) > (asteroids[g].x - asteroids[g].radius)) && ((rocketarray[0].y+rocketarray[0].radius)  > (asteroids[g].y - asteroids[g].radius))&&((rocketarray[0].y-rocketarray[0].radius)  < (asteroids[g].y + asteroids[g].radius)))){
 

        rocketarray[0].x += rocketarray[0].xmom
        rocketarray[0].y += rocketarray[0].ymom


        asteroids[g].x += asteroids[g].xmom
        asteroids[g].y += asteroids[g].ymom
        asteroids[g].x += asteroids[g].xmom
        asteroids[g].y += asteroids[g].ymom
        asteroids[g].x += asteroids[g].xmom
        asteroids[g].y += asteroids[g].ymom
       }

if (iframe === 0){
    iframe = 1
      if(damage > 12000){
        healthstat -= 12000
      }else{
        healthstat  -= (damage)
      }

    }

    // let audio = new Audio('bleep.wav');

    // if (audio.duration > 0 && !audio.paused) {

    //     //Its playing...do your job
    
    // } else {
    //    // audio.play();
    // }
  
      }
        }else{
           
               }
        }
    }


        
     //   planets[w].x += (Math.random()*10)-5
        
     //   planets[w].y += (Math.random()*10)-5



        

     if(planets[w] !== moon && planets[w] !== earth){
        let masses = planets[w].mass*rocketarray[0].mass
        let distance = Math.abs(Math.abs(planets[w].x) - Math.abs(rocketarray[0].x))
        let distancey = Math.abs(Math.abs(planets[w].y) - Math.abs(rocketarray[0].y))

        let hypotenuse = Math.sqrt((distancey*distancey)+(distance*distance))

       // //console.log(hypotenuse)
        let squaredisy = hypotenuse*hypotenuse/1.41
        let squaredis = hypotenuse*hypotenuse/1.41
        let forcevec = (masses/squaredis) 
        let forcevecy = (masses/squaredisy)

        forcevec /= 1
        forcevecy /= 1


        if(Math.abs(forcevec) > 100){
            forcevec = 100

        }
        if(Math.abs(forcevecy) > 100){
            forcevecy = 100

        }

        if(rocketarray[0].yacc > 100){
            rocketarray[0].yacc = 100
        }
        if(rocketarray[0].yacc < -100){
            rocketarray[0].yacc = -100
        }
        if(rocketarray[0].xacc > 100){
            rocketarray[0].xacc = 100
        }
        if(rocketarray[0].xacc < -100){
            rocketarray[0].xacc = -100
        }

        if(rocketarray[0].x < planets[w].x){
            rocketarray[0].xacc += forcevec*3
            }else{
                rocketarray[0].xacc += 0-forcevec*3
            }
            if(rocketarray[0].y < planets[w].y){
            rocketarray[0].yacc += forcevecy*3
            }else{
                rocketarray[0].yacc += 0-forcevecy*3
            }
     }else{
        let massese = earth.mass*rocketarray[0].mass
        let massesm = moon.mass*rocketarray[0].mass
        let distancee = Math.abs(Math.abs(earth.x) - Math.abs(rocketarray[0].x))
        let distanceye = Math.abs(Math.abs(earth.y) - Math.abs(rocketarray[0].y))
        let distancem = Math.abs(Math.abs(moon.x) - Math.abs(rocketarray[0].x))
        let distanceym = Math.abs(Math.abs(moon.y) - Math.abs(rocketarray[0].y))

        let hypotenusee = Math.sqrt((distanceye*distanceye)+(distancee*distancee))
        let hypotenusem = Math.sqrt((distanceym*distanceym)+(distancem*distancem))

       // //console.log(hypotenuse)
        let squaredisye = hypotenusee*hypotenusee/1.41
        let squaredise = hypotenusee*hypotenusee/1.41
        let forcevece = (massese/squaredise) 
        let forcevecye = (massese/squaredisye)


        let squaredisym = hypotenusem*hypotenusem/1.41
        let squaredism = hypotenusem*hypotenusem/1.41
        let forcevecm = (massesm/squaredism) 
        let forcevecym = (massesm/squaredisym)

        // forcevec /= 1
        // forcevecy /= 1


        if(Math.abs(forcevece) > 100){
            forcevece = 100

        }
        if(Math.abs(forcevecye) > 100){
            forcevecye = 100

        }
        if(Math.abs(forcevecm) > 100){
            forcevecm = 100

        }
        if(Math.abs(forcevecym) > 100){
            forcevecym = 100

        }

        if(rocketarray[0].yacc > 100){
            rocketarray[0].yacc = 100
        }
        if(rocketarray[0].yacc < -100){
            rocketarray[0].yacc = -100
        }
        if(rocketarray[0].xacc > 100){
            rocketarray[0].xacc = 100
        }
        if(rocketarray[0].xacc < -100){
            rocketarray[0].xacc = -100
        }

        if(rocketarray[0].x < earth.x){
            rocketarray[0].xacc += forcevece*3
            }else{
                rocketarray[0].xacc += 0-forcevece*3
            }
            if(rocketarray[0].y < earth.y){
            rocketarray[0].yacc += forcevecye*3
            }else{
                rocketarray[0].yacc += 0-forcevecye*3
            }


            if(rocketarray[0].x < moon.x){
                rocketarray[0].xacc += forcevecm*3
                }else{
                    rocketarray[0].xacc += 0-forcevecm*3
                }
                if(rocketarray[0].y < moon.y){
                rocketarray[0].yacc += forcevecym*3
                }else{
                    rocketarray[0].yacc += 0-forcevecym*3
                }
    

     }


crater.x = moon.x + 40
crater.y = moon.y+ 40
crater3.x = moon.x + -40
crater3.y = moon.y+ 40
crater2.x = moon.x + 40
crater2.y = moon.y+ -40

land4.x = earth.x+10
land4.y = earth.y


land2.x = earth.x-50
land2.y = earth.y+60


land3.x = earth.x+70
land3.y = earth.y-80

land1.x = earth.x-65
land1.y = earth.y-75

land6.x = earth.x-12
land6.y = earth.y-12

land5.x = earth.x+70
land5.y = earth.y+80

land7.left = earth.x
land7.top = earth.y

planets[w].draw(tutorial_canvas_context)
if(planets[w] === earth){
    land1.draw(tutorial_canvas_context)
    land2.draw(tutorial_canvas_context)
    land3.draw(tutorial_canvas_context)
    land4.draw(tutorial_canvas_context)
    land7.draw(tutorial_canvas_context)
    land5.draw(tutorial_canvas_context)
    land6.draw(tutorial_canvas_context)
}

if(planets[w] === moon){
    crater.draw(tutorial_canvas_context)
    
    crater3.draw(tutorial_canvas_context)
    
    crater2.draw(tutorial_canvas_context)
}



}


    rocketarray[0].xmom += rocketarray[0].xacc/3700
    rocketarray[0].ymom += rocketarray[0].yacc/3700


    if(rocketarray[0].xmom  > 5){
        rocketarray[0].xmom  = 5
    }
    if(rocketarray[0].xmom  < -5){
        rocketarray[0].xmom  = -5
    }
    if(rocketarray[0].ymom  > 5){
        rocketarray[0].ymom  = 5
    }
    if(rocketarray[0].ymom  < -5){
        rocketarray[0].ymom  = -5
    }

    //steve
    ////console.log( rocketarray[0].xmom , rocketarray[0].ymom)

    if(landed == 0 && takeoff == 0){
   rocketarray[0].move()
    momentum.innerText = 'Velocity: '+ Math.round((Math.abs(rocketarray[0].ymom) + Math.abs(rocketarray[0].xmom))*10) + '%'

    
    } else{
        rocketarray[0].stop()

    momentum.innerText = 'Velocity: '+ '0%'

    }
    
    if(((rocketarray[0].x-rocketarray[0].radius)  < (earth.x + earth.radius) && ((rocketarray[0].x+rocketarray[0].radius) > (earth.x - earth.radius)) && ((rocketarray[0].y+rocketarray[0].radius)  > (earth.y - earth.radius))&&((rocketarray[0].y-rocketarray[0].radius)  < (earth.y + earth.radius)))){
        fuel = 1000
        landed =1
        takeoff= 1
        rocket.tail = []
      }else if(((rocketarray[0].x-rocketarray[0].radius)  < (moon.x + moon.radius) && ((rocketarray[0].x+rocketarray[0].radius) > (moon.x - moon.radius)) && ((rocketarray[0].y+rocketarray[0].radius)  > (moon.y - moon.radius))&&((rocketarray[0].y-rocketarray[0].radius)  < (moon.y + moon.radius)))){

       fuel = 1000
        landed =1
        takeoff= 1

        rocket.tail = []
      }else {
        takeoff = 0
                 landed = 0
      }
    rocketarray[0].draw(tutorial_canvas_context)

    if(rocket.x > tutorial_canvas.width){
     //   rocketarray = []
        
    }
    if(rocket.y > tutorial_canvas.height){
    //    rocketarray = []
        
    }
    if(rocket.x < 0){
   //     rocketarray = []
        
    }
    if(rocket.y < 0){
    //   rocketarray = []
        
    }
 if(healthstat <= 0){
      fuel = 0
      healthstat = 0

    }

    health.innerText = `Hull Integrity: ${Math.ceil(healthstat/1000)}`
   

    //if(landed == 1){

  //  }else{
        if((timer1%1001) < 250 ){
            earth.y +=1.5
            earth.x +=1.5
        }else if((timer1%1001) < 500 ){
            earth.y -=1.5
            earth.x +=1.5
        }else if((timer1%1001) < 750 ){
            earth.y -=1.5
            earth.x -=1.5
        }else if((timer1%1001) < 1000 ){
            earth.y +=1.5
            earth.x -=1.5
        }

        if((landed === 1) && (rocketarray[0].x<(tutorial_canvas.width/2)) ){
        if((timer1%1001) < 250 ){
            rocketarray[0].y +=1.5
            rocketarray[0].x +=1.5
        }else if((timer1%1001) < 500 ){
            rocketarray[0].y -=1.5
            rocketarray[0].x +=1.5
        }else if((timer1%1001) < 750 ){
            rocketarray[0].y -=1.5
            rocketarray[0].x -=1.5
        }else if((timer1%1001) < 1000 ){
            rocketarray[0].y +=1.5
            rocketarray[0].x -=1.5
        }
    }
        if((timer1%400) < 100 ){

            moon.y -=2
            moon.x -=2
        }else if((timer1%400) < 200 ){

            moon.y +=2
            moon.x -=2
        }else if((timer1%400) < 300 ){

            moon.y +=2
            moon.x +=2
        }else if((timer1%400) < 400 ){

            moon.y -=2
            moon.x +=2
        }

        if((landed === 1) && (rocketarray[0].x>(tutorial_canvas.width/2)) ){
        if((timer1%400) < 100 ){

            rocketarray[0].y -=2
            rocketarray[0].x -=2
        }else if((timer1%400) < 200 ){

            rocketarray[0].y +=2
            rocketarray[0].x -=2
        }else if((timer1%400) < 300 ){

            rocketarray[0].y +=2
            rocketarray[0].x +=2
        }else if((timer1%400) < 400 ){

            rocketarray[0].y -=2
            rocketarray[0].x +=2
        }
    }
//}



for(let st = 0; st<asteroids.length/2; st++){
    asteroids[st].draw(tutorial_canvas_context)

}
for(let st = 0; st<comet.length; st++){
    //comet[st].draw(tutorial_canvas_context)

}



rocketarray[0].draw(tutorial_canvas_context)
//if(landed == 0){
    timer1++
//}

rocketMassSize(rocketarray[0])
}, 18)


window.setInterval(function(){ 

    let eating = (moonpopulation/1000)*3

    if(mines >= 1){
    moonuranium += (Math.random()*(mines*.75))+(.5/(mines+1))
    moonhelium += (10*mines)
    }
    

    eating *= (1-(wastereclamation/100))

    if (eating < 0){

        eating = 0
    }



    if(moonpopulation < (houses*10000) && (moonorganics > 0)){
    moonpopulation *= 1.0023
    }


    if (moonorganics <= 0){
        moonpopulation /= 1.015

    }


    moonpopulation = Math.round(moonpopulation)

    moonorganics -= eating

    moonorganics += (farms*2)

    moonorganics = Math.round(moonorganics)


    moonelectricity+=(solarpanels*0.7)
    moonelectricity+=(reactors*(.7*16))
    moonelectricity-=(moonpopulation/1000)*2.15
    moonelectricity-=mines
    moonelectricity-=farms
    moonelectricity-=houses
    moonelectricity-=(wastereclamation/5)
    moonelectricity = Math.round(moonelectricity)
    moonuranium-=reactors


    setTimeout(function(){ 
    updateResource(matDistributionsURL, 8, moonhelium)
 }, 100);
 setTimeout(function(){ 
    updateResource(matDistributionsURL, 9, Math.floor(moonuranium))
}, 150);
setTimeout(function(){ 
    updateResource(matDistributionsURL, 10, moonpopulation)
}, 200);
setTimeout(function(){ 
    updateResource(matDistributionsURL, 11, moonelectricity)
}, 250);
setTimeout(function(){ 
    updateResource(matDistributionsURL, 12, moonorganics)
}, 300);
setTimeout(function(){ 
    updateResource(matDistributionsURL, 13, moonmetals)
}, 350);
setTimeout(function(){ 
    updateResource(matDistributionsURL, 14, moonmetaloids)
}, 400);
setTimeout(function(){ 
   updateResource(matDistributionsURL, 15, rockethelium)  //for the ship update get the ids
}, 700);
setTimeout(function(){ 
   updateResource(matDistributionsURL, 16, rocketuranium)  //for the ship update get the ids
}, 750);
setTimeout(function(){ 
   updateResource(matDistributionsURL, 18, rocketelectricity)  //for the ship update get the ids
}, 800);
setTimeout(function(){ 
   updateResource(matDistributionsURL, 19, rocketorganics)  //for the ship update get the ids
}, 550);
setTimeout(function(){ 
   updateResource(matDistributionsURL, 20, rocketmetals)  //for the ship update get the ids
}, 600);
setTimeout(function(){ 
   updateResource(matDistributionsURL, 21, rocketmetaloids)  //for the ship update get the ids
}, 650);
setTimeout(function(){ 
   updateResource(matDistributionsURL, 22, credits)  //for the ship update get the ids
}, 500);

hash = []

    hash[population] = moonpopulation
    hash[happiness] = 0
    hash[waste_management] = wastereclamation
    hash[solar_power] = solarpanels
    hash[nuclear_power] = reactors
    hash[material_production] = mines
    hash[food_production] = farms
    hash[housing] = houses
    hash[luxury] = lux
    hash[misc] = ""


setTimeout(function(){ 
    updateBase(basesURL, 1, hash)
 }, 1000);


    displayTexts()




}, 24000)


window.setInterval(function(){ 

    iframe = 0


}, 2500)



function getRandomLightColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 10)+6];
    }
    return color;
  }

  function displayTexts(){
    organics.innerText =  `Organics: ${moonorganics},  Farms: ${farms}, Reclamation Level: ${wastereclamation}%`
    population.innerText =  `Population: ${moonpopulation}, Biodomes: ${houses}, Luxury Buildings: ${lux} `
    uranium.innerText =  `Uranium: ${Math.round(moonuranium)}, Mines: ${mines}`
    metaloids.innerText =  `Metaloids: ${moonmetaloids}`
    electricity.innerText =  `Electricity: ${moonelectricity} Kilowatts, Reactors: ${reactors}, Solar Panels: ${solarpanels}`
    helium.innerText =  `Helium: ${moonhelium}`
    metals.innerText =  `Metals: ${moonmetals}`
    moneybox.innerText = `Credits: ${credits}`
  }


  function rocketMassSize(rocket){
    rocket.mass = 1000 + rocketuranium
    rocket.radius = 12 + Math.ceil(rockethelium/200)

  }

  //updateResource(matDistributionsURL, 1, 2123)

})
