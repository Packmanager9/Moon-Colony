// moonshot


let maxspeed = 3.5

let xmomentum = 0

let ymomentum = 0

let fuel = 500
let health = 1000


window.addEventListener('DOMContentLoaded', (event) =>{

    let eaten = document.getElementById("eaten");
    eaten.innerText = "0"
    let tutorial_canvas = document.getElementById("tutorial");
    let tutorial_canvas_context = tutorial_canvas.getContext('2d');

    tutorial_canvas.style.background =  "#000000"

    class Circle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, mass = 1, xacc = 0, yacc = 0) {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.mass = mass
            this.xacc = xacc
            this.yacc = yacc
        }
        draw(context){
            context.lineWidth =22;
            context.strokeStyle = this.color
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), true)
            context.stroke();
        }
        move(){
            this.x += this.xmom
            this.y += this.ymom

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

           if(fuel > 0){
           rocketarray[0].xmom -= 30/rocketarray[0].mass
           fuel--
           }
              break;
           case 87:

                if(fuel > 0){
                rocketarray[0].ymom -= 30/rocketarray[0].mass
                fuel--
                }
              break;
           case 68 :

                if(fuel > 0){
                rocketarray[0].xmom += 30/rocketarray[0].mass
                fuel--
                }
              break;
              case 83:
                
           if(fuel > 0){
                    rocketarray[0].ymom += 30/rocketarray[0].mass
                    fuel--
                    }
                 break;
                 case 32:
      // spacebar
                    break;
        }
    };


    let rocket = new Circle(2500, 1000, 5, "#FFFF00", 0, 0, 100 )
   let   rocketarray = [rocket]
   let planets = []
   let moon = new Circle(4000, 1000, 50, "#FFFFFF", 0, 0, 1000 )
   let earth = new Circle(1000, 1000, 100, "#0000FF", 0, 0, 10000 )


   let asteroids = []
   for(let h = 0; h < 20; h++){

   let a1 = new Circle((Math.random()*tutorial_canvas.width), Math.random()*tutorial_canvas.height, 10, "#DDAA00", ((Math.random()*1)-.5), ((Math.random()*1)-.5), 1000000 )

   planets.push(a1)

   asteroids.push(a1)
   }


   planets.push(moon) 
   planets.push(earth)
   


window.setInterval(function(){ 


    eaten.innerText = `${fuel}`

    tutorial_canvas_context.clearRect(0, 0, tutorial_canvas.width, tutorial_canvas.height)

    for(let w = 0; w < planets.length; w++){
        for(let g = 0; g < asteroids.length; g++){


        
        let masses = planets[w].mass*asteroids[g].mass
        let distance = Math.abs(Math.abs(planets[w].x) - Math.abs(asteroids[g].x))
        let distancey = Math.abs(Math.abs(planets[w].y) - Math.abs(asteroids[g].y))

        let hypotenuse = Math.sqrt((distancey*distancey)+(distance*distance))

        console.log(hypotenuse)
        let squaredisy = hypotenuse*hypotenuse/200
        let squaredis = hypotenuse*hypotenuse/200
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

            asteroids[g].xmom += asteroids[g].xacc/700000
            asteroids[g].ymom += asteroids[g].yacc/700000

            asteroids[g].move()

            if(asteroids[g].x < 0){
                asteroids[g].x = tutorial_canvas.width

            }
            
            if(asteroids[g].x > tutorial_canvas.width){
                asteroids[g].x = 0

            }
            if(asteroids[g].y < 0){
                asteroids[g].y = tutorial_canvas.height

            }
            
            if(asteroids[g].y > tutorial_canvas.height){
                asteroids[g].y = 0

            }
            
        }



        
     //   planets[w].x += (Math.random()*10)-5
        
     //   planets[w].y += (Math.random()*10)-5



        
        let masses = planets[w].mass*rocketarray[0].mass
        let distance = Math.abs(Math.abs(planets[w].x) - Math.abs(rocketarray[0].x))
        let distancey = Math.abs(Math.abs(planets[w].y) - Math.abs(rocketarray[0].y))

        let hypotenuse = Math.sqrt((distancey*distancey)+(distance*distance))

        console.log(hypotenuse)
        let squaredisy = hypotenuse*hypotenuse/1.41
        let squaredis = hypotenuse*hypotenuse/1.41
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

        if(ymomentum > 20){
            ymomentum = 20
        }
        if(ymomentum < -20){
            ymomentum = -20
        }
        if(xmomentum > 20){
            xmomentum = 20
        }
        if(xmomentum < -20){
            xmomentum = -20
        }

        if(rocketarray[0].x < planets[w].x){
            xmomentum += forcevec*3
            }else{
                xmomentum += 0-forcevec*3
            }
            if(rocketarray[0].y < planets[w].y){
            ymomentum += forcevecy*3
            }else{
                ymomentum += 0-forcevecy*3
            }
        
    planets[w].draw(tutorial_canvas_context)

}


    rocketarray[0].xmom += xmomentum/3500
    rocketarray[0].ymom += ymomentum/3500
    //console.log( rocketarray[0].xmom , rocketarray[0].ymom)
    rocketarray[0].move()
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


}, 12)


})