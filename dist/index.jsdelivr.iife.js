!function(e,a,s){"use strict";const t=[{id:"abap",scopeName:"source.abap",path:"abap.tmLanguage.json",samplePath:"abap.sample"},{id:"actionscript-3",scopeName:"source.actionscript.3",path:"actionscript-3.tmLanguage.json",samplePath:"actionscript-3.sample"},{id:"ada",scopeName:"source.ada",path:"ada.tmLanguage.json",samplePath:"ada.sample"},{id:"apache",scopeName:"source.apacheconf",path:"apache.tmLanguage.json"},{id:"apex",scopeName:"source.apex",path:"apex.tmLanguage.json",samplePath:"apex.sample"},{id:"apl",scopeName:"source.apl",path:"apl.tmLanguage.json",embeddedLangs:["html","xml","css","javascript","json"]},{id:"applescript",scopeName:"source.applescript",path:"applescript.tmLanguage.json",samplePath:"applescript.sample"},{id:"asm",scopeName:"source.asm.x86_64",path:"asm.tmLanguage.json",samplePath:"asm.sample"},{id:"astro",scopeName:"source.astro",path:"astro.tmLanguage.json",samplePath:"astro.sample",embeddedLangs:["json","javascript","typescript","tsx","css","less","sass","scss","stylus"]},{id:"awk",scopeName:"source.awk",path:"awk.tmLanguage.json",samplePath:"awk.sample"},{id:"ballerina",scopeName:"source.ballerina",path:"ballerina.tmLanguage.json",samplePath:"ballerina.sample"},{id:"bat",scopeName:"source.batchfile",path:"bat.tmLanguage.json",samplePath:"bat.sample",aliases:["batch"]},{id:"berry",scopeName:"source.berry",path:"berry.tmLanguage.json",samplePath:"berry.sample",aliases:["be"]},{id:"bibtex",scopeName:"text.bibtex",path:"bibtex.tmLanguage.json"},{id:"bicep",scopeName:"source.bicep",path:"bicep.tmLanguage.json",samplePath:"bicep.sample"},{id:"blade",scopeName:"text.html.php.blade",path:"blade.tmLanguage.json",samplePath:"blade.sample",embeddedLangs:["html","xml","sql","javascript","json","css"]},{id:"c",scopeName:"source.c",path:"c.tmLanguage.json",samplePath:"c.sample"},{id:"cadence",scopeName:"source.cadence",path:"cadence.tmLanguage.json",samplePath:"cadence.sample",aliases:["cdc"]},{id:"clarity",scopeName:"source.clar",path:"clarity.tmLanguage.json",samplePath:"clarity.sample"},{id:"clojure",scopeName:"source.clojure",path:"clojure.tmLanguage.json",samplePath:"clojure.sample",aliases:["clj"]},{id:"cmake",scopeName:"source.cmake",path:"cmake.tmLanguage.json",samplePath:"cmake.sample"},{id:"cobol",scopeName:"source.cobol",path:"cobol.tmLanguage.json",samplePath:"cobol.sample",embeddedLangs:["sql","html","java"]},{id:"codeql",scopeName:"source.ql",path:"codeql.tmLanguage.json",samplePath:"codeql.sample",aliases:["ql"],embeddedLangs:["markdown"]},{id:"coffee",scopeName:"source.coffee",path:"coffee.tmLanguage.json",samplePath:"coffee.sample",embeddedLangs:["javascript"]},{id:"cpp",scopeName:"source.cpp",path:"cpp.tmLanguage.json",samplePath:"cpp.sample",embeddedLangs:["glsl","sql"]},{id:"crystal",scopeName:"source.crystal",path:"crystal.tmLanguage.json",samplePath:"crystal.sample",embeddedLangs:["html","sql","css","c","javascript","shellscript"]},{id:"csharp",scopeName:"source.cs",path:"csharp.tmLanguage.json",samplePath:"csharp.sample",aliases:["c#"]},{id:"css",scopeName:"source.css",path:"css.tmLanguage.json",samplePath:"css.sample"},{id:"cue",scopeName:"source.cue",path:"cue.tmLanguage.json",samplePath:"cue.sample"},{id:"d",scopeName:"source.d",path:"d.tmLanguage.json",samplePath:"d.sample"},{id:"dart",scopeName:"source.dart",path:"dart.tmLanguage.json",samplePath:"dart.sample"},{id:"diff",scopeName:"source.diff",path:"diff.tmLanguage.json",samplePath:"diff.sample"},{id:"docker",scopeName:"source.dockerfile",path:"docker.tmLanguage.json",samplePath:"docker.sample"},{id:"dream-maker",scopeName:"source.dm",path:"dream-maker.tmLanguage.json"},{id:"elixir",scopeName:"source.elixir",path:"elixir.tmLanguage.json",samplePath:"elixir.sample",embeddedLangs:["html"]},{id:"elm",scopeName:"source.elm",path:"elm.tmLanguage.json",samplePath:"elm.sample",embeddedLangs:["glsl"]},{id:"erb",scopeName:"text.html.erb",path:"erb.tmLanguage.json",samplePath:"erb.sample",embeddedLangs:["html","ruby"]},{id:"erlang",scopeName:"source.erlang",path:"erlang.tmLanguage.json",samplePath:"erlang.sample",aliases:["erl"]},{id:"fish",scopeName:"source.fish",path:"fish.tmLanguage.json",samplePath:"fish.sample"},{id:"fsharp",scopeName:"source.fsharp",path:"fsharp.tmLanguage.json",samplePath:"fsharp.sample",aliases:["f#"],embeddedLangs:["markdown"]},{id:"gherkin",scopeName:"text.gherkin.feature",path:"gherkin.tmLanguage.json"},{id:"git-commit",scopeName:"text.git-commit",path:"git-commit.tmLanguage.json",embeddedLangs:["diff"]},{id:"git-rebase",scopeName:"text.git-rebase",path:"git-rebase.tmLanguage.json",embeddedLangs:["shellscript"]},{id:"glsl",scopeName:"source.glsl",path:"glsl.tmLanguage.json",samplePath:"glsl.sample",embeddedLangs:["c"]},{id:"gnuplot",scopeName:"source.gnuplot",path:"gnuplot.tmLanguage.json"},{id:"go",scopeName:"source.go",path:"go.tmLanguage.json",samplePath:"go.sample"},{id:"graphql",scopeName:"source.graphql",path:"graphql.tmLanguage.json",embeddedLangs:["javascript","typescript","jsx","tsx"]},{id:"groovy",scopeName:"source.groovy",path:"groovy.tmLanguage.json"},{id:"hack",scopeName:"source.hack",path:"hack.tmLanguage.json",embeddedLangs:["html","sql"]},{id:"haml",scopeName:"text.haml",path:"haml.tmLanguage.json",embeddedLangs:["ruby","javascript","sass","coffee","markdown","css"]},{id:"handlebars",scopeName:"text.html.handlebars",path:"handlebars.tmLanguage.json",aliases:["hbs"],embeddedLangs:["html","css","javascript","yaml"]},{id:"haskell",scopeName:"source.haskell",path:"haskell.tmLanguage.json",aliases:["hs"]},{id:"hcl",scopeName:"source.hcl",path:"hcl.tmLanguage.json",samplePath:"hcl.sample"},{id:"hlsl",scopeName:"source.hlsl",path:"hlsl.tmLanguage.json"},{id:"html",scopeName:"text.html.basic",path:"html.tmLanguage.json",samplePath:"html.sample",embeddedLangs:["javascript","css"]},{id:"ini",scopeName:"source.ini",path:"ini.tmLanguage.json"},{id:"java",scopeName:"source.java",path:"java.tmLanguage.json",samplePath:"java.sample"},{id:"javascript",scopeName:"source.js",path:"javascript.tmLanguage.json",samplePath:"javascript.sample",aliases:["js"]},{id:"jinja-html",scopeName:"text.html.jinja",path:"jinja-html.tmLanguage.json",embeddedLangs:["html"]},{id:"json",scopeName:"source.json",path:"json.tmLanguage.json"},{id:"jsonc",scopeName:"source.json.comments",path:"jsonc.tmLanguage.json"},{id:"jsonnet",scopeName:"source.jsonnet",path:"jsonnet.tmLanguage.json"},{id:"jssm",scopeName:"source.jssm",path:"jssm.tmLanguage.json",samplePath:"jssm.sample",aliases:["fsl"]},{id:"jsx",scopeName:"source.js.jsx",path:"jsx.tmLanguage.json"},{id:"julia",scopeName:"source.julia",path:"julia.tmLanguage.json",embeddedLangs:["cpp","python","javascript","r","sql"]},{id:"kotlin",scopeName:"source.kotlin",path:"kotlin.tmLanguage.json"},{id:"latex",scopeName:"text.tex.latex",path:"latex.tmLanguage.json",embeddedLangs:["tex","css","haskell","html","xml","java","lua","julia","ruby","javascript","typescript","python","yaml","scala","gnuplot"]},{id:"less",scopeName:"source.css.less",path:"less.tmLanguage.json",embeddedLangs:["css"]},{id:"liquid",scopeName:"text.html.liquid",path:"liquid.tmLanguage.json",samplePath:"liquid.sample",embeddedLangs:["html","css","json","javascript"]},{id:"lisp",scopeName:"source.lisp",path:"lisp.tmLanguage.json"},{id:"logo",scopeName:"source.logo",path:"logo.tmLanguage.json"},{id:"lua",scopeName:"source.lua",path:"lua.tmLanguage.json",embeddedLangs:["c"]},{id:"make",scopeName:"source.makefile",path:"make.tmLanguage.json",aliases:["makefile"]},{id:"markdown",scopeName:"text.html.markdown",path:"markdown.tmLanguage.json",aliases:["md"],embeddedLangs:["css","html","ini","java","lua","make","perl","r","ruby","php","sql","vb","xml","xsl","yaml","bat","clojure","coffee","c","cpp","diff","docker","git-commit","git-rebase","go","groovy","pug","javascript","json","jsonc","less","objective-c","swift","scss","raku","powershell","python","julia","rust","scala","shellscript","typescript","tsx","csharp","fsharp","dart","handlebars","erlang","elixir","latex","bibtex"]},{id:"marko",scopeName:"text.marko",path:"marko.tmLanguage.json",samplePath:"marko.sample",embeddedLangs:["css","less","scss","typescript"]},{id:"matlab",scopeName:"source.matlab",path:"matlab.tmLanguage.json"},{id:"mdx",scopeName:"text.html.markdown.jsx",path:"mdx.tmLanguage.json",embeddedLangs:["jsx","markdown"]},{id:"mermaid",scopeName:"source.mermaid",path:"mermaid.tmLanguage.json"},{id:"nginx",scopeName:"source.nginx",path:"nginx.tmLanguage.json",embeddedLangs:["lua"]},{id:"nim",scopeName:"source.nim",path:"nim.tmLanguage.json",embeddedLangs:["c","html","xml","javascript","css","glsl","markdown"]},{id:"nix",scopeName:"source.nix",path:"nix.tmLanguage.json"},{id:"objective-c",scopeName:"source.objc",path:"objective-c.tmLanguage.json",aliases:["objc"]},{id:"objective-cpp",scopeName:"source.objcpp",path:"objective-cpp.tmLanguage.json"},{id:"ocaml",scopeName:"source.ocaml",path:"ocaml.tmLanguage.json"},{id:"pascal",scopeName:"source.pascal",path:"pascal.tmLanguage.json"},{id:"perl",scopeName:"source.perl",path:"perl.tmLanguage.json",embeddedLangs:["html","xml","css","javascript","sql"]},{id:"php",scopeName:"source.php",path:"php.tmLanguage.json",embeddedLangs:["html","xml","sql","javascript","json","css"]},{id:"plsql",scopeName:"source.plsql.oracle",path:"plsql.tmLanguage.json"},{id:"postcss",scopeName:"source.css.postcss",path:"postcss.tmLanguage.json"},{id:"powershell",scopeName:"source.powershell",path:"powershell.tmLanguage.json",aliases:["ps","ps1"]},{id:"prisma",scopeName:"source.prisma",path:"prisma.tmLanguage.json",samplePath:"prisma.sample"},{id:"prolog",scopeName:"source.prolog",path:"prolog.tmLanguage.json"},{id:"pug",scopeName:"text.pug",path:"pug.tmLanguage.json",aliases:["jade"],embeddedLangs:["javascript","css","sass","stylus","coffee","html"]},{id:"puppet",scopeName:"source.puppet",path:"puppet.tmLanguage.json"},{id:"purescript",scopeName:"source.purescript",path:"purescript.tmLanguage.json"},{id:"python",scopeName:"source.python",path:"python.tmLanguage.json",samplePath:"python.sample",aliases:["py"]},{id:"r",scopeName:"source.r",path:"r.tmLanguage.json"},{id:"raku",scopeName:"source.perl.6",path:"raku.tmLanguage.json",aliases:["perl6"]},{id:"razor",scopeName:"text.aspnetcorerazor",path:"razor.tmLanguage.json",embeddedLangs:["html","csharp"]},{id:"rel",scopeName:"source.rel",path:"rel.tmLanguage.json",samplePath:"rel.sample"},{id:"riscv",scopeName:"source.riscv",path:"riscv.tmLanguage.json"},{id:"rst",scopeName:"source.rst",path:"rst.tmLanguage.json",embeddedLangs:["cpp","python","javascript","shellscript","yaml","cmake","ruby"]},{id:"ruby",scopeName:"source.ruby",path:"ruby.tmLanguage.json",samplePath:"ruby.sample",aliases:["rb"],embeddedLangs:["html","xml","sql","css","c","javascript","shellscript","lua"]},{id:"rust",scopeName:"source.rust",path:"rust.tmLanguage.json",aliases:["rs"]},{id:"sas",scopeName:"source.sas",path:"sas.tmLanguage.json",embeddedLangs:["sql"]},{id:"sass",scopeName:"source.sass",path:"sass.tmLanguage.json"},{id:"scala",scopeName:"source.scala",path:"scala.tmLanguage.json"},{id:"scheme",scopeName:"source.scheme",path:"scheme.tmLanguage.json"},{id:"scss",scopeName:"source.css.scss",path:"scss.tmLanguage.json",embeddedLangs:["css"]},{id:"shaderlab",scopeName:"source.shaderlab",path:"shaderlab.tmLanguage.json",aliases:["shader"],embeddedLangs:["hlsl"]},{id:"shellscript",scopeName:"source.shell",path:"shellscript.tmLanguage.json",aliases:["shell","bash","sh","zsh"],embeddedLangs:["ruby","python","applescript","html","markdown"]},{id:"smalltalk",scopeName:"source.smalltalk",path:"smalltalk.tmLanguage.json"},{id:"solidity",scopeName:"source.solidity",path:"solidity.tmLanguage.json"},{id:"sparql",scopeName:"source.sparql",path:"sparql.tmLanguage.json",samplePath:"sparql.sample",embeddedLangs:["turtle"]},{id:"sql",scopeName:"source.sql",path:"sql.tmLanguage.json"},{id:"ssh-config",scopeName:"source.ssh-config",path:"ssh-config.tmLanguage.json"},{id:"stata",scopeName:"source.stata",path:"stata.tmLanguage.json",samplePath:"stata.sample",embeddedLangs:["sql"]},{id:"stylus",scopeName:"source.stylus",path:"stylus.tmLanguage.json",aliases:["styl"]},{id:"svelte",scopeName:"source.svelte",path:"svelte.tmLanguage.json",embeddedLangs:["javascript","typescript","coffee","stylus","sass","css","scss","less","postcss","pug","markdown"]},{id:"swift",scopeName:"source.swift",path:"swift.tmLanguage.json"},{id:"system-verilog",scopeName:"source.systemverilog",path:"system-verilog.tmLanguage.json"},{id:"tasl",scopeName:"source.tasl",path:"tasl.tmLanguage.json",samplePath:"tasl.sample"},{id:"tcl",scopeName:"source.tcl",path:"tcl.tmLanguage.json"},{id:"tex",scopeName:"text.tex",path:"tex.tmLanguage.json",embeddedLangs:["r"]},{id:"toml",scopeName:"source.toml",path:"toml.tmLanguage.json"},{id:"tsx",scopeName:"source.tsx",path:"tsx.tmLanguage.json",samplePath:"tsx.sample"},{id:"turtle",scopeName:"source.turtle",path:"turtle.tmLanguage.json",samplePath:"turtle.sample"},{id:"twig",scopeName:"text.html.twig",path:"twig.tmLanguage.json",embeddedLangs:["css","javascript","php","python","ruby"]},{id:"typescript",scopeName:"source.ts",path:"typescript.tmLanguage.json",aliases:["ts"]},{id:"vb",scopeName:"source.asp.vb.net",path:"vb.tmLanguage.json",aliases:["cmd"]},{id:"verilog",scopeName:"source.verilog",path:"verilog.tmLanguage.json"},{id:"vhdl",scopeName:"source.vhdl",path:"vhdl.tmLanguage.json"},{id:"viml",scopeName:"source.viml",path:"viml.tmLanguage.json",aliases:["vim","vimscript"]},{id:"vue-html",scopeName:"text.html.vue-html",path:"vue-html.tmLanguage.json",embeddedLangs:["vue","javascript"]},{id:"vue",scopeName:"source.vue",path:"vue.tmLanguage.json",embeddedLangs:["json","markdown","pug","haml","liquid","vue-html","sass","scss","less","stylus","postcss","css","typescript","coffee","javascript"]},{id:"wasm",scopeName:"source.wat",path:"wasm.tmLanguage.json"},{id:"wenyan",scopeName:"source.wenyan",path:"wenyan.tmLanguage.json",aliases:["文言"]},{id:"xml",scopeName:"text.xml",path:"xml.tmLanguage.json",embeddedLangs:["java"]},{id:"xsl",scopeName:"text.xml.xsl",path:"xsl.tmLanguage.json",embeddedLangs:["xml"]},{id:"yaml",scopeName:"source.yaml",path:"yaml.tmLanguage.json"},{id:"zenscript",scopeName:"source.zenscript",path:"zenscript.tmLanguage.json",samplePath:"zenscript.sample"}];var n,o=(e=>(e[e.NotSet=-1]="NotSet",e[e.None=0]="None",e[e.Italic=1]="Italic",e[e.Bold=2]="Bold",e[e.Underline=4]="Underline",e))(o||{});class r{static toBinaryStr(e){let a=e.toString(2);for(;a.length<32;)a="0"+a;return a}static printMetadata(e){let a=r.getLanguageId(e),s=r.getTokenType(e),t=r.getFontStyle(e),n=r.getForeground(e),o=r.getBackground(e);console.log({languageId:a,tokenType:s,fontStyle:t,foreground:n,background:o})}static getLanguageId(e){return(255&e)>>>0}static getTokenType(e){return(1792&e)>>>8}static getFontStyle(e){return(14336&e)>>>11}static getForeground(e){return(8372224&e)>>>14}static getBackground(e){return(4286578688&e)>>>23}static set(e,a,s,t,n,o){let c=r.getLanguageId(e),i=r.getTokenType(e),l=r.getFontStyle(e),m=r.getForeground(e),p=r.getBackground(e);return 0!==a&&(c=a),0!==s&&(i=8===s?0:s),-1!==t&&(l=t),0!==n&&(m=n),0!==o&&(p=o),(c<<0|i<<8|l<<11|m<<14|p<<23)>>>0}}function c(e){return e.endsWith("/")||e.endsWith("\\")?e.slice(0,-1):e}function i(e){return e.startsWith("./")?e.slice(2):e}function l(e,a){void 0===a&&(a=!1);var s=e.length,t=0,n="",o=0,r=16,c=0,i=0,l=0,u=0,d=0;function h(a,s){for(var n=0,o=0;n<a||!s;){var r=e.charCodeAt(t);if(r>=48&&r<=57)o=16*o+r-48;else if(r>=65&&r<=70)o=16*o+r-65+10;else{if(!(r>=97&&r<=102))break;o=16*o+r-97+10}t++,n++}return n<a&&(o=-1),o}function f(){if(n="",d=0,o=t,i=c,u=l,t>=s)return o=s,r=17;var a=e.charCodeAt(t);if(m(a)){do{t++,n+=String.fromCharCode(a),a=e.charCodeAt(t)}while(m(a));return r=15}if(p(a))return t++,n+=String.fromCharCode(a),13===a&&10===e.charCodeAt(t)&&(t++,n+="\n"),c++,l=t,r=14;switch(a){case 123:return t++,r=1;case 125:return t++,r=2;case 91:return t++,r=3;case 93:return t++,r=4;case 58:return t++,r=6;case 44:return t++,r=5;case 34:return t++,n=function(){for(var a="",n=t;;){if(t>=s){a+=e.substring(n,t),d=2;break}var o=e.charCodeAt(t);if(34===o){a+=e.substring(n,t),t++;break}if(92!==o){if(o>=0&&o<=31){if(p(o)){a+=e.substring(n,t),d=2;break}d=6}t++}else{if(a+=e.substring(n,t),++t>=s){d=2;break}switch(e.charCodeAt(t++)){case 34:a+='"';break;case 92:a+="\\";break;case 47:a+="/";break;case 98:a+="\b";break;case 102:a+="\f";break;case 110:a+="\n";break;case 114:a+="\r";break;case 116:a+="\t";break;case 117:var r=h(4,!0);r>=0?a+=String.fromCharCode(r):d=4;break;default:d=5}n=t}}return a}(),r=10;case 47:var f=t-1;if(47===e.charCodeAt(t+1)){for(t+=2;t<s&&!p(e.charCodeAt(t));)t++;return n=e.substring(f,t),r=12}if(42===e.charCodeAt(t+1)){t+=2;for(var b=s-1,L=!1;t<b;){var k=e.charCodeAt(t);if(42===k&&47===e.charCodeAt(t+1)){t+=2,L=!0;break}t++,p(k)&&(13===k&&10===e.charCodeAt(t)&&t++,c++,l=t)}return L||(t++,d=1),n=e.substring(f,t),r=13}return n+=String.fromCharCode(a),t++,r=16;case 45:if(n+=String.fromCharCode(a),++t===s||!g(e.charCodeAt(t)))return r=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return n+=function(){var a=t;if(48===e.charCodeAt(t))t++;else for(t++;t<e.length&&g(e.charCodeAt(t));)t++;if(t<e.length&&46===e.charCodeAt(t)){if(!(++t<e.length&&g(e.charCodeAt(t))))return d=3,e.substring(a,t);for(t++;t<e.length&&g(e.charCodeAt(t));)t++}var s=t;if(t<e.length&&(69===e.charCodeAt(t)||101===e.charCodeAt(t)))if((++t<e.length&&43===e.charCodeAt(t)||45===e.charCodeAt(t))&&t++,t<e.length&&g(e.charCodeAt(t))){for(t++;t<e.length&&g(e.charCodeAt(t));)t++;s=t}else d=3;return e.substring(a,s)}(),r=11;default:for(;t<s&&j(a);)t++,a=e.charCodeAt(t);if(o!==t){switch(n=e.substring(o,t)){case"true":return r=8;case"false":return r=9;case"null":return r=7}return r=16}return n+=String.fromCharCode(a),t++,r=16}}function j(e){if(m(e)||p(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){t=e,n="",o=0,r=16,d=0},getPosition:function(){return t},scan:a?function(){var e;do{e=f()}while(e>=12&&e<=15);return e}:f,getToken:function(){return r},getTokenValue:function(){return n},getTokenOffset:function(){return o},getTokenLength:function(){return t-o},getTokenStartLine:function(){return i},getTokenStartCharacter:function(){return o-u},getTokenError:function(){return d}}}function m(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function p(e){return 10===e||13===e||8232===e||8233===e}function g(e){return e>=48&&e<=57}!function(e){e.DEFAULT={allowTrailingComma:!1}}(n||(n={}));var u=function(e,a,s){void 0===a&&(a=[]),void 0===s&&(s=n.DEFAULT);var t=null,o=[],r=[];function c(e){Array.isArray(o)?o.push(e):null!==t&&(o[t]=e)}return function(e,a,s){void 0===s&&(s=n.DEFAULT);var t=l(e,!1);function o(e){return e?function(){return e(t.getTokenOffset(),t.getTokenLength(),t.getTokenStartLine(),t.getTokenStartCharacter())}:function(){return!0}}function r(e){return e?function(a){return e(a,t.getTokenOffset(),t.getTokenLength(),t.getTokenStartLine(),t.getTokenStartCharacter())}:function(){return!0}}var c=o(a.onObjectBegin),i=r(a.onObjectProperty),m=o(a.onObjectEnd),p=o(a.onArrayBegin),g=o(a.onArrayEnd),u=r(a.onLiteralValue),d=r(a.onSeparator),h=o(a.onComment),f=r(a.onError),j=s&&s.disallowComments,b=s&&s.allowTrailingComma;function L(){for(;;){var e=t.scan();switch(t.getTokenError()){case 4:k(14);break;case 5:k(15);break;case 3:k(13);break;case 1:j||k(11);break;case 2:k(12);break;case 6:k(16)}switch(e){case 12:case 13:j?k(10):h();break;case 16:k(1);break;case 15:case 14:break;default:return e}}}function k(e,a,s){if(void 0===a&&(a=[]),void 0===s&&(s=[]),f(e),a.length+s.length>0)for(var n=t.getToken();17!==n;){if(-1!==a.indexOf(n)){L();break}if(-1!==s.indexOf(n))break;n=L()}}function v(e){var a=t.getTokenValue();return e?u(a):i(a),L(),!0}function N(){switch(t.getToken()){case 11:var e=t.getTokenValue(),a=Number(e);isNaN(a)&&(k(2),a=0),u(a);break;case 7:u(null);break;case 8:u(!0);break;case 9:u(!1);break;default:return!1}return L(),!0}function y(){return 10!==t.getToken()?(k(3,[],[2,5]),!1):(v(!1),6===t.getToken()?(d(":"),L(),T()||k(4,[],[2,5])):k(5,[],[2,5]),!0)}function x(){c(),L();for(var e=!1;2!==t.getToken()&&17!==t.getToken();){if(5===t.getToken()){if(e||k(4,[],[]),d(","),L(),2===t.getToken()&&b)break}else e&&k(6,[],[]);y()||k(4,[],[2,5]),e=!0}return m(),2!==t.getToken()?k(7,[2],[]):L(),!0}function w(){p(),L();for(var e=!1;4!==t.getToken()&&17!==t.getToken();){if(5===t.getToken()){if(e||k(4,[],[]),d(","),L(),4===t.getToken()&&b)break}else e&&k(6,[],[]);T()||k(4,[],[4,5]),e=!0}return g(),4!==t.getToken()?k(8,[4],[]):L(),!0}function T(){switch(t.getToken()){case 3:return w();case 1:return x();case 10:return v(!0);default:return N()}}if(L(),17===t.getToken())return!!s.allowEmptyContent||(k(4,[],[]),!1);if(!T())return k(4,[],[]),!1;17!==t.getToken()&&k(9,[],[])}(e,{onObjectBegin:function(){var e={};c(e),r.push(o),o=e,t=null},onObjectProperty:function(e){t=e},onObjectEnd:function(){o=r.pop()},onArrayBegin:function(){var e=[];c(e),r.push(o),o=e,t=null},onArrayEnd:function(){o=r.pop()},onLiteralValue:c,onError:function(e,s,t){a.push({error:e,offset:s,length:t})}},s),o[0]},d=Object.defineProperty,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,b=(e,a,s)=>a in e?d(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,L=(e,a)=>{for(var s in a||(a={}))f.call(a,s)&&b(e,s,a[s]);if(h)for(var s of h(a))j.call(a,s)&&b(e,s,a[s]);return e};const k="undefined"!=typeof self&&void 0!==self.WorkerGlobalScope,v="process"in globalThis&&"undefined"!=typeof process&&void 0!==process.release&&"node"===process.release.name,N=k||!v;let y="https://cdn.jsdelivr.net/npm/shiki@0.11.1/",x="";function w(e){x=e}let T=null;function P(e){if(N)return y||console.warn("[Shiki] no CDN provider found, use `setCDN()` to specify the CDN for loading the resources before calling `getHighlighter()`"),`${y}${e}`;{const a=require("path");return a.isAbsolute(e)?e:a.resolve(__dirname,"..",e)}}async function C(e){const a=[],s=u(await async function(e){const a=P(e);if(N)return await fetch(a).then((e=>e.text()));{const e=require("fs");return await e.promises.readFile(a,"utf-8")}}(e),a,{allowTrailingComma:!0});if(a.length)throw a[0];return s}async function A(e){const a=S(await C(e));if(a.include){const s=await A(function(...e){return e.map(c).map(i).join("/")}(...function(e){const a=e.split(/[\/\\]/g);return a.slice(0,a.length-1)}(e),a.include));s.settings&&(a.settings=s.settings.concat(a.settings)),s.bg&&!a.bg&&(a.bg=s.bg),s.colors&&(a.colors=L(L({},s.colors),a.colors)),delete a.include}return a}function S(e){const a=e.type||"dark",s=L(L({name:e.name,type:a},e),function(e){var a,s,t,n;let o,r,c=e.settings?e.settings:e.tokenColors;const i=c?c.find((e=>!e.name&&!e.scope)):void 0;(null==(a=null==i?void 0:i.settings)?void 0:a.foreground)&&(o=i.settings.foreground);(null==(s=null==i?void 0:i.settings)?void 0:s.background)&&(r=i.settings.background);!o&&(null==(t=null==e?void 0:e.colors)?void 0:t["editor.foreground"])&&(o=e.colors["editor.foreground"]);!r&&(null==(n=null==e?void 0:e.colors)?void 0:n["editor.background"])&&(r=e.colors["editor.background"]);o||(o="light"===e.type?q:_);r||(r="light"===e.type?O:E);return{fg:o,bg:r}}(e));var t;return e.include&&(s.include=e.include),e.tokenColors&&(s.settings=e.tokenColors,delete s.tokenColors),(t=s).settings||(t.settings=[]),t.settings[0]&&t.settings[0].settings&&!t.settings[0].scope||t.settings.unshift({settings:{foreground:t.fg,background:t.bg}}),s}const q="#333333",_="#bbbbbb",O="#fffffe",E="#1e1e1e";class M{constructor(e,a){this.languagesPath="languages/",this.languageMap={},this.scopeToLangMap={},this._onigLibPromise=e,this._onigLibName=a}get onigLib(){return this._onigLibPromise}getOnigLibName(){return this._onigLibName}getLangRegistration(e){return this.languageMap[e]}async loadGrammar(e){const a=this.scopeToLangMap[e];if(!a)return null;if(a.grammar)return a.grammar;const s=await async function(e){return await C(e)}(t.includes(a)?`${this.languagesPath}${a.path}`:a.path);return a.grammar=s,s}addLanguage(e){this.languageMap[e.id]=e,e.aliases&&e.aliases.forEach((a=>{this.languageMap[a]=e})),this.scopeToLangMap[e.scopeName]=e}}function $(e,a){let s=[];for(let t=0,n=a.length;t<n;t++){let n=a.slice(0,t),o=a[t];s[t]={scopeName:o,themeMatches:F(e,o,n)}}return s}function B(e,a){let s=e+".";return e===a||a.substring(0,s.length)===s}function I(e,a,s,t){if(!B(e,s))return!1;let n=a.length-1,o=t.length-1;for(;n>=0&&o>=0;)B(a[n],t[o])&&n--,o--;return-1===n}function F(e,a,s){let t=[],n=0;for(let o=0,r=e.settings.length;o<r;o++){let r,c=e.settings[o];if("string"==typeof c.scope)r=c.scope.split(/,/).map((e=>e.trim()));else{if(!Array.isArray(c.scope))continue;r=c.scope}for(let e=0,o=r.length;e<o;e++){let i=r[e].split(/ /);I(i[i.length-1],i.slice(0,i.length-1),a,s)&&(t[n++]=c,e=o)}}return t}var z=Object.defineProperty,D=Object.defineProperties,G=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,V=(e,a,s)=>a in e?z(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s;const R={pre:({className:e,style:a,children:s})=>`<pre class="${e}" style="${a}">${s}</pre>`,code:({children:e})=>`<code>${e}</code>`,line:({className:e,children:a})=>`<span class="${e}">${a}</span>`,token:({style:e,children:a})=>`<span style="${e}">${a}</span>`};function J(e,a={}){var s;const t=a.bg||"#fff",n=function(e,a){const s=new Map;for(const t of e){const e=a(t);s.has(e)?s.get(e).push(t):s.set(e,[t])}return s}(null!=(s=a.lineOptions)?s:[],(e=>e.line)),r=a.elements||{};function c(e="",a={},s){const t=r[e]||R[e];return t?(s=s.filter(Boolean),t((n=((e,a)=>{for(var s in a||(a={}))W.call(a,s)&&V(e,s,a[s]);if(U)for(var s of U(a))H.call(a,s)&&V(e,s,a[s]);return e})({},a),o={children:"code"===e?s.join("\n"):s.join("")},D(n,G(o))))):"";var n,o}return c("pre",{className:"shiki",style:`background-color: ${t}`},[a.langId?`<div class="language-id">${a.langId}</div>`:"",c("code",{},e.map(((s,t)=>{var r;const i=t+1,l=function(e){var a;const s=new Set(["line"]);for(const t of e)for(const e of null!=(a=t.classes)?a:[])s.add(e);return Array.from(s)}(null!=(r=n.get(i))?r:[]).join(" ");return c("line",{className:l,lines:e,line:s,index:t},s.map(((e,t)=>{const n=[`color: ${e.color||a.fg}`];return e.fontStyle&o.Italic&&n.push("font-style: italic"),e.fontStyle&o.Bold&&n.push("font-weight: bold"),e.fontStyle&o.Underline&&n.push("text-decoration: underline"),c("token",{style:n.join("; "),tokens:s,token:e,index:t},[(r=e.content,r.replace(/[&<>"']/g,(e=>K[e])))]);var r})))})))])}const K={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};class Q extends s.Registry{constructor(e){super(e),this._resolver=e,this.themesPath="themes/",this._resolvedThemes={},this._resolvedGrammars={}}getTheme(e){return"string"==typeof e?this._resolvedThemes[e]:e}async loadTheme(e){return"string"==typeof e?(this._resolvedThemes[e]||(this._resolvedThemes[e]=await A(`${this.themesPath}${e}.json`)),this._resolvedThemes[e]):((e=S(e)).name&&(this._resolvedThemes[e.name]=e),e)}async loadThemes(e){return await Promise.all(e.map((e=>this.loadTheme(e))))}getLoadedThemes(){return Object.keys(this._resolvedThemes)}getGrammar(e){return this._resolvedGrammars[e]}async loadLanguage(e){const a=await this.loadGrammar(e.scopeName);this._resolvedGrammars[e.id]=a,e.aliases&&e.aliases.forEach((e=>{this._resolvedGrammars[e]=a}))}async loadLanguages(e){for(const a of e)this._resolver.addLanguage(a);for(const a of e)await this.loadLanguage(a)}getLoadedLanguages(){return Object.keys(this._resolvedGrammars)}}function X(e){return"string"==typeof e?t.find((a=>{var s;return a.id===e||(null==(s=a.aliases)?void 0:s.includes(e))})):e}e.BUNDLED_LANGUAGES=t,e.BUNDLED_THEMES=["css-variables","dark-plus","dracula-soft","dracula","github-dark-dimmed","github-dark","github-light","hc_light","light-plus","material-darker","material-default","material-lighter","material-ocean","material-palenight","min-dark","min-light","monokai","nord","one-dark-pro","poimandres","rose-pine-dawn","rose-pine-moon","rose-pine","slack-dark","slack-ochin","solarized-dark","solarized-light","vitesse-dark","vitesse-light"],e.FontStyle=o,e.getHighlighter=async function(e){var n,o;const{_languages:c,_themes:i}=function(e){let a=t,s=e.themes||[];return e.langs&&(a=e.langs.map(X)),e.theme&&s.unshift(e.theme),s.length||(s=["nord"]),{_languages:a,_themes:s}}(e),l=new M(async function(){if(!T){let e;if(N)e="string"==typeof x?a.loadWASM({data:await fetch(P("dist/onig.wasm")).then((e=>e.arrayBuffer()))}):a.loadWASM(x);else{const s=require("path").join(require.resolve("vscode-oniguruma"),"../onig.wasm"),t=require("fs").readFileSync(s).buffer;e=a.loadWASM(t)}T=e.then((()=>({createOnigScanner:e=>a.createOnigScanner(e),createOnigString:e=>a.createOnigString(e)})))}return T}(),"vscode-oniguruma"),m=new Q(l);(null==(n=e.paths)?void 0:n.themes)&&(m.themesPath=e.paths.themes),(null==(o=e.paths)?void 0:o.languages)&&(l.languagesPath=e.paths.languages);const p=(await m.loadThemes(i))[0];let g;await m.loadLanguages(c);let u={"#000001":"var(--shiki-color-text)","#000002":"var(--shiki-color-background)","#000004":"var(--shiki-token-constant)","#000005":"var(--shiki-token-string)","#000006":"var(--shiki-token-comment)","#000007":"var(--shiki-token-keyword)","#000008":"var(--shiki-token-parameter)","#000009":"var(--shiki-token-function)","#000010":"var(--shiki-token-string-expression)","#000011":"var(--shiki-token-punctuation)","#000012":"var(--shiki-token-link)"};function d(e){const a=e?m.getTheme(e):p;if(!a)throw Error(`No theme registration for ${e}`);g&&g.name===a.name||(m.setTheme(a),g=a);const s=m.getColorMap();return"css"===a.type&&function(e,a){e.bg=u[e.bg]||e.bg,e.fg=u[e.fg]||e.fg,a.forEach(((e,s)=>{a[s]=u[e]||e}))}(a,s),{_theme:a,_colorMap:s}}function h(e,a="text",t,n={includeExplanation:!0}){if(function(e){return!e||["plaintext","txt","text"].includes(e)}(a)){return[...e.split(/\r\n|\r|\n/).map((e=>[{content:e}]))]}const{_grammar:o}=function(e){const a=m.getGrammar(e);if(!a)throw Error(`No language registration for ${e}`);return{_grammar:a}}(a),{_theme:c,_colorMap:i}=d(t);return function(e,a,t,n,o){let c=t.split(/\r\n|\r|\n/),i=s.INITIAL,l=[],m=[];for(let s=0,t=c.length;s<t;s++){let t,p,g,u=c[s];if(""===u){l=[],m.push([]);continue}o.includeExplanation&&(t=n.tokenizeLine(u,i),p=t.tokens,g=0);let d=n.tokenizeLine2(u,i),h=d.tokens.length/2;for(let s=0;s<h;s++){let t=d.tokens[2*s],n=s+1<h?d.tokens[2*s+2]:u.length;if(t===n)continue;let c=d.tokens[2*s+1],i=a[r.getForeground(c)],m=r.getFontStyle(c),f=[];if(o.includeExplanation){let a=0;for(;t+a<n;){let s=p[g],t=u.substring(s.startIndex,s.endIndex);a+=t.length,f.push({content:t,scopes:$(e,s.scopes)}),g++}}l.push({content:u.substring(t,n),color:i,fontStyle:m,explanation:f})}m.push(l),l=[],i=d.ruleStack}return m}(c,i,e,o,n)}return{codeToThemedTokens:h,codeToHtml:function(e,a="text",s){let t;t="object"==typeof a?a:{lang:a,theme:s};const n=h(e,t.lang,t.theme,{includeExplanation:!1}),{_theme:o}=d(t.theme);return J(n,{fg:o.fg,bg:o.bg,lineOptions:null==t?void 0:t.lineOptions})},getTheme:e=>d(e)._theme,loadTheme:async function(e){await m.loadTheme(e)},loadLanguage:async function(e){const a=X(e);l.addLanguage(a),await m.loadLanguage(a)},getBackgroundColor:function(e){const{_theme:a}=d(e);return a.bg},getForegroundColor:function(e){const{_theme:a}=d(e);return a.fg},getLoadedThemes:function(){return m.getLoadedThemes()},getLoadedLanguages:function(){return m.getLoadedLanguages()},setColorReplacements:function(e){u=e}}},e.loadTheme=A,e.renderToHtml=J,e.setCDN=function(e){y=e},e.setOnigasmWASM=function(e){w(e)},e.setWasm=w,e.toShikiTheme=S,Object.defineProperty(e,"__esModule",{value:!0})}(this.shiki=this.shiki||{},vscode-oniguruma,vscode-textmate);
