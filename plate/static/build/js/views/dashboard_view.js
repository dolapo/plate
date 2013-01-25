(function(){var e=Object.prototype.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};define("views/base_view",["underscore","backbone"],function(e,n){var r;return r=function(){function e(){e.__super__.constructor.apply(this,arguments)}return t(e,n.View),e.prototype.render=function(){return this.$el.html(this.template(this.getJSON()))},e.prototype.getJSON=function(){return{}},e}()})}).call(this),define("common/urls",[],function(){var e;return e=function(){function t(){}var e;return e=void 0,t.get=function(t){return e!=null?e:e=t!=null?t:{}},t}(),e}),define("common/settings",[],function(){var e;return e=function(){function t(){}var e;return e=void 0,t.get=function(t){return e!=null?e:e=t!=null?t:{}},t}(),e}),define("common/request_manager",["underscore","common/settings"],function(e,t){var n;return n=function(){function r(){}var n;return n=t.get(),r.post=function(t){var r;return r=e.extend(t,{type:"post",headers:{"X-CSRFToken":n.csrfToken}}),$.ajax(r)},r}()}),function(){var e=Object.prototype.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};define("models/user",["underscore","backbone"],function(e,n){var r;return r=function(){function e(){e.__super__.constructor.apply(this,arguments)}return t(e,n.Model),e}(),r})}.call(this),function(){var e=Object.prototype.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};define("models/current_user",["models/user"],function(e){var n,r;return n=function(){function t(){}var e;return e=void 0,t.get=function(t){return e!=null?e:e=new r(t)},t}(),r=function(){function n(){n.__super__.constructor.apply(this,arguments)}return t(n,e),n}(),n})}.call(this),define("hbs!templates/dashboard_view",["hbs","handlebars"],function(e,t){var n=t.template(function(e,t,n,r,i){n=n||e.helpers;var s="",o,u="function",a=this.escapeExpression;return s+='<div class="hero-unit">\n  <h1>Hi</h1>\n  <p>You are logged in as ',o=t.user,o=o==null||o===!1?o:o.email,o=typeof o===u?o.apply(t):o,s+=a(o)+'.</p>\n  <p><button class="btn btn-danger logout" data-url="',o=t.urls,o=o==null||o===!1?o:o.base_logout,o=typeof o===u?o.apply(t):o,s+=a(o)+'">Logout</button></p>\n</div>\n',s});return t.registerPartial("templates_dashboard_view",n),n}),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t=Object.prototype.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};define("views/dashboard_view",["underscore","views/base_view","common/urls","common/request_manager","models/current_user","hbs!templates/dashboard_view"],function(t,r,i,s,o,u){var a;return a=function(){function t(){this._onLogoutClicked=e(this._onLogoutClicked,this),t.__super__.constructor.apply(this,arguments)}return n(t,r),t.prototype.template=u,t.prototype.events={"click button.logout":"_onLogoutClicked"},t.prototype.initialize=function(e){return this._urls=i.get(),this._user=o.get()},t.prototype.getJSON=function(){return{user:this._user.toJSON(),urls:this._urls}},t.prototype._onLogoutClicked=function(e){return s.post({url:$(e.target).attr("data-url"),success:function(){return window.location="/"}})},t}()})}.call(this);