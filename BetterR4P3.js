function r4p3() { this.name = "BetterR4P3"; }
//r4p3.log(dbg, "type", "pluginName", "msg");
r4p3.log = function(dbg, type, pluginName, msg) {
	if ( (dbg == "debug") || (dbg == "dbg") || (dbg == 1) ) {
		if (debug == 1) {
			switch(type) {
				case "info":
					console.info("[BetterR4P3] " + pluginName + ": " + msg);
					break;
				case "warn":
					console.warn("[BetterR4P3] " + pluginName + ": " + msg);
					break;
				case "error":
					console.error("[BetterR4P3] " + pluginName + ": " + msg);
					break;
				default:
					console.log("[BetterR4P3] " + pluginName + ": " + msg);
					break;
			};
		} else {
			return;
		}
	} else {
		switch(type) {
			case "info":
				console.info("[BetterR4P3] " + pluginName + ": " + msg);
				break;
			case "warn":
				console.warn("[BetterR4P3] " + pluginName + ": " + msg);
				break;
			case "error":
				console.error("[BetterR4P3] " + pluginName + ": " + msg);
				break;
			default:
				console.log("[BetterR4P3] " + pluginName + ": " + msg);
				break;
		};
	};	
};
//r4p3.isNumber("string");
r4p3.isNumber = function(str) {
	if(/^\d+$/.test(str)) {
		return true;
	} else {
		r4p3.log(1, "error", r4p3.name, "\""+str+"\" is not a valid number.");
		return false;
	}
};
//r4p3.addLink("href", "title");
this.addLink = function(href, title) {
	$('.Menu.JsOnly.tabMenu.membersTabLinks .secondaryContent.blockLinksList').append('<li><a href="'+href+'" target="_blank">'+title+'</a></li>');
};