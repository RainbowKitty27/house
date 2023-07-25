AFRAME.registerComponent("tour", {
    schema:{
        state:{type:"string",default:"places-list"},
        selectedCard:{type:"string",default:"place-kitchen"}
      },
    init: function() {
        this.roomcontainer=this.el
      this.createPlaces();
    },
    tick: function() {
      const roomcontainer = document.querySelector("#room-container");
  
      const { state } = roomcontainer.getAttribute("tour");
      
      if (state === "view" || state === "change-view") {
  
        this.el.setAttribute("visible", true);
        this.hideE1([this.roomcontainer])
      this.showview()
      } else {
        this.el.setAttribute("visible", false);
      }
    },
    hideE1:function(e1list){
        e1list.map(e1=>{
          e1.setAttribute("visible",false)
        })
      },
      showview:function(){
        const{selectedCard}=this.data
        const skye1=document.querySelector("#main-container")
        skye1.setAttribute("material",{
          id:`places-${selectedCard}`,
          color:"white"
        })
      },
      createPlaceThumbNail: function(item) {
        const entityEl = document.createElement("a-entity");
        const id=`place-${item.id}`
        entityEl.setAttribute("visible", true);
        
        entityEl.setAttribute("id", id);
    
        entityEl.setAttribute("geometry", {
          primitive: "circle",
          radius: 3
        });
    
        entityEl.setAttribute("material", {
          src: item.src,
          opacity: 0.6
        });
        entityEl.setAttribute("position", item.position);
        entityEl.setAttribute("rotation",item.rotation)
        entityEl.setAttribute("cursor-listener", {});
    
        return entityEl;
      },
    createPlaces: function() {
        const details={
            backyard:{
                position:{x:20,y:-4.5,z:-5.5},
                rotation:{x:0,y:-90,z:0},
                src:"./by.png",
                title:"Backyard",
                id:"backyard"
            },
            room:{
                position:{x:4.6,y:-5.5,z:25},
                rotation:{x:180,y:0,z:0},
                src:"./bed.png",
                title:"Bedroom",
                id:"bedroom"
            },
            kitchen:{
                position:{x:-9,y:34,z:-100},
                rotation:{x:0,y:0,z:0},
                src:"./cook.png",
                title:"Kitchen",
                id:"kitchen"
            },
            living:{
                position:{x:20,y:-4.5,z:-5.5},
                rotation:{x:0,y:-90,z:0},
                src:"./living.png",
                title:"Living",
                id:"living"
            }
        }
        for(var key in details){
            const item=details[key]
            const thumbnail=this.createPlaceThumbNail(item)
           // const title=this.createTitleE1(item);
            this.roomcontainer.appendChild(thumbnail)
        }
    },
    
  });