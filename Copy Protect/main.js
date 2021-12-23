document.onkeydown = function (e) {
    return false;}  
    document.oncontextmenu = function(e){
    return false;}
    document.onselect = function(e){
    return false;}
    document.onselectstart = function(e){
    return false;}
    document.ondrag = function(e){
    return false;}
    document.ondragstart = function(e){
    return false;}

// Above codes disable browser shortcuts
    shortcut.add("Ctrl+C",
    function() {window.location = "index.html"}
    );
    shortcut.add("Ctrl+U",
    function() {window.location = "index.html"}
    );
    shortcut.add("Ctrl+S",
    function() {window.location = "index.html"}
    );
    shortcut.add("Ctrl+Shift+C",
    function() {window.location = "index.html"}
    );
    shortcut.add("F12",
    function() {window.location = "index.html"}
    );
    shortcut.add("F11",
    function() {window.location = "index.html"}
    );
    // The above codes Blocks shortcuts