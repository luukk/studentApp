eventDispatcher = {

  eventSubscriptions: {},

  addListener: function(eventName, callback) {

    var subscribers = this.eventSubscriptions[eventName];

    if (subscribers === undefined) {
      this.eventSubscriptions[eventName] = [];
      subscribers = this.eventSubscriptions[eventName];
    }

    subscribers.push(callback);
  },

  dispatch: function(eventName) {

    var subscribers = this.eventSubscriptions[eventName],
      l;

    if (subscribers === undefined) {
      return;
    }

    l = subscribers.length;
    for (var i = 0; i < l; i++) {
      subscribers[i]();
    }
  }
};
