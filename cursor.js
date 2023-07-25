AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" }
    },
    init: function() {
      this.handleClickEvents();
      this.handleMouseEnterEvents();
    },
    handleClickEvents: function() {
      this.el.addEventListener("click", evt => {
        const roomcontainer = document.querySelector("#room-container");
  
        const { state } = roomcontainer.getAttribute("tour");
  
        if (state === "places-list") {
  
          const id = this.el.getAttribute("id");
  
          const roomid = [
            "place-living","place-kitchen","place-bedroom","place-backyard"
          ];
  
          if (roomid.includes(id)) {
            roomcontainer.setAttribute("tour", {
              state: "view",
              selectedCard: id
            });
          }
        }
  
        if (state === "view") {
          this.handleViewState();
        }
        if (state === "change-view") {
          this.handleViewState();
        }
      });
    },
    handleViewState: function() {
      const el = this.el;
  
      const id = el.getAttribute("id");
  
      const roomcontainer = document.querySelector("#room-container");
  
      const { selectedItemId } = roomcontainer.getAttribute("cursor-listener");
  
      const roomid = ["place-living","place-kitchen","place-bedroom","place-backyard"];
  
      if (roomid.includes(id)) {
        
        roomcontainer.setAttribute("tour", {
          state: "change-view"
        });
  
        const skyEl = document.querySelector("#main-container");
  
      }
    },
    handleMouseEnterEvents: function() {
      this.el.addEventListener("mouseenter", () => {
        const roomcontainer = document.querySelector("#room-container");
        const { state } = roomcontainer.getAttribute("tour");
        if (state === "places-list") {
          this.handlePlacesListState();
        }
      });
    },
    handlePlacesListState: function() {
      const id = this.el.getAttribute("id");
      const roomid = ["place-living","place-kitchen","place-bedroom","place-backyard"];
      if (roomid.includes(id)) {
        const roomcontainer = document.querySelector("#room-container");
        roomcontainer.setAttribute("cursor-listener", {
          selectedItemId: id
        });
        this.el.setAttribute("material", {
          opacity: 1
        });
      }
    }
      
    })
    
