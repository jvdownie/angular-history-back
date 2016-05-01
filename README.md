# angular-history-back
Angular 1.x wrapper for window.history.back()

<h2>Usage</h2>
<p><strong>1)</strong> Get angular-history-back for your project:</p>
<pre>bower i angular-history-back --save</pre>
<p><strong>2)</strong> Add it to your HTML file:</p>
<pre>
&lt;script src="bower_components/angular-history-back/dist/angular-history-back.min.js"&gt;&lt;/script&gt;
</pre>
<p><strong>3)</strong> Add 'hBack' to your main module's list of dependencies</p>
<pre>angular.module('app', ['hBack'])</pre>
<p><strong>4)</strong> Now add the attribute 'back-button' to an anchor or button tag</p>
<pre>
&lt;a back-button&gt;Back&lt;/a&gt;
&lt;button back-button&gt;Back&lt;/button&gt;
</pre>
