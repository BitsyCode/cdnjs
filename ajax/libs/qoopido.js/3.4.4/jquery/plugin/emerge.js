/*!
* Qoopido.js library v3.4.4, 2014-6-15
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*//*!
* Qoopido.js library
*
* version: 3.4.4
* date:    2014-6-15
* author:  Dirk Lueth <info@qoopido.com>
* website: https://github.com/dlueth/qoopido.js
*
* Copyright (c) 2014 Dirk Lueth
*
* Dual licensed under the MIT and GPL licenses.
* - http://www.opensource.org/licenses/mit-license.php
* - http://www.gnu.org/copyleft/gpl.html
*/
!function(e){window.qoopido.register("jquery/plugins/emerge",e,["../../dom/element/emerge","jquery"])}(function(e,r,t,n,o){"use strict";var c,i=e.jquery||o.jQuery,u=t.pop(),g="emerged",a="demerged",d="".concat(g,".",u),m="".concat(a,".",u);return i.fn[u]=function(e){return this.each(function(){c.create(this,e)})},c=e["dom/element/emerge"].extend({_constructor:function(e,r){var t=this,n=i(e);c._parent._constructor.call(t,e,r),t.on(g,function(e){n.trigger(d,{priority:e.data})}),t.on(a,function(){n.trigger(m)})}})});