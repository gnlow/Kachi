import{Pack as a,Dict as e,Block as n}from"dalkak";var r=new a(new e,"kachi",{link:new n(new e,"link","변수(val)을(url)에 연결해 서버 만들기",function(a,e){var n=e.data.Entry;n.variableContainer.getVariableByName(a.val)||n.variableContainer.appendVariables([{name:a.val}]),n.variableContainer.getVariableByName(a.val).setValue(new WebSocket(a.url))}),send:new n(new e,"send","서버(server)에(data)보내기",function(a,e){e.data.Entry.variableContainer.getVariableByName(a.server).value.send(a.data)}),ready:new n(new e,"ready","서버(server)과 신호(msg), 변수(val) 연결하기",function(a,e){var n=e.data.Entry;n.variableContainer.messages_.find(function(e){return e.name==a.msg})||n.variableContainer.appendMessages([{name:a.msg}]),n.variableContainer.getVariableByName(a.val)||n.variableContainer.appendVariables([{name:a.val}]);var r=n.variableContainer.messages_.find(function(e){return e.name==a.msg});n.variableContainer.getVariableByName(a.server).value.onmessage(function(e){n.variableContainer.getVariableByName(a.val).setValue(e.data),n.engine.raiseMessage(r.id)})})});export default r;
//# sourceMappingURL=kachi.modern.js.map
