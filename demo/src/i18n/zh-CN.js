/*
Recorder i18n/zh-CN.js
https://github.com/xiangyuecn/Recorder

Usage: Recorder.i18n.lang="zh-CN" or "zh"

Desc: Simplified Chinese, 简体中文。代码内置完整的中文支持，无需额外翻译，本文件存在的意义是方便查看支持的语言。

注意：请勿修改//@@打头的文本行；以下代码结构由/src/package-i18n.js自动生成，只允许在字符串中填写翻译后的文本，请勿改变代码结构；翻译的文本如果需要明确的空值，请填写"=Empty"；文本中的变量用{n}表示（n代表第几个变量），所有变量必须都出现至少一次，如果不要某变量用{n!}表示

Note: Do not modify the text lines starting with //@@; The following code structure is automatically generated by /src/package-i18n.js, only the translated text is allowed to be filled in the string, please do not change the code structure; If the translated text requires an explicit empty value, please fill in "=Empty"; Variables in the text are represented by {n} (n represents the number of variables), all variables must appear at least once, if a variable is not required, it is represented by {n!}
*/
(function(factory){
	var browser=typeof window=="object" && !!window.document;
	var win=browser?window:Object; //非浏览器环境，Recorder挂载在Object下面
	factory(win.Recorder,browser);
}(function(Recorder,isBrowser){
"use strict";
var i18n=Recorder.i18n;

//@@User Code-1 Begin 手写代码放这里 Put the handwritten code here @@

//@@User Code-1 End @@

//@@Exec i18n.lang="zh-CN";
Recorder.CLog('Import Recorder i18n lang="zh-CN"');

i18n.alias["zh-CN"]="zh";

var putSet={lang:"zh"};

i18n.data["rtl$zh"]=false;
i18n.data["desc$zh"]="Simplified Chinese, 简体中文。代码内置完整的中文支持，无需额外翻译，本文件存在的意义是方便查看支持的语言。";
//@@Exec i18n.GenerateDisplayEnglish=false;
//@@Exec i18n.put(putSet,[]);

//@@User Code-2 Begin 手写代码放这里 Put the handwritten code here @@

//@@User Code-2 End @@

}));