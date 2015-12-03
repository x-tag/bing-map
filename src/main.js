(function(){

  // THIS IS TERRIBLE, FILE A TICKET WITH THE BING MAPS TEAM *ASAP*

  document.open();
  document.write('<script src="http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0"></script>');
  document.close();

  function setView(force){
    if (this.xtagComponentReady || force == 'force') {
      if (!this.xtag.instance) this.xtag.instance = new Microsoft.Maps.Map(this, {
        credentials: 'An_Kp3MBJt-AX1zwKbU3X15dVAdDbE9k6PXp2DSmSEH6chc6zN1HEkiMXDPKOja8',
        mapTypeId: Microsoft.Maps.MapTypeId.road
      });
      var center = this.xtag.center || [];
      this.xtag.instance.setView({
        mapTypeId: Microsoft.Maps.MapTypeId[this.type || 'road'],
        center: new Microsoft.Maps.Location(center[0] || 55, center[1] || -1.5),
        zoom: Number(this.zoom) || 7
      });
    }
  }

  xtag.register('x-bing-map', {
    lifecycle: {
      created: function() {
        setView.call(this, 'force');
      }
    },
    accessors: {
      type: {
        attribute: {},
        set: setView
      },
      zoom: {
        attribute: {},
        set: setView
      },
      center: {
        attribute: {},
        set: function(val){
          this.xtag.center = JSON.parse('['+ val +']');
          setView.call(this);
        }
      }
    }
  });

})();
