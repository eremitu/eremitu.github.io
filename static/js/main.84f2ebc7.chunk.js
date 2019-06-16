(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,a){t.exports=a(19)},18:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(10),i=a.n(s),o=a(1),c=a(2),u=a(4),l=a(3),d=a(5),p=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={latitude:null,longitude:null,error:null,locationUndefined:null,isLoaded:null},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.getGeo()}},{key:"getGeo",value:function(){var t=this;return new Promise(function(e,a){navigator.geolocation.getCurrentPosition(function(a){e(t.setState({latitude:a.coords.latitude,longitude:a.coords.longitude,locationUndefined:!1},function(){return t.props.liftingData(t.state.latitude,t.state.longitude,t.state.locationUndefined)}))},function(e){a(t.setState({error:e.message,isLoaded:!0,locationUndefined:!0},function(){return t.props.liftingData(t.error,t.isLoaded,t.state.locationUndefined)}))})}).catch(function(t){return t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"geoButton"},r.a.createElement("div",null,this.state.error?" ":"Your coordinates are: latitude:"+this.state.latitude+"; longitude   "+this.state.longitude))}}]),e}(r.a.Component),h=a(6),m=a.n(h),f=a(7),b="7a1ee10880b498dbc386741f0bb3f9dd",y=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={error:!1,responseStatus:null,isLoaded:!1,items:[],input:"",day:!0,locationUndefined:null},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidUpdate",value:function(t){this.props.props.input!==t.props.input&&this.search(),this.props.props.latitude!==t.props.latitude&&this.getForecastByCoords(),this.props.props.day!==t.props.day&&this.renderForecast()}},{key:"getForecastByCoords",value:function(){var t=this;new Promise(function(){var e=Object(f.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t.props);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).then(Object(f.a)(m.a.mark(function e(){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(t.props.props.latitude,"&lon=").concat(t.props.props.longitude,"&appid=").concat(b));case 2:if(!(a=e.sent).ok){e.next=10;break}return e.next=6,a.json();case 6:n=e.sent,t.setState({isLoaded:!0,items:n}),e.next=11;break;case 10:t.setState({isLoaded:!0,error:a.status,response:a.status});case 11:case"end":return e.stop()}},e)}))).then(function(e){t.setState({isLoaded:!0})},function(e){t.setState({isLoaded:!0,error:e})})}},{key:"search",value:function(){var t=this;new Promise(function(){var e=Object(f.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t.props);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).then(Object(f.a)(m.a.mark(function e(){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(t.props.props.input,"&appid=").concat(b));case 2:if(!(a=e.sent).ok){e.next=11;break}return e.next=6,a.json();case 6:n=e.sent,console.log(n),t.setState({isLoaded:!0,items:n}),e.next=12;break;case 11:t.setState({isLoaded:!0,error:a.status,response:a.status});case 12:case"end":return e.stop()}},e)}))).then(function(e){t.setState({isLoaded:!0})},function(e){t.setState({isLoaded:!0,error:e})})}},{key:"dayNightFilter",value:function(t){return this.props.props.day?t.filter(function(t){return"12:00:00"===t.dt_txt.slice(11)}):this.props.props.day?void 0:t.filter(function(t){return"00:00:00"===t.dt_txt.slice(11)})}},{key:"pictureFilter",value:function(t){var e="";switch(t.weather[0].main){case"Clouds":e="https://images.pexels.com/photos/414659/pexels-photo-414659.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260";break;case"Rain":e="https://cdn.pixabay.com/photo/2015/07/02/10/45/raindrops-828954_960_720.jpg";break;case"Snow":e="https://cdn.pixabay.com/photo/2014/04/05/11/05/ice-314281_960_720.jpg";break;case"Clear":e="https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260";break;default:e="https://cdn.pixabay.com/photo/2014/08/27/15/05/clouds-429228_960_720.jpg"}return e}},{key:"renderForecast",value:function(){var t=this,e=this.state.items.list,a=this.dayNightFilter(e).map(function(e){return r.a.createElement("div",{key:e.dt,className:"card-deck"},r.a.createElement("div",{className:"card",styles:{width:"18rem;"}},r.a.createElement("img",{src:t.pictureFilter(e),className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-text"},r.a.createElement("div",null,e.dt_txt.slice(0,10)),r.a.createElement("div",null,e.weather[0].description),r.a.createElement("div",null,"Temperature is ",Math.round(e.main.temp-273.15)," C "),r.a.createElement("div",null,"Athmospheric pressure is ",e.main.pressure," mbar ")))))});return r.a.createElement("div",{className:"card-deck"},a)}},{key:"render",value:function(){var t=this.state.isLoaded;return this.state.error&&0===this.state.items.length?r.a.createElement("div",{className:"container-fluid data text-center"},"unable to get your GeoLocation"):t?r.a.createElement("div",null,r.a.createElement("h4",{className:"cityName"},"5 Days Weather Forecast: ",this.state.items.city.name),this.renderForecast()):r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"})))}}]),e}(r.a.Component),g=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={input:""},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.liftingData(this.state.input)}},{key:"handleChange",value:function(t){this.setState({input:t.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{id:"searchBar"},r.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"searchForm",placeholder:"Where do you live?",value:this.state.input,onChange:this.handleChange.bind(this)}))),r.a.createElement("button",{type:"submit",className:"btn btn-primary searchButton",onClick:this.handleSubmit.bind(this)},"Search"))}}]),e}(r.a.Component),v=a(8),k=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={day:!0},a.setDay=a.setDay.bind(Object(v.a)(a)),a.attachRef=function(t){return a.setState({target:t})},a.state={show:!1},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"setDay",value:function(){!0===this.state.day?this.setState({day:!1}):this.setState({day:!0}),this.props.isDay(this.state.day)}},{key:"render",value:function(){var t=this,e=this.state.day,a=document.body;return e?(a.style.background="url('https://images.pexels.com/photos/29435/landscape-sky-night-stars-29435.jpg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260')",a.style.backgroundSize="100% 100%",a.style.backgroundRepeat="no-repeat"):e||(document.body.style.background="url('https://images.pexels.com/photos/875858/pexels-photo-875858.png?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260')",a.style.backgroundSize="100% 100%",a.style.backgroundRepeat="no-repeat"),r.a.createElement("div",null,e?r.a.createElement(function(){return r.a.createElement("button",{id:"nightButton",type:"button",rel:"tooltip",onClick:t.setDay,className:"btn btn-secondary btn-sm","data-toggle":"tooltip","data-placement":"right",title:"Click to see day weather"},"Weather at night")},null):r.a.createElement(function(){return r.a.createElement("button",{id:"dayButton",type:"button",onClick:t.setDay,className:"btn btn-primary btn-sm",title:"Click to see night weather"},"Day weather")},null))}}]),e}(r.a.Component),j=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).getInput=function(t){a.setState({input:t})},a.getTimeOfDay=function(t){a.setState({day:t})},a.getPosition=function(t,e,n,r){a.setState({latitude:t,longitude:e,locationUndefined:r,isLoaded:n})},a.state={latitude:null,longitude:null,input:"",day:!0,locationUndefined:null,isLoaded:!0},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,{isDay:this.getTimeOfDay}),r.a.createElement(p,{liftingData:this.getPosition}),r.a.createElement(g,{liftingData:this.getInput}),r.a.createElement(y,{props:this.state}))}}]),e}(r.a.Component);a(18);i.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.84f2ebc7.chunk.js.map