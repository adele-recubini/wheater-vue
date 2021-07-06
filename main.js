
var app = new Vue({
    el: "#root",
    data: {
      base:'http://api.openweathermap.org/data/2.5/',
      key:'fa13ad5c0deb5e8cc85688e5f13efbe6',
      query:'',
      resultW:[],
      url:'http://openweathermap.org/img/wn/',
      
    },


 

  methods:{

    dateB(){
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return (day)+ ' ' +  (date) + ' '+ (month)+ ' '+ (year);
    },

    rounding(element){
       return Math.round(element);
    },
     
     wheather(){ 
      const self = this;
      self.resultW = [];
      axios.get(`${self.base}weather?q=${self.query}&units=metric&APPID=${self.key}`)
        .then((resp) => {
          self.result = resp.data;
          self.resultW.push(self.result);               
        })
        .catch(error => {
          alert('Ops. Qualcosa è andato storto. Riprova più tardi')
          })
      }
    }
  

  //fine app

});

Vue.config.devtools = true
