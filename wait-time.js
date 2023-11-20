function setWaitTime (e) {
    if (e.action == "ridecreate") {
        if ((e.args.rideObject < 0xFFFF) && ((e.args.flags & 0x80000000) != 0)) {
            context.executeAction("ridesetsetting", {ride: e.result.ride, setting: 2, value: 5});
            context.executeAction("ridesetsetting", {ride: e.result.ride, setting: 3, value: 20});
        }
    }
}

function main() {
    context.subscribe("action.execute", setWaitTime);
}

registerPlugin({
    name: 'Wait Time',
    version: '2.0',
    authors: ['Josh Bodner'],
    type: 'remote',
    licence: 'MIT',
    targetApiVersion: 34,
    main: main
});
