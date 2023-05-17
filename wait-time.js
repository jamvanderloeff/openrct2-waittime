function setWaitTime (e) {
    if (e.action == "ridecreate") {
        context.executeAction("ridesetsetting", {ride: e.result.ride, setting: 2, value: 5});
        context.executeAction("ridesetsetting", {ride: e.result.ride, setting: 3, value: 20});
    }
}

function main() {
    context.subscribe("action.execute", setWaitTime);
}

registerPlugin({
    name: 'Wait Time',
    version: '1.0',
    authors: ['Josh Bodner'],
    type: 'remote',
    licence: 'MIT',
    targetApiVersion: 34,
    main: main
});