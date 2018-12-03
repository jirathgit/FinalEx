# FinalEx

Node-red Data Alchemist

![alt text](https://raw.githubusercontent.com/jirathgit/FinalEx/master/FinalEx_data/overview.png)

Sort
```
var foosort = msg.medical_people.sort((a,b) => a.sickness_level - b.sickness_level);
msg.payload = foosort;
return msg;
```

Maping
```
var mapfoo = msg.medical_people.map(o => {
            var strclass = "";
            if(o.sickness_level == 1){
                strclass = 'Well';
            }
            else if(o.sickness_level == 2){
                strclass = 'Not Well';
            }
            else if(o.sickness_level == 3){
                strclass = 'Not Very Well';
            }
            var new_object = {
                First_Name: o.name.split(" ")[0],
                Last_name: o.name.split(" ")[1],
                age: o.age,
                gender: o.gender,
                medical_candition: o.medical_candition,
                sickness_level: o.sickness_level,
                class: strclass
            };
            return new_object;
        })
msg.payload = mapfoo;
return msg;
```
Filter
```
var test = msg.medical_people.filter(o=> o.age > 30);
msg.payload = test;
return msg;
```


```
[{"id":"fda10469.155a78","type":"http in","z":"523a23e2.90980c","name":"","url":"/map","method":"get","upload":false,"swaggerDoc":"","x":180,"y":160,"wires":[["e02aec94.e8c2e"]]},{"id":"e02aec94.e8c2e","type":"function","z":"523a23e2.90980c","name":"data","func":"var medical_people = [\n            {name: 'Maxf last',age: 22, gender: 'm', medical_candition: ['normal','normal','normal'], sickness_level:1},\n            {name: 'Maxf last',age: 29, gender: 'm', medical_candition: ['normal','normal','normal'], sickness_level:2},\n            {name: 'Maxf last',age: 22, gender: 'm', medical_candition: ['normal','normal','normal'], sickness_level:2},\n            {name: 'Maxf last',age: 31, gender: 'm', medical_candition: ['normal','normal','can not sleep'], sickness_level:3},\n            {name: 'Maxf last',age: 33, gender: 'm', medical_candition: ['can not sleep','normal','normal'], sickness_level:3}\n        ];\nmsg.medical_people = medical_people;\nreturn msg;","outputs":1,"noerr":0,"x":370,"y":180,"wires":[["6cbd8548.b8b33c"]]},{"id":"2a43128f.0c8d9e","type":"http response","z":"523a23e2.90980c","name":"","statusCode":"","headers":{},"x":670,"y":160,"wires":[]},{"id":"6cbd8548.b8b33c","type":"function","z":"523a23e2.90980c","name":"map","func":"var mapfoo = msg.medical_people.map(o => {\n            var strclass = \"\";\n            if(o.sickness_level == 1){\n                strclass = 'Well';\n            }\n            else if(o.sickness_level == 2){\n                strclass = 'Not Well';\n            }\n            else if(o.sickness_level == 3){\n                strclass = 'Not Very Well';\n            }\n            var new_object = {\n                First_Name: o.name.split(\" \")[0],\n                Last_name: o.name.split(\" \")[1],\n                age: o.age,\n                gender: o.gender,\n                medical_candition: o.medical_candition,\n                sickness_level: o.sickness_level,\n                class: strclass\n            };\n            return new_object;\n        })\nmsg.payload = mapfoo;\nreturn msg;","outputs":1,"noerr":0,"x":510,"y":160,"wires":[["2a43128f.0c8d9e"]]},{"id":"bad4202b.2b48b","type":"function","z":"523a23e2.90980c","name":"sort","func":"var foosort = msg.medical_people.sort((a,b) => a.sickness_level - b.sickness_level);\nmsg.payload = foosort;\nreturn msg;","outputs":1,"noerr":0,"x":530,"y":240,"wires":[["8dd292a5.5ef8a"]]},{"id":"2c0da62d.7a0b0a","type":"http in","z":"523a23e2.90980c","name":"","url":"/sort","method":"get","upload":false,"swaggerDoc":"","x":190,"y":240,"wires":[["deda929e.7e804"]]},{"id":"deda929e.7e804","type":"function","z":"523a23e2.90980c","name":"data","func":"var medical_people = [\n            {name: 'Maxf last',age: 22, gender: 'm', medical_candition: ['normal','normal','normal'], sickness_level:1},\n            {name: 'Maxf last',age: 29, gender: 'm', medical_candition: ['normal','normal','normal'], sickness_level:2},\n            {name: 'Maxf last',age: 22, gender: 'm', medical_candition: ['normal','normal','normal'], sickness_level:2},\n            {name: 'Maxf last',age: 31, gender: 'm', medical_candition: ['normal','normal','can not sleep'], sickness_level:3},\n            {name: 'Maxf last',age: 33, gender: 'm', medical_candition: ['can not sleep','normal','normal'], sickness_level:3}\n        ];\nmsg.medical_people = medical_people;\nreturn msg;","outputs":1,"noerr":0,"x":370,"y":240,"wires":[["bad4202b.2b48b"]]},{"id":"8dd292a5.5ef8a","type":"http response","z":"523a23e2.90980c","name":"","statusCode":"","headers":{},"x":670,"y":220,"wires":[]},{"id":"c38d3d45.4a0f8","type":"function","z":"523a23e2.90980c","name":"filter","func":"var test = msg.medical_people.filter(o=> o.age > 30);\nmsg.payload = test;\nreturn msg;","outputs":1,"noerr":0,"x":550,"y":320,"wires":[["ce0a787d.3d0028"]]},{"id":"a3322f62.2d247","type":"http in","z":"523a23e2.90980c","name":"","url":"/filter","method":"get","upload":false,"swaggerDoc":"","x":210,"y":320,"wires":[["31a6b6e5.5b6f6a"]]},{"id":"31a6b6e5.5b6f6a","type":"function","z":"523a23e2.90980c","name":"data","func":"var medical_people = [\n            {name: 'Maxf last',age: 22, gender: 'm', medical_candition: ['normal','normal','normal'], sickness_level:1},\n            {name: 'Maxf last',age: 29, gender: 'm', medical_candition: ['normal','normal','normal'], sickness_level:2},\n            {name: 'Maxf last',age: 22, gender: 'm', medical_candition: ['normal','normal','normal'], sickness_level:2},\n            {name: 'Maxf last',age: 31, gender: 'm', medical_candition: ['normal','normal','can not sleep'], sickness_level:3},\n            {name: 'Maxf last',age: 33, gender: 'm', medical_candition: ['can not sleep','normal','normal'], sickness_level:3}\n        ];\nmsg.medical_people = medical_people;\nreturn msg;","outputs":1,"noerr":0,"x":390,"y":320,"wires":[["c38d3d45.4a0f8"]]},{"id":"ce0a787d.3d0028","type":"http response","z":"523a23e2.90980c","name":"","statusCode":"","headers":{},"x":690,"y":300,"wires":[]},{"id":"33f76ac8.727a06","type":"inject","z":"523a23e2.90980c","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":280,"y":520,"wires":[["e0ffce44.a578e"]]},{"id":"e0ffce44.a578e","type":"http request","z":"523a23e2.90980c","name":"","method":"GET","ret":"txt","url":"https://www.settrade.com/C04_02_stock_historical_p1.jsp?txtSymbol={{name}}","tls":"","x":430,"y":460,"wires":[["6abc3c39.2b58a4"]]},{"id":"25a03926.f81a56","type":"debug","z":"523a23e2.90980c","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":670,"y":520,"wires":[]},{"id":"4e299a61.3db2c4","type":"function","z":"523a23e2.90980c","name":"","func":"var result = {stock:msg.name,data:[]};\nvar datetime;\nvar price_close;\n\nfor(var i = 0; i < 12; i++ ){\n    datetime = msg.payload[0+(i*12)];\n    price_close = msg.payload[5+(i*12)];\n    \n    result.data.unshift({datetime:datetime,price_close:price_close});\n}\nmsg.payload = result;\nreturn msg;","outputs":1,"noerr":0,"x":650,"y":460,"wires":[["25a03926.f81a56","d2307e67.96c37"]]},{"id":"5af9c153.defde","type":"http in","z":"523a23e2.90980c","name":"","url":"stocks","method":"get","upload":false,"swaggerDoc":"","x":130,"y":440,"wires":[["cae86b31.414498"]]},{"id":"d2307e67.96c37","type":"http response","z":"523a23e2.90980c","name":"","statusCode":"","headers":{},"x":830,"y":460,"wires":[]},{"id":"cae86b31.414498","type":"function","z":"523a23e2.90980c","name":"","func":"var stock_name = msg.payload.name;\nmsg.name = stock_name;\nmsg.name = \"AAV\";\nreturn msg;","outputs":1,"noerr":0,"x":290,"y":420,"wires":[["e0ffce44.a578e"]]},{"id":"6abc3c39.2b58a4","type":"html","z":"523a23e2.90980c","name":"","property":"payload","outproperty":"payload","tag":"div.col-xs-12>div.table-responsive>table.table.table-info.table-hover>tbody>tr>td","ret":"html","as":"single","x":690,"y":400,"wires":[["4e299a61.3db2c4"]]}]

```

