define(['knockout'], function (ko) {
	var _eventBus = new ko.subscribable();
	
	function subscribe(callback, target, topic) {
		_eventBus.subscribe(callback, target, topic);
	}

	function notify(value, topic) {
		_eventBus.notifySubscribers(value, topic);
	}	

	return {
		Subscribe: subscribe,
		Notify: notify
	};
});