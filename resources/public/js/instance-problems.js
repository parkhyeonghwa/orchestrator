
$(document).ready(function () {
    showLoader();
    $.get("/api/problems", function (instances) {
			normalizeInstances(instances, []);
	        displayProblemInstances(instances);
	    }, "json");
    function displayProblemInstances(instances) {
        hideLoader();
        
    	instances.forEach(function (instance) {
    		if (instance.hasProblem) {
	    		$("#instance_problems .panel-body").append('<div xmlns="http://www.w3.org/1999/xhtml" class="popover instance right" data-nodeid="'+instance.id+'"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>');
	
	    		var popoverElement = $("#instance_problems [data-nodeid='" + instance.id + "'].popover");
	    		renderInstanceElement(popoverElement, instance, "problems");
    		}
    	});        	
        
        $("div.popover").popover();
        $("div.popover").show();
    }
});	