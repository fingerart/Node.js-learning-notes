var http = require("http");
function process_request (req, res) {
	var body = 'welcome to FingerArt';
	var content_length = body.lenggth;
	res.writeHead(200, {
		'Content-Length': content_length,
		'Content-Type': 'text/plain'
	});
	res.end(body);
}
var s = http.createServer(process_request);
s.listen(8080);

/*
node debug ***.js
进行debug调试

setBreakpoint(5)
在某行设置断点

一些关键的命令：
cont-继续执行
next-跳到下一条语句
step-进入当前执行函数中的语句（如果是函数的话；否则跳过）
out-跳出当前执行函数
breaktrace-显示当前调用执行帧或调用栈
repl-启动Node REPL，允许查看变量值和执行代码
watch（expr）-向观察列表中添加表达式，这样在调试器中进入函数或者移动时会显示出来
list（n）-列出调试器中当前停止行的前面和后面的n行代码
*/
