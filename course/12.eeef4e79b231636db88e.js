(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2+93":function(n,t,e){"use strict";var l=e("CcnG"),o=e("Ip0R");e("QouK"),e("eaet"),e.d(t,"a",function(){return i}),e.d(t,"b",function(){return u});var i=l.qb({encapsulation:0,styles:[[".alert-backdrop[_ngcontent-%COMP%]{position:fixed;left:0;top:0;z-index:0;display:flex;justify-content:center;width:100vw;height:100vh;background-color:rgba(0,0,0,0);transition:.5s ease-in-out}.alert[_ngcontent-%COMP%]{position:absolute;top:-500px;left:calc(50% - 180px);z-index:105;display:flex;flex-direction:column;width:360px;height:200;padding:15px;background-color:#fff;box-shadow:0 0 30px #000;transition:.5s ease-in-out}.alert__image[_ngcontent-%COMP%]{position:absolute;left:15px;top:15px;width:50px;height:50px}.alert__header[_ngcontent-%COMP%]{margin-left:65px;margin-bottom:10px;font-size:28px;font-weight:300;line-height:50px}.alert__message[_ngcontent-%COMP%]{margin-bottom:10px;font-size:21px;font-weight:300}.alert__actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.alert__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{cursor:pointer;margin-left:5px;padding:5px 15px;color:#000;border-radius:5px;background-color:#fff;transition:.3s ease-in-out}.alert__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background-color:#bbb}.alert__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]::-moz-selection{background-color:transparent}.alert__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]::selection{background-color:transparent}.show-alert[_ngcontent-%COMP%]{top:30px}.show-backdrop[_ngcontent-%COMP%]{z-index:100;background-color:rgba(0,0,0,.5)}"]],data:{}});function r(n){return l.Eb(0,[(n()(),l.sb(0,0,null,null,1,"div",[["class","btn"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.buttonAction(n.context.$implicit)&&l),l},null,null)),(n()(),l.Db(1,null,[" "," "]))],null,function(n,t){n(t,1,0,t.context.$implicit.text)})}function u(n){return l.Eb(2,[(n()(),l.sb(0,0,null,null,0,"div",[["class","alert-backdrop"]],[[2,"show-backdrop",null]],[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.backdropClick()&&l),l},null,null)),(n()(),l.sb(1,0,null,null,8,"div",[["class","alert"]],[[2,"show-alert",null]],null,null,null,null)),(n()(),l.sb(2,0,null,null,0,"img",[["class","alert__image"]],[[8,"src",4]],null,null,null,null)),(n()(),l.sb(3,0,null,null,1,"div",[["class","alert__header"]],null,null,null,null,null)),(n()(),l.Db(4,null,[" "," "])),(n()(),l.sb(5,0,null,null,1,"div",[["class","alert__message"]],null,null,null,null,null)),(n()(),l.Db(6,null,[" "," "])),(n()(),l.sb(7,0,null,null,2,"div",[["class","alert__actions"]],null,null,null,null,null)),(n()(),l.jb(16777216,null,null,1,null,r)),l.rb(9,278528,null,0,o.h,[l.R,l.O,l.u],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,9,0,t.component.actions)},function(n,t){var e=t.component;n(t,0,0,e.showAlert),n(t,1,0,e.showAlert),n(t,2,0,e.image||"/src/assets/images/icons/error.svg"),n(t,4,0,e.header),n(t,6,0,e.message)})}},G8iv:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),o=function(){},i=e("pMnS"),r=e("Ip0R"),u=e("gHic"),s=function(){function n(n,t){this.http=n,this.cdRef=t,this.close=new l.n,this.isServerBroken=!1}return n.prototype.ngOnInit=function(){this.initAllComments()},n.prototype.nextSet=function(){this.currentCommentSetIndex+1<=this.commentSets.length-1?this.currentCommentSet=this.commentSets[++this.currentCommentSetIndex]:(this.currentCommentSetIndex=0,this.currentCommentSet=this.commentSets[this.currentCommentSetIndex])},n.prototype.prevSet=function(){this.currentCommentSetIndex-1>=0?this.currentCommentSet=this.commentSets[--this.currentCommentSetIndex]:(this.currentCommentSetIndex=this.commentSets.length-1,this.currentCommentSet=this.commentSets[this.currentCommentSetIndex])},n.prototype.goToCommentSet=function(n){this.currentCommentSetIndex=n,this.currentCommentSet=this.commentSets[this.currentCommentSetIndex]},n.prototype.closeComments=function(){this.close.emit()},n.prototype.initAllComments=function(){var n=this;this.http.getCommentList().subscribe({next:function(t){n.allComments=t,n.isEmptyList=0===n.allComments.length},error:function(t){console.error(t),n.isServerBroken=!0,n.cdRef.destroyed||n.cdRef.detectChanges()},complete:function(){n.initCommentSets(),n.currentCommentSetIndex=0,n.currentCommentSet=n.commentSets[n.currentCommentSetIndex],n.cdRef.destroyed||n.cdRef.detectChanges()}})},n.prototype.initCommentSets=function(){var n=this.allComments.length;this.commentSets=[];for(var t=0;t<n;t+=5){if(t+5>n){this.commentSets.push(this.allComments.slice(t,n));break}this.commentSets.push(this.allComments.slice(t,t+5))}},n}(),c=l.qb({encapsulation:0,styles:[[".comment-list-backdrop[_ngcontent-%COMP%]{position:fixed;left:0;top:0;z-index:95;display:flex;justify-content:center;width:100vw;height:100vh;background-color:rgba(0,0,0,.6)}.container[_ngcontent-%COMP%]{position:absolute;left:0;z-index:100;width:100%;transition:.5s ease-in-out}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]{position:relative;left:25%;bottom:0;width:50%;top:-15px;padding:20px;-webkit-animation:1.5s showComments;animation:1.5s showComments;background:#fff;box-sizing:border-box}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{cursor:pointer;position:absolute;top:15px;right:15px}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:15px;font-size:24px;font-weight:300}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .empty-list[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .server-broken[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:5px;font-size:20px;font-weight:300}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]{cursor:pointer;position:absolute;top:calc(50% - 20px);display:flex;justify-content:center;align-items:center;width:40px;height:40px;background-color:#fff;border-radius:50%;transition:.3s ease-in-out}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-filter:invert(1);filter:invert(1)}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover, .container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]:hover{background-color:#000}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{-webkit-filter:invert(0);filter:invert(0)}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]{left:-50px}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]{right:-50px}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;height:85px;margin:10px 0;padding:15px;box-shadow:0 0 20px rgba(0,0,0,.4);box-sizing:border-box;overflow-y:auto}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .fullName[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{word-break:break-all;white-space:normal}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .fullName[_ngcontent-%COMP%]{width:50%;text-align:left}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%]{width:50%;text-align:right}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{width:100%;text-align:justify}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{position:relative;top:10px;display:flex;justify-content:center}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;width:20px;height:20px;margin:0 5px;border:2px solid #000;border-radius:50%;-webkit-filter:invert(1);filter:invert(1);transition:.2s ease-in-out}.container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .comment-list[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{-webkit-filter:invert(0);filter:invert(0)}@-webkit-keyframes showComments{0%{top:-500px}100%{top:0}}@keyframes showComments{0%{margin-top:-500px}100%{margin-top:0}}"]],data:{}});function a(n){return l.Eb(0,[(n()(),l.sb(0,0,null,null,1,"div",[["class","server-broken"]],null,null,null,null,null)),(n()(),l.Db(-1,null,[" \u0421\u0432\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. "]))],null,null)}function m(n){return l.Eb(0,[(n()(),l.sb(0,0,null,null,1,"div",[["class","empty-list"]],null,null,null,null,null)),(n()(),l.Db(-1,null,[" \u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043f\u0443\u0441\u0442. "]))],null,null)}function g(n){return l.Eb(0,[(n()(),l.sb(0,0,null,null,6,"div",[["class","comment styled-scroll"]],[[8,"title",0]],null,null,null,null)),(n()(),l.sb(1,0,null,null,1,"div",[["class","fullName"]],null,null,null,null,null)),(n()(),l.Db(2,null,["\u0418\u043c\u044f: ",""])),(n()(),l.sb(3,0,null,null,1,"div",[["class","country"]],null,null,null,null,null)),(n()(),l.Db(4,null,["\u0421\u0442\u0440\u0430\u043d\u0430: ",""])),(n()(),l.sb(5,0,null,null,1,"div",[["class","text"]],null,null,null,null,null)),(n()(),l.Db(6,null,["\u0422\u0435\u043a\u0441\u0442 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f: ",""]))],null,function(n,t){n(t,0,0,"\u0414\u0430\u0442\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f: "+t.context.$implicit.date+" "+t.context.$implicit.time),n(t,2,0,t.context.$implicit.fullName),n(t,4,0,t.context.$implicit.country),n(t,6,0,t.context.$implicit.comment)})}function p(n){return l.Eb(0,[(n()(),l.sb(0,0,null,null,1,"div",[["class","dot"]],null,null,null,null,null)),(n()(),l.sb(1,0,null,null,0,"img",[["src","/src/assets/images/icons/dot.png"]],[[8,"title",0],[2,"active",null]],[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.goToCommentSet(n.context.index)&&l),l},null,null))],null,function(n,t){n(t,1,0,t.context.index+1,t.component.currentCommentSetIndex===t.context.index)})}function b(n){return l.Eb(2,[(n()(),l.sb(0,0,null,null,0,"div",[["class","comment-list-backdrop"]],null,null,null,null,null)),(n()(),l.sb(1,0,null,null,18,"div",[["class","container"]],null,null,null,null,null)),(n()(),l.sb(2,0,null,null,17,"section",[["class","comment-list"]],null,null,null,null,null)),(n()(),l.sb(3,0,null,null,1,"div",[["class","close"],["title","\u0417\u0430\u043a\u0440\u044b\u0442\u044c"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.closeComments()&&l),l},null,null)),(n()(),l.sb(4,0,null,null,0,"img",[["src","/src/assets/images/icons/close.svg"]],null,null,null,null,null)),(n()(),l.sb(5,0,null,null,1,"div",[["class","next"],["title","\u0412\u043f\u0435\u0440\u0435\u0434"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.nextSet()&&l),l},null,null)),(n()(),l.sb(6,0,null,null,0,"img",[["src","/src/assets/images/icons/navigate.png"]],null,null,null,null,null)),(n()(),l.sb(7,0,null,null,1,"div",[["class","header"]],null,null,null,null,null)),(n()(),l.Db(-1,null,[" \u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 "])),(n()(),l.jb(16777216,null,null,1,null,a)),l.rb(10,16384,null,0,r.i,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(n()(),l.jb(16777216,null,null,1,null,m)),l.rb(12,16384,null,0,r.i,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(n()(),l.jb(16777216,null,null,1,null,g)),l.rb(14,278528,null,0,r.h,[l.R,l.O,l.u],{ngForOf:[0,"ngForOf"]},null),(n()(),l.sb(15,0,null,null,1,"div",[["class","prev"],["title","\u041d\u0430\u0437\u0430\u0434"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.prevSet()&&l),l},null,null)),(n()(),l.sb(16,0,null,null,0,"img",[["src","/src/assets/images/icons/navigate.png"]],null,null,null,null,null)),(n()(),l.sb(17,0,null,null,2,"div",[["class","navigation"]],null,null,null,null,null)),(n()(),l.jb(16777216,null,null,1,null,p)),l.rb(19,278528,null,0,r.h,[l.R,l.O,l.u],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var e=t.component;n(t,10,0,e.isServerBroken),n(t,12,0,e.isEmptyList),n(t,14,0,e.currentCommentSet),n(t,19,0,e.commentSets)},null)}var d=e("2+93"),h=e("QouK"),C=e("eaet"),f=e("zSSH"),_=e("Ci5W"),O=e("6gWC"),M=e("TitY"),v=e("EP1h"),x=e("gIcY"),P=e("mrSG"),y=e("jvbL"),w=e("xMyE"),S=e("BNLn"),k={ok:{type:"ok",message:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d!\n\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0432\u0430\u0448\u0443 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c!",actions:["ok"],useAnswer:!1},error:{type:"error",message:"\u0412\u0441\u0435 \u043f\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0432\u0435\u0440\u043d\u043e.",actions:["ok"],useAnswer:!1},serverIsNotWorking:{type:"error",message:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \n\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043f\u043e\u0437\u0434\u043d\u0435\u0435.",actions:["ok"],useAnswer:!1}},A=function(n){function t(t,e,l,o,i,r,u){var s=n.call(this,t,e,l,o,0)||this;return s.http=i,s.formBuilder=r,s.alert=u,s.fullNameMaxLength=45,s.countryMaxLength=25,s.commentMaxLength=150,s.currentFullNameLength=s.fullNameMaxLength,s.currentCountryLength=s.countryMaxLength,s.currentCommentLength=s.commentMaxLength,s.isValidFullName=!0,s.isValidCountry=!0,s.isValidComment=!0,s.isSubmitDisabled=!1,s.isCommentListShown=!1,s.isValidForm=!1,s.statusChangesSub=!0,s.valueChangesSub=!0,s.alertType=k.error,s}return Object(P.c)(t,n),t.prototype.ngOnInit=function(){this.createForm(),this.initColorClasses(),this.showContent(1e3),this.subscribeOnStatusChanges(),this.subscribeOnValueChanges()},t.prototype.ngOnDestroy=function(){this.statusChangesSub=!1,this.valueChangesSub=!1},t.prototype.onSubmit=function(n){var t=this,e=new Date;n.date=e.toLocaleDateString(),n.time=e.toLocaleTimeString(),this.isSubmitDisabled||(this.isSubmitDisabled=!0,this.isValidForm?this.http.addNewComment(n).subscribe({next:function(){t.commentForm.patchValue({fullName:"",country:"",comment:""}),t.alert.setSettings(k.ok)},error:function(n){console.error(n),t.alert.setSettings(k.serverIsNotWorking),t.alert.show(),t.isSubmitDisabled=!1,t.cdRef.destroyed||t.cdRef.detectChanges()},complete:function(){t.alert.show(),t.isSubmitDisabled=!1,t.cdRef.destroyed||t.cdRef.detectChanges()}}):(this.isSubmitDisabled=!1,this.alert.setSettings(k.error),this.alert.show()))},t.prototype.toggleCommentList=function(){this.isCommentListShown=!this.isCommentListShown},t.prototype.createForm=function(){this.commentForm=this.formBuilder.group({fullName:["",[x.o.required,x.o.maxLength(this.fullNameMaxLength)]],country:["",[x.o.required,x.o.maxLength(this.countryMaxLength)]],comment:["",[x.o.required,x.o.maxLength(this.commentMaxLength)]]})},t.prototype.subscribeOnStatusChanges=function(){var n=this;this.commentForm.statusChanges.pipe(Object(y.a)(function(){return n.statusChangesSub}),Object(w.a)(function(t){n.isValidForm="VALID"===t})).subscribe()},t.prototype.subscribeOnValueChanges=function(){var n=this;this.commentForm.valueChanges.pipe(Object(y.a)(function(){return n.valueChangesSub}),Object(w.a)(function(t){n.isValidFullName=t.fullName.length<=n.fullNameMaxLength,n.currentFullNameLength=n.isValidFullName?n.fullNameMaxLength-t.fullName.length:0,n.isValidCountry=t.country.length<=n.countryMaxLength,n.currentCountryLength=n.isValidCountry?n.countryMaxLength-t.country.length:0,n.isValidComment=t.comment.length<=n.commentMaxLength,n.currentCommentLength=n.isValidComment?n.commentMaxLength-t.comment.length:0})).subscribe()},t}(e("xvH9").a),j=l.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%}.comment-the-project[_ngcontent-%COMP%]{background-color:#fff}.comment-the-project[_ngcontent-%COMP%]   .open-comment-list[_ngcontent-%COMP%]{cursor:pointer;position:absolute;z-index:1;top:15px;right:15px;padding:4px 12px 0;border-radius:15px}.comment-the-project[_ngcontent-%COMP%]   .open-comment-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-filter:invert(1);filter:invert(1)}.comment-the-project__headline[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:10px;font-size:30px;font-weight:100}.comment-the-project__form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.comment-the-project__form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{transition:.5s ease-in-out}.comment-the-project__form[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]{position:relative;top:-5px;margin:0 10px;font-size:12px;color:#777;text-align:right}.comment-the-project__form[_ngcontent-%COMP%]   .invalid[_ngcontent-%COMP%]{color:red}.comment-the-project__form[_ngcontent-%COMP%]   .invalid-field[_ngcontent-%COMP%]{background-color:red;color:#fff}.comment-the-project__form[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%], .comment-the-project__form[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%], .comment-the-project__form[_ngcontent-%COMP%]   .purple[_ngcontent-%COMP%], .comment-the-project__form[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%]{margin:10px;padding:15px;font-size:18px;font-weight:300;border-width:2px;border-style:solid;border-radius:15px;font-family:inherit;resize:none}.comment-the-project__form[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%]{border-color:rgba(205,53,53,.9)}.comment-the-project__form[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{border-color:rgba(59,201,59,.9)}.comment-the-project__form[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%]{border-color:rgba(59,98,201,.9)}.comment-the-project__form[_ngcontent-%COMP%]   .purple[_ngcontent-%COMP%]{border-color:rgba(242,95,219,.9)}.comment-the-project__form[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:10px}.comment-the-project__form[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{padding:15px 60px;font-size:20px;font-weight:100;font-family:inherit}.comment-the-project__form[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#777}.comment-the-project__form[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]:before{background-color:transparent}"]],data:{}});function L(n){return l.Eb(0,[(n()(),l.sb(0,0,null,null,1,"comment-list",[],null,[[null,"close"]],function(n,t,e){var l=!0;return"close"===t&&(l=!1!==n.component.toggleCommentList()&&l),l},b,c)),l.rb(1,114688,null,0,s,[u.a,l.i],null,{close:"close"})],function(n,t){n(t,1,0)},null)}function N(n){return l.Eb(2,[(n()(),l.sb(0,0,null,null,1,"alert",[],null,null,null,d.b,d.a)),l.rb(1,114688,null,0,h.a,[C.a,l.i],null,null),(n()(),l.jb(16777216,null,null,1,null,L)),l.rb(3,16384,null,0,r.i,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(n()(),l.sb(4,0,null,null,48,"section",[],[[8,"className",0],[4,"display",null]],null,null,null,null)),l.rb(5,16384,null,0,f.a,[],{isContentLoaded:[0,"isContentLoaded"]},null),(n()(),l.sb(6,0,null,null,1,"back-button",[],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.startLoading()&&l),l},_.b,_.a)),l.rb(7,245760,null,0,O.a,[M.a,v.a],null,null),(n()(),l.sb(8,0,null,null,1,"div",[["class","open-comment-list"],["title","\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"]],[[4,"backgroundColor",null]],[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.toggleCommentList()&&l),l},null,null)),(n()(),l.sb(9,0,null,null,0,"img",[["src","/src/assets/images/icons/comment-list.svg"]],null,null,null,null,null)),(n()(),l.sb(10,0,null,null,2,"div",[["class","comment-the-project__headline"]],null,null,null,null,null)),(n()(),l.sb(11,0,null,null,1,"p",[],[[8,"className",0]],null,null,null,null)),(n()(),l.Db(-1,null,[" \u041f\u0440\u043e\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 "])),(n()(),l.sb(13,0,null,null,39,"form",[["class","comment-the-project__form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,t,e){var o=!0,i=n.component;return"submit"===t&&(o=!1!==l.Ab(n,15).onSubmit(e)&&o),"reset"===t&&(o=!1!==l.Ab(n,15).onReset()&&o),"submit"===t&&(o=!1!==i.onSubmit(i.commentForm.value)&&o),o},null,null)),l.rb(14,16384,null,0,x.q,[],null,null),l.rb(15,540672,null,0,x.f,[[8,null],[8,null]],{form:[0,"form"]},null),l.Bb(2048,null,x.b,null,[x.f]),l.rb(17,16384,null,0,x.l,[[4,x.b]],null,null),(n()(),l.sb(18,0,null,null,7,"input",[["formControlName","fullName"],["placeholder","\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f"],["required",""],["type","text"]],[[8,"className",0],[2,"invalid-field",null],[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,e){var o=!0;return"input"===t&&(o=!1!==l.Ab(n,19)._handleInput(e.target.value)&&o),"blur"===t&&(o=!1!==l.Ab(n,19).onTouched()&&o),"compositionstart"===t&&(o=!1!==l.Ab(n,19)._compositionStart()&&o),"compositionend"===t&&(o=!1!==l.Ab(n,19)._compositionEnd(e.target.value)&&o),o},null,null)),l.rb(19,16384,null,0,x.c,[l.F,l.l,[2,x.a]],null,null),l.rb(20,16384,null,0,x.n,[],{required:[0,"required"]},null),l.Bb(1024,null,x.h,function(n){return[n]},[x.n]),l.Bb(1024,null,x.i,function(n){return[n]},[x.c]),l.rb(23,671744,null,0,x.e,[[3,x.b],[6,x.h],[8,null],[6,x.i],[2,x.s]],{name:[0,"name"]},null),l.Bb(2048,null,x.j,null,[x.e]),l.rb(25,16384,null,0,x.k,[[4,x.j]],null,null),(n()(),l.sb(26,0,null,null,1,"div",[["class","hint"]],[[2,"invalid",null]],null,null,null,null)),(n()(),l.Db(27,null,["\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432: ",""])),(n()(),l.sb(28,0,null,null,7,"input",[["formControlName","country"],["placeholder","\u0421\u0442\u0440\u0430\u043d\u0430"],["required",""],["type","text"]],[[8,"className",0],[2,"invalid-field",null],[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,e){var o=!0;return"input"===t&&(o=!1!==l.Ab(n,29)._handleInput(e.target.value)&&o),"blur"===t&&(o=!1!==l.Ab(n,29).onTouched()&&o),"compositionstart"===t&&(o=!1!==l.Ab(n,29)._compositionStart()&&o),"compositionend"===t&&(o=!1!==l.Ab(n,29)._compositionEnd(e.target.value)&&o),o},null,null)),l.rb(29,16384,null,0,x.c,[l.F,l.l,[2,x.a]],null,null),l.rb(30,16384,null,0,x.n,[],{required:[0,"required"]},null),l.Bb(1024,null,x.h,function(n){return[n]},[x.n]),l.Bb(1024,null,x.i,function(n){return[n]},[x.c]),l.rb(33,671744,null,0,x.e,[[3,x.b],[6,x.h],[8,null],[6,x.i],[2,x.s]],{name:[0,"name"]},null),l.Bb(2048,null,x.j,null,[x.e]),l.rb(35,16384,null,0,x.k,[[4,x.j]],null,null),(n()(),l.sb(36,0,null,null,1,"div",[["class","hint"]],[[2,"invalid",null]],null,null,null,null)),(n()(),l.Db(37,null,["\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432: ",""])),(n()(),l.sb(38,0,null,null,8,"textarea",[["cols","30"],["formControlName","comment"],["placeholder","\u0422\u0435\u043a\u0441\u0442 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f"],["required",""],["rows","5"]],[[8,"className",0],[2,"invalid-field",null],[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,e){var o=!0;return"input"===t&&(o=!1!==l.Ab(n,39)._handleInput(e.target.value)&&o),"blur"===t&&(o=!1!==l.Ab(n,39).onTouched()&&o),"compositionstart"===t&&(o=!1!==l.Ab(n,39)._compositionStart()&&o),"compositionend"===t&&(o=!1!==l.Ab(n,39)._compositionEnd(e.target.value)&&o),o},null,null)),l.rb(39,16384,null,0,x.c,[l.F,l.l,[2,x.a]],null,null),l.rb(40,16384,null,0,x.n,[],{required:[0,"required"]},null),l.Bb(1024,null,x.h,function(n){return[n]},[x.n]),l.Bb(1024,null,x.i,function(n){return[n]},[x.c]),l.rb(43,671744,null,0,x.e,[[3,x.b],[6,x.h],[8,null],[6,x.i],[2,x.s]],{name:[0,"name"]},null),l.Bb(2048,null,x.j,null,[x.e]),l.rb(45,16384,null,0,x.k,[[4,x.j]],null,null),(n()(),l.Db(-1,null,["        "])),(n()(),l.sb(47,0,null,null,1,"div",[["class","hint"]],[[2,"invalid",null]],null,null,null,null)),(n()(),l.Db(48,null,["\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432: ",""])),(n()(),l.sb(49,0,null,null,3,"div",[["class","button-wrapper"]],null,null,null,null,null)),(n()(),l.sb(50,0,null,null,2,"button",[["type","submit"]],[[8,"className",0],[2,"disabled",null]],null,null,null,null)),(n()(),l.sb(51,0,null,null,1,"p",[["class","button-text"]],null,null,null,null,null)),(n()(),l.Db(-1,null,[" \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 "]))],function(n,t){var e=t.component;n(t,1,0),n(t,3,0,e.isCommentListShown),n(t,5,0,e.isContentLoaded),n(t,7,0),n(t,15,0,e.commentForm),n(t,20,0,""),n(t,23,0,"fullName"),n(t,30,0,""),n(t,33,0,"country"),n(t,40,0,""),n(t,43,0,"comment")},function(n,t){var e=t.component;n(t,4,0,"comment-the-project "+e.colorClasses.workspace,l.Ab(t,5).getDisplay),n(t,8,0,e.colorClasses.colorRGBA),n(t,11,0,e.colorClasses.text),n(t,13,0,l.Ab(t,17).ngClassUntouched,l.Ab(t,17).ngClassTouched,l.Ab(t,17).ngClassPristine,l.Ab(t,17).ngClassDirty,l.Ab(t,17).ngClassValid,l.Ab(t,17).ngClassInvalid,l.Ab(t,17).ngClassPending),n(t,18,0,e.colorClasses.color+" input",!e.isValidFullName,l.Ab(t,20).required?"":null,l.Ab(t,25).ngClassUntouched,l.Ab(t,25).ngClassTouched,l.Ab(t,25).ngClassPristine,l.Ab(t,25).ngClassDirty,l.Ab(t,25).ngClassValid,l.Ab(t,25).ngClassInvalid,l.Ab(t,25).ngClassPending),n(t,26,0,!e.isValidFullName),n(t,27,0,e.currentFullNameLength),n(t,28,0,e.colorClasses.color+" input",!e.isValidCountry,l.Ab(t,30).required?"":null,l.Ab(t,35).ngClassUntouched,l.Ab(t,35).ngClassTouched,l.Ab(t,35).ngClassPristine,l.Ab(t,35).ngClassDirty,l.Ab(t,35).ngClassValid,l.Ab(t,35).ngClassInvalid,l.Ab(t,35).ngClassPending),n(t,36,0,!e.isValidCountry),n(t,37,0,e.currentCountryLength),n(t,38,0,e.colorClasses.color+" styled-scroll input",!e.isValidComment,l.Ab(t,40).required?"":null,l.Ab(t,45).ngClassUntouched,l.Ab(t,45).ngClassTouched,l.Ab(t,45).ngClassPristine,l.Ab(t,45).ngClassDirty,l.Ab(t,45).ngClassValid,l.Ab(t,45).ngClassInvalid,l.Ab(t,45).ngClassPending),n(t,47,0,!e.isValidComment),n(t,48,0,e.currentCommentLength),n(t,50,0,e.colorClasses.button+" submit-button",e.isSubmitDisabled)})}var I=l.ob("comment-the-project",A,function(n){return l.Eb(0,[(n()(),l.sb(0,0,null,null,1,"comment-the-project",[],null,null,null,N,j)),l.rb(1,245760,null,0,A,[S.a,M.a,v.a,l.i,u.a,x.d,C.a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),D=e("OS5G"),F=e("ZYCi"),z=function(){};e.d(t,"CommentTheProjectModuleNgFactory",function(){return B});var B=l.pb(o,[],function(n){return l.yb([l.zb(512,l.k,l.eb,[[8,[i.a,I]],[3,l.k],l.z]),l.zb(4608,x.d,x.d,[]),l.zb(4608,x.r,x.r,[]),l.zb(4608,r.k,r.j,[l.w,[2,r.q]]),l.zb(1073742336,x.p,x.p,[]),l.zb(1073742336,x.m,x.m,[]),l.zb(1073742336,r.b,r.b,[]),l.zb(1073742336,D.a,D.a,[]),l.zb(1073742336,F.m,F.m,[[2,F.s],[2,F.k]]),l.zb(1073742336,z,z,[]),l.zb(1073742336,o,o,[]),l.zb(1024,F.i,function(){return[[{path:"",component:A}]]},[])])})},QouK:function(n,t,e){"use strict";var l=e("CcnG"),o=(e("eaet"),{ok:"/src/assets/images/icons/ok.svg",error:"/src/assets/images/icons/error.svg",warning:"/src/assets/images/icons/warning.svg"}),i={ok:"\u041e\u0442\u043b\u0438\u0447\u043d\u043e!",error:"\u041e\u0448\u0438\u0431\u043a\u0430!",warning:"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435!"},r={ok:{text:"\u041e\u043a"},yes:{text:"\u0414\u0430"},cancel:{text:"\u041e\u0442\u043c\u0435\u043d\u0430"}};e.d(t,"a",function(){return u});var u=function(){function n(n,t){this.alertService=n,this.cdRef=t,this.answer=new l.n(!1),this.showAlert=!1}return n.prototype.ngOnInit=function(){this.subscribeOnAlertShow(),this.subscribeOnAlertSettingsChanges()},n.prototype.buttonAction=function(n){this.alertType.useAnswer&&this.alertService.setAnswer("\u0414\u0430"===n.text),this.alertService.hide()},n.prototype.backdropClick=function(){this.showAlert=!1,this.alertService.navigateAway$.next(!1)},n.prototype.subscribeOnAlertShow=function(){var n=this;this.alertService.alertStatus$.subscribe(function(t){n.showAlert=t,n.cdRef.destroyed||n.cdRef.detectChanges()})},n.prototype.subscribeOnAlertSettingsChanges=function(){var n=this;this.alertService.alertSettings$.subscribe(function(t){n.alertType=t,n.initAlert()})},n.prototype.initAlert=function(){var n=this;this.alertType&&(this.image=o[this.alertType.type],this.header=i[this.alertType.type],this.message=this.alertType.message,this.actions=[],this.alertType.actions.forEach(function(t){n.actions.push(r[t])}))},n}()},gHic:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var l=e("CcnG"),o=e("t/Na"),i=function(){function n(n){this.http=n,this.dogBreedsUrl="http://localhost:8000/api/dog-breeds",this.breedsDescriptionsUrl="http://localhost:8000/api/breeds-descriptions",this.favoriteBreedsUrl="http://localhost:8000/api/favorite-breeds",this.commentsUrl="http://localhost:8000/api/comments",this.testResultsUrl="http://localhost:8000/api/get-results",this.resultsTableUrl="http://localhost:8000/api/results-list"}return n.prototype.getBreeds=function(){return this.http.get(this.dogBreedsUrl)},n.prototype.getBreedDescription=function(n){return this.http.get(this.breedsDescriptionsUrl+"/"+n)},n.prototype.addToFavoriteBreeds=function(n,t){return this.http.post(this.favoriteBreedsUrl,{name:n.name,breed:n,description:t})},n.prototype.removeFromFavoriteBreeds=function(n){return this.http.delete(this.favoriteBreedsUrl+"/"+n)},n.prototype.getFavoriteBreeds=function(){return this.http.get(this.favoriteBreedsUrl)},n.prototype.addNewComment=function(n){return this.http.post(this.commentsUrl,n)},n.prototype.getCommentList=function(){return this.http.get(this.commentsUrl)},n.prototype.getTestResults=function(n){return this.http.post(this.testResultsUrl,n)},n.prototype.addNewResultsTableItem=function(n){return this.http.post(this.resultsTableUrl,n)},n.prototype.getResultsTableList=function(){return this.http.get(this.resultsTableUrl)},n.ngInjectableDef=l.V({factory:function(){return new n(l.Z(o.c))},token:n,providedIn:"root"}),n}()}}]);