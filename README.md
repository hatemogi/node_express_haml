# node + coffeescript + express + haml

## node.js

서버측에서 자바스크립트 언어로 네트워크 프로그램을 만들어서 운영하기 좋은 [node.js](http://nodejs.org/)라는 환경이 있습니다. [구글의 v8 자바스크립트 엔진](http://code.google.com/p/v8/)위에 구축되었고, Ruby쪽의 [EventMachine](http://rubyeventmachine.com/)처럼 Evented I/O처리를 기본으로 합니다. 

기존 멀티쓰레드 네트워크 프로그램 개발은 어려운 쓰레드 동기화 문제를 고려해야해서 복잡할 수 밖에 없지만, Event 방식으로 처리하면, 단일 쓰레드에서의 접근만을 고려하면 되므로 꽤나 간단하게 처리가 가능합니다. 대신 비동기 I/O처리를 해야해서 접근방식의 생소함이 있을 수 있지만, 멀티쓰레드 처리의 골치아픈 문제에 비하면 아무것도 아닌 간단한 일입니다. 

이 [node.js가 꽤 널리 활용되고 있습니다](http://nodejs.org/). 자바스크립트라는 웹개발자에게 친숙한(?) 언어로 개발할 수 있다는 점도 큰 이유가 아닐까 합니다. 어차피 웹서비스를 개발하려면 클라이언트쪽 웹브라우저 환경에서의 자바스크립트 개발이 필수인데, 같은 언어로 서버까지 개발할 수 있으니, 꽤 편리한 일입니다.

아래는 [node.js 사이트](http://nodejs.org/)에 나와있는 HTTP서버 예제 코드입니다. 

<pre class="prettyprint">var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
</pre>

## Express

아주 간단한 코드로, HTTP서버를 만들어 띄울 수 있습니다. 게다가, 웹개발자라면 익숙한 자바스크립트로 할 수 있으니 큰 부담이 없죠. 
실제 웹서비스를 만들려면, 라우팅 처리도 하고 템플릿처리도 하려하면, 적당한 프레임워크를 가져다 쓰게됩니다. 제 경우에는 웹서비스를 개발할 때, 서버측 프로그래밍을 위해 Ruby의 [Sinatra](http://www.sinatrarb.com/)라는 웹프레임워크를 즐겨 쓰는데요, [node.js](http://nodejs.org/)의 경우에도 비슷한 프레임워크가 있더군요. 바로 [express](http://expressjs.com/)이고, node.js위에서 웹서비스를 손쉽게 만들어 올릴 수 있습니다. 

## CoffeeScript

node.js와는 별개일지 모르지만, 제 욕심에, 자바스크립트를 그냥 쓰는 것 보다는, [CoffeeScript](http://jashkenas.github.com/coffee-script/)를 이용해서 개발하고자 합니다. 자바스크립트 자체로도 훌륭한 언어지만, 루비같은 편리한 언어에 익숙해지다보면, 조금 더 편리한 문법이 아쉽습니다. CoffeeScript는 이 아쉬움을 깔끔히 해결해주는 언어이자 번역기(!)입니다. 커피스크립트로 작성한 코드는, 커피스크립트 번역기를 통해 자바스크립트로 변환됩니다. node.js입장에서는 실행할 코드가 자바스크립트이면 되기때문에, 그 앞에 커피스크립트로 개발되었든 아니든 큰 상관은 없습니다.

## Haml

[Haml](http://haml-lang.com/)은 HTML을 편리하게 표현할 수 있는 언어입니다. 저도 [Sinatra](http://www.sinatrarb.com/)로 개발할 때의 템플릿 엔진으로 애용하고 있는 언어인데요, [튜터리얼](http://haml-lang.com/tutorial.html)을 5분만 투자해서 읽고, 조금 써보면, 20분 뒤면, 다시는 이전 템플릿 환경으로 돌아갈 수 없다는 표현이 인상적입니다.

이 언어는 원래 루비 환경을 위해 나왔는데, [다른 언어환경에서도 쓸 수 있게끔 펴졌으며](http://en.wikipedia.org/wiki/Haml#Implementations), node.js쪽에도 사용할 수 있습니다.

## 이렇게 모아서

위의 요소들을 모아서 연습해 보았습니다. 간단한 express 서버를 만들고, haml 페이지를 렌더링하는 템플릿입니다. 

> [https://github.com/hatemogi/node_express_haml](https://github.com/hatemogi/node_express_haml)

node.js와 npm이 설치된 환경에서 실행해보기 위해, 우선 버전을 확인합니다.

<pre>node -v 
npm -v 
</pre>

제 경우에는 이렇게 각각 v0.6.4, 1.0.106이 깔려있습니다. 
이어서 github에서 미리 만들어 놓은 템플릿 프로젝트를 받습니다. (hamljs는 현재 npm에 등록된 버전과 express현재 버전이 안맞는 문제가 있어서 git submodule로 따로 받아서 썼습니다)

<pre>git clone https://github.com/hatemogi/node_express_haml.git
cd node_express_haml
npm install -d
git submodule update --init
cd node_modules/hamljs
git checkout 0.5.1
cd ../..
node build/app.js
</pre>

위의 마지막까지 진행되면, localhost의 4000번 포트에 웹서비스가 준비됩니다.
그럼, 웹브라우저등으로 http://0.0.0.0:4000/에 요청을 보내보면 결과를 확인할 수 있습니다. 

## src/app.coffee
<pre class="prettyprint">express = require 'express'
app = express.createServer()

app.configure ->
  app.use express.errorHandler(dumpExceptions: true, showStack: true)
  app.use express.logger()
  app.register 'haml', require('hamljs')

app.get '/', (req, res) ->
  res.render 'index.haml'

app.listen 4000</pre>

위의 소스코드가, "/"에 대한 GET요청을 처리하는 커피스크립트 예제입니다. 자바스크립트로 변환되서 node.js로 실행됩니다. 

이상으로 node.js + express + haml을 연결해서 예제를 만들어 보았습니다. node.js 기반의 웹서비스를 만들때 활용하면, 더 쉽고 빠르게 개발할 수 있습니다.


