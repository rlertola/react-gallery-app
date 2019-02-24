(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},28:function(e,t,a){e.exports=a(56)},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),o=(a(18),a(7)),s=a(8),i=a(13),h=a(9),u=a(14),m=a(6),g=a.n(m),d="b4fd349fadfdfe9ed67ca23d7b91cb45",p=a(57),f=a(58),E=a(25),b=a(59),v=function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(b.a,{to:"/search"},"Search")),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/cats"},"Cats")),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/beaches"},"Beaches")),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/guitars"},"Guitars"))))},k=a(60),S=function(){return r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))},j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:""},a.onSearchChange=function(e){a.setState({searchText:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSearch(a.state.searchText),a.props.history.push("/search/".concat(a.state.searchText)),e.currentTarget.reset()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",name:"search",placeholder:"Search...",onChange:this.onSearchChange,required:!0}),r.a.createElement(S,null))}}]),t}(n.Component),y=Object(k.a)(j),w=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Flickr Gallery"),r.a.createElement(y,{onSearch:e.onSearch}),r.a.createElement(v,null))},T=function(e){return r.a.createElement("li",null,r.a.createElement("img",{src:e.url,alt:""}))},I=function(){return r.a.createElement("li",{className:"not-found"},r.a.createElement("h3",null,"No Results Found"),r.a.createElement("p",null,"Your search did not return any results. Please try again."))},O=function(e){var t,a,n=e.data,c=e.loading,l=e.title;return t=n.length>0?n.map(function(e){return a="https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg"),r.a.createElement(T,{url:a,key:e.id})}):r.a.createElement(I,null),r.a.createElement("div",{className:"photo-container"},c?r.a.createElement("h2",null,"Loading..."):r.a.createElement("div",null,r.a.createElement("h2",null,l),r.a.createElement("ul",null,t)))},x=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Whoops!"),r.a.createElement("p",null,"Sorry, that url does not exist. Please try again."))},_=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(h.a)(t).call(this))).getDataOnLoad=function(){e.setState({loading:!0});var t="Error fetching and parsing data";g.a.all([g.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(d,"&tags=cats&per_page=24&format=json&nojsoncallback=1")).catch(function(e){return console.log(t,e)}),g.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(d,"&tags=beaches&per_page=24&format=json&nojsoncallback=1")).catch(function(e){return console.log(t,e)}),g.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(d,"&tags=guitars&per_page=24&format=json&nojsoncallback=1")).catch(function(e){return console.log(t,e)})]).then(g.a.spread(function(t,a,n){e.setState({catImages:t.data.photos.photo,beachImages:a.data.photos.photo,guitarImages:n.data.photos.photo,loading:!1})}))},e.performSearch=function(t){e.setState({searchLoading:!0}),g.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(d,"&tags=").concat(t,"&per_page=24&format=json&nojsoncallback=1")).then(function(a){e.setState({searchImages:a.data.photos.photo,searchLoading:!1,searchTitle:t})}).catch(function(e){console.log("Error fetching and parsing data",e)})},e.state={searchImages:[],catImages:[],catTitle:"cats",beachImages:[],beachTitle:"beaches",guitarImages:[],guitarTitle:"guitars",searchTitle:"",loading:!0,searchLoading:!0},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getDataOnLoad(),this.performSearch("sunsets")}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(w,{onSearch:this.performSearch}),r.a.createElement(f.a,null,r.a.createElement(E.a,{exact:!0,path:"/",render:function(){return r.a.createElement(O,{data:e.state.searchImages,loading:e.state.loading,title:e.state.searchTitle})}}),r.a.createElement(E.a,{path:"/search",render:function(){return r.a.createElement(O,{data:e.state.searchImages,loading:e.state.searchLoading,title:e.state.searchTitle})}}),r.a.createElement(E.a,{path:"/cats",render:function(){return r.a.createElement(O,{data:e.state.catImages,loading:e.state.loading,title:e.state.catTitle})}}),r.a.createElement(E.a,{path:"/beaches",render:function(){return r.a.createElement(O,{data:e.state.beachImages,loading:e.state.loading,title:e.state.beachTitle})}}),r.a.createElement(E.a,{path:"/guitars",render:function(){return r.a.createElement(O,{data:e.state.guitarImages,loading:e.state.loading,title:e.state.guitarTitle})}}),r.a.createElement(E.a,{component:x}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.6395be0b.chunk.js.map