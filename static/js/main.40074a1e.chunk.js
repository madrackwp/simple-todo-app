(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{120:function(e,t,n){e.exports=n(402)},401:function(e,t,n){},402:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(14),l=n.n(r),i=n(71),c=n(19),d=n(20),s=n(22),p=n(21),u=(n(124),function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.todo,n=t.completed,a=t.id,r=t.title;return o.a.createElement("li",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return e.props.handleChangeProps(a)}}),o.a.createElement("button",{onClick:function(){return e.props.deleteTodoProps(a)}},"Delete"),o.a.createElement("span",{style:n?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null},r))}}]),n}(o.a.Component)),m=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.todos.map((function(t){return o.a.createElement(u,{key:t.id,todo:t,handleChangeProps:e.props.handleChangeProps,deleteTodoProps:e.props.deleteTodoProps})})))}}]),n}(o.a.Component),h=function(){return o.a.createElement("header",{style:{padding:"20px 0",lineHeight:"2em"}},o.a.createElement("h1",{style:{fontSize:"25px",marginBottom:"15px"}},"Simple Todo App"),o.a.createElement("p",{style:{fontSize:"19px"}},"Please add on todos in the input field"))},f=n(119),b=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodoProps(e.state.title),e.setState({title:""})},e}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-container"},o.a.createElement("input",{className:"input-text",type:"text",placeholder:"Add todo...",value:this.state.title,name:"title",onChange:this.onChange}),o.a.createElement("input",{className:"input-submit",type:"submit",value:"Submit"}))}}]),n}(a.Component),v=n(404),j=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{id:Object(v.a)(),title:"Setup development environment",completed:!0},{id:Object(v.a)(),title:"Develop website and add content",completed:!1},{id:Object(v.a)(),title:"Deploy to live server",completed:!1}]},e.handleChange=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){console.log("deleted",t),e.setState({todos:Object(i.a)(e.state.todos.filter((function(e){return e.id!=t})))})},e.addTodoItem=function(t){var n={id:Object(v.a)(),title:t,completed:!1};e.setState({todos:[].concat(Object(i.a)(e.state.todos),[n])})},e}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(h,null),o.a.createElement(b,{addTodoProps:this.addTodoItem}),o.a.createElement(m,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo}))}}]),n}(o.a.Component);n(401);l.a.render(o.a.createElement(j,null),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.40074a1e.chunk.js.map