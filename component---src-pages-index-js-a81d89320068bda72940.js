(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{135:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=function(e){var t=e.children;return a.a.createElement("div",{style:{margin:"3rem auto",maxWidth:950,padding:"0 1rem"}},t)},o=n(136),s=n.n(o),c=function(e){var t=e.children;return a.a.createElement("div",{className:s.a.header},t)},u=(n(70),n(71),n(7)),l=n.n(u),d=(n(137),n(138)),f=n.n(d),h=(n(49),function(e){function t(){return e.apply(this,arguments)||this}l()(t,e);var n=t.prototype;return n.htmlDecode=function(e){var t=document.createElement("div");return t.innerHTML=e,0===t.childNodes.length?"":t.childNodes[0].nodeValue},n.render=function(){return a.a.createElement("div",{className:this.props.style,dangerouslySetInnerHTML:{__html:this.htmlDecode(this.props.content)}})},t}(a.a.Component)),p=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.set=function(e,t){"undefined"!=typeof window&&localStorage.setItem(e,JSON.stringify(t))},t.getWrapper=function(e){if("undefined"!=typeof window)return localStorage.getItem(e)},t.obtain=function(e,t){var n=this.getWrapper(e);if(this.isCreateOptionEnabled(t)||(t={createIfMissing:!1}),null===n){if(!0===t.createIfMissing)return[]}else void 0!==n&&(n=JSON.parse(n));return n},t.isCreateOptionEnabled=function(e){return void 0!==e&&void 0!==e.createIfMissing},t}(a.a.Component),m={ON:"#56ca90",OFF:"grey"},v=function(e){function t(){var t;return(t=e.call(this)||this).initialize=function(){!0===t.checkIfActivated()&&t.activate()},t.saveToLocalStorage=function(e){var t=p.obtain("favorites",{createIfMissing:!0});t.push(e),p.set("favorites",t)},t.deleteFromLocalStorage=function(e){var t=p.obtain("favorites").filter(function(t){return 0!==t.title.localeCompare(e.title)});p.set("favorites",t)},t.checkIfActivated=function(){var e=!1;return p.obtain("favorites",{createIfMissing:!0}).forEach(function(n){0===t.state.title.localeCompare(n.title)&&(e=!0)}),e},t.toggleColor=function(){!1===t.state.isActive?t.activate():t.deactivate()},t.toggleLocalStorage=function(){!1===t.state.isActive?t.saveToLocalStorage({title:t.state.title,desc:t.state.desc}):t.deleteFromLocalStorage({title:t.state.title,desc:t.state.desc})},t.toggleFavorite=function(){t.toggleColor(),t.toggleLocalStorage(),t.props.update()},t.state={title:"",desc:"",color:m.OFF,isActive:!1},t}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.setState({title:this.props.title,desc:this.props.desc},function(){return e.initialize()})},n.activate=function(){this.setState({color:m.ON,isActive:!0})},n.deactivate=function(){this.setState({color:m.OFF,isActive:!1})},n.render=function(){return a.a.createElement("i",{onClick:this.toggleFavorite,className:"fa fa-star",style:{color:this.state.color}})},t}(a.a.Component),g=n(139),y=n.n(g),E=function(e){function t(){return e.apply(this,arguments)||this}l()(t,e);var n=t.prototype;return n.renderStar=function(e){return a.a.createElement("div",{className:y.a.column+" "+y.a.star},a.a.createElement(v,{title:e.title,desc:e.desc,update:this.props.update}))},n.renderEntryTitle=function(e){return a.a.createElement("div",{className:y.a.column+" "+y.a.left},e)},n.renderEntryDescription=function(e){return a.a.createElement(h,{style:y.a.column+" "+y.a.right,content:e})},n.renderEntries=function(){var e=this;return this.props.entries.map(function(t,n){return a.a.createElement("div",{key:n,className:y.a.row+" "+y.a.container},e.renderStar(t),e.renderEntryTitle(t.title),e.renderEntryDescription(t.desc))})},n.render=function(){return this.renderEntries()},t}(a.a.Component),w=function(e){function t(){var t;return(t=e.call(this)||this).update=function(){var e=p.obtain("favorites");t.setState({favorites:[]},function(){return t.setState({favorites:e})}),t.props.update()},t.state={favorites:p.obtain("favorites",{createIfMissing:!0})},t}l()(t,e);var n=t.prototype;return n.componentDidUpdate=function(e){this.props.entries!==e.entries&&this.update()},n.renderFavoritesHeader=function(){if(void 0!==this.state.favorites&&this.state.favorites.length>0)return a.a.createElement("h1",{style:{color:"#56ca90",marginTop:"20px"}},"Favorites")},n.renderFavorites=function(){return a.a.createElement(E,{entries:this.state.favorites,update:this.update})},n.render=function(){return a.a.createElement("div",null,this.renderFavoritesHeader(),this.renderFavorites())},t}(a.a.Component),S=function(e){function t(){var t;return(t=e.call(this)||this).update=function(){var e=p.obtain("favorites");t.setState({favorites:e})},t.updateSearchResults=function(){t.props.update()},t.state={search:"",favorites:p.obtain("favorites",{createIfMissing:!0})},t}return l()(t,e),t.prototype.render=function(){return a.a.createElement("div",null,a.a.createElement(E,{entries:this.props.searchResults,update:this.update}),a.a.createElement(w,{entries:this.state.favorites,update:this.updateSearchResults}))},t}(a.a.Component),k=(n(72),n(140),function(){function e(e){this.key=e,this.parent=null,this.children={},this.endOfWord=!1}return e.prototype.getWord=function(){for(var e=[],t=this;null!==t;)e.unshift(t.key),t=t.parent;return e.join("")},e}()),b=function(){function e(){this.root=new k(null)}var t=e.prototype;return t.insert=function(e){for(var t=this.root,n=0;n<e.length;n++)t.children[e[n]]||(t.children[e[n]]=new k(e[n]),t.children[e[n]].parent=t),t=t.children[e[n]],n===e.length-1&&(t.endOfWord=!0)},t.findAllWords=function(e,t){for(var n in e.endOfWord&&t.unshift(e.getWord()),e.children)this.findAllWords(e.children[n],t)},t.search=function(e){for(var t=this.root,n=[],r=0;r<e.length;r++){if(!t.children[e[r]])return n;t=t.children[e[r]]}return this.findAllWords(t,n),n},e}(),C=function(){function e(){}return e.storeKeywordsInTrie=function(){var e=this;Object.keys(this.keywordDictionary).forEach(function(t){e.keywords.insert(t)})},e.mapWasteWizardKeywords=function(e){var t=this,n=e.allWastewizardJson.edges;Object.keys(n).forEach(function(e){var r=n[e].node;t.sanAndTok(r.keywords).forEach(function(e){t.keywordDictionary[e]=r})}),this.storeKeywordsInTrie()},e.sanAndTok=function(e){return e.toLowerCase().split(",").map(function(e){return e.trim()})},e}();C.keywordDictionary={},C.keywords=new b;var N=C,R={ENTER:13},W=function(e){function t(t){var n;return(n=e.call(this,t)||this).submitSearch=function(e){var t=N.keywords.search(e.toLowerCase()),r=n.titlesToEntries(t);""===e?n.submitNoResults():0===r.length&&0!==e.localeCompare("default")?n.submitNoResults():n.setState({searchResults:r})},n.handleChange=function(e){n.setState({input:e.target.value}),""===e.target.value&&n.clearSearchResults()},n.keyPress=function(e){e.keyCode===R.ENTER&&n.submitSearch(e.target.value)},n.update=function(){var e=p.obtain("favorites"),t=[].concat(n.state.searchResults),r=[];t.forEach(function(t){var n=!0;e.forEach(function(e){0===e.title.localeCompare(t.title)&&(n=!1)}),!1===n&&r.push(t)}),n.setState({searchResults:r},function(){return n.setState({searchResults:t})})},n.state={input:"",searchResults:[]},n}l()(t,e);var n=t.prototype;return n.titlesToEntries=function(e){return e.map(function(e){return{title:e,desc:N.keywordDictionary[e].body}})},n.clearSearchResults=function(){this.submitSearch("default")},n.submitNoResults=function(){this.setState({searchResults:[{title:"Oh no :(",desc:"No results for this query, try again!"}]})},n.render=function(){var e=this;return a.a.createElement("div",null,a.a.createElement("div",{className:f.a.row},a.a.createElement("input",{value:this.state.input,onKeyDown:this.keyPress,onChange:this.handleChange,className:f.a.column+" "+f.a.left,type:"text",placeholder:"Search...",name:"search"}),a.a.createElement("button",{className:f.a.column+" "+f.a.right,onClick:function(){return e.submitSearch(e.state.input)}},a.a.createElement("i",{className:"fa fa-search fa-2x"}))),a.a.createElement(S,{searchResults:this.state.searchResults,update:this.update}))},t}(a.a.Component);n.d(t,"query",function(){return I});t.default=function(e){var t=e.data;return a.a.createElement("div",null,N.mapWasteWizardKeywords(t),a.a.createElement(c,null,"Toronto Waste Lookup"),a.a.createElement(i,null,a.a.createElement(W,null)))};var I="3075050974"},136:function(e,t,n){e.exports={header:"header-module--header--1_uI8"}},138:function(e,t,n){e.exports={column:"search-module--column--20Arw",left:"search-module--left--3QBVx",right:"search-module--right--IQAIE",row:"search-module--row--2MGWe"}},139:function(e,t,n){e.exports={container:"entries-module--container--UY_tD",column:"entries-module--column--3jvXU",star:"entries-module--star--2plJ9",left:"entries-module--left--1_i-_",right:"entries-module--right--CmHdi",row:"entries-module--row--2ReiK"}}}]);
//# sourceMappingURL=component---src-pages-index-js-a81d89320068bda72940.js.map