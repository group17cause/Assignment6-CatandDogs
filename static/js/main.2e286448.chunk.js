(this.webpackJsonpcatsanddogs=this.webpackJsonpcatsanddogs||[]).push([[0],{11:function(t,e,a){},45:function(t,e,a){"use strict";a.r(e);var c=a(3),n=a.n(c),s=a(20),r=a.n(s),o=a(1),i=a.n(o),l=a(4),u=a(6),d=a(7),p=a(9),h=a(8),g=a(5),j=a.n(g),m=a(0),b=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var c;return Object(u.a)(this,a),(c=e.call(this,t)).fetchRandomDogFact=Object(l.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.setState({renderInitialDogFact:!1}),t.prev=1,"https://some-random-api.ml/facts/dog",t.next=5,j.a.get("https://some-random-api.ml/facts/dog");case 5:e=t.sent,c.setState({dogFact:e.data.fact}),console.log(c.state.dogFact),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),t.t0.response&&(console.log(t.t0.res.data),console.log(t.t0.res.status));case 13:case"end":return t.stop()}}),t,null,[[1,10]])}))),c.fetchRandomDogFact=Object(l.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://some-random-api.ml/facts/dog",t.next=4,j.a.get("https://some-random-api.ml/facts/dog");case 4:e=t.sent,c.setState({initialDogFact:e.data.fact}),console.log(c.state.initialDogFact),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),t.t0.response&&(console.log(t.t0.res.data),console.log(t.t0.res.status));case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),c.state={dogFact:"",renderInitialDogFact:!0,initialDogFact:""},c}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchRandomDogFact()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"dogFact",children:[this.state.renderInitialDogFact?Object(m.jsx)("p",{children:this.state.initialDogFact}):Object(m.jsx)("p",{children:this.state.dogFact}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"newDogPictureButton",onClick:this.fetchRandomDogFact,children:"New Doggo Fact!"})})]})}}]),a}(c.Component),f=a.p+"static/media/festiveboy.88cc9a48.jpg",O=(a(11),function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var c;return Object(u.a)(this,a),(c=e.call(this,t)).fetchRandomDogPicture=Object(l.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.setState({initialDogPicture:!1}),"https://dog.ceo/api/breeds/image/random",t.prev=2,t.next=5,j.a.get("https://dog.ceo/api/breeds/image/random");case 5:e=t.sent,c.setState({linkToDogPicture:e.data.message}),console.log(c.state.linkToDogPicture),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),t.t0.response&&(console.log(t.t0.res.data),console.log(t.t0.res.status));case 13:case"end":return t.stop()}}),t,null,[[2,10]])}))),c.state={linkToDogPicture:"",initialDogPicture:!0},c}return Object(d.a)(a,[{key:"render",value:function(){var t=this.state.initialDogPicture;return Object(m.jsxs)("div",{defer:!0,className:"dogSide",children:[Object(m.jsx)("h1",{children:"Are you a Dog Person?"}),t?Object(m.jsx)("img",{className:"init",src:f,alt:"F E S T I V E B O Y"}):Object(m.jsx)("img",{className:"dogPicture",src:this.state.linkToDogPicture,alt:"Some Doggo"}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"newDogPictureButton",onClick:this.fetchRandomDogPicture,children:"New Doggo Picture!"})}),Object(m.jsx)(b,{})]})}}]),a}(c.Component)),v=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var c;return Object(u.a)(this,a),(c=e.call(this,t)).fetchRandomCatFact=Object(l.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.setState({renderInitialCatFact:!1}),t.prev=1,"https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1",t.next=5,j.a.get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1");case 5:e=t.sent,c.setState({catFact:e.data.text}),console.log(c.state.catFact),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),t.t0.response&&(console.log(t.t0.res.data),console.log(t.t0.res.status));case 13:case"end":return t.stop()}}),t,null,[[1,10]])}))),c.setInitialRandomCatFact=Object(l.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1",t.next=4,j.a.get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1");case 4:e=t.sent,c.setState({initialCatFact:e.data.text}),console.log(c.state.initialCatFact),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),t.t0.response&&(console.log(t.t0.res.data),console.log(t.t0.res.status));case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),c.state={catFact:"",renderInitialCatFact:!0,initialCatFact:""},c}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.setInitialRandomCatFact()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"catFact",children:[this.state.renderInitialCatFact?Object(m.jsx)("p",{children:this.state.initialCatFact}):Object(m.jsx)("p",{children:this.state.catFact}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"newCatPictureButton",onClick:this.fetchRandomCatFact,children:"New Catto Fact!"})})]})}}]),a}(c.Component),x=a.p+"static/media/catsos.d994857f.jpg",F=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var c;return Object(u.a)(this,a),(c=e.call(this,t)).fetchRandomCatPicture=Object(l.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://thatcopy.pw/catapi/rest/",c.setState({initialCatPicture:!1}),t.prev=2,t.next=5,j.a.get("https://thatcopy.pw/catapi/rest/");case 5:e=t.sent,c.setState({linkToCatPicture:e.data.webpurl}),console.log(c.state.linkToCatPicture),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),t.t0.response&&(console.log(t.t0.res.data),console.log(t.t0.res.status));case 13:case"end":return t.stop()}}),t,null,[[2,10]])}))),c.state={linkToCatPicture:"",initialCatPicture:!0},c}return Object(d.a)(a,[{key:"render",value:function(){var t=this.state.initialCatPicture;return Object(m.jsxs)("div",{className:"catSide",children:[Object(m.jsx)("h1",{children:"Or are you a Cat Person?"}),t?Object(m.jsx)("img",{className:"init",src:x,alt:"C A T S O S"}):Object(m.jsx)("img",{className:"catPicture",src:this.state.linkToCatPicture,alt:"Some Cat"}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"newCatPictureButton",onClick:this.fetchRandomCatPicture,children:"New Catto Picture!"})}),Object(m.jsx)(v,{})]})}}]),a}(c.Component);var C=function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(O,{}),Object(m.jsx)(F,{})]})},k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),c(t),n(t),s(t),r(t)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),k()}},[[45,1,2]]]);
//# sourceMappingURL=main.2e286448.chunk.js.map