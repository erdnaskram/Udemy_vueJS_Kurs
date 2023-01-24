const app = Vue.createApp({
  data() {
    return {
      counter: 54,
      name: '',
      confirmedName: '',
      aktuellerAntrag: {"id":7,
      "erstellDatum":"1987-12-23",
      "beschreibung":"hawaii award impossible princess onto",
      "signatur":"null",
      "studienzuschuss":false,
      "inventar":true,
      "kuenstlersozialabgabe":true,
      "software":true,
      "studiengang":"Fakultät-E-Technik",
      "status":0,
      "prioritaet":2,
      "Mitarbeiter_Ersteller":{"id":13,"name":"Johnathon Pointer","telefonNummer":"+255-2656-459-519","email":"elizebethkeister6@obligations.com","Rolle_id":1},"Kostenstelle":{"id":1,"bezeichnung":"KI Institut"},"Kostenart":{"id":6010,"bezeichnung":"Sonstige Geräte und Maschinen","beispiel":null,"syfCode":null,"bemerkung":"\r"},"Mitarbeiter_Kostentraeger":{"id":15,"name":"Asley Callaghan","telefonNummer":"+251-4238-433-696","email":"romanastarks@hotmail.com","Rolle_id":1},"Mitarbeiter_Lieferanschrift":{"id":22,"name":"Wilfredo Macmillan","telefonNummer":"+61-1010-036-029","email":"byron_quick@restriction.com","Rolle_id":1},"Mitarbeiter_Lizenzbeauftragter":{"id":9,"name":"Brook Mccaffrey","telefonNummer":"+31-9254-047-569","email":"denita-deleon08@hotmail.com","Rolle_id":1},"Mitarbeiter_Rueckfragen":{"id":10,"name":"Margrett Passmore","telefonNummer":"+36-2461-170-382","email":"bettye939@hotmail.com","Rolle_id":1}}
    }
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm(){
      alert("submitted");
    },
    setName(event, name) {
      this.name = event.target.value + " " + name;
    },
    add(num){
      this.counter += num;
    },
    remove(num){
      this.counter -= num;
    }
  }
});

app.mount('#events');
